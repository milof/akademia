/* Misje Akademii Arkuszy. Przez cały kurs dziecko buduje arkusz sklepu z rzeczami z domu (Vinted, OLX):
   plik „Sklep treningowy” na danych przykładowych, a w trzech ostatnich misjach własny plik „Mój sklep”.

   Na górze są dane sklepu i mały pomocnik. Z tych samych danych powstają tabelki do wklejenia (pole `copy`)
   i podglądy arkusza (pole `example.sheets`), więc liczby w podglądach zawsze zgadzają się z tym,
   co dziecko zobaczy u siebie. Zmieniasz rzecz albo cenę w RZECZY: zmienia się wszędzie.

   Kolejność misji ustala spis.js. Formatowanie w treści: **gruby**, `kod`, [[klawisz]], {{pozycja menu}}.
   `copy` w kroku: formuła albo tabelka (kolumny rozdzielone tabulatorem, wiersze nową linią).
   `realWorld`: ramka „Kto tego używa naprawdę” pod „Po co to”. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.missions = window.ARKUSZE.missions || [];
(function () {
  var M = window.ARKUSZE.missions;

  /* ---------- Dane sklepu ---------- */
  // Karta Magazyn. Kolumny A–K wkleja dziecko, kolumny L–R liczą formuły z kolejnych misji.
  var NAGLOWKI = { A: 'Nr', B: 'Rzecz', C: 'Kategoria', D: 'Stan', E: 'Cena nowej', F: 'Moja cena', G: 'Platforma',
    H: 'Status', I: 'Zdjęcia', J: 'Wystawione', K: 'Sprzedane', L: 'Taniej o', M: 'Propozycja', N: 'Ocena ceny',
    O: 'Dni do sprzedaży', P: 'Tytuł', Q: 'Opis', R: 'Na rynku' };
  var KOLUMNY = 'ABCDEFGHIJKLMNOPQR'.split('');
  // Nr, Rzecz, Kategoria, Stan, Cena nowej, Moja cena, Platforma, Status, Zdjęcia, Wystawione, Sprzedane
  var RZECZY = [
    [1, 'Harry Potter i Kamień Filozoficzny', 'książki', 'dobry', 49.9, 15, 'Vinted', 'sprzedane', true, '19.10.2026', '23.10.2026'],
    [2, 'Dziennik cwaniaczka 1', 'książki', 'bardzo dobry', 39.9, 12, 'Vinted', 'sprzedane', true, '19.10.2026', '21.10.2026'],
    [3, 'LEGO City Posterunek policji', 'zabawki', 'jak nowy', 299, 150, 'OLX', 'wystawione', true, '20.10.2026', ''],
    [4, 'Auto zdalnie sterowane', 'zabawki', 'dobry', 149, 50, 'OLX', 'wystawione', true, '22.10.2026', ''],
    [5, 'Gra planszowa Dobble', 'gry', 'bardzo dobry', 69.9, 30, 'Vinted', 'sprzedane', true, '22.10.2026', '29.10.2026'],
    [6, 'Mario Kart 8 na Switcha', 'gry', 'bardzo dobry', 249, 140, 'Vinted', 'zarezerwowane', true, '26.10.2026', ''],
    [7, 'Słuchawki bezprzewodowe', 'elektronika', 'dobry', 199, 70, 'OLX', 'wystawione', true, '26.10.2026', ''],
    [8, 'Smartwatch dla dzieci', 'elektronika', 'ślady użycia', 249, 60, 'OLX', 'w domu', false, '', ''],
    [9, 'Puzzle 1000 elementów', 'zabawki', 'jak nowy', 59.99, 25, 'Vinted', 'sprzedane', true, '27.10.2026', '09.11.2026'],
    [10, 'Atlas zwierząt', 'książki', 'dobry', 79, 20, 'Vinted', 'wystawione', true, '28.10.2026', ''],
    [11, 'Hulajnoga', 'zabawki', 'ślady użycia', 199, 60, 'OLX', 'sprzedane', true, '29.10.2026', '31.10.2026'],
    [12, 'Pad do konsoli', 'elektronika', 'bardzo dobry', 279, 120, 'OLX', 'wystawione', true, '02.11.2026', ''],
    [13, 'Magiczne drzewo, 3 tomy', 'książki', 'dobry', 89.7, 30, 'Vinted', 'wystawione', true, '03.11.2026', ''],
    [14, 'Gra planszowa Monopoly', 'gry', 'dobry', 129, 45, 'Vinted', 'w domu', true, '', ''],
    [15, 'Figurki dinozaurów', 'zabawki', 'ślady użycia', 89, 25, 'Vinted', 'wystawione', true, '04.11.2026', ''],
    [16, 'Głośnik Bluetooth', 'elektronika', 'bardzo dobry', 159, 70, 'OLX', 'sprzedane', true, '04.11.2026', '06.11.2026'],
    [17, 'Minecraft na Switcha', 'gry', 'bardzo dobry', 99, 50, 'Vinted', 'sprzedane', true, '05.11.2026', '10.11.2026'],
    [18, 'LEGO Technic', 'zabawki', 'dobry', 199, 90, 'OLX', 'w domu', false, '', ''],
    [19, 'Kalkulator naukowy', 'elektronika', 'jak nowy', 69, 30, 'Vinted', 'wystawione', true, '06.11.2026', ''],
    [20, 'Kajko i Kokosz, komiks', 'książki', 'bardzo dobry', 39.99, 15, 'Vinted', 'sprzedane', true, '09.11.2026', '10.11.2026']
  ];
  // Karta Ceny: po pięć cen podobnych ogłoszeń (misja „ceny”). Rzecz nr 6 dochodzi w misji „karty”.
  var CENY = { 3: [120, 140, 160, 135, 199], 4: [35, 40, 55, 45, 60], 7: [60, 75, 80, 65, 90],
    12: [110, 130, 150, 125, 140], 14: [40, 50, 45, 60, 35], 18: [80, 95, 110, 85, 100] };
  var CENY_NR_6 = [120, 130, 135, 150, 125];
  var KATEGORIE = ['książki', 'zabawki', 'gry', 'elektronika'];
  var CEL = 300; // przykładowy cel oszczędzania na Pulpicie (misja „pulpit”)

  /* ---------- Pomocnik ---------- */
  function od(a, b) { var t = []; for (var i = a; i <= b; i++) t.push(i); return t; }
  function liczba(x) { return String(Math.round(x * 100) / 100).replace('.', ','); }
  function zl(x) {
    var s = (Math.round(x * 100) / 100).toFixed(2).split('.');
    return s[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ',' + s[1] + ' zł';
  }
  function procent(x) { return (Math.round(x * 10000) / 100).toFixed(2).replace('.', ',') + '%'; }
  function dzien(s) { var p = s.split('.'); return Date.UTC(+p[2], +p[1] - 1, +p[0]); }
  function mediana(a) {
    var b = a.slice().sort(function (x, y) { return x - y; }), n = b.length;
    return n % 2 ? b[(n - 1) / 2] : (b[n / 2 - 1] + b[n / 2]) / 2;
  }
  function suma(a) { return a.reduce(function (s, x) { return s + x; }, 0); }
  // Jeden wiersz Magazynu ze wszystkimi kolumnami, także tymi z formuł.
  function wiersz(r, o) {
    o = o || {};
    var pct = o.pct == null ? 0.5 : o.pct, ceny = o.ceny || CENY;
    var w = { A: r[0], B: r[1], C: r[2], D: r[3], E: r[4], F: r[5], G: r[6], H: r[7], I: r[8], J: r[9], K: r[10] };
    w.L = w.E - w.F;
    w.M = w.E * pct;
    w.N = w.F > w.M ? 'za drogo?' : 'ok';
    w.O = w.K ? (dzien(w.K) - dzien(w.J)) / 864e5 : '';
    w.P = w.B + ' - stan ' + w.D;
    w.Q = 'Sprzedam: ' + w.B + '. Stan: ' + w.D + '. Cena: ' + liczba(w.F) + ' zł.';
    w.R = ceny[w.A] ? mediana(ceny[w.A]) : (o.bledy ? '#N/A' : '');
    return w;
  }
  function pokaz(k, v) {
    if (v === '' || v == null) return '';
    if (k === 'I') return v ? '☑' : '☐';
    if ('EFLMR'.indexOf(k) >= 0 && typeof v === 'number') return zl(v);
    return typeof v === 'number' ? liczba(v) : String(v);
  }
  /* Podgląd karty Magazyn: kolumny od A do `o.do`, wiersze z numerami `o.nry` (domyślnie 1–5).
     `o.puste`: kolumny jeszcze niewypełnione na tym etapie kursu. `o.zmiany`: { nr: { F: 140 } }. */
  function magazyn(o) {
    o = o || {};
    var kol = KOLUMNY.slice(0, KOLUMNY.indexOf(o.do || 'F') + 1), puste = o.puste || [];
    var rows = [kol.map(function (k) { return NAGLOWKI[k]; })];
    (o.nry || od(1, 5)).forEach(function (nr) {
      var r = RZECZY[nr - 1].slice(), z = (o.zmiany || {})[nr];
      if (z) 'ABCDEFGHIJK'.split('').forEach(function (k, i) { if (z[k] !== undefined) r[i] = z[k]; });
      var w = wiersz(r, o);
      rows.push(kol.map(function (k) { return puste.indexOf(k) >= 0 ? '' : pokaz(k, w[k]); }));
    });
    return rows;
  }
  // Kolory wierszy z reguł misji „kolory”: sprzedane szare, zarezerwowane żółte.
  function koloryStatusu(nry, doKol) {
    var marks = {}, kol = KOLUMNY.slice(0, KOLUMNY.indexOf(doKol) + 1);
    nry.forEach(function (nr, i) {
      var st = RZECZY[nr - 1][7], cls = st === 'sprzedane' ? 'mute' : st === 'zarezerwowane' ? 'note' : '';
      if (cls) kol.forEach(function (k) { marks[k + (i + 2)] = cls; });
    });
    return marks;
  }
  // Tekst do wklejenia: wybrane kolumny wybranych rzeczy, liczby z przecinkiem.
  function wklej(kol, nry, naglowek) {
    var linie = naglowek ? [kol.map(function (k) { return NAGLOWKI[k]; }).join('\t')] : [];
    nry.forEach(function (nr) {
      var w = wiersz(RZECZY[nr - 1]);
      linie.push(kol.map(function (k) { return typeof w[k] === 'number' ? liczba(w[k]) : w[k]; }).join('\t'));
    });
    return linie.join('\n');
  }
  // Liczby z Pulpitu, policzone z danych.
  var W = RZECZY.map(function (r) { return wiersz(r); }), CENA = W.map(function (w) { return w.F; });
  function gdzie(k, v) { return W.filter(function (w) { return w[k] === v; }); }
  function ileGdzie(k, v) { return gdzie(k, v).length; }
  function sumaGdzie(k, v) { return suma(gdzie(k, v).map(function (w) { return w.F; })); }
  var DNI = W.filter(function (w) { return w.O !== ''; }).map(function (w) { return w.O; });
  var ST = {
    ile: W.length, suma: suma(CENA), srednia: suma(CENA) / CENA.length,
    max: Math.max.apply(null, CENA), min: Math.min.apply(null, CENA),
    sprzedane: ileGdzie('H', 'sprzedane'), zarobione: sumaGdzie('H', 'sprzedane'), wystawione: ileGdzie('H', 'wystawione'),
    sredniDni: suma(DNI) / DNI.length, zaDrogo: ileGdzie('N', 'za drogo?')
  };
  var ZEBRANE = ST.zarobione / CEL, KRATKI = Math.round(Math.min(ZEBRANE, 1) * 10);
  /* Podgląd karty Pulpit: wiersze 1–`doWiersza`. Kolumny D–F to tabelka kategorii, H–I tabelka platform. */
  function pulpit(doWiersza, o) {
    o = o || {};
    var A = [
      ['Magazyn', ''], ['Ile rzeczy', String(ST.ile)], ['Wartość wszystkiego', zl(ST.suma)], ['Średnia cena', zl(ST.srednia)],
      ['Najdroższa', zl(ST.max)], ['Najtańsza', zl(ST.min)], ['', ''], ['Ustawienia', ''], ['Procent ceny nowej', '50%'],
      ['', ''], ['Sprzedaż', ''], ['Średnio dni do sprzedaży', liczba(ST.sredniDni)], ['Sprzedane rzeczy', String(ST.sprzedane)],
      ['Zarobione', zl(ST.zarobione)], ['Wystawione', String(ST.wystawione)], ['', ''], ['Cel', zl(CEL)],
      ['Zebrane', procent(ZEBRANE)], ['Pasek', new Array(KRATKI + 1).join('█') + new Array(11 - KRATKI).join('░')],
      ['Za drogo?', String(ST.zaDrogo)]
    ];
    var kat = [['Kategoria', 'Wartość', 'Ile']].concat(KATEGORIE.map(function (k) { return [k, zl(sumaGdzie('C', k)), String(ileGdzie('C', k))]; }));
    var plat = [['Platforma', 'Wartość'], ['Vinted', zl(sumaGdzie('G', 'Vinted'))], ['OLX', zl(sumaGdzie('G', 'OLX'))]];
    var rows = [];
    for (var i = 0; i < doWiersza; i++) {
      var r = A[i].slice();
      if (o.kategorie || o.platformy) r.push('');
      if (o.kategorie || o.platformy) r = r.concat(kat[i] || ['', '', '']);
      if (o.platformy) r = r.concat([''], plat[i] || ['', '']);
      rows.push(r);
    }
    return rows;
  }
  function ceny(nry) {
    var rows = [['Nr', 'Rzecz', 'Cena 1', 'Cena 2', 'Cena 3', 'Cena 4', 'Cena 5', 'Najniżej', 'Najwyżej', 'Mediana']];
    nry.forEach(function (nr) {
      var c = nr === 6 ? CENY_NR_6 : CENY[nr];
      rows.push([String(nr), RZECZY[nr - 1][1]].concat(c.map(zl), [zl(Math.min.apply(null, c)), zl(Math.max.apply(null, c)), zl(mediana(c))]));
    });
    return rows;
  }
  var KARTY = ['Pomysły', 'Magazyn', 'Plan', 'Pulpit'];
  // Dla porządku: pomocnik widać z konsoli przeglądarki jako ARKUSZE.sklep.
  window.ARKUSZE.sklep = { RZECZY: RZECZY, CENY: CENY, magazyn: magazyn, pulpit: pulpit, ceny: ceny, wklej: wklej, ST: ST };

  /* =========================================================================================
     Rozdział 1. Magazyn
     ========================================================================================= */
  M.push({
    id: 'rozruch',
    title: 'Rozruch',
    subtitle: 'Siatka, adresy jak w statkach i lista rzeczy do sprzedania',
    technique: 'Zasady gry',
    minutes: 20,
    why: [
      'Arkusz kalkulacyjny to wielka kartka w kratkę. Każda kratka to **komórka** i ma adres jak w grze w statki: kolumna literą, wiersz cyfrą. **B3** to trzecia kratka w kolumnie B.',
      'Przez cały kurs budujesz arkusz sklepu: co masz do sprzedania, za ile, co już poszło i ile zarobiłeś. Najpierw na rzeczach przykładowych, w trzech ostatnich misjach na swoich. Dziś zakładasz plik i spisujesz pięć rzeczy z domu, które mogłyby trafić na Vinted albo OLX.'
    ],
    realWorld: 'Ludzie, którzy sprzedają w internecie dużo rzeczy, prawie zawsze mają arkusz z listą towaru. Adres komórki to ich wspólny język: „zerknij na F14” wystarczy, żeby wszyscy patrzyli w to samo miejsce.',
    example: {
      intro: 'Tak wygląda karta po misji 0. Komórka B3 jest zaznaczona: ma niebieską ramkę, a jej adres widać nad siatką po lewej.',
      sheets: [
        { caption: 'Plik „Sklep treningowy”, karta Pomysły', fx: { cell: 'B3', text: '7' }, head: true, sel: 'B3', tabs: ['Pomysły'], tab: 0,
          rows: [['Rzecz', 'Stan (1–10)'], ['Gra na konsolę', '9'], ['Klocki', '7'], ['Książki z serii', '8'], ['Rolki', '5'], ['Słuchawki', '6']] }
      ],
      note: 'Liczby stoją po prawej stronie komórki, tekst po lewej. Arkusz sam rozpoznaje, co jest liczbą. Tak poznasz, czy wpisałeś liczbę, czy tekst.'
    },
    steps: [
      { text: 'Trzy zasady Akademii. **1.** Plik udostępniasz tylko rodzicowi. **2.** Do arkusza nie wpisujesz haseł, adresów ani numerów telefonów: ani swoich, ani kupujących. **3.** Nic nie da się zepsuć na zawsze: [[Ctrl]] + [[Z]] cofa, a Arkusz pamięta każdą wersję pliku.', tip: 'Zasady wrócą w misjach. Wystarczy dziś raz przeczytać.' },
      { text: 'Otwórz przeglądarkę, wpisz w pasku adresu `sheets.new` i wciśnij [[Enter]]. Kliknij nazwę w lewym górnym rogu (na start jest tam **Arkusz kalkulacyjny bez nazwy**), wpisz `Sklep treningowy`, [[Enter]].', tip: 'Arkusz zapisuje się sam na Dysku Google, nie ma przycisku Zapisz. Jeśli przeglądarka pyta o konto, wybierz to, które wskazał rodzic.' },
      { text: 'Sprawdź region, żeby formuły z Akademii działały. Menu {{Plik}} → {{Ustawienia}}. W polu **Ustawienia regionalne** ma być **Polska**. Jeśli nie jest, zmień i kliknij **Zapisz ustawienia**.', tip: 'Od tego zależy, czy Arkusz rozumie polskie nazwy funkcji, takie jak SUMA, i czy w formułach rozdziela się rzeczy średnikiem. Rodzic ma to opisane na swojej stronie.' },
      { text: 'Klikaj w komórki i patrz na adres nad siatką po lewej. Potem poruszaj się strzałkami: [[Enter]] przechodzi w dół, [[Tab]] w prawo. W **A1** wpisz `Rzecz`, [[Tab]], w **B1** `Stan (1–10)`, [[Enter]].' },
      { text: 'Rozejrzyj się po pokoju. Pod nagłówkiem wpisz pięć rzeczy, których już nie używasz i które ktoś mógłby kupić, a obok oceń ich stan od 1 do 10. Po rzeczy [[Tab]], po ocenie [[Enter]].', tip: 'Gdy zaczniesz wiersz Tabem, Enter wraca na początek następnego wiersza. Nic nie musisz od razu sprzedawać, to tylko lista pomysłów.' },
      { text: 'Poprawianie. Wpisz w **A1** `bzdura`, potem [[Ctrl]] + [[Z]]: napis wraca. Chcesz zmienić jedną literę? [[F2]] albo dwuklik, wtedy edytujesz w środku komórki. [[Delete]] czyści komórkę.' },
      { text: 'Zmień nazwę karty na dole ekranu: dwuklik na **Arkusz1**, wpisz `Pomysły`, [[Enter]]. Karty to zakładki w jednym pliku. W kolejnych misjach dojdą Magazyn, Pulpit i Ceny.' }
    ],
    check: [
      'Masz plik „Sklep treningowy” z kartą „Pomysły” i pięcioma rzeczami.',
      'Umiesz powiedzieć, gdzie jest komórka D4, bez klikania.',
      'Cofnąłeś pomyłkę klawiszami, a nie kasowaniem ręcznym.',
      'Oceny w kolumnie B stoją po prawej, nazwy w kolumnie A po lewej.'
    ],
    solo: {
      text: 'Dopisz w **C1** nagłówek `Gdzie leży` i przy każdej rzeczy krótko: szafa, półka, piwnica. Bez patrzenia w kroki.',
      hints: ['Kliknij C1 i wpisz nagłówek.', 'Enter przechodzi w dół, strzałki pomagają w poprawkach.']
    },
    discovery: { text: 'Wciśnij [[Ctrl]] + [[/]]. Wyskakuje lista skrótów klawiszowych Arkuszy. Znajdź jeden, który wygląda ciekawie, i wypróbuj go. Okno zamyka [[Esc]].' },
    journalPrompt: 'Która rzecz z listy najbardziej Cię zaskoczyła, że jeszcze ją masz?',
    parent: 'Pokaż rodzicowi kartę „Pomysły” i powiedz trzy zasady własnymi słowami. Sprawdźcie razem ustawienie regionu.',
    forParent: {
      teaches: 'Komórka i adres, nowy plik przez sheets.new, nazwa pliku i karty, region Polska, poruszanie się Enter i Tab, cofanie, pierwsza tabelka: rzeczy z domu do sprzedania.',
      ask: 'Poproś, żeby wskazał komórkę C4 bez klikania i powiedział trzy zasady. Zapytaj, dlaczego w arkuszu sklepu nie zapisuje się adresów kupujących.'
    }
  });

  M.push({
    id: 'tabela',
    title: 'Tabela, która dobrze wygląda',
    subtitle: 'Magazyn: nagłówek, szerokość kolumn, złotówki i blokada',
    technique: 'Formatowanie',
    minutes: 20,
    why: [
      'Karta **Magazyn** to serce sklepu: jedna rzecz w jednym wierszu. Dziś wklejasz 12 rzeczy przykładowych i robisz z nich tabelę, która wygląda jak z aplikacji: gruby nagłówek, kolumny na miarę, ceny w złotówkach.',
      'Do tego **blokada**: nagłówek i nazwy rzeczy stoją w miejscu, gdy przewijasz. Przy 40 rzeczach to ratuje życie.'
    ],
    realWorld: 'Sklepy internetowe trzymają towar w takich samych tabelach: numer, nazwa, kategoria, cena. Gruby nagłówek i kwoty w złotych to nie ozdoba, tylko mniej pomyłek, gdy patrzy się na sto wierszy naraz.',
    example: {
      intro: 'Pięć pierwszych wierszy Magazynu po formatowaniu. Kolumny od G do K mają na razie same nagłówki: wypełnisz je w kolejnych misjach.',
      sheets: [
        { caption: 'Karta „Magazyn” po formatowaniu', head: true, sel: 'F2', tabs: ['Pomysły', 'Magazyn'], tab: 1,
          rows: magazyn({ do: 'K', puste: ['G', 'H', 'I', 'J', 'K'] }) }
      ],
      note: 'Ceny wpisujesz jako zwykłe liczby, np. `49,9`. To format komórki dopisuje `zł` i drugie zero. Dzięki temu Arkusz dalej umie na nich liczyć.'
    },
    steps: [
      { text: 'Nowa karta: znak {{+}} w lewym dolnym rogu, nazwij ją `Magazyn`. Skopiuj tabelkę przyciskiem, kliknij **A1** i wciśnij [[Ctrl]] + [[V]]. Wszystko wskakuje naraz.',
        copy: KOLUMNY.slice(0, 11).map(function (k) { return NAGLOWKI[k]; }).join('\t') + '\n' + wklej(['A', 'B', 'C', 'D', 'E', 'F'], od(1, 12)),
        tip: 'To sztuczka na cały kurs: gotowe tabelki wklejasz zamiast przepisywać. Rzeczy są przykładowe, swoje wpiszesz w trzech ostatnich misjach.' },
      { text: 'Nagłówek: kliknij numer wiersza **1** z lewej strony. [[Ctrl]] + [[B]] pogrubia. Ikona wiaderka **Kolor wypełnienia** na pasku narzędzi daje kolor: wybierz jasny.' },
      { text: 'Szerokość wszystkich kolumn naraz: kliknij literę **A**, przytrzymaj [[Shift]] i kliknij literę **K**. Najedź na linię między dowolnymi dwiema literami, aż kursor zmieni się w strzałkę w dwie strony, i kliknij dwa razy. Kolumny dopasowują się do treści.', tip: 'Możesz też przeciągnąć tę linię ręcznie, gdy chcesz szerzej.' },
      { text: 'Złotówki: kliknij literę **E**, przytrzymaj [[Shift]] i kliknij **F**. Menu {{Formatuj}} → {{Liczba}} → {{Waluta}}. Ceny dostają `zł` i grosze.', tip: 'Format ustawiony na całą kolumnę działa też dla rzeczy, które dopiszesz później. Nie dopisuj `zł` ręcznie: wtedy Arkusz myśli, że to tekst, i nie umie tego dodać.' },
      { text: 'Blokada: {{Widok}} → {{Zablokuj}} → {{1 wiersz}}. Potem jeszcze raz {{Widok}} → {{Zablokuj}} → {{2 kolumny}}. Przewiń w dół i w prawo: nagłówek oraz numer i nazwa rzeczy stoją w miejscu.' }
    ],
    check: [
      'Nagłówek jest gruby, ma kolor i nie ucieka przy przewijaniu.',
      'Żadna kolumna nie ucina tekstu.',
      'Ceny mają `zł`, a Ty wpisywałeś same cyfry.',
      'Przy przewijaniu w prawo cały czas widzisz kolumny Nr i Rzecz.'
    ],
    variants: [
      { text: 'Obramowanie: zaznacz od **A1** do **K13**, na pasku narzędzi kliknij ikonę **Obramowania** (kratka) i wybierz wariant ze wszystkimi liniami.' },
      { text: 'Wyrównanie: zaznacz kolumnę **A** i na pasku narzędzi wybierz wyrównanie do środka. Numery wyglądają porządniej. Cofnij, jeśli wygląda gorzej.' },
      { text: 'Szybka data: kliknij pustą komórkę i wciśnij [[Ctrl]] + [[;]]. Wskakuje dzisiejsza data. Przyda się przy datach sprzedaży.' }
    ],
    solo: {
      text: 'Wróć na kartę `Pomysły` i sformatuj ją bez patrzenia w kroki: gruby kolorowy nagłówek, kolumny na miarę, zablokowany wiersz 1.',
      hints: ['Ctrl + B na nagłówku.', 'Dwuklik na linii między literami kolumn.', 'Widok → Zablokuj → 1 wiersz.']
    },
    discovery: { text: 'Zaznacz kolumnę **F** z cenami i spójrz w prawy dolny róg ekranu. Arkusz pokazuje tam **Sumę**, bez żadnej formuły. Kliknij ten napis: zobaczysz też średnią, minimum i maksimum. To tylko podgląd. W misji 4 zapiszesz te liczby na stałe.' },
    journalPrompt: 'Która zmiana najbardziej poprawiła wygląd Magazynu?',
    parent: 'Pokaż rodzicowi Magazyn i udostępnij mu plik: przycisk **Udostępnij** w prawym górnym rogu, jego adres e-mail, rola **Edytujący**, **Wyślij**. Od dziś rodzic widzi wszystkie karty i może zaglądać.',
    forParent: {
      teaches: 'Wklejanie gotowej tabelki, pogrubienie, kolor, szerokość wielu kolumn naraz, format waluty na całą kolumnę, blokada wiersza i kolumn. Udostępnienie pliku rodzicowi.',
      ask: 'Poproś o udostępnienie pliku na Twój adres. Zapytaj, dlaczego nie wpisuje się „zł” ręcznie w komórce i po co blokować kolumnę z nazwą.'
    }
  });

  M.push({
    id: 'przeciagnij',
    title: 'Przeciągnij i gotowe',
    subtitle: 'Uchwyt wypełniania: numery, platformy i daty w sekundę',
    technique: 'Uchwyt wypełniania',
    minutes: 20,
    why: [
      'W prawym dolnym rogu zaznaczonej komórki jest mały niebieski kwadracik: **uchwyt wypełniania**. Chwytasz go i ciągniesz, a Arkusz dopisuje dalszy ciąg: 13, 14, 15... albo poniedziałek, wtorek... albo kolejne daty.',
      'Dziś dopisujesz do Magazynu osiem rzeczy i dajesz im numery jednym ruchem. Numer to stały znak rzeczy. Ten sam możesz napisać na karteczce przy pudełku, żeby przy wysyłce nie pomylić paczek.'
    ],
    realWorld: 'W magazynach każdy towar ma swój numer, często na naklejce. Pracownik nie szuka „tej niebieskiej gry”, tylko numeru 1043. Numery nadaje się seriami, właśnie tak jak uchwytem.',
    example: {
      intro: 'Cały Magazyn po tej misji. Numery od 13 do 20 dopisał uchwyt, a słowo „Vinted” skopiowało się w dół jednym skrótem. OLX trzeba było wpisać ręcznie.',
      sheets: [
        { caption: 'Karta „Magazyn”: 20 rzeczy z platformą', head: true, sel: 'A21', tabs: ['Pomysły', 'Magazyn'], tab: 1,
          marks: { A14: 'ok', A15: 'ok', A16: 'ok', A17: 'ok', A18: 'ok', A19: 'ok', A20: 'ok', A21: 'ok' },
          rows: magazyn({ do: 'G', nry: od(1, 20) }) },
        { caption: 'Nowa karta „Plan”: trzy serie po jednym przeciągnięciu', head: true, sel: 'B8', tabs: ['Pomysły', 'Magazyn', 'Plan'], tab: 2,
          rows: [['Dzień', 'Data', 'Zadanie'], ['poniedziałek', '16.11.2026', 'zdjęcia 2 rzeczy'], ['wtorek', '17.11.2026', 'zdjęcia 2 rzeczy'], ['środa', '18.11.2026', 'zdjęcia 2 rzeczy'], ['czwartek', '19.11.2026', 'zdjęcia 2 rzeczy'], ['piątek', '20.11.2026', 'zdjęcia 2 rzeczy'], ['sobota', '21.11.2026', 'zdjęcia 2 rzeczy'], ['niedziela', '22.11.2026', 'zdjęcia 2 rzeczy']] }
      ],
      note: 'Arkusz zgaduje wzór z tego, co zaznaczysz. Jedna komórka z liczbą 12 daje same dwunastki. Dwie komórki, 11 i 12, dają 13, 14, 15... Dni tygodnia i daty rozpoznaje po jednej komórce.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij **B14**, czyli pierwszą pustą komórkę w kolumnie Rzecz, i wklej osiem nowych rzeczy.', copy: wklej(['B', 'C', 'D', 'E', 'F'], od(13, 20)), tip: 'Wklejasz od kolumny B, bo numery w kolumnie A zrobi za chwilę uchwyt.' },
      { text: 'Numery. Zaznacz **A12** i **A13** razem (liczby 11 i 12): kliknij A12, przytrzymaj [[Shift]], kliknij A13. Najedź na niebieski kwadracik w rogu zaznaczenia, aż kursor zmieni się w krzyżyk. Chwyć i przeciągnij w dół do **A21**. Masz numery od 13 do 20.', tip: 'Dwie komórki pokazują Arkuszowi wzór: co jeden w górę.' },
      { text: 'Platforma. W **G2** wpisz `Vinted`. Zaznacz od **G2** do **G21** (kliknij G2, [[Shift]], kliknij G21) i wciśnij [[Ctrl]] + [[D]]. To „wypełnij w dół”: pierwsza komórka kopiuje się na całe zaznaczenie.' },
      { text: 'Większe i droższe rzeczy idą na OLX. Wpisz `OLX` w kolumnie G przy numerach **3, 4, 7, 8, 11, 12, 16 i 18**.', tip: 'Po pierwszym OLX wystarczy wpisać `O`: Arkusz podpowiada resztę, a [[Enter]] przyjmuje podpowiedź.' },
      { text: 'Plan na tydzień. Nowa karta `Plan`. W **A1** `Dzień`, w **A2** `poniedziałek`, przeciągnij uchwyt do **A8**. W **B1** `Data`, w **B2** data najbliższego poniedziałku, przeciągnij do **B8**. W **C1** `Zadanie`, w **C2** `zdjęcia 2 rzeczy`, przeciągnij do **C8**.', tip: 'Dni i daty Arkusz ciągnie dalej sam, a zwykły tekst kopiuje. Wyszły same poniedziałki? Wpisz w A3 `wtorek`, zaznacz obie komórki i przeciągnij jeszcze raz.' }
    ],
    check: [
      'Masz numery od 1 do 20, a 13–20 zrobiłeś bez wpisywania.',
      'Cała kolumna G jest wypełniona, w tym osiem razy OLX.',
      'Na karcie Plan dni i daty poszły same po jednym przeciągnięciu.',
      'Wiesz, czym różni się przeciąganie jednej komórki od dwóch.'
    ],
    variants: [
      { text: 'Co drugi dzień: wpisz w dwóch komórkach daty z przerwą, np. `16.11.2026` i `18.11.2026`, zaznacz obie i przeciągnij. Arkusz łapie skok o dwa dni.' },
      { text: 'Godziny: wpisz `16:00` i `16:30`, zaznacz obie, przeciągnij. Plan popołudnia co pół godziny.' },
      { text: 'W prawo działa tak samo. Wpisz `1` w E10, `2` w F10, zaznacz obie i ciągnij w prawo.' }
    ],
    solo: {
      text: 'Na karcie `Plan` w **D1** wpisz `Razem rzeczy`, a w **D2** i **D3** liczby 2 i 4. Przeciągnij tak, żeby wyszło 2, 4, 6, 8... do **D8**. Ile rzeczy sfotografujesz przez tydzień?',
      hints: ['Zaznacz D2 i D3 razem, dopiero potem ciągnij.', 'W D8 powinno wyjść 14.']
    },
    discovery: { text: 'Zaznacz na karcie Plan **A2:A8** i przeciągnij uchwyt dalej, do **A15**. Dni idą w kółko. A teraz chwyć uchwyt i cofnij zaznaczenie w górę: Arkusz kasuje to, co wystaje. Uchwyt działa w obie strony.' },
    journalPrompt: 'Co zaskoczyło Cię bardziej: numery, dni tygodnia czy daty?',
    forParent: {
      teaches: 'Wklejanie od wybranej komórki, uchwyt wypełniania (serie liczb, dni tygodnia, dat), wypełnianie w dół Ctrl + D, autouzupełnianie przy wpisywaniu.',
      ask: 'Poproś o pokaz: numery od 1 do 10 w trzech ruchach. Zapytaj, po co każda rzecz ma stały numer.'
    }
  });

  M.push({
    id: 'pierwsza-formula',
    title: 'Pierwsza formuła',
    subtitle: 'Znak równości, cztery działania i adresy zamiast liczb',
    technique: 'Formuła',
    minutes: 20,
    why: [
      'Formuła zaczyna się od **=**. Gdy wpiszesz `=2+3` i [[Enter]], w komórce pojawia się 5. Prawdziwa moc jest gdzie indziej: zamiast liczb wpisujesz **adresy komórek**. `=E2-F2` odejmuje to, co jest w F2, od tego, co jest w E2. Zmienisz cenę, wynik zmieni się sam.',
      'Formułę piszesz raz i **przeciągasz uchwytem**. W każdym wierszu Arkusz sam podmienia numer wiersza. Jedna formuła, dwadzieścia wyników: o ile taniej niż w sklepie kupi każdą rzecz Twój kupujący.'
    ],
    realWorld: 'Każde „taniej o 40 zł” w sklepie internetowym to taka formuła: cena przed minus cena po. Nikt nie liczy tego w głowie dla tysiąca produktów.',
    example: {
      intro: 'W L2 wpisujesz formułę. Kolumny H–K są jeszcze puste, wypełnisz je później.',
      sheets: [
        { caption: 'Karta „Magazyn”: formuła w L2', fx: { cell: 'L2', text: '=E2-F2' }, head: true, editing: 'L2', sel: 'L2', marks: { E2: 'blue', F2: 'blue' },
          rows: magazyn({ do: 'L', nry: od(1, 4), puste: ['H', 'I', 'J', 'K', 'L'] }) },
        { caption: 'Po Enter i przeciągnięciu L2 w dół', fx: { cell: 'L5', text: '=E5-F5' }, head: true, sel: 'L5', marks: { L2: 'ok', L3: 'ok', L4: 'ok', L5: 'ok' },
          rows: magazyn({ do: 'L', nry: od(1, 4), puste: ['H', 'I', 'J', 'K'] }) }
      ],
      note: 'Spójrz na pasek nad siatką przy L5: formuła to `=E5-F5`, a nie `=E2-F2`. Po przeciągnięciu Arkusz sam zmienił 2 na 5. O to chodzi.'
    },
    steps: [
      { text: 'Rozgrzewka. Na karcie `Plan` w wolnej komórce wpisz `=2+3` i [[Enter]]. Potem `=10-4`, `=6*7`, `=20/4`. Gwiazdka to mnożenie, ukośnik to dzielenie. Skasuj wyniki.' },
      { text: 'Karta `Magazyn`. W **L1** wpisz `Taniej o`. Kliknij **L2** i wpisz formułę tak: `=`, potem **kliknij myszką E2**, wpisz `-`, kliknij **F2**, [[Enter]]. Klikanie wpisuje adres za Ciebie i nie robi literówek.', copy: '=E2-F2', tip: 'Gdy piszesz formułę, każda komórka w niej dostaje kolorową ramkę. Od razu widzisz, co liczysz.' },
      { text: 'Kliknij **L2**, chwyć uchwyt i przeciągnij do **L21**. Kliknij **L5** i spójrz na pasek formuły nad siatką. Numer wiersza sam się zmienił.' },
      { text: 'Zmień cenę Harry Pottera w **F2** z 15 na 20. Patrz na **L2**: wynik zmienił się sam, bez dotykania formuły. Cofnij [[Ctrl]] + [[Z]].' },
      { text: 'Wyniki też można formatować: kliknij literę **L**, {{Formatuj}} → {{Liczba}} → {{Waluta}}. Która rzecz jest najbardziej okazyjna?' }
    ],
    check: [
      'W kolumnie L są wyniki, a na pasku nad siatką widzisz formuły z adresami, nie liczby.',
      'Zmiana ceny w F zmienia wynik w L bez Twojej pomocy.',
      'Przeciągnąłeś formułę i wiesz, że numer wiersza zmienia się sam.'
    ],
    variants: [
      { text: 'Połowa ceny nowej:', copy: '=E2/2' },
      { text: 'Nawiasy działają jak w matmie. O jaką część taniej niż nowa? Potem {{Formatuj}} → {{Liczba}} → {{Procent}}:', copy: '=(E2-F2)/E2' },
      { text: 'Możesz mieszać adresy i liczby. Przecinek w liczbie to polski zapis:', copy: '=F2*1,5' },
      { text: 'Potęga to daszek. Dwa do dziesiątej:', copy: '=2^10' }
    ],
    solo: {
      text: 'Na karcie `Pomysły` dopisz kolumny `Cena nowej` i `Moja cena` dla swoich pięciu rzeczy (mogą być zgadywane), a obok formułę „Taniej o”. Bez kopiowania z kroków.',
      hints: ['Formuła zaczyna się od =.', 'Odejmujesz moją cenę od ceny nowej.', 'Napisz ją w pierwszym wierszu i przeciągnij.']
    },
    discovery: { text: 'Wpisz w wolnej komórce formułę poniżej i [[Enter]]. Losuje numer od 1 do 20: to rzecz, którą dziś sfotografujesz. Wpisz cokolwiek w innej komórce, a losuje od nowa. Na końcu ją skasuj.', copy: '=LOS.ZAKR(1;20)' },
    journalPrompt: 'Co się stało, gdy zmieniłeś cenę w F2?',
    parent: 'Pokaż rodzicowi kolumnę „Taniej o”. Zmień jedną cenę na jego oczach i pokaż, że wynik przelicza się sam.',
    forParent: {
      teaches: 'Formuła zaczyna się od znaku równości; cztery działania; adresy komórek zamiast liczb (klikanie zamiast wpisywania); przeciąganie formuły i automatyczna zmiana numeru wiersza; przeliczanie po zmianie danych.',
      ask: 'Zmień dowolną cenę i zapytaj, dlaczego wynik się zmienił. Poproś, żeby pokazał formułę na pasku nad siatką.'
    }
  });

  M.push({
    id: 'suma',
    title: 'SUMA i spółka na Pulpicie',
    subtitle: 'Osobna karta z najważniejszymi liczbami sklepu',
    technique: 'Funkcje',
    minutes: 20,
    why: [
      '**Funkcja** to gotowe działanie z nazwą. `SUMA` dodaje całą kolumnę, `ŚREDNIA` liczy średnią, `MAX` szuka największej liczby, `MIN` najmniejszej. Piszesz nazwę, a w nawiasie zakres, czyli „od... do...”: `F2:F100`.',
      'Dziś ważna zasada arkuszy: **dane osobno, podsumowanie osobno**. Magazyn to dane. Liczby o całym sklepie zbierasz na nowej karcie **Pulpit**. Formuła na jednej karcie może liczyć z drugiej: `Magazyn!F2:F100` znaczy „kolumna F na karcie Magazyn”.'
    ],
    realWorld: 'Właściciel sklepu zaczyna dzień od jednej karty z liczbami: ile towaru, ile sprzedane, ile pieniędzy. Nazywa się to pulpit, po angielsku dashboard. Dane leżą osobno, żeby przypadkiem ich nie skasować.',
    example: {
      intro: 'Pulpit po tej misji. Każda liczba to jedna formuła, która liczy z karty Magazyn.',
      sheets: [
        { caption: 'Karta „Pulpit”', fx: { cell: 'B3', text: '=SUMA(Magazyn!F2:F100)' }, sel: 'B3', marks: { A1: 'head', B2: 'ok', B3: 'ok', B4: 'ok', B5: 'ok', B6: 'ok' },
          tabs: KARTY, tab: 3, rows: pulpit(6) }
      ],
      note: 'Zakres kończy się na F100, choć rzeczy jest 20. To zapas: każda nowa rzecz w Magazynie od razu wchodzi do wszystkich liczb.'
    },
    steps: [
      { text: 'Nowa karta `Pulpit`. Kliknij **A1** i wklej podpisy. Pogrub **A1** i poszerz kolumnę A.', copy: 'Magazyn\nIle rzeczy\nWartość wszystkiego\nŚrednia cena\nNajdroższa\nNajtańsza' },
      { text: 'Suma z drugiej karty, klikając. Kliknij **B3**, wpisz `=SUMA(`, potem kliknij kartę **Magazyn** na dole i zaznacz myszką od **F2** do **F21**. Wpisz `)` i [[Enter]]. Arkusz wraca na Pulpit z wynikiem.', tip: 'Gdy zaczynasz pisać `=SU`, Arkusz podpowiada funkcje z opisem. [[Tab]] przyjmuje podpowiedź.' },
      { text: 'Zapas. Kliknij **B3** i spójrz na pasek formuły: `=SUMA(Magazyn!F2:F21)`. Kliknij w pasek, zamień `F21` na `F100` i [[Enter]]. Teraz suma zmieści 40 rzeczy, a nawet więcej.', copy: '=SUMA(Magazyn!F2:F100)' },
      { text: 'Średnia cena w **B4**:', copy: '=ŚREDNIA(Magazyn!F2:F100)', tip: 'Małe litery też działają: `=średnia(...)`. Arkusz sam zamieni na wielkie.' },
      { text: 'Najdroższa rzecz w **B5**. Potem w **B6** wklej to samo i zamień `MAX` na `MIN`.', copy: '=MAX(Magazyn!F2:F100)', tip: 'W Arkuszach Google największa liczba to MAX, choć w Excelu nazywa się MAKS. Gdyby MAX pokazał błąd, spróbuj MAKS.' },
      { text: 'Ile rzeczy? W **B2** policz wypełnione komórki w kolumnie Rzecz. Potem dopisz w Magazynie rzecz numer 21, byle jaką, z ceną. Wróć na Pulpit: liczby się zmieniły. Skasuj ją.', copy: '=ILE.NIEPUSTYCH(Magazyn!B2:B100)' }
    ],
    check: [
      'Pulpit pokazuje: ' + ST.ile + ' rzeczy, wartość ' + zl(ST.suma) + ', średnio ' + zl(ST.srednia) + ', najdroższa ' + zl(ST.max) + ', najtańsza ' + zl(ST.min) + '.',
      'Wszystkie formuły kończą się na wierszu 100, nie 21.',
      'Nowa rzecz w Magazynie od razu zmienia Pulpit.'
    ],
    variants: [
      { text: 'Ile kosztowałoby to wszystko nowe w sklepie?', copy: '=SUMA(Magazyn!E2:E100)' },
      { text: 'Funkcja w funkcji. Średnia zaokrąglona do pełnych złotych:', copy: '=ZAOKR(ŚREDNIA(Magazyn!F2:F100);0)' },
      { text: 'Zepsuj formułę celowo: wpisz w wolnej komórce `=SUMA(Magazyn!F2:F100` bez nawiasu na końcu albo z przecinkiem zamiast wykrzyknika. Najedź na komórkę z błędem: Arkusz mówi, co jest nie tak. Skasuj.' }
    ],
    solo: {
      text: 'W **A7** wpisz `Cena nowych razem`, a w **B7** policz sumę kolumny E z Magazynu. Bez kopiowania. O ile więcej kosztowałoby to wszystko w sklepie?',
      hints: ['=SUMA(, potem klik na kartę Magazyn.', 'Pamiętaj o zapasie do wiersza 100.']
    },
    discovery: { text: 'Wciśnij [[Alt]] + [[/]] i wpisz `waluta`. Arkusz szuka w menu za Ciebie. Gdy zapomnisz, gdzie coś jest, to najszybsza droga.' },
    journalPrompt: 'Po co trzymać podsumowanie na osobnej karcie?',
    forParent: {
      teaches: 'Funkcje SUMA, ŚREDNIA, MAX, MIN, ILE.NIEPUSTYCH; zakres z zapasem; zasada „dane osobno, podsumowanie osobno”; odwołanie do innej karty budowane klikaniem.',
      ask: 'Zapytaj, dlaczego zakres kończy się na 100, skoro rzeczy jest 20. Poproś, żeby pokazał, z której karty liczy Pulpit.'
    }
  });

  M.push({
    id: 'pinezka',
    title: 'Pinezka, czyli znak dolara',
    subtitle: 'Jedno ustawienie dla wszystkich formuł',
    technique: 'Odwołanie bezwzględne',
    minutes: 20,
    why: [
      'Prosty sposób na pierwszą cenę: połowa ceny nowej rzeczy. Ale czemu połowa? Może 40%? Zamiast wpisywać procent w dwudziestu formułach, wpisujesz go raz na Pulpicie, a formuły patrzą w tę jedną komórkę.',
      'Jest haczyk: gdy przeciągasz formułę, adresy jadą w dół. Tę jedną komórkę trzeba **przypiąć pinezką**, czyli znakiem dolara. `$B$9` nie rusza się nigdy.'
    ],
    realWorld: 'Sklepy zmieniają ceny procentem: „wszystko 20% taniej”. Procent siedzi w jednej komórce, a tysiąc cen przelicza się samo. Tak samo działa kurs euro w kantorze.',
    example: {
      intro: 'Procent stoi na Pulpicie w B9. W Magazynie każda propozycja patrzy w tę samą komórkę.',
      sheets: [
        { caption: 'Karta „Pulpit”: ustawienie w B9', sel: 'B9', marks: { A1: 'head', A8: 'head', B9: 'note' }, tabs: KARTY, tab: 3, rows: pulpit(9) },
        { caption: 'Karta „Magazyn”: kolumna M z pinezką', fx: { cell: 'M3', text: '=E3*Pulpit!$B$9' }, head: true, sel: 'M3', marks: { M2: 'ok', M3: 'ok', M4: 'ok', M5: 'ok' }, tabs: KARTY, tab: 1,
          rows: magazyn({ do: 'M', nry: od(1, 4), puste: ['H', 'I', 'J', 'K'] }) }
      ],
      note: 'Przy LEGO City propozycja to 149,50 zł, a Twoja cena 150 zł. Wrócisz do tego w misji o JEŻELI.'
    },
    steps: [
      { text: 'Na **Pulpicie** w **A8** wpisz `Ustawienia` (pogrub), w **A9** `Procent ceny nowej`, w **B9** `50%`.', tip: 'Wpisz razem ze znakiem procentu. Arkusz sam ustawi format.' },
      { text: 'Najpierw źle, żeby zobaczyć problem. Karta `Magazyn`, w **M1** `Propozycja`. W **M2** wklej formułę bez dolarów i przeciągnij do **M21**. Kliknij **M3**: jest tam `=E3*Pulpit!B10`. B10 jest puste, więc wynik to zero. Formuła pojechała za daleko.', copy: '=E2*Pulpit!B9' },
      { text: 'Teraz dobrze. W **M2** wklej formułę z dolarami, [[Enter]], przeciągnij do **M21**. Wszędzie propozycje.', copy: '=E2*Pulpit!$B$9', tip: 'Skrót: gdy piszesz formułę i kursor stoi na adresie B9, wciśnij [[F4]]. Arkusz sam dopisze dolary.' },
      { text: 'Zmień na Pulpicie **B9** na `40%`. Wróć do Magazynu: wszystkie propozycje zmalały. Jedna komórka zmieniła dwadzieścia liczb. Ustaw z powrotem `50%`.' },
      { text: 'Kolumna **M** w złotówkach: kliknij literę M, {{Formatuj}} → {{Liczba}} → {{Waluta}}. Porównaj M z F: przy której rzeczy Twoja cena jest wyższa niż propozycja?' }
    ],
    check: [
      'W M3 formuła to `=E3*Pulpit!$B$9`: część z Pulpitem się nie przesunęła.',
      'Zmiana procentu na Pulpicie zmienia całą kolumnę M.',
      'Umiesz powiedzieć, po co jest dolar i co robi [[F4]].'
    ],
    variants: [
      { text: 'Obniżka dla wszystkich: na Pulpicie w **A10** `Obniżka`, w **B10** `10%`. W wolnej kolumnie Magazynu daleko w prawo (np. T) cena po obniżce, przeciągnij. Potem skasuj.', copy: '=F2*(1-Pulpit!$B$10)' },
      { text: 'Pinezka na pół: `$B9` trzyma kolumnę, `B$9` trzyma wiersz. Przydaje się w tabelkach, które przeciągasz w dwie strony.' },
      { text: 'Nazwa zamiast adresu: na Pulpicie kliknij B9, menu {{Dane}} → {{Nazwane zakresy}}, nazwij ją `procent`. Potem formuła może brzmieć:', copy: '=E2*procent' }
    ],
    solo: {
      text: 'Na karcie `Pomysły` dodaj kolumnę `Propozycja`, która mnoży cenę nowej Twoich rzeczy przez procent z Pulpitu. Z pinezką, przeciągnięta w dół.',
      hints: ['Zacznij od =, kliknij cenę nowej, *, potem kartę Pulpit i B9.', 'F4 dopisze dolary.', 'Nie masz kolumny z ceną nowej? Dopisz ją, wystarczą zgadywane ceny.']
    },
    discovery: { text: 'Menu {{Widok}} → {{Pokaż}} → {{Formuły}}. Zamiast wyników widzisz same formuły w całym arkuszu. Dobre do szukania pomyłek. Wyłącz tak samo.' },
    journalPrompt: 'Własnymi słowami: co robi pinezka?',
    forParent: {
      teaches: 'Odwołanie bezwzględne ($): jedna komórka z ustawieniem dla wielu formuł, skrót F4, odwołanie do innej karty z pinezką, widok formuł.',
      ask: 'Zmień procent na Pulpicie i zapytaj, co się stanie w Magazynie, zanim tam zajrzycie. Zapytaj, co by się stało bez dolarów.'
    }
  });

  M.push({
    id: 'sortuj',
    title: 'Sortuj i filtruj',
    subtitle: 'Najdroższe na górze i tylko to, czego szukasz',
    technique: 'Sortowanie i filtr',
    minutes: 20,
    why: [
      'Dwadzieścia rzeczy to już sporo patrzenia. **Sortowanie** ustawia wiersze po kolei: od najdroższej, alfabetycznie, po kategorii. **Filtr** chowa na chwilę wiersze, których nie chcesz widzieć, i niczego nie kasuje.',
      'Najważniejsza zasada: sortujesz zawsze **całą tabelkę**, nie jedną kolumnę. Inaczej ceny rozjadą się z rzeczami. Kolumna Nr pozwala wrócić do starej kolejności w każdej chwili.'
    ],
    realWorld: 'Kupujący na Vinted i OLX robią to samo co Ty: sortują po cenie i filtrują po kategorii. Pod spodem takiej strony jest tabela z danymi, a przycisk „od najtańszych” to zwykłe sortowanie.',
    example: {
      intro: 'Na górze Magazyn posortowany od najdroższej rzeczy. Pod spodem ten sam Magazyn z filtrem: widać tylko gry.',
      sheets: [
        { caption: 'Magazyn posortowany według ceny, od najwyższej (pierwsze wiersze)', head: true, sel: 'F1', tabs: KARTY, tab: 1,
          rows: magazyn({ do: 'G', nry: [3, 6, 12, 18, 7, 16] }) },
        { caption: 'Filtr w kolumnie Kategoria: tylko gry', head: true, marks: { C1: 'blue' }, tabs: KARTY, tab: 1,
          rows: magazyn({ do: 'G', nry: [5, 6, 14, 17] }) }
      ],
      note: 'Przy filtrze numery wierszy po lewej przeskakują. W prawdziwym Arkuszu tak poznasz, że część wierszy jest schowana.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Zaznacz całą tabelkę: kliknij **A1**, przytrzymaj [[Shift]] i kliknij **M21**. Menu {{Dane}} → {{Sortuj zakres}} → {{Zaawansowane opcje sortowania zakresów}}. Zaznacz **Dane mają wiersz nagłówka**, wybierz **Moja cena**, **Z → A**, kliknij **Sortuj**.', tip: 'Na górze ma być LEGO City za 150 zł. Jeśli ceny nie pasują do rzeczy, [[Ctrl]] + [[Z]] od razu i spróbuj jeszcze raz z całą tabelką.' },
      { text: 'Powrót do porządku: to samo, tylko sortuj według **Nr**, **A → Z**. Po to są numery.' },
      { text: 'Filtr: kliknij dowolną komórkę tabelki, menu {{Dane}} → {{Utwórz filtr}}. W nagłówkach pojawiają się małe lejki.' },
      { text: 'Kliknij lejek przy **Kategoria**. Kliknij **Wyczyść**, zaznacz tylko `gry`, **OK**. Widzisz cztery gry, reszta schowana.' },
      { text: 'Przywróć wszystkie kategorie (lejek → **Zaznacz wszystko** → **OK**). Teraz lejek przy **Moja cena** → {{Filtrowanie wg warunku}} → **Większe niż** → `50` → **OK**. Zostaje osiem rzeczy droższych niż 50 zł.' },
      { text: 'Zdejmij filtr: {{Dane}} → {{Usuń filtr}}. Wszystkie wiersze wracają.', tip: 'Gdy kiedyś „zginą” Ci wiersze, to prawie zawsze filtr. Szukaj lejka w nagłówku.' }
    ],
    check: [
      'Po sortowaniu każda cena dalej stoi przy swojej rzeczy.',
      'Umiesz wrócić do kolejności według numerów.',
      'Filtr pokazał tylko gry, a potem tylko rzeczy droższe niż 50 zł.',
      'Po usunięciu filtra widać wszystkie 20 rzeczy.'
    ],
    variants: [
      { text: 'Szybciej: gdy filtr jest włączony, lejek ma u góry **Sortuj od A do Z** i **od Z do A**. Sortuje całą tabelkę bez zaznaczania.' },
      { text: 'Sortuj po dwóch rzeczach: w zaawansowanych opcjach kliknij **Dodaj kolejną kolumnę sortowania**. Najpierw Kategoria, potem Moja cena. Ranking w każdej kategorii osobno.' },
      { text: 'Filtr po tekście: lejek przy **Rzecz** → {{Filtrowanie wg warunku}} → **Tekst zawiera** → `LEGO`.' }
    ],
    solo: {
      text: 'Pokaż tylko rzeczy z OLX, posortowane od najtańszej. Która jest najtańsza? Potem wszystko z powrotem: bez filtra, po kolei według Nr.',
      hints: ['Lejek przy Platforma.', 'Sortowanie z lejka przy Moja cena.', 'Dane → Usuń filtr, potem sortowanie według Nr.']
    },
    discovery: { text: 'Wciśnij [[Ctrl]] + [[F]] i wpisz `LEGO`. Arkusz podświetla każdą komórkę z tym słowem. Przy 40 rzeczach to szybsze niż przewijanie.' },
    journalPrompt: 'Kiedy w sklepie przyda Ci się filtr, a kiedy sortowanie?',
    forParent: {
      teaches: 'Sortowanie całej tabeli z wierszem nagłówka, powrót do kolejności dzięki numerom, filtr po wartości i po warunku, usuwanie filtra, wyszukiwanie Ctrl + F.',
      ask: 'Zapytaj, dlaczego sortuje się całą tabelkę, a nie jedną kolumnę. Poproś, żeby pokazał tylko rzeczy z OLX.'
    }
  });

  /* =========================================================================================
     Rozdział 2. Status i decyzje
     ========================================================================================= */
  M.push({
    id: 'menu',
    title: 'Menu w komórce i pola wyboru',
    subtitle: 'Status rzeczy jednym kliknięciem, bez literówek',
    technique: 'Menu i pole wyboru',
    minutes: 20,
    why: [
      'Każda rzecz ma swój **status**: leży w domu, jest wystawiona, ktoś ją zarezerwował albo jest już sprzedana. Gdy wpisujesz to ręcznie, prędzej czy później napiszesz „sprzedae” i formuły przestaną to liczyć. **Menu w komórce** daje gotowe opcje do kliknięcia.',
      '**Pole wyboru** to kwadracik do odhaczania. Dziś odhaczasz, które rzeczy mają już zdjęcia.'
    ],
    realWorld: 'Kurierzy i magazynierzy klikają statusy paczek cały dzień: „przyjęta”, „w drodze”, „doręczona”. Kiedy śledzisz paczkę w aplikacji, widzisz właśnie taki status z listy.',
    example: {
      intro: 'Magazyn z kolumnami Status i Zdjęcia. W prawdziwym Arkuszu status wygląda jak kolorowa pigułka ze strzałką.',
      sheets: [
        { caption: 'Karta „Magazyn”: status z menu i pola wyboru', head: true, sel: 'H7', tabs: KARTY, tab: 1,
          rows: magazyn({ do: 'I', nry: od(1, 8) }) }
      ],
      note: 'Rzecz numer 8 nie ma zdjęć i leży w domu. Rzecz numer 6 ktoś zarezerwował, ale jeszcze nie zapłacił.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij **H2** i wklej statusy wszystkich 20 rzeczy.', copy: wklej(['H'], od(1, 20)), tip: 'Wklejasz jedną kolumnę: każda linijka trafia do kolejnej komórki w dół.' },
      { text: 'Zaznacz od **H2** do **H100** (kliknij H2, przewiń, [[Shift]] i kliknij H100). Menu {{Wstaw}} → {{Menu}}. Po prawej sprawdź opcje. Mają być cztery: `w domu`, `wystawione`, `zarezerwowane`, `sprzedane`. Jeśli Arkusz nie wpisał ich sam, dopisz brakujące przyciskiem **Dodaj kolejny element**. Nadaj kolory: szary, niebieski, żółty, zielony. **Gotowe**.', tip: 'Do wiersza 100, z zapasem: każda nowa rzecz od razu ma menu.' },
      { text: 'To samo z platformą: zaznacz **G2:G100**, {{Wstaw}} → {{Menu}}, opcje `Vinted` i `OLX`, **Gotowe**.' },
      { text: 'Zdjęcia. Zaznacz **I2:I21**, menu {{Wstaw}} → {{Pole wyboru}}. Przy wciąż zaznaczonych polach wciśnij [[Spacja]]: odhaczają się wszystkie naraz. Teraz kliknij pola przy rzeczach numer **8** i **18**, żeby je odznaczyć. Tych jeszcze nie sfotografowałeś.', tip: 'Nowa rzecz w wierszu 22? Przeciągnij pole wyboru z I21 w dół uchwytem.' },
      { text: 'Wypróbuj: rzecz numer 6, Mario Kart, właśnie ktoś kupił. Kliknij strzałkę w **H7** i wybierz `sprzedane`. Potem wróć do `zarezerwowane`, bo to był tylko test.' }
    ],
    check: [
      'W kolumnie H każda komórka ma strzałkę z czterema kolorowymi opcjami.',
      'W kolumnie G da się wybrać tylko Vinted albo OLX.',
      'Pól wyboru odhaczonych jest 18, puste są przy numerach 8 i 18.'
    ],
    variants: [
      { text: 'Wpisz ręcznie w **H22** `sprzedae`. W rogu komórki pojawia się czerwony trójkącik: menu pilnuje, żeby nie było literówek. Skasuj.' },
      { text: 'Menu w kolumnie **D** (Stan): `jak nowy`, `bardzo dobry`, `dobry`, `ślady użycia`. Każdy kolejny stan w jaśniejszym kolorze.' },
      { text: 'Zmiana opcji później: kliknij komórkę z menu, potem ikonę ołówka w okienku z opcjami. Możesz dopisać nową opcję albo zmienić kolor.' }
    ],
    solo: {
      text: 'Zrób menu w kolumnie **C** (Kategoria) z czterema opcjami: książki, zabawki, gry, elektronika. Każda w innym kolorze. Bez patrzenia w kroki.',
      hints: ['Zaznacz C2:C100.', 'Wstaw → Menu.', 'Sprawdź, czy opcje są napisane dokładnie tak jak w tabeli.']
    },
    discovery: { text: 'Pole wyboru to w środku PRAWDA albo FAŁSZ. Wpisz w wolnej komórce `=I2` i klikaj pole w I2: napis się zmienia. Arkusz umie więc liczyć odhaczone pola.' },
    journalPrompt: 'Dlaczego menu jest lepsze od wpisywania statusu ręcznie?',
    forParent: {
      teaches: 'Menu w komórce (lista rozwijana) z kolorami, zakres z zapasem, pola wyboru, odhaczanie wielu pól spacją, czerwony trójkącik przy wartości spoza listy.',
      ask: 'Zapytaj, co się stanie z liczeniem sprzedanych rzeczy, gdy ktoś wpisze „sprzedae”. Poproś o zmianę statusu jednej rzeczy na Twoich oczach.'
    }
  });

  M.push({
    id: 'kolory',
    title: 'Kolory, które włączają się same',
    subtitle: 'Formatowanie warunkowe: sprzedane szarzeje, zarezerwowane świeci',
    technique: 'Formatowanie warunkowe',
    minutes: 15,
    why: [
      '**Formatowanie warunkowe** to kolor z regułą: „jeśli w kolumnie Status jest `sprzedane`, pomaluj cały wiersz na szaro”. Zmienisz status, kolor zmieni się sam.',
      'Dzięki temu jednym spojrzeniem widzisz, co jest jeszcze do zrobienia, a co już załatwione.'
    ],
    realWorld: 'W sklepach i hurtowniach towar, którego zostało mało, sam robi się czerwony w arkuszu. Ktoś kiedyś napisał jedną regułę i od tej pory nikt nie musi pilnować tego wzrokiem.',
    example: {
      intro: 'Te same wiersze co wcześniej, ale z regułami. Sprzedane są szare, zarezerwowane żółte.',
      sheets: [
        { caption: 'Karta „Magazyn” z formatowaniem warunkowym', head: true, tabs: KARTY, tab: 1,
          marks: koloryStatusu(od(1, 8), 'I'), rows: magazyn({ do: 'I', nry: od(1, 8) }) }
      ],
      note: 'W regule jest `$H2`: dolar trzyma kolumnę H, a numer wiersza jedzie. Dlatego każdy wiersz sprawdza swój własny status.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij dowolną komórkę i otwórz {{Formatuj}} → {{Formatowanie warunkowe}}. Po prawej w polu **Zastosuj do zakresu** wpisz `A2:R100`. To cała tabelka, razem z kolumnami formuł, które jeszcze dojdą.' },
      { text: 'Pod **Formatuj komórki, jeśli** wybierz **Niestandardowa formuła to** i wklej formułę. Styl: szare tło i szary tekst. **Gotowe**. Sprzedane rzeczy szarzeją.', copy: '=$H2="sprzedane"' },
      { text: 'Kliknij **Dodaj kolejną regułę**, ten sam zakres `A2:R100`, formuła poniżej, żółte tło. **Gotowe**.', copy: '=$H2="zarezerwowane"' },
      { text: 'Test: zmień status rzeczy numer 4 na `sprzedane`. Wiersz szarzeje od razu. Wróć do `wystawione`.' }
    ],
    check: [
      'Sprzedane wiersze są szare w całej szerokości, nie tylko w kolumnie H.',
      'Mario Kart (numer 6) świeci na żółto.',
      'Zmiana statusu zmienia kolor bez Twojej pomocy.'
    ],
    variants: [
      { text: 'Skala kolorów dla cen: nowa reguła na zakresie `F2:F100`, zakładka **Skala kolorów**, od białego do zielonego. Najdroższe najciemniejsze.' },
      { text: 'Przekreślenie zamiast szarego: w stylu reguły kliknij przekreślone **S**.' },
      { text: 'Rzeczy bez zdjęć na czerwono, ale tylko tam, gdzie jest jakaś rzecz:', copy: '=ORAZ($B2<>"";$I2=FAŁSZ)' }
    ],
    solo: {
      text: 'Dodaj regułę: rzeczy z OLX mają niebieską nazwę w kolumnie B. Bez patrzenia w kroki.',
      hints: ['Zakres B2:B100.', 'Niestandardowa formuła z $G2.', 'Zmień kolor tekstu, nie tła.']
    },
    discovery: { text: 'Otwórz {{Formatuj}} → {{Formatowanie warunkowe}}: panel pokazuje wszystkie reguły tej karty. Chwyć regułę za kropki z lewej i przeciągnij ją nad inną. Gdy pasują dwie reguły naraz, wygrywa ta wyżej.' },
    journalPrompt: 'Jaki kolor z regułą przydałby Ci się w prawdziwym sklepie?',
    forParent: {
      teaches: 'Formatowanie warunkowe z niestandardową formułą, kolor całego wiersza zależny od jednej kolumny ($H2), kilka reguł i ich kolejność, skala kolorów.',
      ask: 'Zapytaj, po co jest dolar w $H2. Zmień status jednej rzeczy i zapytaj, jaki będzie kolor, zanim spojrzycie.'
    }
  });

  M.push({
    id: 'jezeli',
    title: 'JEŻELI, czyli decyzja w formule',
    subtitle: 'Arkusz mówi „za drogo?” albo „ok”',
    technique: 'JEŻELI',
    minutes: 20,
    why: [
      '`JEŻELI` sprawdza warunek i wybiera jedną z dwóch odpowiedzi. Ma trzy części rozdzielone średnikiem: **warunek; co gdy tak; co gdy nie**.',
      'Dziś Arkusz ocenia każdą cenę: jeśli Twoja cena jest wyższa niż propozycja z misji 5, pisze „za drogo?”. Znak zapytania jest celowy: formuła podpowiada, a decyzję podejmujesz Ty.'
    ],
    realWorld: 'Sklep decyduje formułą, czy dać darmową dostawę od 100 zł. Bank decyduje formułą, czy przelew wygląda podejrzanie. Prawie każda automatyczna decyzja w aplikacji to w środku jakieś JEŻELI.',
    example: {
      intro: 'Kolumna N ocenia cenę każdej rzeczy. Kolumny J i K są jeszcze puste.',
      sheets: [
        { caption: 'Karta „Magazyn”: ocena ceny', fx: { cell: 'N4', text: '=JEŻELI(F4>M4;"za drogo?";"ok")' }, head: true, sel: 'N4', tabs: KARTY, tab: 1,
          marks: { F4: 'blue', M4: 'blue', N4: 'warn', N7: 'warn' }, rows: magazyn({ do: 'N', nry: od(1, 6), puste: ['J', 'K'] }) }
      ],
      note: 'LEGO City: 150 zł przy propozycji 149,50 zł. Różnica 50 groszy, a formuła i tak ją widzi.'
    },
    steps: [
      { text: 'Karta `Magazyn`, w **N1** `Ocena ceny`. W **N2** formuła, potem przeciągnij do **N21**.', copy: '=JEŻELI(F2>M2;"za drogo?";"ok")', tip: 'Tekst w formule zawsze stoi w cudzysłowach prostych. Liczby i adresy nie.' },
      { text: 'Przeczytaj formułę na głos: „jeżeli F2 jest większe od M2, napisz za drogo?, a jeśli nie, napisz ok”. Ile rzeczy jest „za drogo?”? Powinny być trzy: LEGO City, Mario Kart i Minecraft.' },
      { text: 'Zmień na Pulpicie procent w **B9** na `40%`. Wróć do Magazynu: „za drogo?” stoi teraz przy dziewięciu rzeczach. Jedna liczba zmieniła dziewięć podpowiedzi. Ustaw z powrotem `50%`.' },
      { text: 'Twoja decyzja: zmień cenę LEGO City w **F4** na `140`. Ocena zmienia się na „ok”. Wróć do 150 zł ([[Ctrl]] + [[Z]]), bo ta cena przyda się w kolejnych misjach.' },
      { text: 'Kolor dla podpowiedzi: zaznacz **N2:N100**, {{Formatuj}} → {{Formatowanie warunkowe}} → **Formatuj komórki, jeśli** → **Tekst zawiera** → `za drogo` → czerwony tekst → **Gotowe**.' }
    ],
    check: [
      'W kolumnie N są tylko „za drogo?” i „ok”, a „za drogo?” świeci na czerwono.',
      'Przy 50% podpowiedzi „za drogo?” są trzy, przy 40% dziewięć.',
      'Umiesz powiedzieć, które trzy części ma JEŻELI.'
    ],
    variants: [
      { text: 'Trzy odpowiedzi zamiast dwóch: JEŻELI w JEŻELI.', copy: '=JEŻELI(F2>M2;"za drogo?";JEŻELI(F2<M2/2;"za tanio?";"ok"))' },
      { text: 'Pusto zamiast „ok”: dwa cudzysłowy bez niczego w środku.', copy: '=JEŻELI(F2>M2;"za drogo?";"")' },
      { text: 'Warunek na tekst:', copy: '=JEŻELI(H2="sprzedane";"✔";"")' }
    ],
    solo: {
      text: 'W kolumnie **S** (wolnej, daleko w prawo) zrób formułę, która pisze `drogie`, gdy Moja cena jest większa niż 100 zł, a `tanie` w przeciwnym razie. Ile jest drogich rzeczy? Potem skasuj kolumnę S.',
      hints: ['Warunek: F2>100.', 'Tekst w cudzysłowach.', 'Drogich rzeczy są trzy.']
    },
    discovery: { text: 'Pole wyboru jest już gotowym warunkiem, bo w środku jest PRAWDA albo FAŁSZ. Wypróbuj w wolnej komórce:', copy: '=JEŻELI(I2;"są zdjęcia";"zrób zdjęcia")' },
    journalPrompt: 'Jaką decyzję w sklepie mogłoby podejmować za Ciebie JEŻELI?',
    forParent: {
      teaches: 'Funkcja JEŻELI (warunek; co gdy tak; co gdy nie), tekst w cudzysłowach, porównanie dwóch komórek, połączenie z ustawieniem na Pulpicie, kolor z reguły „Tekst zawiera”.',
      ask: 'Poproś, żeby przeczytał formułę z kolumny N na głos. Zapytaj, czy „za drogo?” znaczy, że trzeba obniżyć cenę.'
    }
  });

  M.push({
    id: 'daty',
    title: 'Daty: ile dni do sprzedaży',
    subtitle: 'Odejmowanie dat i JEŻELI na puste komórki',
    technique: 'Daty',
    minutes: 20,
    why: [
      'Dla Arkusza data to liczba dni, więc daty da się odejmować: **data sprzedaży minus data wystawienia** to liczba dni, przez które rzecz czekała na kupującego.',
      'Haczyk: przy niesprzedanych rzeczach data sprzedaży jest pusta i odejmowanie daje bzdury. Naprawisz to JEŻELI z poprzedniej misji: „jeśli pusto, zostaw pusto”.'
    ],
    realWorld: 'Sklepy liczą, ile dni towar leży na półce. Coś, co leży za długo, dostaje przecenę. Ten sam rachunek robią wypożyczalnie i biblioteki, gdy liczą dni spóźnienia.',
    example: {
      intro: 'Kolumny J i K z datami, a w O wynik. Przy niesprzedanych rzeczach O jest puste.',
      sheets: [
        { caption: 'Karta „Magazyn”: dni do sprzedaży', fx: { cell: 'O2', text: '=JEŻELI(K2="";"";K2-J2)' }, head: true, sel: 'O2', tabs: KARTY, tab: 1,
          marks: { O2: 'ok', O3: 'ok', O6: 'ok' }, rows: magazyn({ do: 'O', nry: od(1, 6) }) }
      ],
      note: 'Na Pulpicie średnia z kolumny O wychodzi ' + liczba(ST.sredniDni) + ' dnia. Tyle przeciętnie czekała rzecz na kupującego.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij **J2** i wklej daty: kiedy rzecz wystawiona i kiedy sprzedana. Wskakują w kolumny J i K.', copy: wklej(['J', 'K'], od(1, 20)), tip: 'Daty mają stać po prawej stronie komórki, jak liczby. Jeśli stoją po lewej, plik nie ma regionu Polska (misja 0).' },
      { text: 'Najpierw prosto. W **O1** wpisz `Dni do sprzedaży`, w **O2** odejmij datę wystawienia od daty sprzedaży i przeciągnij do **O21**. Przy sprzedanych rzeczach są małe liczby. Przy reszcie dziwne wyniki, bo pusta komórka liczy się jak zero.', copy: '=K2-J2' },
      { text: 'Naprawa. W **O2** wklej formułę z JEŻELI i przeciągnij do **O21**. Pusta data sprzedaży: zostaw pusto. Jest data: odejmij.', copy: '=JEŻELI(K2="";"";K2-J2)', tip: 'Dwa cudzysłowy bez niczego w środku to „pusto”. Warunek K2="" znaczy „K2 jest puste”.' },
      { text: 'Jeśli zamiast liczb widzisz daty, kliknij literę **O** i ustaw {{Formatuj}} → {{Liczba}} → {{Liczba}}. Potem zmniejsz miejsca po przecinku ikoną `.0` na pasku narzędzi.' },
      { text: 'Na **Pulpicie** w **A11** wpisz `Sprzedaż` (pogrub), w **A12** `Średnio dni do sprzedaży`, a w **B12** średnią z kolumny O.', copy: '=ŚREDNIA(Magazyn!O2:O100)', tip: 'ŚREDNIA pomija puste komórki, więc liczy tylko sprzedane rzeczy.' }
    ],
    check: [
      'Daty w J i K stoją po prawej stronie komórek.',
      'W kolumnie O liczby są tylko przy sprzedanych rzeczach.',
      'Na Pulpicie w B12 jest ' + liczba(ST.sredniDni) + '.'
    ],
    variants: [
      { text: 'Ile dni wisi ogłoszenie, licząc do dziś? `DZIŚ()` to dzisiejsza data. W wolnej kolumnie (np. T), przeciągnij:', copy: '=JEŻELI(J2="";"";DZIŚ()-J2)' },
      { text: 'W jaki dzień tygodnia rzecz się sprzedała? Cztery litery d to pełna nazwa dnia:', copy: '=JEŻELI(K2="";"";TEKST(K2;"dddd"))' },
      { text: 'Podpowiedź do obniżki: wystawione i wiszą dłużej niż 14 dni. ORAZ sprawdza dwa warunki naraz:', copy: '=JEŻELI(ORAZ(H2="wystawione";DZIŚ()-J2>14);"obniż cenę?";"")' }
    ],
    solo: {
      text: 'W kolumnie **T** wypisz dzień tygodnia sprzedaży, tylko przy sprzedanych rzeczach (pomoże drugi wariant z „Spróbuj też”). W które dni sprzedało się najwięcej? Potem skasuj kolumnę T.',
      hints: ['JEŻELI na pustą komórkę K, w środku TEKST.', 'Wychodzą piątki i wtorki, po dwa razy.']
    },
    discovery: { text: 'Wpisz w wolnej komórce `=DZIŚ()`. Otwórz plik jutro: data będzie inna, bo DZIŚ() idzie z czasem. A [[Ctrl]] + [[;]] wstawia datę na stałe. Datę sprzedaży wpisuj zawsze skrótem.' },
    journalPrompt: 'Ile dni średnio czekała rzecz na kupującego i czy to dużo?',
    forParent: {
      teaches: 'Data jako liczba dni, odejmowanie dat, JEŻELI chroniące przed pustą komórką, format liczby, ŚREDNIA pomijająca puste, DZIŚ() kontra Ctrl + ; na stałe.',
      ask: 'Zapytaj, dlaczego zwykłe odejmowanie dawało bzdury przy niesprzedanych rzeczach i jak to naprawił.'
    }
  });

  M.push({
    id: 'licz-jezeli',
    title: 'Liczenie z warunkiem',
    subtitle: 'LICZ.JEŻELI i SUMA.JEŻELI: ile sprzedane i ile zarobione',
    technique: 'LICZ.JEŻELI i SUMA.JEŻELI',
    minutes: 20,
    why: [
      '`LICZ.JEŻELI` liczy tylko te wiersze, które pasują: na przykład ile rzeczy ma status „sprzedane”. `SUMA.JEŻELI` dodaje ceny tylko z pasujących wierszy: ile pieniędzy dały sprzedane rzeczy.',
      'To najważniejsze formuły Pulpitu. Odpowiadają na pytania, które zadaje sobie każdy sprzedawca: ile już poszło, ile zarobiłem, w której kategorii jest najwięcej pieniędzy.'
    ],
    realWorld: 'Kierowniczka sklepu sprawdza co wieczór, ile sprzedało się butów, a ile kurtek. W arkuszu to jedna SUMA.JEŻELI na każdą kategorię. Trener liczy LICZ.JEŻELI, ile treningów opuścił każdy zawodnik.',
    example: {
      intro: 'Pulpit po tej misji: blok „Sprzedaż” w kolumnie A i tabelka kategorii obok.',
      sheets: [
        { caption: 'Karta „Pulpit”', fx: { cell: 'B14', text: '=SUMA.JEŻELI(Magazyn!H2:H100;"sprzedane";Magazyn!F2:F100)' }, sel: 'B14', tabs: KARTY, tab: 3,
          marks: { A1: 'head', A8: 'head', A11: 'head', D1: 'head', E1: 'head', F1: 'head', B13: 'ok', B14: 'ok', B15: 'ok', E2: 'ok', E3: 'ok', E4: 'ok', E5: 'ok', F2: 'ok', F3: 'ok', F4: 'ok', F5: 'ok' },
          rows: pulpit(15, { kategorie: true }) }
      ],
      note: 'Suma kolumny E to ' + zl(ST.suma) + ', tyle samo co „Wartość wszystkiego” w B3. To sprawdzenie, że żadna rzecz nie zgubiła się po drodze.'
    },
    steps: [
      { text: 'Na **Pulpicie** w **A13** wpisz `Sprzedane rzeczy`, a w **B13**:', copy: '=LICZ.JEŻELI(Magazyn!H2:H100;"sprzedane")', tip: 'Warunek w cudzysłowie musi być napisany dokładnie tak jak w menu statusu. Dlatego menu z misji 7 jest takie ważne.' },
      { text: 'W **A14** `Zarobione`, a w **B14** suma cen tylko sprzedanych rzeczy. Trzy części: gdzie szukać; czego szukać; co dodawać.', copy: '=SUMA.JEŻELI(Magazyn!H2:H100;"sprzedane";Magazyn!F2:F100)' },
      { text: 'W **A15** `Wystawione`, a w **B15** policz rzeczy ze statusem `wystawione`. Napisz formułę sam, na wzór B13.', tip: 'Możesz skopiować tekst formuły z paska nad siatką (zaznacz go, [[Ctrl]] + [[C]]), wkleić w B15 i zmienić jedno słowo.' },
      { text: 'Tabelka kategorii. Kliknij **D1** i wklej.', copy: 'Kategoria\tWartość\tIle\n' + KATEGORIE.join('\n') },
      { text: 'W **E2** suma cen jednej kategorii, przeciągnij do **E5**. Dolary przy zakresach, bo przeciągasz.', copy: '=SUMA.JEŻELI(Magazyn!C$2:C$100;D2;Magazyn!F$2:F$100)', tip: 'Tu warunkiem jest komórka D2, a nie napis w cudzysłowie. Po przeciągnięciu w E3 warunkiem jest D3, czyli zabawki.' },
      { text: 'W **F2** liczba rzeczy w kategorii, przeciągnij do **F5**. Potem zmień w Magazynie status rzeczy numer 4 na `sprzedane` i patrz na B13 i B14. Cofnij.', copy: '=LICZ.JEŻELI(Magazyn!C$2:C$100;D2)' }
    ],
    check: [
      'B13 = ' + ST.sprzedane + ', B14 = ' + zl(ST.zarobione) + ', B15 = ' + ST.wystawione + '.',
      'W tabelce kategorii najwięcej warte są zabawki: ' + zl(sumaGdzie('C', 'zabawki')) + '.',
      'Suma kolumny E zgadza się z „Wartość wszystkiego” w B3.'
    ],
    variants: [
      { text: 'Porównanie w cudzysłowie. Ile rzeczy kosztuje więcej niż 100 zł?', copy: '=LICZ.JEŻELI(Magazyn!F2:F100;">100")' },
      { text: 'Ile rzeczy nie ma zdjęć? Odhaczone pole to PRAWDA, puste to FAŁSZ:', copy: '=LICZ.JEŻELI(Magazyn!I2:I100;FAŁSZ)' },
      { text: 'Średnia cena w kategorii:', copy: '=ŚREDNIA.JEŻELI(Magazyn!C$2:C$100;D2;Magazyn!F$2:F$100)' }
    ],
    solo: {
      text: 'W **A16** wpisz `W domu (wartość)`, a w **B16** policz, ile są warte rzeczy, które jeszcze leżą w domu. Bez kopiowania.',
      hints: ['SUMA.JEŻELI, warunek "w domu".', 'Wychodzi ' + zl(sumaGdzie('H', 'w domu')) + '.']
    },
    discovery: { text: 'Gwiazdka w warunku zastępuje dowolny ciąg liter. Ile masz rzeczy, których nazwa zaczyna się od LEGO?', copy: '=LICZ.JEŻELI(Magazyn!B2:B100;"LEGO*")' },
    journalPrompt: 'Która liczba z Pulpitu najbardziej Cię ciekawi i dlaczego?',
    parent: 'Pokaż rodzicowi Pulpit: ile sprzedane, ile zarobione, która kategoria warta najwięcej. Poproś, żeby zmienił status jednej rzeczy, i pokaż, jak Pulpit to łapie.',
    forParent: {
      teaches: 'LICZ.JEŻELI i SUMA.JEŻELI z warunkiem tekstowym i z warunkiem w komórce, pinezki na zakresach przy przeciąganiu, sprawdzanie wyniku drugą drogą (suma kategorii = wartość wszystkiego).',
      ask: 'Zapytaj, skąd wie, że wynik jest dobry. Dobra odpowiedź: suma kategorii zgadza się z wartością wszystkiego.'
    }
  });

  M.push({
    id: 'wykres',
    title: 'Wykres w minutę',
    subtitle: 'Kolumny czy koło: jak pokazać liczby obrazkiem',
    technique: 'Wykres',
    minutes: 20,
    why: [
      'Tabelka kategorii z Pulpitu jest dobra, ale wykres pokazuje to samo w sekundę: która kategoria jest warta najwięcej, widać po wysokości kolumn.',
      'Typ wykresu dobierasz do pytania. **Kolumnowy** porównuje: która kategoria większa. **Kołowy** pokazuje części całości: jaka część wartości jest na Vinted, a jaka na OLX. **Liniowy** pokazuje zmianę w czasie.'
    ],
    realWorld: 'Na każdym zebraniu w firmie ktoś pokazuje wykres sprzedaży. Rzadko kto rysuje go ręcznie: zaznacza się tabelkę i Wstaw → Wykres, dokładnie tak jak Ty dziś.',
    example: {
      intro: 'Dane do dwóch wykresów: kategorie w D1:E5 i nowa tabelka platform w H1:I3. Zaznaczasz je razem z nagłówkami.',
      sheets: [
        { caption: 'Karta „Pulpit”: tabelki pod wykresy', tabs: KARTY, tab: 3,
          marks: { D1: 'blue', E1: 'blue', D2: 'blue', E2: 'blue', D3: 'blue', E3: 'blue', D4: 'blue', E4: 'blue', D5: 'blue', E5: 'blue', H1: 'blue', I1: 'blue', H2: 'blue', I2: 'blue', H3: 'blue', I3: 'blue' },
          rows: pulpit(5, { platformy: true }) }
      ],
      note: 'Na OLX jest mniej rzeczy, ale są droższe, więc w kole OLX zajmie większy kawałek.'
    },
    steps: [
      { text: 'Na **Pulpicie** zaznacz **D1:E5**: Kategoria i Wartość, razem z nagłówkiem. Menu {{Wstaw}} → {{Wykres}}. Wykres wskakuje na arkusz, a po prawej otwiera się **Edytor wykresów**.' },
      { text: 'W zakładce **Konfiguracja** sprawdź **Typ wykresu**. Ma być **Wykres kolumnowy**. Jeśli Arkusz wybrał inny, zmień go z listy.' },
      { text: 'Zakładka **Dostosuj** → **Tytuły wykresu i osi**, tytuł `Wartość rzeczy w kategoriach`. Chwyć wykres myszką i przesuń go pod tabelki.', tip: 'Edytor się zamknął? Kliknij dwa razy na wykres, wraca.' },
      { text: 'Tabelka platform. Kliknij **H1** i wklej.', copy: 'Platforma\tWartość\nVinted\nOLX' },
      { text: 'W **I2** wartość rzeczy na jednej platformie, przeciągnij do **I3**.', copy: '=SUMA.JEŻELI(Magazyn!G$2:G$100;H2;Magazyn!F$2:F$100)' },
      { text: 'Zaznacz **H1:I3**, {{Wstaw}} → {{Wykres}}, typ **Wykres kołowy**. Potem zmień w Magazynie platformę rzeczy numer 3 na Vinted i wróć: kawałek koła urósł. Cofnij.' }
    ],
    check: [
      'Wykres kolumnowy ma tytuł i najwyższa kolumna to zabawki.',
      'Wykres kołowy pokazuje Vinted i OLX.',
      'Zmiana w Magazynie zmienia wykresy bez Twojej pomocy.'
    ],
    variants: [
      { text: 'Liczby na kolumnach: {{Dostosuj}} → {{Seria}} → zaznacz **Etykiety danych**.' },
      { text: 'Wykres słupkowy to kolumnowy położony na boku. Lepszy, gdy nazwy są długie.' },
      { text: 'Wykres na osobnej karcie: trzy kropki w rogu wykresu → przenieś do własnego arkusza. Duży i czysty.' }
    ],
    solo: {
      text: 'Zrób wykres kolumnowy z kolumn **D** i **F**: ile rzeczy jest w każdej kategorii. Której kategorii masz najwięcej?',
      hints: ['Zaznacz D1:D5, przytrzymaj Ctrl i zaznacz F1:F5.', 'Najwięcej jest zabawek.']
    },
    discovery: { text: 'Kliknij wykres, potem trzy kropki w jego rogu → **Pobierz** → obraz PNG. Masz obrazek, który możesz wysłać rodzicowi.' },
    journalPrompt: 'Który wykres lepiej pokazuje Twój sklep: kolumny czy koło?',
    forParent: {
      teaches: 'Wykres z zaznaczenia z nagłówkiem, Edytor wykresów (Konfiguracja, Dostosuj), dobór typu do pytania: kolumnowy porównuje, kołowy pokazuje części całości. Wykres aktualizuje się sam.',
      ask: 'Zapytaj, dlaczego platformy są na kole, a kategorie na kolumnach. Zmień jedną cenę i niech zgadnie, co się stanie z wykresem.'
    }
  });

  M.push({
    id: 'sklejanie',
    title: 'Sklejanie tekstu',
    subtitle: 'Tytuł i opis ogłoszenia składają się same',
    technique: 'Sklejanie tekstu',
    minutes: 15,
    why: [
      'Znak `&` skleja kawałki w jeden napis: tekst z komórek i Twoje słowa w cudzysłowach. `=B2&" - stan "&D2` daje „Harry Potter i Kamień Filozoficzny - stan dobry”.',
      'Dzięki temu masz gotowy tytuł i opis ogłoszenia dla każdej rzeczy. Kopiujesz komórkę i wklejasz na Vinted albo OLX.'
    ],
    realWorld: 'Duże sklepy internetowe nie piszą opisów ręcznie dla dziesięciu tysięcy produktów. Mają szablon i formułę, która wstawia nazwę, rozmiar i kolor. Maile „Cześć, Kasia!” od sklepów robi się tak samo.',
    example: {
      intro: 'Kolumny P i Q liczą się z kolumn B, D i F.',
      sheets: [
        { caption: 'Karta „Magazyn”: tytuł i opis z formuł', fx: { cell: 'Q3', text: '="Sprzedam: "&B3&". Stan: "&D3&". Cena: "&F3&" zł."' }, head: true, sel: 'Q3', tabs: KARTY, tab: 1,
          marks: { P2: 'ok', P3: 'ok', P4: 'ok', Q2: 'ok', Q3: 'ok', Q4: 'ok' }, rows: magazyn({ do: 'Q', nry: od(1, 3) }) }
      ],
      note: 'Zmienisz stan albo cenę w Magazynie, a tytuł i opis poprawią się same.'
    },
    steps: [
      { text: 'Karta `Magazyn`, w **P1** `Tytuł`. W **P2** formuła, przeciągnij do **P21**.', copy: '=B2&" - stan "&D2', tip: 'Spacje też stoją w cudzysłowach. Bez nich wyjdzie „Hulajnoga- stanślady użycia”.' },
      { text: 'W **Q1** `Opis`. W **Q2** formuła, przeciągnij do **Q21**.', copy: '="Sprzedam: "&B2&". Stan: "&D2&". Cena: "&F2&" zł."' },
      { text: 'Opis jest dłuższy niż komórka. Kliknij literę **Q**, {{Formatuj}} → {{Zawijanie tekstu}} → {{Zawijaj}}. Tekst łamie się w kilka linijek.' },
      { text: 'Kliknij **Q3**, [[Ctrl]] + [[C]] i wklej w dowolne pole tekstowe poza Arkuszem, np. w wyszukiwarkę. Wkleja się gotowy tekst, a nie formuła. Tak przeniesiesz opis do ogłoszenia. Skasuj go z wyszukiwarki.' },
      { text: 'Długość tytułu: w wolnej komórce sprawdź, ile znaków ma tytuł Harry Pottera. Krótszy tytuł widać w całości na liście ogłoszeń.', copy: '=DŁ(P2)' }
    ],
    check: [
      'Każda rzecz ma tytuł i opis, a nikt ich nie przepisywał ręcznie.',
      'Spacje i kropki są tam, gdzie trzeba.',
      'Skopiowany opis wkleja się poza Arkuszem jako zwykły tekst.'
    ],
    variants: [
      { text: 'O ile taniej niż nowa, zaokrąglone do złotówek:', copy: '="Taniej o "&ZAOKR(L2;0)&" zł niż nowa!"' },
      { text: 'Nazwa drukowanymi literami:', copy: '=LITERY.WIELKIE(B2)' },
      { text: 'Hasztag z kategorią:', copy: '="#"&C2' }
    ],
    solo: {
      text: 'Popraw formułę opisu tak, żeby kończyła się zdaniem z kategorią, np. „Kategoria: gry.”. Przeciągnij od nowa.',
      hints: ['Dopisz na końcu &" Kategoria: "&C2&"."', 'Uważaj na cudzysłowy: każdy otwarty musi się zamknąć.']
    },
    discovery: { text: 'Skopiuj **P2**, kliknij wolną komórkę i wciśnij [[Ctrl]] + [[Shift]] + [[V]]. Wkleja się sam tekst, bez formuły. Przydaje się, gdy chcesz potem poprawić opis ręcznie.' },
    journalPrompt: 'Jaki tytuł ogłoszenia przyciągnąłby Twoją uwagę?',
    forParent: {
      teaches: 'Sklejanie tekstu znakiem &, spacje i znaki w cudzysłowach, zawijanie tekstu, DŁ, kopiowanie wyniku formuły jako tekstu, wklejanie samych wartości.',
      ask: 'Poproś, żeby skopiował opis jednej rzeczy do wiadomości do Ciebie. Zapytaj, co się stanie z opisem, gdy zmieni cenę.'
    }
  });

  /* =========================================================================================
     Rozdział 3. Centrum analiz
     ========================================================================================= */
  var NRY_CEN = Object.keys(CENY).map(Number);
  M.push({
    id: 'ceny',
    title: 'Ceny z rynku',
    subtitle: 'Karta Ceny: MIN, MAX i MEDIANA z podobnych ogłoszeń',
    technique: 'Funkcje w wierszu',
    minutes: 20,
    why: [
      'Połowa ceny nowej to dobry start, ale prawdziwą cenę mówi rynek: za ile ludzie wystawiają taką samą rzecz. Na karcie **Ceny** zapisujesz po pięć cen podobnych ogłoszeń i liczysz najniższą, najwyższą i środkową.',
      '**MEDIANA** to wartość środkowa: ustawiasz ceny od najmniejszej i bierzesz tę w środku. Jedno dziwnie drogie ogłoszenie nie zawyża jej tak jak średniej. Dlatego do wyceny lepsza jest mediana.'
    ],
    realWorld: 'Pośrednicy od mieszkań i rzeczoznawcy samochodów robią to samo: zbierają ceny podobnych ofert i patrzą na środek, a nie na najdroższą. „Mediana zarobków” w wiadomościach to ten sam pomysł.',
    example: {
      intro: 'Karta Ceny: pięć cen z ogłoszeń w kolumnach C–G, a w H–J trzy formuły.',
      sheets: [
        { caption: 'Karta „Ceny”', fx: { cell: 'J2', text: '=MEDIANA(C2:G2)' }, head: true, sel: 'J2', tabs: KARTY.concat(['Ceny']), tab: 4,
          marks: { G2: 'note', J2: 'ok', J3: 'ok', J4: 'ok', J5: 'ok', J6: 'ok', J7: 'ok' }, rows: ceny(NRY_CEN) }
      ],
      note: 'LEGO City: średnia z pięciu cen to 150,80 zł, a mediana 140 zł. Średnią podbiło jedno ogłoszenie za 199 zł (żółte).'
    },
    steps: [
      { text: 'Nowa karta `Ceny`. Kliknij **A1** i wklej: pięć cen podobnych ogłoszeń dla sześciu rzeczy z Magazynu.',
        copy: 'Nr\tRzecz\tCena 1\tCena 2\tCena 3\tCena 4\tCena 5\tNajniżej\tNajwyżej\tMediana\n' + NRY_CEN.map(function (nr) { return [nr, RZECZY[nr - 1][1]].concat(CENY[nr]).join('\t'); }).join('\n'),
        tip: 'Nr musi być taki sam jak w Magazynie. Po numerze Arkusz połączy obie karty w następnej misji.' },
      { text: 'W **H2** najniższa cena z wiersza, przeciągnij do **H7**.', copy: '=MIN(C2:G2)', tip: 'Zakres może iść w bok: C2:G2 to pięć komórek w wierszu 2.' },
      { text: 'W **I2** najwyższa, przeciągnij do **I7**.', copy: '=MAX(C2:G2)' },
      { text: 'W **J2** mediana, przeciągnij do **J7**. Potem zaznacz kolumny od **C** do **J** i ustaw walutę.', copy: '=MEDIANA(C2:G2)' },
      { text: 'Mediana czy średnia? W **K2** policz średnią dla LEGO City: wychodzi 150,80 zł, a mediana to 140 zł. Którą cenę byś wybrał? Skasuj K2.', copy: '=ŚREDNIA(C2:G2)' }
    ],
    check: [
      'W kolumnie J są mediany: ' + NRY_CEN.map(function (nr) { return zl(mediana(CENY[nr])); }).join(', ') + '.',
      'Umiesz powiedzieć, dlaczego jedno bardzo drogie ogłoszenie zmienia średnią bardziej niż medianę.',
      'Kolumna Nr ma te same numery co w Magazynie.'
    ],
    variants: [
      { text: 'Ile cen udało się znaleźć? Przydatne, gdy przy jakiejś rzeczy wpiszesz mniej niż pięć:', copy: '=ILE.LICZB(C2:G2)' },
      { text: 'Cena na szybką sprzedaż, o 10% niżej niż mediana:', copy: '=MEDIANA(C2:G2)*0,9' },
      { text: 'Mediana zaokrąglona do pełnych dziesiątek: minus jeden w ZAOKR znaczy „do dziesiątek”.', copy: '=ZAOKR(MEDIANA(C2:G2);-1)' }
    ],
    solo: {
      text: 'Prawdziwa wycena. Wybierz jedną swoją rzecz z karty Pomysły. Znajdź na Vinted albo OLX pięć podobnych ogłoszeń (do oglądania nie trzeba konta) i wpisz ich ceny w wierszu 8 karty Ceny, z numerem 21. Przeciągnij formuły z wiersza 7. Ile wychodzi mediana? Jeśli zabraknie czasu, dokończ następnego dnia.',
      hints: ['Szukaj tej samej rzeczy w podobnym stanie.', 'Formuły z H7:J7 przeciągnij o jeden wiersz w dół.']
    },
    discovery: { text: 'Kliknij pustą komórkę i wpisz `=MEDIANA(`. Arkusz pokazuje dymek z opisem funkcji i przykładem. Tak poznasz każdą funkcję, której nie było w Akademii. Wciśnij [[Esc]].' },
    journalPrompt: 'Czy mediana z rynku jest wyższa, czy niższa niż Twoja cena?',
    forParent: {
      teaches: 'Druga karta z danymi, funkcje na zakresie w wierszu (MIN, MAX, MEDIANA), różnica między średnią a medianą, podpowiedzi funkcji w Arkuszu jako źródło wiedzy.',
      ask: 'Zapytaj, dlaczego do wyceny lepsza jest mediana niż średnia. Poproś, żeby pokazał wycenę swojej prawdziwej rzeczy.'
    }
  });

  M.push({
    id: 'karty',
    title: 'Karty gadają ze sobą',
    subtitle: 'WYSZUKAJ.PIONOWO przynosi cenę z rynku do Magazynu',
    technique: 'WYSZUKAJ.PIONOWO',
    minutes: 20,
    why: [
      'Ceny z rynku są na karcie Ceny, a rzeczy w Magazynie. `WYSZUKAJ.PIONOWO` łączy je po numerze: bierze Nr z Magazynu, szuka go w pierwszej kolumnie Cen i przynosi medianę z tego samego wiersza.',
      'Cztery części: **czego szukam; gdzie szukam; którą kolumnę przynieść; FAŁSZ**. FAŁSZ znaczy „tylko dokładnie ten numer”.'
    ],
    realWorld: 'Kasa w sklepie robi to przy każdym piknięciu: kod z etykiety idzie do cennika, a cennik oddaje nazwę i cenę. Kasjer nie pamięta tysięcy cen, pamięta je tabela.',
    example: {
      intro: 'Kolumna R w Magazynie. Przy rzeczach, których nie ma na karcie Ceny, zostaje pusto.',
      sheets: [
        { caption: 'Karta „Magazyn”: cena z rynku przyszła z karty Ceny', fx: { cell: 'R4', text: '=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(A4;Ceny!A:J;10;FAŁSZ);"")' }, head: true, sel: 'R4', tabs: KARTY.concat(['Ceny']), tab: 1,
          marks: { F4: 'blue', R4: 'ok', F5: 'blue', R5: 'ok' }, rows: magazyn({ do: 'R', nry: od(2, 5) }) }
      ],
      note: 'LEGO City masz za 150 zł, a rynek mówi 140 zł. Auto: 50 zł przy rynku 45 zł. Teraz widać to w jednym wierszu.'
    },
    steps: [
      { text: 'Karta `Magazyn`, w **R1** `Na rynku`. W **R2** formuła, przeciągnij do **R21**.', copy: '=WYSZUKAJ.PIONOWO(A2;Ceny!A:J;10;FAŁSZ)', tip: '`Ceny!A:J` to kolumny od A do J na karcie Ceny. Mediana jest w J, a J to dziesiąta litera alfabetu w nagłówkach: A1, B2, C3... J10. Stąd 10.' },
      { text: 'Przy rzeczach 3, 4, 7, 12, 14 i 18 są ceny z rynku. Przy reszcie jest `#N/A`, czyli „nie znaleziono”: tych numerów nie ma na karcie Ceny. To nie błąd w formule, tylko brak danych.' },
      { text: 'Zamień `#N/A` na pusto: owiń formułę w JEŻELI.BŁĄD. Wklej w **R2** i przeciągnij do **R21**.', copy: '=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(A2;Ceny!A:J;10;FAŁSZ);"")' },
      { text: 'Nowa wycena. Na karcie **Ceny** kliknij **A8** i wklej rzecz numer 6. Przeciągnij formuły z **H7:J7** o wiersz w dół. Wróć do Magazynu: przy Mario Kart pojawiło się 130 zł.', copy: ['6', RZECZY[5][1]].concat(CENY_NR_6).join('\t') },
      { text: 'Porównaj kolumny **F** i **R**. Mario Kart masz za 140 zł, a rynek mówi 130 zł. Przy której rzeczy obniżyłbyś cenę, a przy której zostawił?' }
    ],
    check: [
      'W kolumnie R jest siedem cen z rynku, a przy reszcie pusto.',
      'Nowy wiersz na karcie Ceny od razu pojawił się w Magazynie.',
      'Umiesz powiedzieć, co znaczy 10 w formule i co znaczy #N/A.'
    ],
    variants: [
      { text: 'Nowsza kuzynka, bez liczenia kolumn: czego szukam; gdzie szukać; co przynieść.', copy: '=XLOOKUP(A2;Ceny!A:A;Ceny!J:J)' },
      { text: 'W drugą stronę: na karcie Ceny nazwa rzeczy może przychodzić z Magazynu sama. W **B2** Cen:', copy: '=WYSZUKAJ.PIONOWO(A2;Magazyn!A:B;2;FAŁSZ)' },
      { text: 'Kolor, gdy Twoja cena jest wyższa niż rynek: reguła na zakresie `F2:F100`, niestandardowa formuła:', copy: '=ORAZ($R2<>"";$F2>$R2)' }
    ],
    solo: {
      text: 'W kolumnie **S** Magazynu przynieś z karty Ceny najniższą cenę (kolumna H). Jaką liczbę wpiszesz zamiast 10? Potem skasuj kolumnę S.',
      hints: ['Policz litery: A1, B2... H to która?', 'Owiń w JEŻELI.BŁĄD, żeby nie było #N/A.']
    },
    discovery: { text: 'Prawy przycisk na karcie **Ceny** na dole ekranu → **Zmień kolor**. Pokoloruj karty: dane na niebiesko, Pulpit na zielono. W dużym pliku od razu wiesz, gdzie co jest.' },
    journalPrompt: 'Przy której rzeczy rynek najbardziej różni się od Twojej ceny?',
    forParent: {
      teaches: 'WYSZUKAJ.PIONOWO po numerze (czego szukam; gdzie; która kolumna; FAŁSZ), znaczenie #N/A, JEŻELI.BŁĄD, dopisywanie danych, które od razu trafiają do drugiej karty.',
      ask: 'Zapytaj, co znaczy #N/A i dlaczego to nie jest błąd w formule. Poproś, żeby pokazał, skąd się wzięło 10.'
    }
  });

  M.push({
    id: 'przestawna',
    title: 'Tabela przestawna liczy za Ciebie',
    subtitle: 'Podsumowania z Magazynu w kilka kliknięć, bez formuł',
    technique: 'Tabela przestawna',
    minutes: 20,
    why: [
      'Na Pulpicie każdą liczbę liczy osobna formuła. **Tabela przestawna** robi podsumowania bez pisania: wybierasz, po czym grupować (kategoria, platforma), co liczyć (suma cen, liczba rzeczy) i co odfiltrować (tylko sprzedane).',
      'Jedna zmiana w edytorze i z tej samej tabeli dostajesz zupełnie inną odpowiedź. To najszybszy sposób, żeby zadać danym nowe pytanie.'
    ],
    realWorld: 'Analitycy w sklepach internetowych codziennie przestawiają takie tabele: sprzedaż według miast, dni tygodnia, kategorii. Wiele raportów to w środku jedna tabela przestawna.',
    example: {
      intro: 'Najpierw wszystkie rzeczy według kategorii. Potem filtr „tylko sprzedane” i platforma zamiast kategorii.',
      sheets: [
        { caption: 'Karta „Analiza”: wartość i liczba rzeczy w kategoriach', head: true, marks: { A6: 'head', B6: 'head', C6: 'head' },
          rows: [['Kategoria', 'SUMA z Moja cena', 'ILE.LICZB z Nr']].concat(KATEGORIE.slice().sort().map(function (k) { return [k, zl(sumaGdzie('C', k)), String(ileGdzie('C', k))]; }), [['Suma końcowa', zl(ST.suma), String(ST.ile)]]) },
        { caption: 'Filtr: Status = sprzedane, w wierszach Platforma', head: true, marks: { A4: 'head', B4: 'head', C4: 'head' },
          rows: [['Platforma', 'SUMA z Moja cena', 'ILE.LICZB z Nr']].concat(['OLX', 'Vinted'].map(function (p) { var s = W.filter(function (w) { return w.G === p && w.H === 'sprzedane'; }); return [p, zl(suma(s.map(function (w) { return w.F; }))), String(s.length)]; }), [['Suma końcowa', zl(ST.zarobione), String(ST.sprzedane)]]) }
      ],
      note: 'Tabela przestawna nie zmienia Twoich danych. To osobny widok na nowej karcie, który aktualizuje się sam. Dlatego jako źródło zaznaczasz całe kolumny.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Zaznacz całe kolumny od **A** do **R**: kliknij literę A, przytrzymaj [[Shift]], kliknij R. Menu {{Wstaw}} → {{Tabela przestawna}} → **Nowy arkusz** → **Utwórz**. Nazwij nową kartę `Analiza`.', tip: 'Całe kolumny, a nie A1:R21. Wtedy nowe rzeczy dopisane w Magazynie same trafią do tabeli przestawnej.' },
      { text: 'W **Edytorze tabeli przestawnej** po prawej: przy **Wiersze** kliknij **Dodaj** → **Kategoria**. Przy **Wartości** kliknij **Dodaj** → **Moja cena**. Masz wartość każdej kategorii bez jednej formuły.' },
      { text: 'Jeszcze raz **Wartości** → **Dodaj** → **Nr**, a w tym polu zmień **Podsumuj według** na **ILE.LICZB** (po angielsku **COUNT**). To liczba rzeczy w kategorii. Porównaj z tabelką kategorii na Pulpicie: zgadza się?' },
      { text: 'Przy **Filtry** kliknij **Dodaj** → **Status**. Zostaw zaznaczone tylko `sprzedane`, **OK**. Teraz tabela pokazuje, ile zarobiłeś w każdej kategorii.' },
      { text: 'Inne pytanie: przy **Wiersze** kliknij **X** obok Kategoria i dodaj **Platforma**. Na której platformie zarobiłeś więcej?' },
      { text: 'Zmień w Magazynie status rzeczy numer 3 na `sprzedane` i wróć na kartę Analiza: liczby zmieniły się same. Cofnij zmianę.' }
    ],
    check: [
      'Bez filtra suma końcowa to ' + zl(ST.suma) + ' i ' + ST.ile + ' rzeczy, tak samo jak na Pulpicie.',
      'Z filtrem „sprzedane” suma końcowa to ' + zl(ST.zarobione) + ', tyle co „Zarobione” na Pulpicie.',
      'Wiesz, gdzie w edytorze są Wiersze, Wartości i Filtry.'
    ],
    variants: [
      { text: 'Krzyżówka: przy **Kolumny** dodaj **Status**. Widzisz każdą kategorię w każdym statusie naraz.' },
      { text: 'Średnia zamiast sumy: przy Moja cena zmień **Podsumuj według** na **ŚREDNIA** (AVERAGE). W której kategorii rzeczy są najdroższe?' },
      { text: 'Wykres z tabeli przestawnej: zaznacz ją i {{Wstaw}} → {{Wykres}}. Wykres podsumowania, który sam się aktualizuje.' }
    ],
    solo: {
      text: 'Zrób drugą tabelę przestawną z Magazynu, na nowym arkuszu: ile rzeczy jest w każdym statusie i ile są warte. Bez patrzenia w kroki.',
      hints: ['Wiersze: Status.', 'Wartości: Moja cena (SUMA) i Nr (ILE.LICZB).', 'W domu leżą rzeczy warte ' + zl(sumaGdzie('H', 'w domu')) + '.']
    },
    discovery: { text: 'Kliknij dwa razy dowolną liczbę w tabeli przestawnej. Arkusz otwiera nową kartę z wierszami, z których ta liczba powstała. Gdy coś się nie zgadza, tak sprawdzisz, skąd się wzięło. Kartę potem skasuj (prawy przycisk na karcie → Usuń).' },
    journalPrompt: 'Jakie pytanie do swojego sklepu zadałbyś tabeli przestawnej?',
    forParent: {
      teaches: 'Tabela przestawna z całych kolumn: Wiersze, Wartości (SUMA, ILE.LICZB), Filtry, zamiana pola na inne, porównanie wyniku z formułami na Pulpicie.',
      ask: 'Zadaj mu pytanie, na które odpowie tabela przestawna: „ile zarobiłeś na książkach?”. Niech pokaże, jak zmienić tabelę, żeby odpowiedzieć.'
    }
  });

  var WIEDZA = [
    ['zdjęcia', 'Zdjęcia w dzień, przy oknie, na jasnym tle. Bez lampy błyskowej.', 'tata'],
    ['ceny', 'Zanim wystawisz, sprawdź pięć podobnych ogłoszeń i weź medianę.', 'Akademia'],
    ['pakowanie', 'Książki w kopertę bąbelkową, gry i klocki w karton.', 'mama'],
    ['rozmowa', 'Odpisuj w czacie platformy, krótko i grzecznie.', 'Akademia'],
    ['uwaga', 'Nie klikaj w linki od kupujących i nikomu nie podawaj danych karty.', 'Akademia'],
    ['ceny', 'Komplet sprzedaje się lepiej niż pojedyncze tomy.', 'wujek']
  ];
  M.push({
    id: 'wiedza',
    title: 'Baza wiedzy',
    subtitle: 'Karta z radami: długi tekst, linki i szukanie',
    technique: 'Tekst w arkuszu',
    minutes: 20,
    why: [
      'Arkusz to nie tylko liczby. Karta **Wiedza** zbiera rady, które przydają się przy sprzedaży: jak robić zdjęcia, jak pakować, na co uważać. Jedna rada w jednym wierszu, z tematem z menu, żeby dało się ją znaleźć filtrem.',
      'Dziś uczysz się pracy z tekstem: zawijanie długich zdań, linki w komórkach i szukanie. Zbierasz też pierwsze rady od dorosłych, którzy już coś sprzedawali.'
    ],
    realWorld: 'Działy obsługi klienta mają takie bazy: setki odpowiedzi na typowe pytania, z tematem i linkiem. Nowa osoba w pracy nie musi wszystkiego pamiętać, tylko umieć szukać.',
    example: {
      intro: 'Karta Wiedza z zawiniętym tekstem w kolumnie B.',
      sheets: [
        { caption: 'Karta „Wiedza”', head: true, sel: 'D3', tabs: KARTY.concat(['Ceny', 'Analiza', 'Wiedza']), tab: 6,
          rows: [['Temat', 'Rada', 'Od kogo', 'Link']].concat(WIEDZA.map(function (w, i) { return w.concat([i === 1 ? 'Vinted' : '']); })) }
      ],
      note: 'W D3 jest link: tekst „Vinted”, a pod spodem adres strony. Kliknięcie komórki pokazuje okienko z linkiem do otwarcia.'
    },
    steps: [
      { text: 'Nowa karta `Wiedza`. Kliknij **A1** i wklej pierwsze rady. Pogrub nagłówek i zablokuj wiersz 1.', copy: 'Temat\tRada\tOd kogo\tLink\n' + WIEDZA.map(function (w) { return w.join('\t'); }).join('\n') },
      { text: 'Kolumna **B** jest za długa. Poszerz ją ręcznie, przeciągając linię między B i C w prawo, a potem kliknij literę **B** i {{Formatuj}} → {{Zawijanie tekstu}} → {{Zawijaj}}. Rady łamią się w linijki i nie uciekają za ekran.' },
      { text: 'Menu tematów: zaznacz **A2:A200**, {{Wstaw}} → {{Menu}}. Opcje: `zdjęcia`, `ceny`, `pakowanie`, `rozmowa`, `uwaga`. **Gotowe**.' },
      { text: 'Link: kliknij **D3** (przy radzie o cenach) i wciśnij [[Ctrl]] + [[K]]. Wpisz tekst `Vinted` i adres `https://www.vinted.pl`, potem **Zastosuj**. Kliknij komórkę: wyskakuje okienko z linkiem.' },
      { text: 'Rady od dorosłych. Zapytaj dwie dorosłe osoby: „Co sprzedałeś kiedyś w internecie i jaką masz jedną radę?”. Wpisz ich rady w nowych wierszach, z tematem z menu i imieniem w kolumnie C.', tip: 'Możesz to zrobić później i dopisać rady przy następnej misji. Ważne, żeby trafiły do arkusza.' },
      { text: 'Szukanie: [[Ctrl]] + [[F]], wpisz `kopert`. Arkusz podświetla radę o pakowaniu. Potem {{Dane}} → {{Utwórz filtr}}, lejek przy Temat i zostaw tylko `uwaga`. Na koniec usuń filtr.' }
    ],
    check: [
      'Długie rady są zawinięte i widać je w całości.',
      'Temat wybiera się z menu.',
      'W D3 jest link, który się otwiera.',
      'Masz co najmniej jedną radę od dorosłego.'
    ],
    variants: [
      { text: 'Ile rad jest o cenach?', copy: '=LICZ.JEŻELI(A2:A200;"ceny")' },
      { text: 'Znajdź i zamień: [[Ctrl]] + [[H]]. Zamień wszędzie słowo `Akademia` na `kurs`. Potem cofnij.' },
      { text: 'Komentarz do rady: kliknij komórkę i [[Ctrl]] + [[Alt]] + [[M]]. Napisz, czy rada zadziałała.' }
    ],
    solo: {
      text: 'Dodaj do menu temat `wysyłka` i wpisz jedną radę o wysyłce, którą znasz sam albo od rodzica.',
      hints: ['Kliknij komórkę z menu, potem ikonę ołówka w okienku z opcjami.', 'Albo zaznacz A2:A200 i jeszcze raz Wstaw → Menu.']
    },
    discovery: { text: 'Do komórki da się wstawić obrazek: {{Wstaw}} → {{Obraz}} i opcja z napisem „w komórce”. Wstaw obok rady o zdjęciach przykład dobrego zdjęcia.' },
    journalPrompt: 'Która rada od dorosłych najbardziej Cię zaskoczyła?',
    parent: 'Poproś rodzica, żeby był jednym z dorosłych z kroku 5: niech opowie, co sprzedawał i czego się wtedy nauczył. Wpisz jego radę przy nim.',
    forParent: {
      teaches: 'Praca z tekstem w arkuszu: zawijanie, szerokość kolumny, menu tematów, link (Ctrl + K), wyszukiwanie Ctrl + F, filtr po temacie. Rozmowa z dorosłymi o ich doświadczeniu.',
      ask: 'Zapytaj, jak znajdzie radę o pakowaniu, gdy w Wiedzy będzie 50 wierszy. Dwie dobre odpowiedzi: Ctrl + F albo filtr po temacie.'
    }
  });

  M.push({
    id: 'pulpit',
    title: 'Pulpit na finał',
    subtitle: 'Cel, procent i pasek postępu z kratek',
    technique: 'Pulpit',
    minutes: 20,
    why: [
      'Pulpit ma już liczby o magazynie i sprzedaży. Brakuje odpowiedzi na najważniejsze pytanie: **ile jeszcze do celu?** Wpisujesz cenę rzeczy, na którą zbierasz, a Arkusz liczy procent i rysuje pasek z kratek.',
      'Pasek robi funkcja `POWT`, która powtarza znak tyle razy, ile każesz. Dziewięć pełnych kratek i jedna pusta to około 90%.'
    ],
    realWorld: 'Zbiórki w internecie pokazują pasek „zebrano 70%”. Firmy mają na ścianach ekrany z pulpitami, na których liczby i paski odświeżają się same.',
    example: {
      intro: 'Pulpit z celem 300 zł. Zarobione ' + zl(ST.zarobione) + ', więc pasek jest prawie pełny.',
      sheets: [
        { caption: 'Karta „Pulpit”, kolumny A i B', fx: { cell: 'B19', text: '=POWT("█";ZAOKR(MIN(B18;1)*10;0))&POWT("░";10-ZAOKR(MIN(B18;1)*10;0))' }, sel: 'B19', tabs: KARTY, tab: 3,
          marks: { A1: 'head', A8: 'head', A11: 'head', B14: 'ok', B17: 'note', B18: 'ok', B19: 'ok', B20: 'ok' }, rows: pulpit(20) }
      ],
      note: 'Nie masz jeszcze celu? Wpisz cokolwiek, na przykład 300 zł, i zmień, gdy wybierzesz. Formuły się dostosują.'
    },
    steps: [
      { text: 'Na **Pulpicie**: w **A17** wpisz `Cel`, a w **B17** cenę rzeczy, na którą zbierasz. Nie masz jeszcze celu? Wpisz `300` i zmień później. Ustaw walutę.' },
      { text: 'W **A18** `Zebrane`, w **B18** podziel zarobione przez cel. Potem {{Formatuj}} → {{Liczba}} → {{Procent}}.', copy: '=B14/B17', tip: 'Pusty cel daje `#DZIEL/0!`, bo przez zero dzielić nie wolno. Wpisz cel i błąd znika.' },
      { text: 'W **A19** `Pasek`, w **B19** wklej formułę. Pełne kratki to zebrane dziesiątki procent, puste to reszta.', copy: '=POWT("█";ZAOKR(MIN(B18;1)*10;0))&POWT("░";10-ZAOKR(MIN(B18;1)*10;0))', tip: 'Rozbierz ją na części: `ZAOKR(...*10;0)` zamienia 92% na 9 kratek, a `MIN(B18;1)` pilnuje, żeby przy 120% nie było więcej niż 10. Nie musisz jej pisać sam. Ważne, żebyś wiedział, co robi który kawałek.' },
      { text: 'W **A20** `Za drogo?`, a w **B20** policz rzeczy z oceną „za drogo?” z Magazynu.', copy: '=LICZ.JEŻELI(Magazyn!N2:N100;"za drogo?")' },
      { text: 'Wygląd: pogrub **B14** i **B19** i powiększ ich czcionkę polem z liczbą na pasku narzędzi. Kliknij **B18**, {{Formatuj}} → {{Formatowanie warunkowe}} → **Większe niż lub równe** → `1` → zielone tło: zapali się, gdy dobijesz do celu. Na koniec {{Widok}} → {{Pokaż}} i wyłącz **Linie siatki**.' }
    ],
    check: [
      'B18 pokazuje ' + procent(ZEBRANE) + ', a pasek ma ' + KRATKI + ' pełnych kratek.',
      'Zmiana celu w B17 zmienia procent i pasek.',
      'Pulpit bez linii siatki wygląda jak ekran aplikacji.'
    ],
    variants: [
      { text: 'Zmień cel na `250`. Procent przekracza 100%, a B18 robi się zielone.' },
      { text: 'Zdanie zamiast liczby:', copy: '=JEŻELI(B18>=1;"Cel zdobyty!";"Brakuje "&(B17-B14)&" zł")' },
      { text: 'Emoji też są tekstem:', copy: '=JEŻELI(B18>=1;"🎉";"💪")' }
    ],
    solo: {
      text: 'Dopisz na Pulpicie wiersz `Brakuje`: ile złotych zostało do celu. Ma pokazywać zero, a nie liczbę na minusie, gdy cel jest już zdobyty.',
      hints: ['Cel minus zarobione.', 'MAX z zera i tej różnicy wybiera większą liczbę, więc nigdy nie spadnie poniżej zera.']
    },
    discovery: { text: 'Chwyć kartę **Pulpit** na dole ekranu i przeciągnij ją na sam początek, przed Pomysły. Plik otwiera się na pierwszej karcie, więc od teraz zaczynasz od najważniejszych liczb.' },
    journalPrompt: 'Na co chcesz zbierać i ile Ci brakuje?',
    parent: 'Porozmawiaj z rodzicem o celu: na co zbierasz i ile to kosztuje. Wpiszcie razem prawdziwą kwotę do B17.',
    forParent: {
      teaches: 'Procent jako dzielenie i format procentu, POWT do rysowania paska, MIN jako ogranicznik, formatowanie warunkowe na progu, wygląd pulpitu (czcionka, linie siatki).',
      ask: 'Zapytaj, co robi MIN w formule paska. Zmień cel i niech przewidzi, ile będzie kratek.'
    }
  });

  M.push({
    id: 'ochrona',
    title: 'Zabezpiecz, udostępnij, weź do telefonu',
    subtitle: 'Kopia, ochrona formuł, historia zmian i Arkusze w telefonie',
    technique: 'Ochrona i telefon',
    minutes: 20,
    why: [
      'Arkusz sklepu ma już mnóstwo formuł. Jedno przypadkowe wpisanie liczby w B14 i Pulpit zaczyna kłamać. Dziś zakładasz **ochronę**: Arkusz ostrzega, zanim nadpiszesz formułę.',
      'A sprzedaż dzieje się w telefonie: odpowiadasz kupującemu, nadajesz paczkę. Aplikacja **Arkusze Google** pozwala zmienić status od razu, przy paczkomacie.'
    ],
    realWorld: 'W firmach plik z ważnymi liczbami ma chronione formuły i historię zmian. Gdy coś się nie zgadza, sprawdza się, kto i kiedy zmienił komórkę. Nikt nie musi zgadywać.',
    steps: [
      { text: 'Kopia na wszelki wypadek: {{Plik}} → {{Utwórz kopię}}, nazwa `Sklep treningowy – kopia`. Gdy kiedyś coś popsujesz, masz do czego wrócić. Pracuj dalej w oryginale.' },
      { text: 'Na **Pulpicie** zaznacz **B2:B20**. Menu {{Dane}} → {{Chroń arkusze i zakresy}} → **Ustaw uprawnienia** → **Pokaż ostrzeżenie podczas edytowania tego zakresu** → **Gotowe**. Spróbuj wpisać coś w B14: Arkusz pyta, czy na pewno. Kliknij **Anuluj**.', tip: 'Cel w B17 i procent w B9 też są w tym zakresie. Ostrzeżenie tylko pyta, więc dalej możesz je zmieniać.' },
      { text: 'To samo w **Magazynie** dla kolumn z formułami: zaznacz **L2:R100** i ustaw ostrzeżenie.' },
      { text: 'Historia: zmień cenę jednej rzeczy, potem {{Plik}} → {{Historia zmian}} → {{Zobacz historię zmian}} (albo [[Ctrl]] + [[Alt]] + [[Shift]] + [[H]]). Widzisz wersje z datami, a zmiana jest zaznaczona kolorem. Wróć strzałką w lewym górnym rogu i cofnij zmianę ceny.' },
      { text: 'Telefon: zainstaluj aplikację **Arkusze Google** (razem z rodzicem) i zaloguj się tym samym kontem. Otwórz `Sklep treningowy`, w Magazynie zmień status rzeczy numer 4 na `sprzedane`. Na komputerze Pulpit już to widzi. Cofnij.' }
    ],
    check: [
      'Masz kopię pliku.',
      'Próba wpisania czegoś w chronioną komórkę kończy się pytaniem Arkusza.',
      'Umiesz otworzyć historię zmian.',
      'Zmiana z telefonu pojawiła się na komputerze.'
    ],
    variants: [
      { text: 'Eksport: {{Plik}} → {{Pobierz}} → **PDF** (do wydruku) albo **Microsoft Excel** (dla kogoś bez Google).' },
      { text: 'Nazwana wersja: w historii zmian trzy kropki przy wersji → nadaj jej nazwę, np. „przed misją 20”. Łatwiej wrócić.' },
      { text: 'Dostęp przez link: w oknie {{Udostępnij}} pole **Dostęp ogólny** ma zostać na **Ograniczony**. Link „dla każdej osoby” to jak kartka przypięta na przystanku: każdy, kto go ma, widzi Twoje dane.' }
    ],
    solo: {
      text: 'Poproś rodzica, żeby zmienił w Twoim pliku jedną komórkę, kiedy nie patrzysz. Znajdź w historii zmian, co zmienił i kiedy.',
      hints: ['Plik → Historia zmian → Zobacz historię zmian.', 'Każda osoba ma swój kolor.']
    },
    discovery: { text: 'W aplikacji na telefonie przytrzymaj palec na komórce: wyskakuje menu z kopiowaniem i wklejaniem. Formuły w telefonie wpisuje się tak samo, od znaku =.' },
    parent: 'Sprawdźcie razem okno **Udostępnij**: Dostęp ogólny ma być „Ograniczony”, a na liście osób tylko rodzic.',
    journalPrompt: 'Która ochrona przyda się najbardziej, gdy będziesz sprzedawać naprawdę?',
    forParent: {
      teaches: 'Kopia pliku, ochrona zakresu z ostrzeżeniem, historia zmian, aplikacja Arkusze Google w telefonie, eksport, bezpieczne udostępnianie.',
      ask: 'Zmień coś w jego pliku i poproś, żeby znalazł to w historii zmian. Zapytaj, co znaczy „Dostęp ogólny: Ograniczony”.'
    }
  });

  /* =========================================================================================
     Rozdział 4. Twój sklep
     ========================================================================================= */
  M.push({
    id: 'twoj-arkusz-1',
    title: 'Twój sklep, część 1',
    subtitle: 'Plan na kartce i Magazyn z prawdziwymi rzeczami',
    technique: 'Projekt',
    minutes: 20,
    why: [
      'Sklep treningowy był do ćwiczeń. Teraz budujesz swój: od zera, bez wklejania, na rzeczach, które naprawdę chcesz sprzedać. Na start dziesięć, potem dopisujesz do czterdziestu.',
      'Najpierw plan. Ludzie, którzy budują arkusze na co dzień, zaczynają od kartki: jakie karty, jakie kolumny, na jakie pytania arkusz ma odpowiadać. Pięć minut planu oszczędza godzinę poprawiania.'
    ],
    realWorld: 'Każdy, kto zakłada mały biznes, od rękodzieła po naprawę rowerów, zaczyna od takiego arkusza. Duże programy przychodzą później, a arkusz często zostaje na lata.',
    example: {
      intro: 'Przykładowy plan na kartce. Twój może wyglądać inaczej: ważne, żeby każda karta odpowiadała na jakieś pytanie.',
      sheets: [
        { caption: 'Plan pliku „Mój sklep”', head: true,
          rows: [['Karta', 'Co w niej', 'Na jakie pytanie odpowiada'], ['Magazyn', 'jedna rzecz w wierszu', 'co mam, za ile, co już poszło'], ['Pulpit', 'najważniejsze liczby', 'ile zarobiłem, ile do celu'], ['Ceny', 'ceny z podobnych ogłoszeń', 'za ile wystawić'], ['Wiedza', 'rady', 'jak to robić dobrze']] }
      ],
      note: 'Zastanów się, czego brakowało w Sklepie treningowym. Na przykład kolumny **Cena sprzedaży**, gdy kupujący wytarguje mniej, albo **Gdzie leży**, żeby szybko znaleźć rzecz przy pakowaniu.'
    },
    steps: [
      { text: 'Plan na kartce: wypisz karty i kolumny Magazynu. Zacznij od kolumn ze Sklepu treningowego i zdecyduj, których potrzebujesz naprawdę, a czego brakuje. Bez kolumn na adresy i nazwiska kupujących.' },
      { text: 'Nowy plik: `sheets.new`, nazwa `Mój sklep`, region Polska (misja 0). Udostępnij go rodzicowi jako Edytujący (misja 1).' },
      { text: 'Karta `Magazyn`: nagłówki z planu, gruby nagłówek z kolorem, blokada wiersza i dwóch kolumn, waluta w kolumnach z cenami.' },
      { text: 'Menu w kolumnach z wyborem (Status, Platforma, Kategoria, Stan) aż do wiersza 100. Pola wyboru, jeśli masz kolumnę do odhaczania.' },
      { text: 'Wpisz pierwsze dziesięć rzeczy: numer (uchwytem), nazwa, kategoria, stan, cena nowej (sprawdź w internecie albo oszacuj) i Twoja cena. Status: `w domu`.' }
    ],
    check: [
      'Masz plan na kartce: karty i kolumny.',
      'Plik „Mój sklep” ma region Polska i jest udostępniony rodzicowi.',
      'W Magazynie jest dziesięć prawdziwych rzeczy z numerami.',
      'Menu sięgają do wiersza 100.'
    ],
    variants: [
      { text: 'Skrót, ale dopiero gdy raz zbudujesz sam: w Sklepie treningowym prawy przycisk na karcie → {{Kopiuj do}} → **Istniejący arkusz kalkulacyjny** → `Mój sklep`. Karta przychodzi z formatami, menu i formułami. Wystarczy skasować przykładowe rzeczy.' },
      { text: 'Kolumna **Gdzie leży** z menu: szafa, piwnica, półka. Przy pakowaniu nie szukasz po całym domu.' }
    ],
    solo: {
      text: 'Otwórz w Niezbędniku kartę „Lista Solo” i przejdź ją punkt po punkcie. Popraw w Magazynie to, czego brakuje.',
      hints: ['Niezbędnik jest w menu na górze strony Akademii.', 'Najczęściej brakuje zapasu w zakresach i blokady nagłówka.']
    },
    discovery: { text: 'Kliknij gwiazdkę obok nazwy pliku w lewym górnym rogu. Plik trafia do „Oznaczonych gwiazdką” na Dysku Google i znajdziesz go w sekundę.' },
    journalPrompt: 'Jakiej kolumny dodałeś w swoim Magazynie, a nie było jej w treningowym?',
    parent: 'Pokaż rodzicowi plan na kartce i powiedz, dlaczego wybrałeś te kolumny. Potem pokaż Magazyn z dziesięcioma rzeczami.',
    forParent: {
      teaches: 'Planowanie arkusza przed budową, nowy plik od zera, samodzielny Magazyn na prawdziwych rzeczach dziecka: formaty, menu, blokada, numery.',
      ask: 'Poproś o plan na kartce i zapytaj, po co jest każda kolumna. Sprawdź, czy menu sięgają do wiersza 100.'
    }
  });

  M.push({
    id: 'twoj-arkusz-2',
    title: 'Twój sklep, część 2',
    subtitle: 'Pulpit z Twoimi liczbami, kolory i wykres',
    technique: 'Projekt',
    minutes: 20,
    why: [
      'Masz Magazyn, czas na Pulpit. Tym razem bez formuł do skopiowania: wiesz już, które są potrzebne. Gdy zapomnisz zapisu, masz Niezbędnik.',
      'Zasada: każda liczba na Pulpicie odpowiada na jedno pytanie z Twojego planu. Liczba, która na nic nie odpowiada, tylko zajmuje miejsce.'
    ],
    realWorld: 'Programiści i analitycy też nie pamiętają wszystkich zapisów. Mają swoje ściągi i notatki, a przede wszystkim wiedzą, czego szukać. Dokładnie po to jest Niezbędnik.',
    steps: [
      { text: 'Karta `Pulpit` z blokiem Magazyn: ile rzeczy, wartość wszystkiego, najdroższa. Zakresy do wiersza 100.' },
      { text: 'Blok Sprzedaż: sprzedane rzeczy, zarobione i wystawione (LICZ.JEŻELI, SUMA.JEŻELI).' },
      { text: 'Ustawienie z procentem ceny nowej i kolumna z propozycją ceny w Magazynie (pinezka), a obok ocena ceny z JEŻELI.' },
      { text: 'Kolory w Magazynie: sprzedane szarzeją, zarezerwowane żółkną (formatowanie warunkowe z formułą).' },
      { text: 'Cel z procentem i paskiem z POWT. Jeden wykres, który odpowiada na pytanie z planu, z tytułem.' }
    ],
    check: [
      'Każda liczba na Pulpicie odpowiada na pytanie z planu.',
      'Wszystkie zakresy sięgają do wiersza 100.',
      'Zmiana statusu jednej rzeczy zmienia liczby, kolory i wykres.'
    ],
    variants: [
      { text: 'Nie pamiętasz zapisu funkcji? Zacznij pisać `=SUMA.J` i poczekaj na dymek z opisem. Albo otwórz kartę w Niezbędniku i skopiuj stamtąd wzór.' },
      { text: 'Tabelka kategorii z SUMA.JEŻELI na Pulpicie albo tabela przestawna na osobnej karcie: wybierz jedno, nie musisz mieć obu.' }
    ],
    solo: {
      text: 'Sprawdź, czy Pulpit mówi prawdę. Zmień status jednej rzeczy na `sprzedane` i policz w głowie, jak powinny zmienić się liczby. Zgadza się? Cofnij.',
      hints: ['Sprzedane rzeczy +1, zarobione + cena tej rzeczy, wystawione −1 (jeśli była wystawiona).']
    },
    discovery: { text: 'Otwórz menu {{Pomoc}}, wybierz pomoc dotyczącą Arkuszy i wpisz nazwę funkcji, której jeszcze nie znasz, na przykład `UNIQUE`. Pomoc Google ma opis i przykład każdej funkcji.' },
    journalPrompt: 'Którą formułę napisałeś sam bez zaglądania i z której jesteś najbardziej dumny?',
    forParent: {
      teaches: 'Samodzielne budowanie Pulpitu z formułami poznanymi w kursie, korzystanie z Niezbędnika i podpowiedzi funkcji, sprawdzanie, czy wynik ma sens.',
      ask: 'Zapytaj, na jakie pytanie odpowiada każda liczba na Pulpicie. Zmień status jednej rzeczy i niech przewidzi skutki, zanim spojrzycie.'
    }
  });

  M.push({
    id: 'twoj-arkusz-3',
    title: 'Twój sklep, część 3',
    subtitle: 'Ceny z rynku, baza wiedzy i sklep w telefonie',
    technique: 'Projekt',
    minutes: 20,
    why: [
      'Ostatni kawałek: prawdziwe ceny z rynku dla Twoich rzeczy, baza wiedzy przeniesiona ze Sklepu treningowego i ochrona formuł. Potem plik idzie do pracy.',
      'Od teraz sklep żyje: dopisujesz rzeczy, zmieniasz statusy, wpisujesz daty sprzedaży. Pulpit liczy sam.'
    ],
    realWorld: 'Dobry arkusz nigdy nie jest skończony. Ludzie, którzy prowadzą coś na arkuszu, dopisują kolumnę albo liczbę, gdy pojawia się nowe pytanie. Tak samo będzie z Twoim.',
    steps: [
      { text: 'Przenieś Wiedzę: w Sklepie treningowym prawy przycisk na karcie `Wiedza` → {{Kopiuj do}} → **Istniejący arkusz kalkulacyjny** → wybierz `Mój sklep`. W swoim pliku zmień nazwę nowej karty na `Wiedza`.' },
      { text: 'Karta `Ceny`: dla trzech swoich rzeczy znajdź po pięć podobnych ogłoszeń na Vinted albo OLX, wpisz ceny i policz MIN, MAX i MEDIANA.' },
      { text: 'W Magazynie kolumna `Na rynku` z WYSZUKAJ.PIONOWO i JEŻELI.BŁĄD. Przy której rzeczy Twoja cena najbardziej odbiega od rynku?' },
      { text: 'Ochrona z ostrzeżeniem na Pulpicie i na kolumnach z formułami. Otwórz plik w aplikacji na telefonie.' },
      { text: 'Gdy wystawisz pierwszą prawdziwą rzecz, zmień jej status na `wystawione` i wpisz datę skrótem [[Ctrl]] + [[;]]. Sklep działa.' }
    ],
    check: [
      'Karta Wiedza jest w Twoim pliku.',
      'Trzy Twoje rzeczy mają medianę z rynku, a Magazyn ją pokazuje.',
      'Formuły są chronione ostrzeżeniem.',
      'Plik otwiera się w telefonie.'
    ],
    variants: [
      { text: 'Rytuał na koniec miesiąca: zrób kopię pliku z datą w nazwie, spójrz na Pulpit i dopisz do Wiedzy jedną rzecz, której się nauczyłeś.' },
      { text: 'Rzeczy sprzedane dawno temu nie muszą zaśmiecać Magazynu: filtr po statusie albo sortowanie po dacie sprzedaży.' }
    ],
    solo: {
      text: 'Dodaj do Pulpitu jedną liczbę, której nie było w Sklepie treningowym, a której Ty potrzebujesz. Na przykład ile rzeczy nie ma jeszcze zdjęć albo ile średnio dostajesz za książkę.',
      hints: ['Najpierw zadaj pytanie, potem szukaj funkcji.', 'LICZ.JEŻELI, SUMA.JEŻELI i ŚREDNIA.JEŻELI odpowiadają na większość pytań.']
    },
    discovery: { text: 'Na Dysku Google kliknij prawym przyciskiem plik `Mój sklep` → **Informacje o pliku**. Widać, kiedy powstał i ile zajmuje. Twój pierwszy arkusz od zera.' },
    journalPrompt: 'Co w swoim arkuszu zmieniłbyś za miesiąc, gdy sprzedasz pierwsze rzeczy?',
    parent: 'Pokaż rodzicowi cały plik „Mój sklep”: Magazyn, Pulpit, Ceny i Wiedzę. Wybierzcie razem pierwszą rzecz do wystawienia.',
    forParent: {
      teaches: 'Kopiowanie karty do innego pliku, wycena prawdziwych rzeczy z rynku, połączenie kart WYSZUKAJ.PIONOWO, ochrona i telefon w gotowym pliku. Arkusz zaczyna prawdziwą pracę.',
      ask: 'Umówcie się na krótki przegląd Pulpitu raz w miesiącu. Pytaj o plik, nie o kurs: co się sprzedało, co wisi najdłużej, ile do celu.'
    }
  });
})();
