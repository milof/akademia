/* Wspólna bramka Akademii. Ładowana w <head> strony startowej i każdego kursu,
   zanim cokolwiek się pokaże. Jedno wejście, dwie role:

     hasło ucznia    → tryb ucznia: misje idą po kolei, postęp się zapisuje
     hasło podglądu  → tryb podglądu: wszystkie misje otwarte, nic się nie zapisuje

   Zmiana haseł: strona „Dla rodzica” > Zmiana hasła. Wygeneruj tam linię i wklej poniżej.
   To jest bramka, nie zamek. Trzyma z dala przypadkowych gości, nie kogoś, kto zna się na rzeczy. */
(function () {
  'use strict';
  var HASH_UCZEN   = 'a726073d'; // hasło ucznia: nukacola
  var HASH_PODGLAD = 'a009a515'; // hasło podglądu: tatatest

  var KEY = 'akademia:wejscie';
  var STARE = ['akademia-ai:gate', 'akademia-arkusze:gate']; // bramki sprzed połączenia kursów

  function hash(s) {
    s = String(s == null ? '' : s).trim().toLowerCase();
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ('0000000' + h.toString(16)).slice(-8);
  }

  function czytaj() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function zapisz(rola, h) {
    try { localStorage.setItem(KEY, JSON.stringify({ h: h, rola: rola })); } catch (e) { /* tryb prywatny */ }
  }
  function zapomnij() {
    try {
      localStorage.removeItem(KEY);
      for (var i = 0; i < STARE.length; i++) localStorage.removeItem(STARE[i]);
    } catch (e) { /* trudno */ }
  }

  // Kto raz wpisał hasło w starej, osobnej bramce kursu, nie wpisuje go drugi raz.
  function migruj() {
    try {
      for (var i = 0; i < STARE.length; i++) {
        if (localStorage.getItem(STARE[i]) === HASH_UCZEN) zapisz('uczen', HASH_UCZEN);
        localStorage.removeItem(STARE[i]);
      }
    } catch (e) { /* trudno */ }
  }
  if (!czytaj()) migruj();

  function rola() {
    var w = czytaj();
    if (!w) return null;
    if (w.rola === 'uczen' && w.h === HASH_UCZEN) return 'uczen';
    if (w.rola === 'podglad' && w.h === HASH_PODGLAD) return 'podglad';
    return null; // hasło zmieniono w pliku: trzeba wpisać nowe
  }

  var B = window.BRAMKA = {
    hash: hash,
    rola: rola,
    otwarta: function () { return rola() !== null; },
    podglad: function () { return rola() === 'podglad'; },
    zamknij: zapomnij
  };

  /* ---------- Pasek trybu podglądu ---------- */
  function pasek() {
    if (document.getElementById('pas-podgladu')) return;
    document.documentElement.classList.add('podglad');

    var st = document.createElement('style');
    st.textContent =
      'html.podglad body { padding-bottom: 4.5rem; }' +
      '#pas-podgladu { position: fixed; left: 50%; bottom: 1rem; transform: translateX(-50%);' +
        ' z-index: 60; display: flex; align-items: center; gap: .7rem; max-width: calc(100vw - 2rem);' +
        ' background: #16202A; color: #fff; padding: .55rem .7rem .55rem 1rem; border-radius: 999px;' +
        ' font-family: inherit; font-size: .88rem; line-height: 1.3;' +
        ' box-shadow: 0 8px 30px -8px rgba(0,0,0,.5); }' +
      '#pas-podgladu .pp-dot { width: 8px; height: 8px; border-radius: 50%; background: #F2620F; flex: none; }' +
      '#pas-podgladu button { font: inherit; font-weight: 600; color: #16202A; background: #fff;' +
        ' border: 0; border-radius: 999px; padding: .3rem .85rem; cursor: pointer; white-space: nowrap; }' +
      '#pas-podgladu button:hover { background: #FFD3B0; }' +
      '@media print { #pas-podgladu { display: none; } }';
    document.head.appendChild(st);

    var box = document.createElement('div');
    box.id = 'pas-podgladu';
    box.setAttribute('role', 'status');
    box.innerHTML = '<span class="pp-dot" aria-hidden="true"></span>' +
      '<span>Tryb podglądu. Postęp się nie zapisuje.</span>' +
      '<button type="button">Wyjdź</button>';
    box.querySelector('button').addEventListener('click', function () {
      zapomnij();
      location.reload();
    });
    document.body.appendChild(box);
  }
  function gdyGotowe(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  if (B.otwarta()) {
    if (B.podglad()) gdyGotowe(pasek);
    return;
  }

  /* ---------- Ekran z hasłem ---------- */
  // Zasłaniamy stronę od razu, jeszcze zanim przeglądarka narysuje treść.
  document.documentElement.classList.add('locked');

  function build() {
    var box = document.createElement('div');
    box.id = 'gate';
    box.innerHTML =
      '<form class="gate-card" autocomplete="off">' +
        '<svg class="gate-mark" viewBox="0 0 32 32" aria-hidden="true">' +
          '<rect x="1" y="1" width="30" height="30" rx="7" fill="#16202A"/>' +
          '<rect x="6" y="6" width="9" height="9" rx="2" fill="#F2620F"/>' +
          '<rect x="17" y="6" width="9" height="9" rx="2" fill="#34A853"/>' +
          '<rect x="6" y="17" width="9" height="9" rx="2" fill="#5B6B7A"/>' +
          '<rect x="17.75" y="17.75" width="7.5" height="7.5" rx="1.75" fill="none" stroke="#5B6B7A" stroke-width="1.5" stroke-dasharray="3 2.5"/>' +
        '</svg>' +
        '<h1>' + (document.title || 'Akademia') + '</h1>' +
        '<p class="gate-lead">Ta strona jest prywatna. Wpisz hasło, żeby wejść.</p>' +
        '<div class="field"><label for="gate-pw">Hasło</label>' +
        '<input id="gate-pw" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go"></div>' +
        '<label class="switch"><input id="gate-show" type="checkbox"> Pokaż hasło</label>' +
        '<p class="gate-err" role="alert" hidden>Nie to hasło. Spróbuj jeszcze raz.</p>' +
        '<button class="btn primary" type="submit">Wejdź</button>' +
        '<p class="gate-note">Hasło wpisujesz raz na tym komputerze. Potem strona już Cię pamięta.</p>' +
      '</form>';
    document.body.appendChild(box);

    var form = box.querySelector('form');
    var pw = box.querySelector('#gate-pw');
    var show = box.querySelector('#gate-show');
    var err = box.querySelector('.gate-err');
    var card = box.querySelector('.gate-card');

    show.addEventListener('change', function () {
      pw.type = show.checked ? 'text' : 'password';
      pw.focus();
    });
    pw.addEventListener('input', function () { err.hidden = true; });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var h = hash(pw.value);
      if (h === HASH_UCZEN || h === HASH_PODGLAD) {
        zapisz(h === HASH_PODGLAD ? 'podglad' : 'uczen', h);
        document.documentElement.classList.remove('locked');
        box.remove();
        if (B.podglad()) pasek();
        // Strona rysuje się dopiero teraz, bo dopiero teraz wiadomo, kto wszedł.
        window.dispatchEvent(new Event('bramka:otwarta'));
        var main = document.getElementById('main');
        if (main) main.focus();
        return;
      }
      err.hidden = false;
      pw.select();
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    });
    pw.focus();
  }

  gdyGotowe(build);
})();
