/* Strona startowa Akademii: kursy jako ikony, kompletność, liczby i nowości domownika, który siedzi
   przy komputerze. Pod #rodzina są domownicy, linki-zakładki i kod zapisu, pod #raport raport dla taty.
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
      kopia +
      (nowe.length ? '<section class="nowosci" aria-labelledby="tyt-nowe"><h2 id="tyt-nowe" class="nadtytul">Co nowego</h2><ul>' + nowe.join('') + '</ul></section>' : '') +
      '<section class="podsumowanie" aria-labelledby="tyt-komplet">' +
        '<h2 id="tyt-komplet" class="nadtytul">Kompletność</h2>' +
        lista.map(function (x) { return wiersz(x.kurs, x.z); }).join('') +
      '</section>' +
      liczby(lista) +
      '<div class="rzad"><a class="btn" href="#raport">Raport dla taty</a><a class="btn jasny" href="#rodzina">Rodzina i kopia</a></div>';
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
    return linie.join('\n');
  }
  function raport() {
    return '<p class="wroc"><a href="#">← Kursy</a></p>' +
      '<h1>Raport dla taty</h1>' +
      '<p class="wstep">Co zaliczone i co w Dzienniku, w kilku linijkach. Skopiuj i wklej w wiadomość.</p>' +
      '<div class="karta"><pre class="raport">' + esc(tekstRaportu()) + '</pre>' +
        '<div class="rzad"><button class="btn" type="button" data-kopiuj="raport">Kopiuj raport</button></div></div>';
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
    main.innerHTML = widok === 'rodzina' ? rodzina() : widok === 'raport' ? raport() : glowna();
  }
  window.addEventListener('hashchange', function () { wynik = ''; rysuj(); window.scrollTo(0, 0); });

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
