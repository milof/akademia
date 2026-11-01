/* Wspólny zapis Akademii. Ładowany po js/gate.js i js/kursy.js na stronie startowej i w każdym kursie.

     domownicy  – kilka osób na jednej przeglądarce, każda z własnym postępem we wszystkich kursach
     stan kursu – zaliczone misje, odhaczone kroki, Dziennik; klucz <klucz kursu>:v2:<id domownika>
     treść      – pliki kursu z listy w js/kursy.js, ładowane na żądanie
     kod zapisu – jeden na całą Akademię: wszystkie kursy, wszyscy domownicy

   Misje i kroki są zapisane po stałych nazwach, nie po numerach, więc nową misję albo krok
   można wstawić w środek, a zaliczone zostają zaliczone. Wszystko żyje w tej przeglądarce. */
(function () {
  'use strict';
  var KURSY = window.KURSY || [];
  var ROOT = new URL('../', document.currentScript.src).href; // katalog główny Akademii

  var K_DOMOWNICY = 'akademia:domownicy'; // { lista: [{ id, imie }], ostatni }
  var K_TERAZ = 'akademia:kto';           // sessionStorage: kto siedzi przy komputerze w tej karcie
  var K_KOPIA = 'akademia:kopia';         // { kiedy, zaliczone }: ostatnie skopiowanie kodu zapisu
  var KOPIA_CO = 3;                       // po tylu nowych misjach strona przypomina o kopii
  var KOLORY = ['#16202A', '#F2620F', '#1A73E8', '#34A853', '#8E44AD', '#BC4705'];

  function czytaj(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function pisz(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* tryb prywatny: trudno */ } }
  function usun(k) { try { localStorage.removeItem(k); } catch (e) { /* trudno */ } }
  var terazZapas = null; // gdy przeglądarka nie daje sessionStorage
  function teraz(id) {
    try {
      if (arguments.length) { if (id) sessionStorage.setItem(K_TERAZ, id); else sessionStorage.removeItem(K_TERAZ); }
      return sessionStorage.getItem(K_TERAZ);
    } catch (e) { if (arguments.length) terazZapas = id; return terazZapas; }
  }
  function podglad() { return !!(window.BRAMKA && window.BRAMKA.podglad()); }
  function kurs(id) { for (var i = 0; i < KURSY.length; i++) if (KURSY[i].id === id) return KURSY[i]; return null; }
  function norm(s) { return String(s == null ? '' : s).trim().toLowerCase(); }
  function imieZ(s) { return String(s == null ? '' : s).trim().slice(0, 30); }
  function skrot(s) {
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return h.toString(36);
  }
  function nowyId() { return 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* ---------- Domownicy ---------- */
  var rej = null;
  function rejestr() { if (!rej) rej = czytaj(K_DOMOWNICY) || przeniesV1(); return rej; }
  function zapiszRejestr() { pisz(K_DOMOWNICY, rej); }
  function profile() { return rejestr().lista.slice(); }
  function profil(id) { var l = rejestr().lista; for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function poImieniu(imie) { var n = norm(imie), l = rejestr().lista; for (var i = 0; i < l.length; i++) if (norm(l[i].imie) === n) return l[i]; return null; }
  function dodaj(imie) { var p = { id: nowyId(), imie: imieZ(imie) }; rejestr().lista.push(p); zapiszRejestr(); return p; }
  function zmienImie(id, imie) { var p = profil(id); if (p) { p.imie = imieZ(imie); zapiszRejestr(); } }
  function usunProfil(id) {
    var r = rejestr();
    r.lista = r.lista.filter(function (p) { return p.id !== id; });
    if (r.ostatni === id) r.ostatni = null;
    zapiszRejestr();
    KURSY.forEach(function (k) { usun(klucz(k.id, id)); });
    if (teraz() === id) teraz(null);
  }
  function wybierz(id) { teraz(id); rejestr().ostatni = id; zapiszRejestr(); }
  function kolor(p) { var i = rejestr().lista.indexOf(p); return KOLORY[(i < 0 ? 0 : i) % KOLORY.length]; }
  // Domownik, który siedzi przy komputerze. null znaczy: jest ich kilku i trzeba zapytać.
  function aktywny() {
    var r = rejestr(), p = profil(teraz());
    if (p) return p;
    if (!r.lista.length) dodaj(''); // pierwsze wejście: jeden domownik bez imienia, imię dopisze się w kursie
    if (r.lista.length === 1) { wybierz(r.lista[0].id); return r.lista[0]; }
    return null;
  }

  /* ---------- Przejście z wersji 1 ---------- */
  // Wersja 1 miała jednego ucznia na przeglądarkę, osobne imię w każdym kursie i misje po numerach.
  // Każdy stary zapis trafia do domownika o swoim imieniu; zapis bez imienia dołącza do jedynego
  // nazwanego domownika, jeśli taki jest. Stare klucze zostają nietknięte jako kopia bezpieczeństwa.
  function przeniesV1() {
    var r = { lista: [], ostatni: null }, stare = [];
    KURSY.forEach(function (k) {
      var s = czytaj(k.klucz + ':v1');
      if (s && typeof s === 'object') stare.push({ kurs: k, s: s });
    });
    function dla(imie) {
      for (var i = 0; i < r.lista.length; i++) if (norm(r.lista[i].imie) === norm(imie)) return r.lista[i];
      var p = { id: nowyId(), imie: imieZ(imie) }; r.lista.push(p); return p;
    }
    stare.forEach(function (x) { if (norm(x.s.name)) x.p = dla(x.s.name); });
    stare.forEach(function (x) { if (!x.p) x.p = r.lista.length === 1 ? r.lista[0] : dla(''); });
    // Numery misji zamieni na nazwy dopiero odczyt stanu, bo do tego potrzebna jest treść kursu.
    stare.forEach(function (x) { pisz(x.kurs.klucz + ':v2:' + x.p.id, x.s); });
    pisz(K_DOMOWNICY, r);
    return r;
  }

  /* ---------- Treść kursów ---------- */
  var ladowanie = {};
  function tresc(kursId) {
    var k = kurs(kursId);
    if (!k) return Promise.reject(new Error('Nie ma kursu „' + kursId + '” w js/kursy.js.'));
    if (!ladowanie[kursId]) ladowanie[kursId] = new Promise(function (ok, zle) {
      var pliki = k.tresc || [], zostalo = pliki.length;
      if (!zostalo) { ok(window[k.globalna] || {}); return; }
      // Kolejność wykonania nie ma znaczenia: kolejność misji ustala spis. Plik, który się nie
      // wczytał (słaby internet), dostaje jeszcze dwie szanse.
      function laduj(plik, proba) {
        var s = document.createElement('script');
        s.src = ROOT + k.sciezka + plik + (proba ? '?proba=' + proba : '');
        s.onload = function () { if (--zostalo === 0) ok(window[k.globalna] || {}); };
        s.onerror = function () {
          s.remove();
          if (proba < 2) setTimeout(function () { laduj(plik, proba + 1); }, 400 * (proba + 1));
          else zle(new Error('Nie udało się wczytać ' + k.sciezka + plik + '.'));
        };
        document.head.appendChild(s);
      }
      pliki.forEach(function (plik) { laduj(plik, 0); });
    });
    return ladowanie[kursId];
  }

  // Misje w kolejności spisu, każda z numerem (nr) i rozdziałem. Liczone raz, bo treść się nie zmienia.
  var spisy = {};
  function spis(kursId) {
    if (spisy[kursId]) return spisy[kursId];
    var k = kurs(kursId), T = window[k.globalna] || {}, wszystkie = T.missions || [], dostepne = {};
    wszystkie.forEach(function (m) { dostepne[m.id] = m; });
    // Kurs bez spisu: jeden rozdział, misje w kolejności z plików.
    var rozdzialy = T.chapters || [{ id: '', title: '', missions: wszystkie.map(function (m) { return m.id; }) }];
    var S = { misje: [], rozdzialy: [], po: {} };
    rozdzialy.forEach(function (r) {
      var roz = { id: r.id, title: r.title || '', misje: [] };
      (r.missions || []).forEach(function (id) {
        var m = dostepne[id];
        if (!m) { console.warn('Spis kursu ' + kursId + ': nie ma misji „' + id + '”.'); return; }
        if (S.po[id]) { console.warn('Spis kursu ' + kursId + ': misja „' + id + '” stoi w spisie dwa razy.'); return; }
        m.nr = S.misje.length; m.rozdzial = roz.id;
        S.misje.push(m); roz.misje.push(m); S.po[id] = m;
      });
      S.rozdzialy.push(roz);
    });
    wszystkie.forEach(function (m) { if (!S.po[m.id]) console.warn('Misji „' + m.id + '” nie ma w spisie kursu ' + kursId + ', więc się nie pokazuje.'); });
    return (spisy[kursId] = S);
  }
  // Stała nazwa kroku: własne `id` kroku, a bez niego skrót z treści. Krok wstawiony w środek nie przesuwa ptaszków.
  function kluczKroku(krok) { return krok.id || 'k' + skrot(String(krok.text || '')); }

  /* ---------- Stan kursu ---------- */
  function klucz(kursId, pid) { return kurs(kursId).klucz + ':v2:' + pid; }
  function swiezy() { return { v: 2, done: {}, steps: {}, journal: [], seen: {}, unlockAll: false, createdAt: Date.now() }; }
  // Zapis z wersji 1: numery misji na nazwy z kursy.js (v1), numery kroków na nazwy kroków z treści.
  function zV1(kursId, s) {
    var v1 = kurs(kursId).v1 || [], S = spis(kursId), n = swiezy();
    n.createdAt = s.createdAt || n.createdAt;
    n.unlockAll = !!s.unlockAll;
    Object.keys(s.done || {}).forEach(function (nr) { if (v1[nr]) n.done[v1[nr]] = s.done[nr]; });
    Object.keys(s.steps || {}).forEach(function (nr) {
      var m = S.po[v1[nr]], kroki = s.steps[nr] || {};
      if (!m) return;
      Object.keys(kroki).forEach(function (sk) {
        var krok = (m.steps || [])[Number(sk.slice(1))]; // stare kroki: s0, s1, s2...
        if (kroki[sk] && krok) (n.steps[m.id] = n.steps[m.id] || {})[kluczKroku(krok)] = true;
      });
    });
    n.journal = (s.journal || []).map(function (e) { return { d: e.d, m: e.m != null && v1[e.m] ? v1[e.m] : null, t: e.t }; });
    return n;
  }
  function normuj(kursId, s) {
    if (!s || typeof s !== 'object') return swiezy();
    if (!(s.v >= 2)) return zV1(kursId, s);
    var n = swiezy();
    for (var k in s) if (Object.prototype.hasOwnProperty.call(s, k)) n[k] = s[k];
    return n;
  }
  // Stan kursu domownika (domyślnie tego przy komputerze). Wymaga wczytanej treści kursu.
  function stan(kursId, pid) {
    var p = pid ? profil(pid) : aktywny();
    return p ? normuj(kursId, czytaj(klucz(kursId, p.id))) : swiezy();
  }
  // W trybie podglądu nic się nie zapisuje.
  function zapisz(kursId, s, pid) {
    if (podglad()) return;
    var p = pid ? profil(pid) : aktywny();
    if (p) pisz(klucz(kursId, p.id), s);
  }
  function wyzeruj(kursId, pid) {
    if (podglad()) return;
    var p = pid ? profil(pid) : aktywny();
    if (p) usun(klucz(kursId, p.id));
  }

  /* ---------- Statystyki ---------- */
  function poczatekTygodnia() {
    var d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return d.getTime();
  }
  // Misja jest nowa, gdy doszła (pole `added`, data RRRR-MM-DD) po tym, jak domownik zaczął kurs,
  // i jeszcze jej nie otworzył.
  function nowa(m, s) {
    if (!m.added || s.done[m.id] || (s.seen && s.seen[m.id])) return false;
    return Date.parse(m.added + 'T00:00:00') > s.createdAt;
  }
  function staty(kursId, s) {
    var S = spis(kursId), tydzien = poczatekTygodnia();
    var z = { wszystkie: S.misje.length, zrobione: 0, minuty: 0, tydzien: 0, ostatnio: 0, wpisy: (s.journal || []).length, nastepna: null, nowe: [], rozdzialy: [] };
    S.misje.forEach(function (m) {
      var t = s.done[m.id];
      if (t) {
        z.zrobione++; z.minuty += m.minutes || 0;
        if (t >= tydzien) z.tydzien++;
        if (t > z.ostatnio) z.ostatnio = t;
      } else if (!z.nastepna) z.nastepna = m;
      if (nowa(m, s)) z.nowe.push(m);
    });
    (s.journal || []).forEach(function (e) { if (e.d > z.ostatnio) z.ostatnio = e.d; });
    z.rozdzialy = S.rozdzialy.map(function (r) {
      return { id: r.id, title: r.title, wszystkie: r.misje.length, zrobione: r.misje.filter(function (m) { return s.done[m.id]; }).length };
    });
    return z;
  }

  /* ---------- Kod zapisu ---------- */
  var PREFIKS = 'AKD2.';
  function doKodu(o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
  function zKodu(t) { return JSON.parse(decodeURIComponent(escape(atob(t)))); }
  function eksport() {
    var dane = { v: 2, domownicy: rejestr().lista.map(function (p) {
      var kursy = {};
      KURSY.forEach(function (k) { var s = czytaj(klucz(k.id, p.id)); if (s) kursy[k.id] = s; });
      return { imie: p.imie, kursy: kursy };
    }) };
    try { return PREFIKS + doKodu(dane); } catch (e) { return ''; }
  }
  // Dokłada zapis do domownika: zaliczone tu albo w kodzie zostaje zaliczone, nic nie znika.
  function scal(kursId, pid, obcy) {
    var tu = czytaj(klucz(kursId, pid)), a = normuj(kursId, tu), b = normuj(kursId, obcy);
    Object.keys(b.done).forEach(function (id) { if (!a.done[id] || b.done[id] < a.done[id]) a.done[id] = b.done[id]; });
    Object.keys(b.steps).forEach(function (id) {
      var x = a.steps[id] = a.steps[id] || {};
      Object.keys(b.steps[id] || {}).forEach(function (sk) { if (b.steps[id][sk]) x[sk] = true; });
    });
    Object.keys(b.seen || {}).forEach(function (id) { if (!a.seen[id]) a.seen[id] = b.seen[id]; });
    var juz = {};
    a.journal.forEach(function (e) { juz[e.d + '|' + e.t] = 1; });
    b.journal.forEach(function (e) { if (!juz[e.d + '|' + e.t]) a.journal.push(e); });
    a.unlockAll = a.unlockAll || b.unlockAll;
    a.createdAt = tu ? Math.min(a.createdAt, b.createdAt) : b.createdAt;
    pisz(klucz(kursId, pid), a);
  }
  // Wczytuje kod zapisu: nowy (cała Akademia) albo stary, z jednego kursu (AKA1., ARK1.).
  // Wymaga wczytanej treści wszystkich kursów. Zwraca liczbę domowników, których dotyczył kod.
  function wczytaj(kod) {
    if (podglad()) throw new Error('Tryb podglądu. Tutaj nic się nie zapisuje.');
    var c = String(kod || '').replace(/\s+/g, ''), dane;
    if (!c) throw new Error('Wklej najpierw kod zapisu.');
    if (c.indexOf(PREFIKS) === 0) {
      try { dane = zKodu(c.slice(PREFIKS.length)); } catch (e) { dane = null; }
      if (!dane || !Array.isArray(dane.domownicy)) throw new Error('Kod jest uszkodzony. Skopiuj go jeszcze raz, w całości.');
      dane.domownicy.forEach(function (d) {
        var p = poImieniu(d.imie) || dodaj(d.imie);
        KURSY.forEach(function (k) { if (d.kursy && d.kursy[k.id]) scal(k.id, p.id, d.kursy[k.id]); });
      });
      // Pusty domownik z pierwszego wejścia na tym komputerze (bez imienia i bez postępu) już niepotrzebny.
      rejestr().lista.filter(function (p) {
        return !p.imie && !KURSY.some(function (k) { return czytaj(klucz(k.id, p.id)); });
      }).forEach(function (p) { if (rejestr().lista.length > 1) usunProfil(p.id); });
      return dane.domownicy.length;
    }
    var k = KURSY.filter(function (x) { return x.kodV1 && c.indexOf(x.kodV1) === 0; })[0];
    if (!k) throw new Error('To nie wygląda na kod zapisu. Powinien zaczynać się od ' + PREFIKS);
    try { dane = zKodu(c.slice(k.kodV1.length)); } catch (e) { dane = null; }
    if (!dane || !dane.done) throw new Error('Kod jest uszkodzony. Skopiuj go jeszcze raz, w całości.');
    var ja = aktywny(), p = (norm(dane.name) && poImieniu(dane.name)) || ja;
    if (p === ja && !p.imie && norm(dane.name)) zmienImie(p.id, dane.name);
    scal(k.id, p.id, dane);
    return 1;
  }
  function zaliczoneWszedzie() {
    var n = 0;
    rejestr().lista.forEach(function (p) {
      KURSY.forEach(function (k) { var s = czytaj(klucz(k.id, p.id)); if (s && s.done) n += Object.keys(s.done).length; });
    });
    return n;
  }
  function oznaczKopie() { if (!podglad()) pisz(K_KOPIA, { kiedy: Date.now(), zaliczone: zaliczoneWszedzie() }); }
  function ostatniaKopia() { return (czytaj(K_KOPIA) || {}).kiedy || null; }
  function czasNaKopie() {
    if (podglad()) return false;
    return zaliczoneWszedzie() - ((czytaj(K_KOPIA) || {}).zaliczone || 0) >= KOPIA_CO;
  }

  /* ---------- Kto siedzi przy komputerze ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function awatar(p) {
    return '<span class="kto-av" style="background:' + kolor(p) + '" aria-hidden="true">' +
      esc((p.imie || '?').charAt(0).toUpperCase()) + '</span>';
  }
  function styl() {
    if (document.getElementById('kto-styl')) return;
    var st = document.createElement('style');
    st.id = 'kto-styl';
    st.textContent =
      '.kto-lista { display: grid; gap: .6rem; margin: 0 0 1.25rem; }' +
      '.kto-btn { display: flex; align-items: center; gap: .8rem; width: 100%; font: inherit; font-weight: 600;' +
        ' font-size: 1.05rem; text-align: left; color: inherit; background: #fff; border: 2px solid #D9DFE5;' +
        ' border-radius: 12px; padding: .55rem .8rem; cursor: pointer; }' +
      '.kto-btn:hover, .kto-btn.ostatni { border-color: #16202A; }' +
      '.kto-av { width: 2.1rem; height: 2.1rem; border-radius: 50%; display: inline-grid; place-items: center;' +
        ' color: #fff; font-weight: 700; font-size: .95rem; flex: none; }' +
      '.kto-nowy { text-align: left; border-top: 1px solid #EEF1F4; padding-top: 1rem; }' +
      '.kto-nowy .field { margin-bottom: .6rem; }' +
      '.kto-chip { display: inline-flex; align-items: center; gap: .45rem; font: inherit; font-weight: 600; font-size: .95rem;' +
        ' color: inherit; background: #fff; border: 1px solid #D9DFE5; border-radius: 999px; padding: .2rem .75rem .2rem .25rem; cursor: pointer; }' +
      '.kto-chip:hover { border-color: #16202A; }' +
      '.kto-chip .kto-av { width: 1.7rem; height: 1.7rem; font-size: .8rem; }' +
      '@media print { .kto-chip { display: none; } }';
    document.head.appendChild(st);
  }
  // Kafelki „Kto się uczy?” na całym ekranie, w miejscu bramki z hasłem.
  function wybor(fn) {
    styl();
    var r = rejestr();
    document.documentElement.classList.add('locked');
    var box = document.createElement('div');
    box.id = 'gate';
    box.innerHTML =
      '<div class="gate-card">' +
        '<h1>Kto się uczy?</h1>' +
        '<p class="gate-lead">Każdy ma swój własny postęp. Kliknij siebie.</p>' +
        '<div class="kto-lista">' + r.lista.map(function (p) {
          return '<button type="button" class="kto-btn' + (p.id === r.ostatni ? ' ostatni' : '') + '" data-id="' + esc(p.id) + '">' +
            awatar(p) + '<span>' + esc(p.imie || 'Bez imienia') + '</span></button>';
        }).join('') + '</div>' +
        '<form class="kto-nowy" autocomplete="off"><div class="field"><label for="kto-imie">Ktoś nowy?</label>' +
          '<input id="kto-imie" type="text" maxlength="30" placeholder="Imię albo ksywka" spellcheck="false"></div>' +
          '<button class="btn" type="submit">Dodaj i wejdź</button></form>' +
      '</div>';
    document.body.appendChild(box);
    function wejdz(p) {
      wybierz(p.id);
      box.remove();
      document.documentElement.classList.remove('locked');
      fn(p);
      var main = document.getElementById('main');
      if (main) main.focus();
    }
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.kto-btn');
      if (b) wejdz(profil(b.getAttribute('data-id')));
    });
    box.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var pole = box.querySelector('#kto-imie'), imie = imieZ(pole.value);
      if (!imie) { pole.focus(); return; }
      wejdz(poImieniu(imie) || dodaj(imie));
    });
    var start = box.querySelector('.kto-btn.ostatni') || box.querySelector('.kto-btn');
    if (start) start.focus();
  }
  // ?imie=Filip w adresie (także w linku-zakładce) wybiera domownika, a gdy go nie ma, dopisuje.
  function imieZLinku() {
    var q = new URLSearchParams(location.search), imie = imieZ(q.get('imie'));
    if (!q.has('imie')) return;
    q.delete('imie');
    history.replaceState(null, '', location.pathname + (String(q) ? '?' + q : '') + location.hash);
    if (!imie) return;
    var p = poImieniu(imie), r = rejestr();
    if (!p && !podglad()) {
      // Jedyny domownik bez imienia to ten sam uczeń, tylko jeszcze nienazwany: tak działał stary link ?imie=.
      if (r.lista.length === 1 && !r.lista[0].imie) { p = r.lista[0]; zmienImie(p.id, imie); }
      else p = dodaj(imie);
    }
    if (p) wybierz(p.id);
  }
  // Wywołuje fn(domownik), gdy bramka jest otwarta i wiadomo, czyj postęp pokazać.
  function gotowe(fn) {
    function dalej() {
      imieZLinku();
      var p = aktywny();
      if (p) fn(p); else wybor(fn);
    }
    if (!window.BRAMKA || window.BRAMKA.otwarta()) dalej();
    else window.addEventListener('bramka:otwarta', dalej, { once: true });
  }
  // Przycisk z imieniem do nagłówka. Tylko gdy domowników jest kilku: przy jednym nie ma czego zmieniać.
  function przycisk() {
    var p = aktywny();
    if (!p || rejestr().lista.length < 2) return '';
    styl();
    return '<button type="button" class="kto-chip" data-kto-zmien title="Zmień, kto się uczy">' + awatar(p) + esc(p.imie || 'Bez imienia') + '</button>';
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-kto-zmien]')) return;
    teraz(null);
    location.reload();
  });

  window.POSTEP = {
    root: ROOT,
    profile: profile, profil: profil, poImieniu: poImieniu, aktywny: aktywny, dodaj: dodaj,
    zmienImie: zmienImie, usunProfil: usunProfil, wybierz: wybierz, kolor: kolor,
    tresc: tresc, spis: spis, kluczKroku: kluczKroku,
    stan: stan, zapisz: zapisz, wyzeruj: wyzeruj, staty: staty, nowa: nowa,
    eksport: eksport, wczytaj: wczytaj, oznaczKopie: oznaczKopie, ostatniaKopia: ostatniaKopia, czasNaKopie: czasNaKopie,
    gotowe: gotowe, przycisk: przycisk
  };
})();
