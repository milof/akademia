/* Strona startowa Akademii: kursy jako ikony, kompletność, liczby i nowości domownika, który siedzi
   przy komputerze. Pod #rodzina są domownicy, linki-zakładki i kod zapisu, pod #raport raport dla taty,
   pod #zlecenia prawdziwe zadania od rodziny.
   Liczby liczą się z prawdziwej treści kursów, którą postep.js ładuje z listy w js/kursy.js. */
(function () {
  'use strict';

  // Stare linki prosto do misji Akademii AI (kurs mieszkał kiedyś w katalogu głównym).
  if (location.hash.indexOf('#/') === 0) { location.replace('ai/' + location.hash); return; }

  var KURSY = window.KURSY || [];
  var P = window.POSTEP;
  var main = document.getElementById('main');
  var bledy = {};      // kursy, których treść się nie wczytała
  var wynik = '';      // komunikat po wczytaniu kodu zapisu
  var link = { kto: '', gdzie: '', url: '' }; // ostatnio zrobiony link-zakładka
  var zlKomunikat = ''; // komunikat po dodaniu zlecenia

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function odmiana(n, formy) {
    if (n === 1) return formy[0];
    var d = n % 10, s = n % 100;
    return (d >= 2 && d <= 4 && (s < 12 || s > 14)) ? formy[1] : formy[2];
  }
  function data(ts) { return new Date(ts).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' }); }
  function kiedy(ts) {
    if (!ts) return 'jeszcze nie';
    var dzis = new Date().setHours(0, 0, 0, 0), dni = Math.round((dzis - new Date(ts).setHours(0, 0, 0, 0)) / 864e5);
    if (dni <= 0) return 'dziś';
    if (dni === 1) return 'wczoraj';
    if (dni < 7) return dni + ' dni temu';
    return data(ts);
  }
  function czas(min) {
    if (min < 60) return min + ' min';
    return Math.floor(min / 60) + ' h' + (min % 60 ? ' ' + min % 60 + ' min' : '');
  }
  function podglad() { return !!(window.BRAMKA && window.BRAMKA.podglad()); }
  function ja() { return P.aktywny(); }
  function awatar(p) {
    return '<span class="kto-av" style="background:' + P.kolor(p) + '" aria-hidden="true">' +
      esc((p.imie || '?').charAt(0).toUpperCase()) + '</span>';
  }
  function dane(kurs, pid) {
    var s = P.stan(kurs.id, pid), z = P.staty(kurs.id, s);
    z.s = s;
    return z;
  }

  /* ---------- Strona główna ---------- */
  function pasek(kurs, z) {
    var kratki = '';
    P.spis(kurs.id).rozdzialy.forEach(function (r, i) {
      if (!r.misje.length) return;
      if (i > 0 && kratki) kratki += '<b aria-hidden="true"></b>'; // odstęp między rozdziałami
      r.misje.forEach(function (m) {
        var kolor = z.s.done[m.id] ? kurs.kolor : (m === z.nastepna ? kurs.kolorNast : '');
        kratki += '<i' + (kolor ? ' style="background:' + kolor + '"' : '') + ' title="Misja ' + m.nr + ': ' + esc(m.title) + '"></i>';
      });
    });
    return '<div class="pasek" role="img" aria-label="' +
      esc(z.zrobione + ' z ' + z.wszystkie + ' misji zaliczonych') + '">' + kratki + '</div>';
  }
  function rozdzialNastepnej(kurs, z) {
    var r = P.spis(kurs.id).rozdzialy.filter(function (x) { return x.id === z.nastepna.rozdzial; })[0];
    return r && r.title && P.spis(kurs.id).rozdzialy.length > 1 ? ' · rozdział: ' + esc(r.title) : '';
  }
  function linia(kurs, z) {
    if (bledy[kurs.id]) return 'Nie udało się wczytać kursu. Odśwież stronę.';
    if (z.wszystkie && z.zrobione >= z.wszystkie) return 'Wszystkie misje zaliczone.';
    if (z.nastepna) return 'Następna: misja ' + z.nastepna.nr + ' — ' + esc(z.nastepna.title) + rozdzialNastepnej(kurs, z);
    return 'Jeszcze nic tu nie ma.';
  }
  function kafelek(kurs, z) {
    var zostalo = z.wszystkie - z.zrobione;
    var plakietka = zostalo > 0
      ? '<span class="plakietka">' + zostalo + '</span>'
      : '<span class="plakietka gotowe" aria-hidden="true">✓</span>';
    return '<a class="kafelek" href="' + esc(kurs.sciezka) + '" aria-label="' +
        esc(kurs.nazwa + ', ' + z.zrobione + ' z ' + z.wszystkie + ' misji zaliczonych') + '">' +
        '<span class="ikona">' + kurs.ikona + plakietka + '</span>' +
        '<span class="nazwa">' + esc(kurs.nazwa) + '</span>' +
        '<span class="podpis">' + z.zrobione + ' z ' + z.wszystkie + (z.nowe.length ? ' · nowość' : '') + '</span>' +
      '</a>';
  }
  function wiersz(kurs, z) {
    var procent = z.wszystkie ? Math.round(z.zrobione / z.wszystkie * 100) : 0;
    return '<div class="wiersz">' +
        '<div class="wiersz-gora"><b>' + esc(kurs.nazwa) + '</b>' +
          '<span class="licznik">' + z.zrobione + ' / ' + z.wszystkie + ' · ' + procent + '%</span></div>' +
        pasek(kurs, z) +
        '<p class="wiersz-dol">' + linia(kurs, z) + '</p>' +
      '</div>';
  }
  function liczby(lista) {
    var suma = { zrobione: 0, minuty: 0, tydzien: 0, ostatnio: 0 };
    lista.forEach(function (x) {
      suma.zrobione += x.z.zrobione; suma.minuty += x.z.minuty; suma.tydzien += x.z.tydzien;
      if (x.z.ostatnio > suma.ostatnio) suma.ostatnio = x.z.ostatnio;
    });
    function kafel(duzo, opis) { return '<div class="liczba"><b>' + duzo + '</b><span>' + opis + '</span></div>'; }
    return '<section class="podsumowanie" aria-labelledby="tyt-liczby">' +
        '<h2 id="tyt-liczby" class="nadtytul">' + (ja().imie ? 'Liczby: ' + esc(ja().imie) : 'Twoje liczby') + '</h2>' +
        '<div class="liczby">' +
          kafel(suma.zrobione, odmiana(suma.zrobione, ['misja zaliczona', 'misje zaliczone', 'misji zaliczonych'])) +
          kafel(czas(suma.minuty), 'nauki według planu misji') +
          kafel(suma.tydzien, odmiana(suma.tydzien, ['misja w tym tygodniu', 'misje w tym tygodniu', 'misji w tym tygodniu'])) +
          kafel(kiedy(suma.ostatnio), 'ostatnio coś zaliczone') +
        '</div>' +
      '</section>';
  }
  function glowna() {
    var p = ja();
    var lista = KURSY.map(function (k) { return { kurs: k, z: dane(k) }; });
    var ile = KURSY.length;
    var kafelki = lista.map(function (x) { return kafelek(x.kurs, x.z); }).join('') +
      '<div class="kafelek pusty" aria-hidden="true">' +
        '<span class="ikona"><span class="plus">+</span></span>' +
        '<span class="nazwa">Kolejny kurs</span>' +
        '<span class="podpis">wolne miejsce</span>' +
      '</div>';
    var nowe = [];
    lista.forEach(function (x) {
      x.z.nowe.forEach(function (m) {
        nowe.push('<li><a href="' + esc(x.kurs.sciezka) + '#/misja/' + esc(m.id) + '">' + esc(x.kurs.nazwa) +
          ', misja ' + m.nr + ': ' + esc(m.title) + '</a></li>');
      });
      x.z.odswiezone.forEach(function (m) {
        nowe.push('<li><a href="' + esc(x.kurs.sciezka) + '#/misja/' + esc(m.id) + '">' + esc(x.kurs.nazwa) +
          ', misja ' + m.nr + ': ' + esc(m.title) + '</a> (nowe triki w misji, którą już znasz)</li>');
      });
    });
    var kopia = P.czasNaKopie()
      ? '<div class="baner"><p><b>Czas na kopię.</b> Od ostatniej kopii przybyło kilka misji. Kod zapisu ratuje postęp, gdyby przeglądarka go zgubiła.</p>' +
        '<a class="btn" href="#rodzina">Zrób kopię</a></div>'
      : '';

    return '<section class="powitanie">' +
        '<h1>' + (p.imie ? 'Cześć, ' + esc(p.imie) + '.' : 'Cześć.') + '</h1>' +
        '<p class="wstep">' + ile + ' ' + odmiana(ile, ['kurs', 'kursy', 'kursów']) +
          '. Wybierz, w co dziś wchodzisz.</p>' +
      '</section>' +
      '<nav class="siatka" aria-label="Kursy">' + kafelki + '</nav>' +
      zleceniaSkrot() +
      kopia +
      (nowe.length ? '<section class="nowosci" aria-labelledby="tyt-nowe"><h2 id="tyt-nowe" class="nadtytul">Co nowego</h2><ul>' + nowe.join('') + '</ul></section>' : '') +
      '<section class="podsumowanie" aria-labelledby="tyt-komplet">' +
        '<h2 id="tyt-komplet" class="nadtytul">Kompletność</h2>' +
        lista.map(function (x) { return wiersz(x.kurs, x.z); }).join('') +
      '</section>' +
      liczby(lista) +
      '<div class="rzad"><a class="btn" href="#raport">Raport dla taty</a><a class="btn jasny" href="#zlecenia">Zlecenia</a><a class="btn jasny" href="#rodzina">Rodzina i kopia</a></div>';
  }

  /* ---------- Raport dla taty ---------- */
  function tekstRaportu() {
    var p = ja(), linie = [], wpisy = [], tydzien = 0, minuty = 0;
    linie.push('Akademia, raport' + (p.imie ? ': ' + p.imie : '') + ', ' + data(Date.now()));
    linie.push('');
    KURSY.forEach(function (k) {
      var z = dane(k), S = P.spis(k.id);
      tydzien += z.tydzien; minuty += z.minuty;
      if (!z.zrobione) { linie.push(k.nazwa + ': jeszcze nic nie zaliczone.'); }
      else {
        var ost = S.misje.filter(function (m) { return z.s.done[m.id]; })
          .sort(function (a, b) { return z.s.done[b.id] - z.s.done[a.id]; })[0];
        linie.push(k.nazwa + ': ' + z.zrobione + ' z ' + z.wszystkie + ' misji (' + Math.round(z.zrobione / z.wszystkie * 100) + '%).');
        linie.push('  Ostatnio zaliczona: misja ' + ost.nr + ' „' + ost.title + '” (' + data(z.s.done[ost.id]) + ').');
        if (z.nastepna) linie.push('  Następna: misja ' + z.nastepna.nr + ' „' + z.nastepna.title + '”.');
        else linie.push('  Wszystkie misje zaliczone.');
      }
      (z.s.journal || []).forEach(function (e) {
        var m = e.m != null ? S.po[e.m] : null;
        wpisy.push({ d: e.d, t: e.t, gdzie: k.nazwa.replace(/^Akademia /, '') + (m ? ', misja ' + m.nr : '') });
      });
    });
    linie.push('');
    linie.push('W tym tygodniu: ' + tydzien + ' ' + odmiana(tydzien, ['misja', 'misje', 'misji']) +
      '. Czas nauki według planu misji: ' + czas(minuty) + '.');
    if (wpisy.length) {
      wpisy.sort(function (a, b) { return b.d - a.d; });
      linie.push('');
      linie.push('Z Dziennika:');
      wpisy.slice(0, 5).forEach(function (w) { linie.push('- ' + data(w.d) + ' (' + w.gdzie + '): ' + w.t); });
    }
    var zl = P.zleceniaDla(p.id);
    if (zl.length) {
      var zam = zl.filter(function (z) { return z.zamkniete; }).sort(function (a, b) { return b.zamkniete - a.zamkniete; });
      var czeka = zl.filter(function (z) { return z.oddane && !z.zamkniete; });
      var otw = zl.filter(function (z) { return !z.oddane; });
      linie.push('');
      linie.push('Zlecenia: ' + zam.length + ' ' + odmiana(zam.length, ['zrobione', 'zrobione', 'zrobionych']) +
        (czeka.length ? ', ' + czeka.length + ' czeka na „co z tego wyszło”' : '') +
        (otw.length ? ', ' + otw.length + ' do zrobienia' : '') + '.');
      zam.slice(0, 3).forEach(function (z) {
        linie.push('- ' + data(z.zamkniete) + ': ' + z.tytul + '.' + (z.wynik ? ' Wynik: ' + z.wynik : '') +
          (z.coWyszlo ? ' Co z tego wyszło: ' + z.coWyszlo : ''));
      });
      czeka.forEach(function (z) { linie.push('- ' + z.tytul + ': oddane' + (z.wynik ? ', wynik: ' + z.wynik : '') + '.'); });
      otw.forEach(function (z) { linie.push('- ' + z.tytul + ': do zrobienia' + (z.termin ? ' do ' + dzien(z.termin) : '') + '.'); });
    }
    return linie.join('\n');
  }
  function raport() {
    return '<p class="wroc"><a href="#">← Kursy</a></p>' +
      '<h1>Raport dla taty</h1>' +
      '<p class="wstep">Co zaliczone, co w Dzienniku i jak idą zlecenia, w kilku linijkach. Skopiuj i wklej w wiadomość.</p>' +
      '<div class="karta"><pre class="raport">' + esc(tekstRaportu()) + '</pre>' +
        '<div class="rzad"><button class="btn" type="button" data-kopiuj="raport">Kopiuj raport</button></div></div>';
  }

  /* ---------- Zlecenia ---------- */
  // Podpowiedzi dla rodzica. Nawiasy kwadratowe to miejsca do podmiany. `misja` to <kurs>.<id misji>.
  var POMYSLY = [
    { kurs: 'ai', krotko: 'Porównanie przed zakupem', tytul: 'Porównaj trzy [filamenty / plecaki / słuchawki] przed zakupem', poCo: 'Kupimy ten, który wygra w Twojej tabeli.', misja: 'ai.porownaj' },
    { kurs: 'ai', krotko: 'Plan wyprawy', tytul: 'Zaplanuj sobotnią wyprawę: trasa, co zabrać, co może pójść nie tak', poCo: 'Pojedziemy według Twojego planu.', misja: 'ai.plan-na-kroki' },
    { kurs: 'ai', krotko: 'Obiad z lodówki', tytul: 'Wymyśl obiad z tego, co jest w lodówce', poCo: 'Ugotujemy go razem w weekend.', misja: 'ai.sprawy-domowe' },
    { kurs: 'ai', krotko: 'Pomysły na prezent', tytul: 'Trzy pomysły na prezent dla [kogo] do [kwota] zł', poCo: 'Kupimy jeden z Twoich pomysłów.', misja: 'ai.kilka-wersji' },
    { kurs: 'ai', krotko: 'Wytłumacz nam', tytul: 'Dowiedz się, jak działa [coś z wiadomości albo z domu], i wytłumacz nam przy kolacji', poCo: 'Przy kolacji to Ty jesteś ekspertem.', misja: 'ai.trudny-temat' },
    { kurs: 'ai', krotko: 'Naprawa', tytul: 'Znajdź sposób, jak naprawić [zepsutą rzecz]', poCo: 'Naprawimy ją razem według Twojej instrukcji.', misja: 'ai.sprawy-domowe' },
    { kurs: 'arkusze', krotko: 'Budżet', tytul: 'Policz w arkuszu budżet na [urodziny / wyjście do kina]', poCo: 'Wydamy tyle, ile wyjdzie w Twoim arkuszu.', misja: 'arkusze.suma' },
    { kurs: 'arkusze', krotko: 'Zakupy z cenami', tytul: 'Lista zakupów na [grilla] z cenami i sumą', poCo: 'Pójdziemy z nią do sklepu.', misja: 'arkusze.karty' },
    { kurs: 'arkusze', krotko: 'Tabela wyników', tytul: 'Prowadź tabelę wyników [meczów / gier rodzinnych]', poCo: 'Powiesimy ją na lodówce, a zwycięzca wybiera deser.', misja: 'arkusze.sortuj' },
    { kurs: 'arkusze', krotko: 'Odliczanie', tytul: 'Arkusz z odliczaniem do [wyjazdu / urodzin] i listą rzeczy do załatwienia', poCo: 'Będziemy z niego korzystać aż do wyjazdu.', misja: 'arkusze.daty' },
    { kurs: 'arkusze', krotko: 'Skarbonka', tytul: 'Ile tygodni zbierania na [cel], jeśli odkładasz [kwota] zł tygodniowo', poCo: 'Wpiszemy ten dzień do kalendarza.', misja: 'arkusze.pierwsza-formula' }
  ];
  function dzien(rrrr) { return data(Date.parse(rrrr + 'T12:00:00')); }
  function ileDni(rrrr) {
    var dzis = new Date().setHours(0, 0, 0, 0);
    return Math.round((new Date(rrrr + 'T00:00:00').getTime() - dzis) / 864e5);
  }
  function termin(z) {
    if (!z.termin) return '';
    var n = ileDni(z.termin);
    var kiedy = n < 0 ? 'po terminie' : n === 0 ? 'dziś' : n === 1 ? 'jutro' : 'za ' + n + ' dni';
    return 'do ' + dzien(z.termin) + (z.oddane ? '' : ' (' + kiedy + ')');
  }
  // Misja, która przyda się w zleceniu: link do niej i podpis „Akademia AI, misja 4: Porównaj i sprawdź”.
  function misjaZlecenia(z) {
    if (!z.misja) return null;
    var kursId = z.misja.split('.')[0], id = z.misja.slice(kursId.length + 1);
    var k = KURSY.filter(function (x) { return x.id === kursId; })[0];
    if (!k || bledy[k.id]) return null;
    var m = P.spis(k.id).po[id];
    return m ? { href: k.sciezka + '#/misja/' + m.id, tekst: k.nazwa + ', misja ' + m.nr + ': ' + m.title } : null;
  }
  function imieZ(id) { var p = id && P.profil(id); return p ? (p.imie || 'bez imienia') : ''; }
  function widoczne() {
    var lista = podglad() ? P.zlecenia() : P.zleceniaDla(ja().id);
    return lista.slice().sort(function (a, b) {
      if (!a.termin !== !b.termin) return a.termin ? -1 : 1;
      return (a.termin || '').localeCompare(b.termin || '') || a.dodane - b.dodane;
    });
  }
  function zleceniaSkrot() {
    var lista = widoczne(), otw = lista.filter(function (z) { return !z.oddane; });
    var czeka = lista.filter(function (z) { return z.oddane && !z.zamkniete; });
    if (!otw.length && !czeka.length) return '';
    return '<section class="zl-skrot" aria-labelledby="tyt-zl"><h2 id="tyt-zl" class="nadtytul">Zlecenia od rodziny</h2>' +
      (otw.length ? '<ul>' + otw.slice(0, 3).map(function (z) {
        var m = misjaZlecenia(z);
        return '<li><a href="#zlecenia"><b>' + esc(z.tytul) + '</b></a>' +
          '<span class="cichy maly">' + [termin(z), m ? 'przyda się: ' + esc(m.tekst.replace(/^Akademia /, '')) : ''].filter(Boolean).join(' · ') + '</span></li>';
      }).join('') + '</ul>' : '') +
      (otw.length > 3 ? '<p class="cichy maly">I jeszcze ' + (otw.length - 3) + ' w <a href="#zlecenia">Zleceniach</a>.</p>' : '') +
      (czeka.length ? '<p class="cichy maly">' + czeka.length + ' ' + odmiana(czeka.length, ['oddane czeka', 'oddane czekają', 'oddanych czeka']) +
        ' na to, co z tego wyszło. <a href="#zlecenia">Zobacz</a></p>' : '') +
      '</section>';
  }
  function kartaZlecenia(z) {
    var m = misjaZlecenia(z), rodzic = podglad(), id = esc(z.id);
    var meta = [rodzic ? 'dla: ' + (z.dla ? esc(imieZ(z.dla)) : 'każdego') : '', esc(termin(z)),
      z.oddane && z.kto && (rodzic || !z.dla) ? 'oddane przez: ' + esc(imieZ(z.kto)) : ''].filter(Boolean).join(' · ');
    var gora = (meta ? '<p class="zl-meta">' + meta + '</p>' : '') + '<h3>' + esc(z.tytul) + '</h3>' +
      (z.poCo ? '<p class="zl-poco">' + esc(z.poCo) + '</p>' : '') +
      (m && !z.zamkniete ? '<p class="cichy maly">Przyda się: <a href="' + esc(m.href) + '">' + esc(m.tekst) + '</a></p>' : '');
    var usun = rodzic ? '<button class="btn jasny maly" type="button" data-zl-usun="' + id + '">Usuń</button>' : '';
    if (!z.oddane) {
      return '<article class="karta zlecenie">' + gora +
        '<label for="zl-w-' + id + '">Twój wynik</label>' +
        '<textarea id="zl-w-' + id + '" maxlength="600" placeholder="Co wyszło? Co wybrałeś i dlaczego? Dwa zdania wystarczą.">' + esc(z.wynik) + '</textarea>' +
        '<div class="rzad"><button class="btn" type="button" data-zl-oddaj="' + id + '">Gotowe, oddaję</button>' + usun + '</div></article>';
    }
    var wynik = z.wynik ? '<p class="zl-wynik"><b>Wynik:</b> ' + esc(z.wynik) + '</p>' : '';
    if (!z.zamkniete) {
      return '<article class="karta zlecenie">' + gora + wynik +
        '<label for="zl-c-' + id + '">Co z tego wyszło? <span class="cichy">Dopisuje rodzic</span></label>' +
        '<textarea id="zl-c-' + id + '" maxlength="600" placeholder="Np. kupiliśmy ten z Twojej tabeli. Pojechaliśmy Twoją trasą."></textarea>' +
        '<div class="rzad"><button class="btn" type="button" data-zl-zamknij="' + id + '">Zapisz i zamknij</button>' +
          '<button class="btn jasny maly" type="button" data-zl-cofnij="' + id + '">Popraw wynik</button>' + usun + '</div></article>';
    }
    return '<article class="karta zlecenie zrobione">' + gora + wynik +
      (z.coWyszlo ? '<p class="zl-wyszlo"><b>Co z tego wyszło:</b> ' + esc(z.coWyszlo) + '</p>' : '') +
      '<p class="cichy maly">Zamknięte ' + data(z.zamkniete) + '.</p>' + (usun ? '<div class="rzad ciasny">' + usun + '</div>' : '') + '</article>';
  }
  function formularz() {
    var nazwani = P.profile().filter(function (p) { return p.imie; });
    var dla = '<option value="">Każdy</option>' + nazwani.map(function (p) {
      return '<option value="' + esc(p.id) + '"' + (nazwani.length === 1 ? ' selected' : '') + '>' + esc(p.imie) + '</option>';
    }).join('');
    var misje = '<option value="">Bez wskazania misji</option>' + KURSY.filter(function (k) { return !bledy[k.id]; }).map(function (k) {
      return '<optgroup label="' + esc(k.nazwa) + '">' + P.spis(k.id).misje.map(function (m) {
        return '<option value="' + esc(k.id + '.' + m.id) + '">' + m.nr + '. ' + esc(m.title) + '</option>';
      }).join('') + '</optgroup>';
    }).join('');
    var pomysly = KURSY.map(function (k) {
      var l = POMYSLY.filter(function (x) { return x.kurs === k.id; });
      if (!l.length) return '';
      return '<p class="cichy maly zl-pomysly-tyt">' + esc(k.nazwa) + '</p><div class="zl-pomysly">' + l.map(function (x) {
        return '<button type="button" class="zl-pomysl" data-zl-pomysl="' + POMYSLY.indexOf(x) + '">' + esc(x.krotko) + '</button>';
      }).join('') + '</div>';
    }).join('');
    return '<form class="zl-form" data-zl-nowe autocomplete="off">' +
      '<p>Najlepsze zlecenie to coś, co rodzina i tak musi zrobić, a wynik naprawdę wykorzystacie. Pomysły na start (kliknij, potem podmień to, co w nawiasach):</p>' +
      pomysly +
      '<div class="zl-pola">' +
        '<div class="field"><label for="zl-tytul">Co do zrobienia</label><input id="zl-tytul" type="text" maxlength="140" placeholder="Np. Porównaj trzy plecaki przed zakupem"></div>' +
        '<div class="field"><label for="zl-poco">Co z tym zrobicie</label><input id="zl-poco" type="text" maxlength="240" placeholder="Np. Kupimy ten, który wygra w Twojej tabeli."></div>' +
        '<div class="zl-dwa">' +
          '<div class="field"><label for="zl-dla">Dla kogo</label><select id="zl-dla">' + dla + '</select></div>' +
          '<div class="field"><label for="zl-termin">Do kiedy <span class="cichy">(nieobowiązkowe)</span></label><input id="zl-termin" type="date"></div>' +
        '</div>' +
        '<div class="field"><label for="zl-misja">Która misja się przyda <span class="cichy">(nieobowiązkowe)</span></label><select id="zl-misja">' + misje + '</select></div>' +
      '</div>' +
      '<div class="rzad ciasny"><button class="btn" type="submit">Dodaj zlecenie</button></div>' +
      (zlKomunikat ? '<p class="wynik-tekst" role="status">' + esc(zlKomunikat) + '</p>' : '') +
      '</form>';
  }
  function zleceniaWidok() {
    var lista = widoczne(), rodzic = podglad();
    var otw = lista.filter(function (z) { return !z.oddane; });
    var czeka = lista.filter(function (z) { return z.oddane && !z.zamkniete; });
    var zam = lista.filter(function (z) { return z.zamkniete; }).sort(function (a, b) { return b.zamkniete - a.zamkniete; });
    function sekcja(tyt, l, pusto) {
      if (!l.length && !pusto) return '';
      return '<section class="odstep" aria-label="' + esc(tyt) + '"><h2 class="nadtytul">' + esc(tyt) + (l.length ? ' · ' + l.length : '') + '</h2>' +
        (l.length ? '<div class="zl-lista">' + l.map(kartaZlecenia).join('') + '</div>' : '<p class="cichy">' + pusto + '</p>') + '</section>';
    }
    var nowe = rodzic
      ? '<section class="karta odstep" aria-labelledby="tyt-zl-nowe"><h2 id="tyt-zl-nowe" class="nadtytul">Nowe zlecenie</h2>' +
        '<p class="cichy maly">Tryb podglądu: postęp misji się nie zapisuje, ale zlecenia tak, tak jak domownicy. Tylko tutaj możesz je usuwać.</p>' +
        formularz() + '</section>'
      : '<details class="karta odstep zl-dla-rodzica"' + (zlKomunikat ? ' open' : '') + '><summary>Dla rodzica: nowe zlecenie</summary>' + formularz() + '</details>';
    return '<p class="wroc"><a href="#">← Kursy</a></p>' +
      '<h1>Zlecenia</h1>' +
      '<p class="wstep">Prawdziwe zadania od rodziny. Robisz je tym, czego nauczyłeś się w Akademii, a wynik naprawdę się do czegoś przydaje.</p>' +
      sekcja('Do zrobienia', otw, rodzic ? 'Nic nie czeka. Dodaj zlecenie poniżej.' : 'Na razie nic. Poproś rodzica o zlecenie: coś, co rodzina i tak musi zrobić w tym tygodniu.') +
      sekcja('Oddane, czekają na rodzica', czeka) +
      sekcja('Co już zmieniły Twoje zlecenia', zam) +
      nowe;
  }

  /* ---------- Rodzina i kopia ---------- */
  function rodzina() {
    var teraz = ja(), wszyscy = P.profile(), rodzic = podglad();
    var osoby = wszyscy.map(function (p) {
      var postep = KURSY.map(function (k) { var z = dane(k, p.id); return esc(k.nazwa.replace(/^Akademia /, '')) + ' ' + z.zrobione + '/' + z.wszystkie; }).join(' · ');
      return '<li class="domownik">' + awatar(p) +
        '<div class="domownik-srodek"><div class="rzad ciasny"><label class="ukryte" for="im-' + esc(p.id) + '">Imię</label>' +
          '<input id="im-' + esc(p.id) + '" type="text" maxlength="30" value="' + esc(p.imie) + '" placeholder="Bez imienia">' +
          '<button class="btn jasny maly" type="button" data-zmien-imie="' + esc(p.id) + '">Zapisz</button>' +
          (rodzic ? '<button class="btn jasny maly" type="button" data-usun="' + esc(p.id) + '">Usuń</button>' : '') + '</div>' +
          '<p class="cichy maly">' + postep + (p === teraz ? ' · <b>teraz przy komputerze</b>' : '') + '</p></div>' +
      '</li>';
    }).join('');
    var nazwani = wszyscy.filter(function (p) { return p.imie; });
    var kursyOpcje = '<option value="">Strona startowa</option>' + KURSY.map(function (k) {
      return '<option value="' + esc(k.sciezka) + '"' + (k.sciezka === link.gdzie ? ' selected' : '') + '>' + esc(k.nazwa) + '</option>';
    }).join('');
    var kod = P.eksport(), ostatnia = P.ostatniaKopia();

    return '<p class="wroc"><a href="#">← Kursy</a></p>' +
      '<h1>Rodzina i kopia</h1>' +
      '<p class="wstep">Kto uczy się na tym komputerze, linki-zakładki i kod zapisu całej Akademii.</p>' +

      '<section class="karta odstep" aria-labelledby="tyt-dom"><h2 id="tyt-dom" class="nadtytul">Domownicy</h2>' +
        '<p>Każdy domownik ma własny postęp we wszystkich kursach. Gdy jest ich kilku, strona po otwarciu pyta, kto się uczy.</p>' +
        '<ul class="domownicy">' + osoby + '</ul>' +
        '<form class="rzad ciasny" data-nowy autocomplete="off"><label class="ukryte" for="nowy-im">Imię nowego domownika</label>' +
          '<input id="nowy-im" type="text" maxlength="30" placeholder="Imię nowego domownika">' +
          '<button class="btn maly" type="submit">Dodaj</button></form>' +
        (rodzic ? '<p class="cichy maly">Tryb podglądu: postęp się nie zapisuje, ale domowników możesz dodawać, zmieniać i usuwać. Usunięcie kasuje postęp tej osoby na tym komputerze.</p>'
                : '<p class="cichy maly">Usuwać domowników może tylko rodzic, w trybie podglądu.</p>') +
      '</section>' +

      '<section class="karta odstep" aria-labelledby="tyt-link"><h2 id="tyt-link" class="nadtytul">Link-zakładka</h2>' +
        '<p>Link otwiera Akademię bez hasła, od razu jako wybrany domownik. Otwórz go na komputerze dziecka i dodaj do zakładek (<kbd>Ctrl</kbd> + <kbd>D</kbd>) albo przeciągnij ikonkę z lewej strony paska adresu na pulpit.</p>' +
        (nazwani.length
          ? '<div class="rzad ciasny"><label class="ukryte" for="link-kto">Kto</label><select id="link-kto">' +
              nazwani.map(function (p) { return '<option value="' + esc(p.id) + '"' + (p.id === (link.kto || teraz.id) ? ' selected' : '') + '>' + esc(p.imie) + '</option>'; }).join('') +
            '</select><label class="ukryte" for="link-gdzie">Dokąd</label><select id="link-gdzie">' + kursyOpcje + '</select>' +
            '<button class="btn maly" type="button" data-link>Pokaż link</button></div>' +
            (link.url ? '<div class="wynik"><code class="link">' + esc(link.url) + '</code><button class="btn jasny maly" type="button" data-kopiuj="link">Kopiuj link</button></div>' : '')
          : '<p class="cichy">Najpierw nadaj domownikowi imię. Link wybiera domownika po imieniu.</p>') +
        '<p class="cichy maly">Link działa jak hasło ucznia: kto go ma, ten wchodzi. Po zmianie hasła stare linki przestają działać.</p>' +
      '</section>' +

      '<section class="karta odstep" aria-labelledby="tyt-kod"><h2 id="tyt-kod" class="nadtytul">Kod zapisu</h2>' +
        '<p>Postęp żyje w tej przeglądarce. Kod zapisu to jego kopia: wszystkie kursy, wszyscy domownicy. Zachowaj go, na przykład wyślij sobie w wiadomości, a na innym komputerze wklej poniżej.</p>' +
        '<p class="cichy maly">Ostatnia kopia: ' + (ostatnia ? data(ostatnia) : 'jeszcze nigdy') + '.</p>' +
        '<label for="kod-out">Kod zapisu</label><textarea id="kod-out" readonly>' + esc(kod) + '</textarea>' +
        '<div class="rzad"><button class="btn" type="button" data-kopiuj="kod">Kopiuj kod</button></div>' +
        '<hr>' +
        '<label for="kod-in">Wczytaj kod zapisu</label><textarea id="kod-in" placeholder="Wklej tu kod z innego komputera"></textarea>' +
        '<div class="rzad"><button class="btn jasny" type="button" data-wczytaj>Wczytaj</button></div>' +
        (wynik ? '<p class="wynik-tekst" role="status">' + esc(wynik) + '</p>' : '') +
        '<p class="cichy maly">Wczytanie niczego nie kasuje: dokłada misje z kodu do tych, które już są. Pasują też stare kody z jednego kursu (AKA1., ARK1.).</p>' +
      '</section>';
  }

  /* ---------- Rysowanie i zdarzenia ---------- */
  function naglowek() {
    var stary = document.querySelector('.top .kto-chip');
    if (stary) stary.remove();
    var nav = document.querySelector('.top .nav');
    if (nav) nav.insertAdjacentHTML('afterbegin', P.przycisk());
  }
  function rysuj() {
    var widok = location.hash.replace(/^#/, '');
    if (!KURSY.length) {
      main.innerHTML = '<div class="karta"><h1>Pusto</h1><p class="cichy">Żaden kurs nie jest wpisany w ' +
        '<code>js/kursy.js</code>.</p></div>';
      return;
    }
    main.innerHTML = widok === 'rodzina' ? rodzina() : widok === 'raport' ? raport() : widok === 'zlecenia' ? zleceniaWidok() : glowna();
  }
  window.addEventListener('hashchange', function () { wynik = ''; zlKomunikat = ''; rysuj(); window.scrollTo(0, 0); });

  function kopiuj(tekst, btn) {
    function ok() {
      var stary = btn.textContent;
      btn.textContent = 'Skopiowano';
      setTimeout(function () { btn.textContent = stary; }, 1600);
    }
    function zapas() {
      var ta = document.createElement('textarea');
      ta.value = tekst; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); ok(); } catch (e) { btn.textContent = 'Zaznacz i użyj Ctrl + C'; }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(tekst).then(ok, zapas);
    else zapas();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act="lock"]');
    if (b) {
      e.preventDefault();
      if (window.BRAMKA) window.BRAMKA.zamknij();
      location.reload();
      return;
    }
    b = e.target.closest('[data-kopiuj]');
    if (b) {
      var co = b.getAttribute('data-kopiuj');
      if (co === 'kod') { kopiuj(P.eksport(), b); P.oznaczKopie(); }
      else if (co === 'raport') kopiuj(tekstRaportu(), b);
      else if (co === 'link') kopiuj(link.url, b);
      return;
    }
    b = e.target.closest('[data-zmien-imie]');
    if (b) {
      var id = b.getAttribute('data-zmien-imie');
      P.zmienImie(id, document.getElementById('im-' + id).value);
      naglowek(); rysuj();
      return;
    }
    b = e.target.closest('[data-usun]');
    if (b) {
      var p = P.profil(b.getAttribute('data-usun'));
      if (p && confirm('Usunąć ' + (p.imie || 'domownika bez imienia') + ' razem z całym postępem na tym komputerze? Tego nie da się cofnąć, chyba że masz kod zapisu.')) {
        P.usunProfil(p.id);
        location.reload();
      }
      return;
    }
    if (e.target.closest('[data-link]')) {
      link.kto = document.getElementById('link-kto').value;
      link.gdzie = document.getElementById('link-gdzie').value;
      var url = new URL(link.gdzie, P.root);
      url.searchParams.set('imie', P.profil(link.kto).imie);
      url.searchParams.set('wejscie', window.BRAMKA.przepustka());
      link.url = url.href;
      rysuj();
      return;
    }
    b = e.target.closest('[data-zl-pomysl]');
    if (b) {
      var x = POMYSLY[Number(b.getAttribute('data-zl-pomysl'))];
      document.getElementById('zl-tytul').value = x.tytul;
      document.getElementById('zl-poco').value = x.poCo;
      var sel = document.getElementById('zl-misja');
      if (sel.querySelector('option[value="' + x.misja + '"]')) sel.value = x.misja;
      var t = document.getElementById('zl-tytul'), nawias = x.tytul.indexOf('[');
      t.focus();
      if (nawias >= 0) t.setSelectionRange(nawias, x.tytul.indexOf(']', nawias) + 1); // od razu do podmiany
      return;
    }
    b = e.target.closest('[data-zl-oddaj]');
    if (b) {
      var zid = b.getAttribute('data-zl-oddaj'), pole = document.getElementById('zl-w-' + zid);
      if (!pole.value.trim()) { pole.placeholder = 'Najpierw wpisz, co wyszło. Jedno zdanie wystarczy.'; pole.focus(); return; }
      P.zmienZlecenie(zid, { wynik: pole.value, oddane: Date.now(), kto: ja().id });
      rysuj();
      return;
    }
    b = e.target.closest('[data-zl-zamknij]');
    if (b) {
      var zid2 = b.getAttribute('data-zl-zamknij'), pole2 = document.getElementById('zl-c-' + zid2);
      if (!pole2.value.trim()) { pole2.placeholder = 'Jedno zdanie: co rodzina z tym zrobiła?'; pole2.focus(); return; }
      P.zmienZlecenie(zid2, { coWyszlo: pole2.value, zamkniete: Date.now() });
      rysuj();
      return;
    }
    b = e.target.closest('[data-zl-cofnij]');
    if (b) { P.zmienZlecenie(b.getAttribute('data-zl-cofnij'), { oddane: 0, kto: '' }); rysuj(); return; }
    b = e.target.closest('[data-zl-usun]');
    if (b) {
      if (confirm('Usunąć to zlecenie? Tego nie da się cofnąć, chyba że jest w kodzie zapisu.')) { P.usunZlecenie(b.getAttribute('data-zl-usun')); rysuj(); }
      return;
    }
    if (e.target.closest('[data-wczytaj]')) {
      try {
        var ile = P.wczytaj(document.getElementById('kod-in').value);
        wynik = 'Wczytane. Postęp ' + (ile === 1 ? 'jednego domownika' : ile + ' domowników') + ' dołożony do tego, co już było.';
      } catch (err) { wynik = err.message; }
      // Kod przyniósł kilku domowników, a pusty z pierwszego wejścia zniknął: niech strona zapyta, kto się uczy.
      if (!P.aktywny()) { location.reload(); return; }
      naglowek(); rysuj();
    }
  });
  document.addEventListener('submit', function (e) {
    if (e.target.matches('[data-zl-nowe]')) {
      e.preventDefault();
      var tyt = document.getElementById('zl-tytul');
      if (!tyt.value.trim()) { tyt.focus(); return; }
      var z = P.dodajZlecenie({
        tytul: tyt.value, poCo: document.getElementById('zl-poco').value, dla: document.getElementById('zl-dla').value,
        termin: document.getElementById('zl-termin').value, misja: document.getElementById('zl-misja').value
      });
      zlKomunikat = 'Dodane: „' + z.tytul + '”' + (z.dla ? ' dla: ' + imieZ(z.dla) : ' dla każdego') + '.';
      rysuj();
      return;
    }
    if (!e.target.matches('[data-nowy]')) return;
    e.preventDefault();
    var pole = document.getElementById('nowy-im'), imie = pole.value.trim();
    if (!imie) { pole.focus(); return; }
    if (!P.poImieniu(imie)) P.dodaj(imie);
    naglowek(); rysuj();
  });

  // Najpierw bramka i pytanie, kto się uczy, potem treść kursów do liczenia, kurs po kursie.
  P.gotowe(function () {
    naglowek();
    KURSY.reduce(function (dalej, k) {
      return dalej.then(function () { return P.tresc(k.id).catch(function () { bledy[k.id] = true; }); });
    }, Promise.resolve()).then(rysuj);
  });
})();
