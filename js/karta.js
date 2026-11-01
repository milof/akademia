/* Publiczna strona jednej karty z Niezbędnika: karta/?k=<kurs>.<id karty>, np. karta/?k=ai.karta-startowa.
   Bez bramki i bez postępu. Link do niej daje przycisk „Udostępnij kartę” w Niezbędniku każdego kursu. */
(function () {
  'use strict';
  var main = document.getElementById('main');
  var P = window.POSTEP;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // To samo mini-formatowanie co w kursach: **gruby**, `kod`, [[klawisz]], {{pozycja menu}}, [tekst](https://...)
  function md(s) {
    var t = esc(s);
    t = t.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\[\[(.+?)\]\]/g, '<kbd>$1</kbd>');
    t = t.replace(/\{\{(.+?)\}\}/g, '<strong>$1</strong>');
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    return t;
  }
  function brak() {
    main.innerHTML = '<div class="karta"><h1>Nie ma takiej karty</h1><p class="cichy">Link mógł się uciąć przy kopiowaniu. Poproś o niego jeszcze raz.</p></div>';
  }

  var k = new URLSearchParams(location.search).get('k') || '';
  var kropka = k.indexOf('.'), kursId = k.slice(0, kropka), kartaId = k.slice(kropka + 1);
  var kurs = (window.KURSY || []).filter(function (x) { return x.id === kursId; })[0];
  if (kropka < 1 || !kurs) { brak(); return; }

  P.tresc(kurs.id).then(function (T) {
    var c = (T.cards || []).filter(function (x) { return x.id === kartaId; })[0];
    if (!c) { brak(); return; }
    var doKopii = c.prompt || c.copy || '';
    document.title = c.title + ' · ' + kurs.nazwa;
    main.innerHTML =
      '<article class="karta karta-publiczna" style="border-top: 6px solid ' + kurs.kolor + '">' +
        '<span class="nadtytul">' + esc(kurs.nazwa) + ' · karta z Niezbędnika</span>' +
        '<h1>' + esc(c.title) + '</h1>' +
        '<p class="wstep">' + md(c.when) + '</p>' +
        (doKopii ? '<div class="do-kopii"><pre>' + esc(doKopii) + '</pre>' +
          '<button class="btn maly" type="button" data-kopiuj>Kopiuj</button></div>' : '') +
        (c.more ? '<p>' + md(c.more) + '</p>' : '') +
      '</article>';
    var btn = main.querySelector('[data-kopiuj]');
    if (btn) btn.addEventListener('click', function () {
      function ok() { btn.textContent = 'Skopiowano'; setTimeout(function () { btn.textContent = 'Kopiuj'; }, 1600); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(doKopii).then(ok, function () { btn.textContent = 'Zaznacz i użyj Ctrl + C'; });
      else btn.textContent = 'Zaznacz i użyj Ctrl + C';
    });
  }, brak);
})();
