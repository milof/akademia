/* Akademia AI — logika strony. Bez zależności, bez budowania. */
(function () {
  'use strict';
  const A = window.AKADEMIA = window.AKADEMIA || {};
  A.missions = A.missions || [];
  A.cards = A.cards || [];
  A.parent = A.parent || { sections: [] };

  /* ---------- Zapis postępu (localStorage) ---------- */
  const KEY = 'akademia-ai:v1';
  const KEY_SKROT = 'akademia-ai:podsumowanie';
  // Tryb podglądu: rodzic wchodzi hasłem podglądu. Widzi wszystko, nic się nie zapisuje.
  const podglad = () => !!(window.BRAMKA && window.BRAMKA.podglad());
  const fresh = () => ({ v: 1, name: '', done: {}, steps: {}, journal: [], unlockAll: false, createdAt: Date.now() });
  let state = load();
  function load() {
    try { const raw = localStorage.getItem(KEY); return raw ? Object.assign(fresh(), JSON.parse(raw)) : fresh(); }
    catch (e) { return fresh(); }
  }
  function save() {
    if (podglad()) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* tryb prywatny: trudno */ }
    zapiszSkrot();
  }
  // Skrót dla strony startowej: ile zaliczone i co dalej, bez ładowania całej treści kursu.
  function zapiszSkrot() {
    if (podglad()) return;
    const nid = nextId(); const n = nid != null ? byId(nid) : null;
    try {
      localStorage.setItem(KEY_SKROT, JSON.stringify({
        zrobione: doneCount(), wszystkie: missions().length,
        nastepna: n ? { id: n.id, tytul: n.title } : null,
        imie: state.name || '', kiedy: Date.now()
      }));
    } catch (e) { /* tryb prywatny: trudno */ }
  }

  /* ---------- Pomocnicze ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const main = $('#main');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  // Mini-formatowanie w treści: **gruby**, `kod`, [[klawisz]], [tekst](https://...)
  function md(s) {
    let t = esc(s);
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\[\[(.+?)\]\]/g, '<kbd>$1</kbd>');
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }
  const paras = arr => (arr || []).map(p => `<p>${md(p)}</p>`).join('');
  const missions = () => A.missions.slice().sort((a, b) => a.id - b.id);
  const byId = id => A.missions.find(m => String(m.id) === String(id));
  const isDone = id => !!state.done[id];
  const doneCount = () => missions().filter(m => isDone(m.id)).length;
  const nextId = () => { const n = missions().find(m => !isDone(m.id)); return n ? n.id : null; };
  const isUnlocked = id => podglad() || state.unlockAll || isDone(id) || String(id) === String(nextId());
  const fmtDate = ts => new Date(ts).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
  const name = () => state.name || '';
  let justPrinted = null;

  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
  }

  function hex(n, cls) {
    return `<span class="hex ${cls || ''}" aria-hidden="true"><svg viewBox="0 0 44 48"><polygon class="hex-bg" points="22,2 42,13 42,35 22,46 2,35 2,13"/></svg><span>${n}</span></span>`;
  }

  function promptBlock(text, label) {
    return `<div class="prompt"><button class="btn small copy" type="button" data-copy="${esc(text)}" aria-label="Kopiuj ${esc(label || 'prompt')}">Kopiuj</button><span class="prompt-text">${esc(text)}</span></div>`;
  }

  /* ---------- Sygnatura: wydruk rosnący warstwa po warstwie ---------- */
  function stackSVG(opts) {
    const ms = missions(); const N = ms.length;
    const widths = ms.map((m, i) => { // profil sześciokątnej odznaki: szeroko w środku, wężej na końcach
      const t = N > 1 ? i / (N - 1) : 0; const w = 104 + 56 * Math.sin(Math.PI * t); return Math.round(w);
    });
    const h = 12, gap = 2, bedY = 226; const top = bedY - N * (h + gap);
    let rects = '', nozzle = '';
    const nid = nextId();
    ms.forEach((m, i) => {
      const y = bedY - (i + 1) * (h + gap); const w = widths[i]; const x = 100 - w / 2;
      let cls = 'layer';
      if (isDone(m.id)) cls += ' done'; else if (String(m.id) === String(nid)) cls += ' next';
      if (opts && String(opts.printing) === String(m.id)) cls += ' printing';
      rects += `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="2"/>`;
      if (String(m.id) === String(nid) && !(opts && opts.printing != null)) {
        nozzle = `<g transform="translate(100 ${y - 34})"><rect class="nozzle" x="-9" y="0" width="18" height="16" rx="3"/><polygon class="nozzle-tip" points="-6,16 6,16 2,24 -2,24"/></g>`;
      }
    });
    const doneN = doneCount() + (opts && opts.printing != null && !isDone(opts.printing) ? 1 : 0);
    return `<svg class="stack" viewBox="0 0 200 ${bedY + 34}" role="img" aria-label="Postęp: ${doneN} z ${N} warstw">
      <rect class="bed-glass" x="20" y="${bedY}" width="160" height="6" rx="1"/>
      <rect class="bed-plate" x="12" y="${bedY + 6}" width="176" height="8" rx="2"/>
      ${rects}${nozzle}
      <text class="stack-label" x="100" y="${bedY + 30}" text-anchor="middle">warstwa ${doneN} z ${N}</text>
    </svg>`;
  }

  /* ---------- Widoki ---------- */
  function viewHome() {
    const ms = missions(); const nid = nextId(); const next = nid != null ? byId(nid) : null; const dn = doneCount();
    const greet = name() ? `Cześć, <span class="hero-name">${esc(name())}</span>.` : 'Cześć.';
    let lead, cta;
    if (dn === 0) { lead = `Przed Tobą ${ms.length} misji. Każda uczy jednej rzeczy, każda to jedna warstwa wydruku. Zaczynamy od rozruchu.`; }
    else if (next) { lead = `Masz za sobą ${dn} z ${ms.length} warstw. Następna misja: <strong>${esc(next.title)}</strong>.`; }
    else { lead = `Wszystkie ${ms.length} warstw wydrukowane. Odznaka gotowa. Zajrzyj do Dziennika i Niezbędnika, one zostają z Tobą.`; }
    cta = next ? `<a class="btn primary" href="#/misja/${next.id}">${dn === 0 ? 'Zacznij misję 0' : 'Następna misja ' + next.id}</a>` : `<a class="btn primary" href="#/dziennik">Otwórz Dziennik</a>`;
    const nameCard = name() ? '' : `<div class="card" style="margin-bottom:1.5rem"><label for="name-in">Jak mam do Ciebie mówić?</label><div class="btn-row" style="margin-top:0"><input id="name-in" type="text" maxlength="30" placeholder="Twoje imię albo ksywka" style="max-width:280px"><button class="btn" type="button" data-act="save-name">Zapisz</button></div><p class="small muted" style="margin-top:.6rem">Imię zostaje tylko w tej przeglądarce. Nikomu go nie wysyłamy.</p></div>`;
    const rows = ms.map(m => {
      const done = isDone(m.id), unlocked = isUnlocked(m.id), isNext = String(m.id) === String(nid);
      const cls = 'mission-row' + (done ? ' done' : '') + (isNext ? ' next' : '') + (!unlocked ? ' locked' : '');
      const tag = done ? '<span class="tag ok">zaliczona</span>' : isNext ? '<span class="tag hot">następna</span>' : !unlocked ? '<span class="tag">po kolei</span>' : '';
      const inner = `${hex(m.id, done ? 'done' : isNext ? 'next' : '')}<span><span class="title">${esc(m.title)}</span><br><span class="sub">${esc(m.subtitle)}</span></span><span class="meta">${m.minutes} min<br>${tag}</span>`;
      return unlocked ? `<li><a class="${cls}" href="#/misja/${m.id}">${inner}</a></li>` : `<li><div class="${cls}" aria-disabled="true">${inner}</div></li>`;
    }).join('');
    return `<section class="hero"><div><h1>${greet}</h1><p class="lead">${lead}</p><div class="btn-row">${cta}<a class="btn ghost" href="#/niezbednik">Niezbędnik</a></div></div><div class="stack-wrap">${stackSVG({ printing: justPrinted })}</div></section>
      ${nameCard}
      <h2 class="eyebrow" style="font-size:.85rem">Misje, po kolei</h2>
      <ol class="mission-list">${rows}</ol>`;
  }

  function viewMission(id) {
    const m = byId(id);
    if (!m) return `<div class="card"><h1>Nie ma takiej misji</h1><p><a href="#/">Wróć do listy misji</a>.</p></div>`;
    const done = isDone(m.id);
    const head = `<header class="mission-head">${hex(m.id, done ? 'done' : 'next')}<div><span class="eyebrow">Misja ${m.id}</span><h1>${esc(m.title)}</h1><p class="muted" style="margin:0">${esc(m.subtitle)}</p><div class="meta-row"><span class="tag">około ${m.minutes} min</span><span class="tag hot">${esc(m.technique)}</span>${done ? `<span class="tag ok">zaliczona ${fmtDate(state.done[m.id])}</span>` : ''}</div></div></header>`;
    if (!isUnlocked(m.id)) {
      const nid = nextId();
      return head + `<div class="callout note"><p><strong>Ta misja czeka na swoją kolej.</strong> Każda korzysta z poprzedniej, dlatego idziemy po kolei. Teraz jest misja ${nid}: <a href="#/misja/${nid}">${esc(byId(nid).title)}</a>.</p></div>`;
    }
    const st = state.steps[m.id] || {};
    const sec = (title, inner, extra) => inner ? `<section class="section ${extra || ''}"><h2>${title}</h2>${inner}</section>` : '';
    const why = sec('Po co to', paras(m.why));
    let example = '';
    if (m.example) {
      const turns = (m.example.turns || []).map(t => `<div class="bubble ${t.who === 'ty' ? 'ty' : 'ai'}"><span class="who">${t.who === 'ty' ? 'Ty' : 'ChatGPT'}</span>${md(t.text)}</div>`).join('');
      example = sec('Zobacz, jak to działa', `${paras(m.example.intro ? [m.example.intro] : [])}<div class="chat">${turns}</div>${paras(m.example.note ? [m.example.note] : [])}`);
    }
    const steps = (m.steps || []).map((s, i) => {
      const k = 's' + i; const on = !!st[k];
      return `<li class="step ${on ? 'done' : ''}"><input type="checkbox" id="st-${m.id}-${i}" data-step="${k}" ${on ? 'checked' : ''} aria-label="Krok ${i + 1} zrobiony"><div class="step-body"><label for="st-${m.id}-${i}" class="step-text" style="font-weight:500;margin:0">${md(s.text)}</label>${s.prompt ? promptBlock(s.prompt, 'prompt z kroku ' + (i + 1)) : ''}${s.tip ? `<div class="tip">${md(s.tip)}</div>` : ''}</div></li>`;
    }).join('');
    const now = sec('Teraz Ty', steps ? `<p class="muted small">Odhaczaj kroki, gdy je zrobisz. Przycisk <strong>Kopiuj</strong> wkłada gotowy tekst do schowka, potem wklejasz go w ChatGPT klawiszami <kbd>Ctrl</kbd> + <kbd>V</kbd>.</p><ol class="steps">${steps}</ol>` : '');
    const check = sec('Po czym poznasz, że wyszło', m.check ? `<ul class="checks">${m.check.map(c => `<li>${md(c)}</li>`).join('')}</ul>` : '');
    const follow = sec('Dopytaj', m.followups ? `<p class="muted small">Krótkie wiadomości, które ciągną rozmowę dalej. Jedna naraz.</p>${m.followups.map(f => promptBlock(f, 'dopytanie')).join('')}` : '');
    const solo = sec('Teraz bez ściągi', m.solo ? `${paras([m.solo.text])}${m.solo.hints ? `<details><summary>Podpowiedzi, gdyby się zacięło</summary><ul>${m.solo.hints.map(h => `<li>${md(h)}</li>`).join('')}</ul></details>` : ''}` : '');
    const disc = sec('Odkrycie', m.discovery ? `<p>Na koniec każdej misji jedno pytanie, które otwiera nowe drzwi.</p>${promptBlock(m.discovery, 'prompt odkrycia')}` : '');
    const journal = sec('Do Dziennika', `<p>${md(m.journalPrompt || 'Jedno zdanie: co dziś wyszło albo co Cię zaskoczyło?')}</p><textarea id="j-in" placeholder="Jedno zdanie wystarczy."></textarea><div class="btn-row"><button class="btn" type="button" data-act="journal-add" data-m="${m.id}">Zapisz w Dzienniku</button><a class="small" href="#/dziennik">Zobacz Dziennik</a></div>`);
    const parent = m.parent ? `<div class="callout"><p><strong>Pokaż rodzicowi.</strong> ${md(m.parent)}</p></div>` : '';
    const nid = nextId(); const nextM = nid != null && String(nid) !== String(m.id) ? byId(nid) : (nid != null ? missions().find(x => x.id > m.id && !isDone(x.id)) : null);
    let finish;
    if (!done) {
      finish = `<div class="card finish"><h2>Zaliczasz misję?</h2><p class="muted">Zaliczaj, gdy zrobisz ćwiczenie w prawdziwym ChatGPT, nie tylko przeczytasz.</p><button class="btn primary" type="button" data-act="finish" data-m="${m.id}">Zaliczam misję ${m.id}</button></div>`;
    } else {
      const after = missions().find(x => x.id > m.id);
      finish = `<div class="card finish done">${justPrinted != null && String(justPrinted) === String(m.id) ? `<div class="stack-wrap">${stackSVG({ printing: m.id })}</div>` : ''}<h2>Misja ${m.id} zaliczona</h2><p class="muted">Warstwa dołożona. ${after ? 'Następna czeka, ale nie musi być dziś.' : 'To była ostatnia warstwa. Odznaka gotowa.'}</p><div class="btn-row" style="justify-content:center">${after ? `<a class="btn primary" href="#/misja/${after.id}">Misja ${after.id}: ${esc(after.title)}</a>` : ''}<a class="btn ghost" href="#/">Lista misji</a><button class="btn ghost small" type="button" data-act="unfinish" data-m="${m.id}">Cofnij zaliczenie</button></div></div>`;
    }
    return head + why + example + now + check + follow + solo + disc + parent + journal + finish;
  }

  function viewNiezbednik() {
    const nid = nextId();
    const cards = A.cards.slice().sort((a, b) => a.mission - b.mission).map(c => {
      const open = podglad() || state.unlockAll || isDone(c.mission) || String(c.mission) === String(nid);
      if (!open) return `<article class="tcard locked"><span class="eyebrow">Misja ${c.mission}</span><h2>${esc(c.title)}</h2><p class="when">Odblokujesz w misji ${c.mission}.</p></article>`;
      return `<article class="tcard"><span class="eyebrow">Misja ${c.mission}</span><h2>${esc(c.title)}</h2><p class="when">${md(c.when)}</p>${c.prompt ? promptBlock(c.prompt, c.title) : ''}${c.more ? `<p class="small muted" style="margin:0">${md(c.more)}</p>` : ''}</article>`;
    }).join('');
    return `<h1>Niezbędnik</h1><p class="lead muted" style="max-width:60ch">Wszystkie techniki z misji w jednym miejscu. Wracaj tu, gdy nie wiesz, jak zapytać. Karty odblokowują się razem z misjami.</p><div class="btn-row" style="margin-bottom:1.5rem"><button class="btn ghost small" type="button" onclick="window.print()">Drukuj ściągę</button></div><div class="cards">${cards}</div>`;
  }

  function viewDziennik() {
    const list = state.journal.slice().sort((a, b) => b.d - a.d);
    const entries = list.length ? `<ul class="entries">${list.map(e => `<li class="entry"><div><span class="when">${fmtDate(e.d)}${e.m != null ? ` · misja ${e.m}` : ''}</span><div>${md(e.t)}</div></div><button class="del" type="button" data-act="journal-del" data-id="${e.d}" aria-label="Usuń wpis">usuń</button></li>`).join('')}</ul>`
      : `<div class="callout plain"><p>Pusto. Pierwszy wpis dodasz na końcu misji 0. Dziennik to Twoja własna lista tego, w czym AI naprawdę pomogło, i pomysłów na następny raz.</p></div>`;
    const txt = list.map(e => `${fmtDate(e.d)}${e.m != null ? ' (misja ' + e.m + ')' : ''}: ${e.t}`).join('\n');
    return `<h1>Dziennik odkryć</h1><p class="lead muted" style="max-width:60ch">Jedno zdanie po każdej misji. Po kilku tygodniach zobaczysz, jak dużo już umiesz i co jeszcze chcesz sprawdzić.</p>
      <div class="card"><label for="j-in">Nowy wpis</label><textarea id="j-in" placeholder="W czym AI dziś pomogło? Co Cię zaskoczyło? Co chcesz spróbować?"></textarea><div class="btn-row"><button class="btn" type="button" data-act="journal-add">Zapisz</button>${list.length ? `<button class="btn ghost small" type="button" data-copy="${esc(txt)}">Kopiuj cały dziennik</button>` : ''}</div></div>
      ${entries}`;
  }

  function viewRodzic() {
    const P = A.parent || {};
    const intro = paras(P.intro);
    const rows = missions().map(m => `<tr><td><strong>${m.id}. ${esc(m.title)}</strong><br><span class="small muted">${esc(m.technique)}</span></td><td>${md(m.forParent && m.forParent.teaches || '')}</td><td>${md(m.forParent && m.forParent.ask || '')}</td></tr>`).join('');
    const table = `<div class="table-wrap"><table><thead><tr><th>Misja</th><th>Czego uczy</th><th>O co zapytać po misji</th></tr></thead><tbody>${rows}</tbody></table></div>`;
    const sections = (P.sections || []).map(s => `<section class="section"><h2>${esc(s.title)}</h2>${s.html || paras(s.paras)}${s.table ? table : ''}</section>`).join('');
    const controls = `<section class="section"><h2>Ustawienia dla rodzica</h2><div class="card"><label class="switch"><input type="checkbox" data-act="unlock-all" ${state.unlockAll ? 'checked' : ''}> Odblokuj wszystkie misje naraz (domyślnie idą po kolei)</label><p class="small muted" style="margin:.8rem 0 0">Imię, kopia postępu i reset są w <a href="#/ustawienia">Ustawieniach</a>. Postęp zapisuje się tylko w tej przeglądarce.</p></div></section>
      <section class="section"><h2>Zmiana hasła</h2><div class="card"><div class="field"><label for="pw-new">Nowe hasło</label><input id="pw-new" type="text" maxlength="40" placeholder="np. nukacola" autocomplete="off" spellcheck="false"></div><button class="btn" type="button" data-act="pw-line">Pokaż linię do wklejenia</button><div id="pw-out"></div></div></section>`;
    return `<h1>${esc(P.title || 'Dla rodzica')}</h1>${intro}${sections}${controls}`;
  }

  function viewUstawienia() {
    const code = exportCode();
    return `<h1>Ustawienia</h1>
      <section class="section"><div class="card"><div class="field"><label for="name-in">Imię albo ksywka</label><input id="name-in" type="text" maxlength="30" value="${esc(name())}" placeholder="Jak mam do Ciebie mówić?"></div><button class="btn" type="button" data-act="save-name">Zapisz imię</button></div></section>
      <section class="section"><h2>Kopia postępu</h2><p class="muted">Postęp żyje w tej przeglądarce. Ten kod pozwala go przenieść na inny komputer albo odzyskać po wyczyszczeniu przeglądarki. Skopiuj i zachowaj, np. wyślij sobie w wiadomości.</p><div class="card"><label for="code-out">Twój kod zapisu</label><textarea id="code-out" readonly style="font-family:var(--mono);font-size:.85rem">${esc(code)}</textarea><div class="btn-row"><button class="btn small" type="button" data-copy="${esc(code)}">Kopiuj kod</button></div><hr><label for="code-in">Wczytaj kod zapisu</label><textarea id="code-in" placeholder="Wklej tu kod z innego komputera" style="font-family:var(--mono);font-size:.85rem"></textarea><div class="btn-row"><button class="btn small" type="button" data-act="import">Wczytaj</button></div></div></section>
      <section class="section"><h2>Hasło</h2><div class="card"><p class="muted">Ta przeglądarka pamięta, że hasło zostało już wpisane. Zablokuj, jeśli chcesz, żeby strona zapytała o nie przy następnym otwarciu. Blokada dotyczy obu kursów i strony startowej.</p><button class="btn ghost small" type="button" data-act="lock">Zablokuj stronę</button></div></section>
      <section class="section"><h2>Od nowa</h2><div class="card"><p class="muted">Kasuje zaliczone misje, kroki i Dziennik na tym komputerze. Imię zostaje.</p><button class="btn ghost small" type="button" data-act="reset">Wyzeruj postęp</button></div></section>`;
  }

  /* ---------- Kod zapisu ---------- */
  function exportCode() {
    try { return 'AKA1.' + btoa(unescape(encodeURIComponent(JSON.stringify(state)))); } catch (e) { return ''; }
  }
  function importCode(code) {
    const c = (code || '').trim();
    if (!c.startsWith('AKA1.')) throw new Error('To nie wygląda na kod zapisu. Powinien zaczynać się od AKA1.');
    const obj = JSON.parse(decodeURIComponent(escape(atob(c.slice(5)))));
    if (!obj || typeof obj !== 'object' || !obj.done) throw new Error('Kod jest uszkodzony.');
    state = Object.assign(fresh(), obj); save();
  }

  /* ---------- Kopiowanie ---------- */
  function copyText(text, btn) {
    const ok = () => { if (btn) { const old = btn.textContent; btn.textContent = 'Skopiowano'; btn.classList.add('did'); setTimeout(() => { btn.textContent = old; btn.classList.remove('did'); }, 1600); } toast('Skopiowane. Teraz Ctrl + V w ChatGPT.'); };
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(ok, () => fallback()); } else { fallback(); }
    function fallback() {
      const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.left = '-9999px'; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); ok(); } catch (e) { toast('Nie udało się skopiować. Zaznacz tekst i użyj Ctrl + C.'); }
      document.body.removeChild(ta);
    }
  }

  /* ---------- Zdarzenia ---------- */
  main.addEventListener('click', e => {
    const cp = e.target.closest('[data-copy]');
    if (cp) { copyText(cp.getAttribute('data-copy'), cp); return; }
    const b = e.target.closest('[data-act]'); if (!b) return;
    const act = b.getAttribute('data-act');
    if (podglad() && (act === 'reset' || act === 'import' || act === 'save-name')) {
      toast('Tryb podglądu. Tutaj nic się nie zapisuje.'); return;
    }
    if (act === 'save-name') {
      const v = ($('#name-in').value || '').trim().slice(0, 30); state.name = v; save(); toast(v ? `Zapisane. Cześć, ${v}.` : 'Imię wyczyszczone.'); render(); return;
    }
    if (act === 'finish') {
      const id = b.getAttribute('data-m'); state.done[id] = Date.now(); justPrinted = id; save(); render(); return;
    }
    if (act === 'unfinish') {
      const id = b.getAttribute('data-m'); delete state.done[id]; justPrinted = null; save(); toast('Cofnięte. Misja znów jest otwarta.'); render(); return;
    }
    if (act === 'journal-add') {
      const ta = $('#j-in'); const t = (ta.value || '').trim(); if (!t) { toast('Napisz choć jedno zdanie.'); ta.focus(); return; }
      const mid = b.getAttribute('data-m'); state.journal.push({ d: Date.now(), m: mid != null ? Number(mid) : null, t: t.slice(0, 600) }); save(); ta.value = ''; toast('Zapisane w Dzienniku.');
      if (location.hash.indexOf('dziennik') > -1) render(); return;
    }
    if (act === 'journal-del') {
      const id = Number(b.getAttribute('data-id')); state.journal = state.journal.filter(x => x.d !== id); save(); render(); return;
    }
    if (act === 'import') {
      try { importCode($('#code-in').value); toast('Wczytane. Postęp przywrócony.'); render(); } catch (err) { toast(err.message); } return;
    }
    if (act === 'pw-line') {
      const v = ($('#pw-new').value || '').trim();
      if (!v) { toast('Wpisz nowe hasło.'); return; }
      if (!window.BRAMKA) { toast('Bramka nie jest wczytana.'); return; }
      const line = `  var HASH_UCZEN   = '${window.BRAMKA.hash(v)}'; // hasło ucznia: ${v}`;
      $('#pw-out').innerHTML = `<p class="small muted" style="margin:1rem 0 0">Wklej tę linię w pliku <code>js/gate.js</code> (ten sam plik obsługuje oba kursy i stronę startową), w miejsce linii zaczynającej się od <code>var HASH_UCZEN</code>. Hasło podglądu siedzi linijkę niżej, w <code>HASH_PODGLAD</code>. Po zmianie każdy wpisuje nowe hasło jeszcze raz.</p>` + promptBlock(line, 'linia z hasłem');
      return;
    }
    if (act === 'lock') {
      if (window.BRAMKA) window.BRAMKA.zamknij();
      location.reload(); return;
    }
    if (act === 'reset') {
      if (confirm('Na pewno wyzerować postęp na tym komputerze? Imię zostanie.')) { const n = state.name; state = fresh(); state.name = n; save(); toast('Wyzerowane.'); render(); } return;
    }
  });
  main.addEventListener('change', e => {
    const step = e.target.closest('[data-step]');
    if (step) {
      const mid = location.hash.split('/')[2]; state.steps[mid] = state.steps[mid] || {}; state.steps[mid][step.getAttribute('data-step')] = step.checked; save();
      step.closest('.step').classList.toggle('done', step.checked); return;
    }
    if (e.target.matches('[data-act="unlock-all"]')) {
      if (podglad()) { e.target.checked = true; toast('W trybie podglądu wszystkie misje i tak są otwarte.'); return; } state.unlockAll = e.target.checked; save(); toast(state.unlockAll ? 'Wszystkie misje odblokowane.' : 'Misje znów idą po kolei.'); }
  });
  main.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'name-in') { e.preventDefault(); $('[data-act="save-name"]').click(); } });

  /* ---------- Router ---------- */
  function render() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    const view = parts[0] || 'home';
    let html, navKey = view;
    if (view === 'misja') { html = viewMission(parts[1]); navKey = 'home'; }
    else if (view === 'niezbednik') html = viewNiezbednik();
    else if (view === 'dziennik') html = viewDziennik();
    else if (view === 'rodzic') html = viewRodzic();
    else if (view === 'ustawienia') html = viewUstawienia();
    else { html = viewHome(); navKey = 'home'; }
    main.innerHTML = html;
    document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.getAttribute('data-nav') === navKey));
    document.title = view === 'misja' && byId(parts[1]) ? `Misja ${parts[1]}: ${byId(parts[1]).title} · Akademia AI` : 'Akademia AI';
    window.scrollTo(0, 0);
    if (justPrinted != null && !(view === 'misja' || view === 'home')) justPrinted = null;
  }
  window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/misja')) justPrinted = null; render(); });

  /* ---------- Start ---------- */
  function startuj() {
    // Imię można ustawić linkiem: ?imie=Filip (znika z adresu po zapisaniu).
    const params = new URLSearchParams(location.search);
    if (params.get('imie') && !podglad()) {
      state.name = params.get('imie').trim().slice(0, 30);
      save();
      history.replaceState(null, '', location.pathname + location.hash);
    }
    render();
    zapiszSkrot();
  }
  // Bramka zasłania stronę, dopóki nie padnie hasło. Do tego czasu nie wiadomo,
  // czy to uczeń, czy rodzic w podglądzie, więc czekamy z rysowaniem.
  if (!window.BRAMKA || window.BRAMKA.otwarta()) startuj();
  else window.addEventListener('bramka:otwarta', startuj, { once: true });
})();
