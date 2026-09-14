/* Strona startowa Akademii: kursy jako ikony i kompletność pod spodem.
   Niczego nie zapisuje w kursach — tylko czyta ich postęp z localStorage. */
(function () {
  'use strict';

  // Stare linki prosto do misji Akademii AI (kurs mieszkał kiedyś w katalogu głównym).
  if (location.hash.indexOf('#/') === 0) { location.replace('ai/' + location.hash); return; }

  var KURSY = window.KURSY || [];
  var main = document.getElementById('main');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function odczyt(klucz) {
    try { return JSON.parse(localStorage.getItem(klucz) || 'null'); } catch (e) { return null; }
  }
  function odmiana(n, formy) {
    if (n === 1) return formy[0];
    var d = n % 10, s = n % 100;
    return (d >= 2 && d <= 4 && (s < 12 || s > 14)) ? formy[1] : formy[2];
  }

  function dane(kurs) {
    var s = odczyt(kurs.klucz + ':v1');            // pełny stan kursu
    var p = odczyt(kurs.klucz + ':podsumowanie');  // skrót zapisywany przez kurs
    var wszystkie = (p && p.wszystkie) || kurs.misje;
    var zrobione = s && s.done ? Object.keys(s.done).length : (p && p.zrobione) || 0;
    if (zrobione > wszystkie) zrobione = wszystkie;
    return {
      zrobione: zrobione,
      wszystkie: wszystkie,
      imie: (s && s.name) || (p && p.imie) || '',
      nastepna: (p && p.nastepna) || null,
      otwarty: !!(s || p)
    };
  }

  function pasek(kurs, d) {
    var kratki = '';
    for (var i = 0; i < d.wszystkie; i++) {
      var kolor = i < d.zrobione ? kurs.kolor : (i === d.zrobione ? kurs.kolorNast : '');
      kratki += '<i' + (kolor ? ' style="background:' + kolor + '"' : '') + '></i>';
    }
    return '<div class="pasek" role="img" aria-label="' +
      esc(d.zrobione + ' z ' + d.wszystkie + ' misji zaliczonych') + '">' + kratki + '</div>';
  }

  function linia(d) {
    if (d.wszystkie && d.zrobione >= d.wszystkie) return 'Wszystkie misje zaliczone.';
    if (d.nastepna) {
      return 'Następna: misja ' + esc(d.nastepna.id) +
        (d.nastepna.tytul ? ' — ' + esc(d.nastepna.tytul) : '');
    }
    if (!d.otwarty) return 'Jeszcze nieotwarty. Zaczyna się od misji 0.';
    return 'W trakcie.';
  }

  function kafelek(kurs) {
    var d = dane(kurs);
    var zostalo = d.wszystkie - d.zrobione;
    var plakietka = zostalo > 0
      ? '<span class="plakietka">' + zostalo + '</span>'
      : '<span class="plakietka gotowe" aria-hidden="true">✓</span>';
    return '<a class="kafelek" href="' + esc(kurs.sciezka) + '" aria-label="' +
        esc(kurs.nazwa + ', ' + d.zrobione + ' z ' + d.wszystkie + ' misji zaliczonych') + '">' +
        '<span class="ikona">' + kurs.ikona + plakietka + '</span>' +
        '<span class="nazwa">' + esc(kurs.nazwa) + '</span>' +
        '<span class="podpis">' + (d.imie ? esc(d.imie) + ' · ' : '') +
          d.zrobione + ' z ' + d.wszystkie + '</span>' +
      '</a>';
  }

  function wiersz(kurs) {
    var d = dane(kurs);
    var procent = d.wszystkie ? Math.round(d.zrobione / d.wszystkie * 100) : 0;
    return '<div class="wiersz">' +
        '<div class="wiersz-gora"><b>' + esc(kurs.nazwa) + '</b>' +
          '<span class="licznik">' + d.zrobione + ' / ' + d.wszystkie + ' · ' + procent + '%</span></div>' +
        pasek(kurs, d) +
        '<p class="wiersz-dol">' + linia(d) + '</p>' +
      '</div>';
  }

  function rysuj() {
    if (!KURSY.length) {
      main.innerHTML = '<div class="karta"><h1>Pusto</h1><p class="cichy">Żaden kurs nie jest wpisany w ' +
        '<code>js/kursy.js</code>.</p></div>';
      return;
    }
    var ile = KURSY.length;
    var kafelki = KURSY.map(kafelek).join('') +
      '<div class="kafelek pusty" aria-hidden="true">' +
        '<span class="ikona"><span class="plus">+</span></span>' +
        '<span class="nazwa">Kolejny kurs</span>' +
        '<span class="podpis">wolne miejsce</span>' +
      '</div>';

    main.innerHTML =
      '<section class="powitanie">' +
        '<h1>Cześć.</h1>' +
        '<p class="wstep">' + ile + ' ' + odmiana(ile, ['kurs', 'kursy', 'kursów']) +
          '. Wybierz, w co dziś wchodzisz.</p>' +
      '</section>' +
      '<nav class="siatka" aria-label="Kursy">' + kafelki + '</nav>' +
      '<section class="podsumowanie" aria-labelledby="tyt-komplet">' +
        '<h2 id="tyt-komplet" class="nadtytul">Kompletność</h2>' +
        KURSY.map(wiersz).join('') +
      '</section>';
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act="lock"]');
    if (!b) return;
    e.preventDefault();
    if (window.BRAMKA) window.BRAMKA.zamknij();
    location.reload();
  });

  if (!window.BRAMKA || window.BRAMKA.otwarta()) rysuj();
  else window.addEventListener('bramka:otwarta', rysuj, { once: true });
})();
