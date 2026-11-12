/* Misje Akademii Arkuszy. Przez cały kurs dziecko buduje arkusz sklepu z rzeczami z domu (Vinted, OLX):
   plik „Sklep treningowy” na danych przykładowych, a w dwóch ostatnich misjach własny plik „Mój sklep”.

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
  // Kolory wierszy z reguły misji „menu”: sprzedane szare.
  function koloryStatusu(nry, doKol) {
    var marks = {}, kol = KOLUMNY.slice(0, KOLUMNY.indexOf(doKol) + 1);
    nry.forEach(function (nr, i) {
      if (RZECZY[nr - 1][7] === 'sprzedane') kol.forEach(function (k) { marks[k + (i + 2)] = 'mute'; });
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
  /* Podgląd karty Pulpit: wiersze 1–`doWiersza` w kolumnach A–B. `o.kategorie` dokłada tabelkę kategorii w D–E. */
  function pulpit(doWiersza, o) {
    o = o || {};
    var A = [
      ['Magazyn', ''], ['Ile rzeczy', String(ST.ile)], ['Wartość wszystkiego', zl(ST.suma)], ['Średnia cena', zl(ST.srednia)],
      ['Najdroższa', zl(ST.max)], ['Najtańsza', zl(ST.min)], ['', ''], ['Ustawienia', ''], ['Procent ceny nowej', '50%'],
      ['', ''], ['Sprzedaż', ''], ['Średnio dni do sprzedaży', liczba(ST.sredniDni)], ['Sprzedane rzeczy', String(ST.sprzedane)],
      ['Zarobione', zl(ST.zarobione)], ['Wystawione', String(ST.wystawione)], ['', ''], ['Cel', zl(CEL)],
      ['Zebrane', procent(ZEBRANE)], ['Pasek', new Array(KRATKI + 1).join('█') + new Array(11 - KRATKI).join('░')]
    ];
    var kat = [['Kategoria', 'Wartość']].concat(KATEGORIE.map(function (k) { return [k, zl(sumaGdzie('C', k))]; }));
    var rows = [];
    for (var i = 0; i < doWiersza; i++) rows.push(o.kategorie ? A[i].concat([''], kat[i] || ['', '']) : A[i].slice());
    return rows;
  }
  // Karta Ceny: Nr, Rzecz, pięć cen i mediana w kolumnie H.
  function ceny(nry) {
    var rows = [['Nr', 'Rzecz', 'Cena 1', 'Cena 2', 'Cena 3', 'Cena 4', 'Cena 5', 'Mediana']];
    nry.forEach(function (nr) {
      var c = nr === 6 ? CENY_NR_6 : CENY[nr];
      rows.push([String(nr), RZECZY[nr - 1][1]].concat(c.map(zl), [zl(mediana(c))]));
    });
    return rows;
  }
  var KARTY = ['Magazyn', 'Pulpit'];
  var NRY_CEN = Object.keys(CENY).map(Number);
  var WIEDZA = [
    ['zdjęcia', 'Zdjęcia w dzień, przy oknie, na jasnym tle. Bez lampy błyskowej.', 'tata'],
    ['ceny', 'Zanim wystawisz, sprawdź pięć podobnych ogłoszeń i weź medianę.', 'Akademia'],
    ['pakowanie', 'Książki w kopertę bąbelkową, gry i klocki w karton.', 'mama'],
    ['rozmowa', 'Odpisuj w czacie platformy, krótko i grzecznie.', 'Akademia'],
    ['uwaga', 'Nie klikaj w linki od kupujących i nikomu nie podawaj danych karty.', 'Akademia'],
    ['ceny', 'Komplet sprzedaje się lepiej niż pojedyncze tomy.', 'wujek']
  ];
  // Dla porządku: pomocnik widać z konsoli przeglądarki jako ARKUSZE.sklep.
  window.ARKUSZE.sklep = { RZECZY: RZECZY, CENY: CENY, magazyn: magazyn, pulpit: pulpit, ceny: ceny, wklej: wklej, ST: ST };

  /* =========================================================================================
     Rozdział 1. Magazyn
     ========================================================================================= */
  M.push({
    id: 'rozruch',
    title: 'Rozruch: plik i Magazyn',
    subtitle: 'Adresy komórek, region Polska i tabela, która dobrze wygląda',
    technique: 'Zasady i formatowanie',
    minutes: 20,
    why: [
      'Arkusz kalkulacyjny to wielka kartka w kratkę. Każda kratka to **komórka** i ma adres jak w grze w statki: kolumna literą, wiersz cyfrą. **B3** to trzecia kratka w kolumnie B.',
      'Przez cały kurs budujesz arkusz sklepu z rzeczami z domu: co masz do sprzedania, za ile, co już poszło i ile zarobiłeś. Dziś zakładasz plik i kartę **Magazyn**: jedna rzecz w jednym wierszu. Wklejasz 12 rzeczy przykładowych i robisz z nich tabelę jak z aplikacji. Swoje rzeczy wpiszesz w dwóch ostatnich misjach.'
    ],
    realWorld: 'Sklepy internetowe trzymają towar w takich samych tabelach: numer, nazwa, kategoria, cena. Adres komórki to wspólny język ludzi, którzy w nich pracują: „zerknij na F14” wystarczy, żeby wszyscy patrzyli w to samo miejsce.',
    example: {
      intro: 'Pięć pierwszych wierszy Magazynu po tej misji. Komórka B3 jest zaznaczona: jej adres i treść widać nad siatką. Kolumny od G do K mają na razie same nagłówki.',
      sheets: [
        { caption: 'Plik „Sklep treningowy”, karta Magazyn', fx: { cell: 'B3', text: RZECZY[1][1] }, head: true, sel: 'B3', tabs: ['Magazyn'], tab: 0,
          rows: magazyn({ do: 'K', puste: ['G', 'H', 'I', 'J', 'K'] }) }
      ],
      note: 'Liczby stoją po prawej stronie komórki, tekst po lewej. Ceny wpisujesz jako zwykłe liczby, np. `49,9`, a format dopisuje `zł`. Dzięki temu Arkusz dalej umie na nich liczyć.'
    },
    steps: [
      { text: 'Trzy zasady Akademii. **1.** Plik udostępniasz tylko rodzicowi. **2.** Do arkusza nie wpisujesz haseł, adresów ani numerów telefonów: ani swoich, ani kupujących. **3.** Nic nie da się zepsuć na zawsze: [[Ctrl]] + [[Z]] cofa, a Arkusz pamięta każdą wersję pliku.' },
      { text: 'Otwórz przeglądarkę, wpisz w pasku adresu `sheets.new` i wciśnij [[Enter]]. Kliknij nazwę w lewym górnym rogu (**Arkusz kalkulacyjny bez nazwy**), wpisz `Sklep treningowy`, [[Enter]].', tip: 'Arkusz zapisuje się sam na Dysku Google, nie ma przycisku Zapisz. Jeśli przeglądarka pyta o konto, wybierz to, które wskazał rodzic.' },
      { text: 'Sprawdź region, żeby formuły z Akademii działały. Menu {{Plik}} → {{Ustawienia}}. W polu **Ustawienia regionalne** ma być **Polska**. Jeśli nie jest, zmień i kliknij **Zapisz ustawienia**.', tip: 'Od tego zależy, czy Arkusz rozumie polskie nazwy funkcji, takie jak SUMA, i średniki w formułach.' },
      { text: 'Na dole ekranu kliknij dwa razy **Arkusz1**, wpisz `Magazyn`, [[Enter]]. Potem skopiuj tabelkę przyciskiem, kliknij **A1** i wciśnij [[Ctrl]] + [[V]]. Wszystko wskakuje naraz.',
        copy: KOLUMNY.slice(0, 11).map(function (k) { return NAGLOWKI[k]; }).join('\t') + '\n' + wklej(['A', 'B', 'C', 'D', 'E', 'F'], od(1, 12)),
        tip: 'Poklikaj komórki i patrz na adres nad siatką. [[Enter]] przechodzi w dół, [[Tab]] w prawo, [[F2]] poprawia w środku komórki.' },
      { text: 'Nagłówek: kliknij numer wiersza **1** z lewej strony. [[Ctrl]] + [[B]] pogrubia, a ikona wiaderka **Kolor wypełnienia** na pasku narzędzi daje kolor. Wybierz jasny.' },
      { text: 'Kolumny: kliknij literę **A**, przytrzymaj [[Shift]] i kliknij **K**. Kliknij dwa razy linię między dowolnymi dwiema literami: szerokości dopasują się do treści. Potem zaznacz litery **E** i **F** i wybierz {{Formatuj}} → {{Liczba}} → {{Waluta}}.', tip: 'Nie dopisuj `zł` ręcznie: wtedy Arkusz myśli, że to tekst, i nie umie tego dodać.' },
      { text: 'Blokada: {{Widok}} → {{Zablokuj}} → {{1 wiersz}}, a potem {{Widok}} → {{Zablokuj}} → {{2 kolumny}}. Przewiń w dół i w prawo: nagłówek oraz numer i nazwa rzeczy stoją w miejscu.' }
    ],
    check: [
      'Masz plik „Sklep treningowy” z kartą „Magazyn” i 12 rzeczami.',
      'Nagłówek jest gruby, ma kolor i nie ucieka przy przewijaniu.',
      'Ceny mają `zł`, choć wpisane są same cyfry.',
      'Umiesz powiedzieć, gdzie jest komórka D4, bez klikania.'
    ],
    variants: [
      { text: 'Obramowanie: zaznacz od **A1** do **K13**, kliknij na pasku narzędzi ikonę **Obramowania** (kratka) i wybierz wszystkie linie.' },
      { text: 'Wciśnij [[Ctrl]] + [[/]]: wyskakuje lista skrótów klawiszowych. Wypróbuj jeden, okno zamyka [[Esc]].' },
      { text: 'Szybka data: kliknij pustą komórkę i wciśnij [[Ctrl]] + [[;]]. Wskakuje dzisiejsza data.' }
    ],
    solo: {
      text: 'Nowa karta: znak {{+}} w lewym dolnym rogu, nazwa `Pomysły`. Wpisz pięć rzeczy z Twojego pokoju, które ktoś mógłby kupić, a obok ich stan od 1 do 10. Sformatuj jak Magazyn. Bez patrzenia w kroki.',
      hints: ['W A1 `Rzecz`, w B1 `Stan`.', 'Ctrl + B na nagłówku, Widok → Zablokuj → 1 wiersz.']
    },
    discovery: { text: 'Zaznacz kolumnę **F** z cenami i spójrz w prawy dolny róg ekranu. Arkusz pokazuje tam **Sumę**, bez żadnej formuły. Kliknij ten napis: zobaczysz też średnią, minimum i maksimum. W misji 2 zapiszesz te liczby na stałe.' },
    journalPrompt: 'Która zmiana najbardziej poprawiła wygląd Magazynu?',
    parent: 'Pokaż rodzicowi Magazyn, powiedz trzy zasady własnymi słowami i udostępnij mu plik: przycisk **Udostępnij** w prawym górnym rogu, jego adres e-mail, rola **Edytujący**, **Wyślij**.',
    forParent: {
      teaches: 'Komórka i adres, nowy plik przez sheets.new, region Polska, nazwa karty, wklejanie gotowej tabelki, pogrubienie, kolor, szerokość kolumn, waluta na całej kolumnie, blokada wiersza i kolumn, udostępnienie rodzicowi.',
      ask: 'Poproś, żeby wskazał komórkę C4 bez klikania i powiedział trzy zasady. Zapytaj, dlaczego nie wpisuje się „zł” ręcznie.'
    }
  });

  M.push({
    id: 'pierwsza-formula',
    title: 'Uchwyt i pierwsza formuła',
    subtitle: 'Numery w sekundę i formuła, która liczy za Ciebie',
    technique: 'Uchwyt i formuła',
    minutes: 20,
    why: [
      'W prawym dolnym rogu zaznaczonej komórki jest mały niebieski kwadracik: **uchwyt wypełniania**. Chwytasz go i ciągniesz, a Arkusz dopisuje dalszy ciąg: 13, 14, 15... Tak nadasz numery nowym rzeczom.',
      '**Formuła** zaczyna się od `=`. Zamiast liczb wpisujesz w niej **adresy komórek**: `=E2-F2` odejmuje cenę z F2 od ceny z E2, czyli mówi, o ile taniej niż w sklepie kupi rzecz Twój kupujący. Formułę piszesz raz i przeciągasz uchwytem: w każdym wierszu numer zmienia się sam.'
    ],
    realWorld: 'W magazynach każdy towar ma numer nadawany seriami, a każde „taniej o 40 zł” w sklepie internetowym to formuła: cena przed minus cena po. Nikt nie liczy tego w głowie dla tysiąca produktów.',
    example: {
      intro: 'Kolumna L po przeciągnięciu formuły w dół. Kolumny H–K są jeszcze puste.',
      sheets: [
        { caption: 'Karta „Magazyn”: formuła „Taniej o” przeciągnięta w dół', fx: { cell: 'L5', text: '=E5-F5' }, head: true, sel: 'L5', tabs: ['Magazyn'], tab: 0,
          marks: { E5: 'blue', F5: 'blue', L2: 'ok', L3: 'ok', L4: 'ok', L5: 'ok' }, rows: magazyn({ do: 'L', nry: od(1, 4), puste: ['H', 'I', 'J', 'K'] }) }
      ],
      note: 'W L5 formuła to `=E5-F5`, a nie `=E2-F2`. Po przeciągnięciu Arkusz sam zmienił 2 na 5. O to chodzi.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij **B14**, pierwszą pustą komórkę w kolumnie Rzecz, i wklej osiem nowych rzeczy.', copy: wklej(['B', 'C', 'D', 'E', 'F'], od(13, 20)), tip: 'Wklejasz od kolumny B, bo numery w kolumnie A zrobi uchwyt.' },
      { text: 'Numery. Zaznacz **A12** i **A13** razem (liczby 11 i 12): kliknij A12, przytrzymaj [[Shift]], kliknij A13. Chwyć niebieski kwadracik w rogu zaznaczenia i przeciągnij w dół do **A21**. Masz numery od 13 do 20.', tip: 'Dwie komórki pokazują wzór: co jeden w górę. Jedna komórka z liczbą 12 dałaby same dwunastki.' },
      { text: 'Platforma. W **G2** wpisz `Vinted`, zaznacz **G2:G21** i wciśnij [[Ctrl]] + [[D]], czyli „wypełnij w dół”. Potem wpisz `OLX` przy numerach **3, 4, 7, 8, 11, 12, 16 i 18**.', tip: 'Po pierwszym OLX wystarczy wpisać `O`: Arkusz podpowiada resztę, a [[Enter]] ją przyjmuje.' },
      { text: 'Pierwsza formuła. W **L1** wpisz `Taniej o`. Kliknij **L2** i wpisz: `=`, potem **kliknij myszką E2**, wpisz `-`, kliknij **F2**, [[Enter]].', copy: '=E2-F2', tip: 'Klikanie wpisuje adres za Ciebie i nie robi literówek. Każda komórka w formule dostaje kolorową ramkę.' },
      { text: 'Kliknij **L2** i przeciągnij uchwyt do **L21**. Kliknij **L5** i spójrz na pasek formuły: numer wiersza zmienił się sam. Zmień cenę w **F2** z 15 na 20 i patrz na L2. Cofnij [[Ctrl]] + [[Z]].' },
      { text: 'Kliknij literę **L** i ustaw {{Formatuj}} → {{Liczba}} → {{Waluta}}. Która rzecz jest najbardziej okazyjna?' }
    ],
    check: [
      'Masz numery od 1 do 20, a 13–20 zrobiłeś bez wpisywania.',
      'Cała kolumna G jest wypełniona, w tym osiem razy OLX.',
      'W kolumnie L są wyniki, a na pasku nad siatką formuły z adresami.',
      'Zmiana ceny w F zmienia wynik w L bez Twojej pomocy.'
    ],
    variants: [
      { text: 'Połowa ceny nowej. Gwiazdka to mnożenie, ukośnik dzielenie:', copy: '=E2/2' },
      { text: 'O jaką część taniej niż nowa? Potem {{Formatuj}} → {{Liczba}} → {{Procent}}:', copy: '=(E2-F2)/E2' },
      { text: 'Daty i dni tygodnia też idą uchwytem: wpisz w wolnej komórce `poniedziałek` albo dzisiejszą datę ([[Ctrl]] + [[;]]) i przeciągnij w dół. Potem skasuj.' }
    ],
    solo: {
      text: 'Na karcie `Pomysły` dopisz kolumny `Cena nowej` i `Moja cena` dla swoich pięciu rzeczy (mogą być zgadywane), a obok formułę „Taniej o”. Bez kopiowania z kroków.',
      hints: ['Formuła zaczyna się od =.', 'Napisz ją w pierwszym wierszu i przeciągnij.']
    },
    discovery: { text: 'Wpisz w wolnej komórce formułę poniżej. Losuje numer od 1 do 20: to rzecz, którą dziś sfotografujesz. Wpisz coś w innej komórce, a losuje od nowa. Na końcu ją skasuj.', copy: '=LOS.ZAKR(1;20)' },
    journalPrompt: 'Co się stało, gdy zmieniłeś cenę w F2?',
    parent: 'Pokaż rodzicowi kolumnę „Taniej o”. Zmień jedną cenę na jego oczach i pokaż, że wynik przelicza się sam.',
    forParent: {
      teaches: 'Uchwyt wypełniania (serie liczb), wypełnianie w dół Ctrl + D, formuła ze znakiem równości i adresami zamiast liczb, przeciąganie formuły, przeliczanie po zmianie danych.',
      ask: 'Zmień dowolną cenę i zapytaj, dlaczego wynik się zmienił. Zapytaj, czemu do numerów zaznacza dwie komórki, a nie jedną.'
    }
  });

  M.push({
    id: 'suma',
    title: 'Pulpit: funkcje i pinezka',
    subtitle: 'SUMA, ŚREDNIA i MAX na osobnej karcie i jedno ustawienie dla wszystkich formuł',
    technique: 'Funkcje i znak $',
    minutes: 20,
    why: [
      '**Funkcja** to gotowe działanie z nazwą: `SUMA` dodaje kolumnę, `ŚREDNIA` liczy średnią, `MAX` i `MIN` szukają największej i najmniejszej liczby. W nawiasie zakres: `F2:F100`. Zasada arkuszy: **dane osobno, podsumowanie osobno**. Liczby o sklepie zbierasz na nowej karcie **Pulpit**, a `Magazyn!F2:F100` znaczy „kolumna F na karcie Magazyn”.',
      'Na Pulpicie trzymasz też **ustawienia**, na przykład procent ceny nowej, za który chcesz sprzedawać. Formuły w Magazynie patrzą w tę jedną komórkę. Żeby przy przeciąganiu nie uciekła, przypinasz ją **pinezką**, czyli znakiem dolara: `$B$9`.'
    ],
    realWorld: 'Właściciel sklepu zaczyna dzień od jednej karty z liczbami: ile towaru, ile sprzedane, ile pieniędzy. A gdy robi przecenę „wszystko 20% taniej”, zmienia jeden procent w jednej komórce i tysiąc cen przelicza się samo.',
    example: {
      intro: 'Pulpit po tej misji i kolumna Propozycja w Magazynie, która patrzy w B9 na Pulpicie.',
      sheets: [
        { caption: 'Karta „Pulpit”', fx: { cell: 'B3', text: '=SUMA(Magazyn!F2:F100)' }, sel: 'B3', tabs: KARTY, tab: 1,
          marks: { A1: 'head', A8: 'head', B2: 'ok', B3: 'ok', B4: 'ok', B5: 'ok', B6: 'ok', B9: 'note' }, rows: pulpit(9) },
        { caption: 'Karta „Magazyn”: kolumna M z pinezką', fx: { cell: 'M3', text: '=E3*Pulpit!$B$9' }, head: true, sel: 'M3', tabs: KARTY, tab: 0,
          marks: { M2: 'ok', M3: 'ok', M4: 'ok', M5: 'ok' }, rows: magazyn({ do: 'M', nry: od(1, 4), puste: ['H', 'I', 'J', 'K'] }) }
      ],
      note: 'Zakresy kończą się na wierszu 100, choć rzeczy jest 20. To zapas: każda nowa rzecz od razu wchodzi do wszystkich liczb.'
    },
    steps: [
      { text: 'Nowa karta `Pulpit`. Kliknij **A1** i wklej podpisy. Pogrub **A1** i **A8**, poszerz kolumnę A.', copy: 'Magazyn\nIle rzeczy\nWartość wszystkiego\nŚrednia cena\nNajdroższa\nNajtańsza\n\nUstawienia\nProcent ceny nowej' },
      { text: 'Suma z drugiej karty, klikając. Kliknij **B3**, wpisz `=SUMA(`, kliknij kartę **Magazyn** i zaznacz od **F2** do **F21**. Wpisz `)` i [[Enter]]. Potem kliknij B3, w pasku formuły zamień `F21` na `F100` i [[Enter]]: suma ma zapas na 40 rzeczy i więcej.', copy: '=SUMA(Magazyn!F2:F100)', tip: 'Gdy zaczynasz pisać `=SU`, Arkusz podpowiada funkcje z opisem. [[Tab]] przyjmuje podpowiedź.' },
      { text: 'W **B4** wklej średnią. W **B5** i **B6** wklej to samo i zamień `ŚREDNIA` na `MAX`, a potem na `MIN`.', copy: '=ŚREDNIA(Magazyn!F2:F100)', tip: 'W Arkuszach Google największa liczba to MAX, choć w Excelu nazywa się MAKS.' },
      { text: 'Ile rzeczy? W **B2** policz wypełnione komórki w kolumnie Rzecz.', copy: '=ILE.NIEPUSTYCH(Magazyn!B2:B100)' },
      { text: 'Ustawienie: na Pulpicie w **B9** wpisz `50%`. W Magazynie w **M1** wpisz `Propozycja`, w **M2** wklej formułę z pinezką, przeciągnij do **M21** i ustaw walutę.', copy: '=E2*Pulpit!$B$9', tip: 'Dolary trzymają adres w miejscu. Bez nich w M3 byłoby `Pulpit!B10`, czyli pusta komórka i zero. Skrót: kursor na adresie w formule i [[F4]].' },
      { text: 'Zmień na Pulpicie **B9** na `40%` i zajrzyj do Magazynu: wszystkie propozycje zmalały. Jedna komórka zmieniła dwadzieścia liczb. Ustaw z powrotem `50%`.' }
    ],
    check: [
      'Pulpit pokazuje: ' + ST.ile + ' rzeczy, wartość ' + zl(ST.suma) + ', średnio ' + zl(ST.srednia) + ', najdroższa ' + zl(ST.max) + ', najtańsza ' + zl(ST.min) + '.',
      'Wszystkie zakresy kończą się na wierszu 100.',
      'W M3 formuła to `=E3*Pulpit!$B$9`: część z Pulpitem się nie przesunęła.',
      'Zmiana procentu w B9 zmienia całą kolumnę M.'
    ],
    variants: [
      { text: 'Zobacz, co robi brak dolarów: w wolnej kolumnie (np. T) wklej formułę poniżej, przeciągnij w dół i kliknij T3. Potem skasuj kolumnę.', copy: '=E2*Pulpit!B9' },
      { text: 'Ile kosztowałoby to wszystko nowe w sklepie?', copy: '=SUMA(Magazyn!E2:E100)' },
      { text: 'Funkcja w funkcji. Średnia zaokrąglona do pełnych złotych:', copy: '=ZAOKR(ŚREDNIA(Magazyn!F2:F100);0)' }
    ],
    solo: {
      text: 'Na karcie `Pomysły` dodaj kolumnę `Propozycja`, która mnoży cenę nowej Twoich rzeczy przez procent z Pulpitu. Z pinezką, przeciągniętą w dół.',
      hints: ['=, klik w cenę nowej, *, potem karta Pulpit i B9.', 'F4 dopisze dolary.']
    },
    discovery: { text: 'Wciśnij [[Alt]] + [[/]] i wpisz `waluta`. Arkusz szuka w menu za Ciebie. Gdy zapomnisz, gdzie coś jest, to najszybsza droga.' },
    journalPrompt: 'Własnymi słowami: po co Pulpit i po co pinezka?',
    forParent: {
      teaches: 'SUMA, ŚREDNIA, MAX, MIN, ILE.NIEPUSTYCH; zakres z zapasem; „dane osobno, podsumowanie osobno”; odwołanie do innej karty; ustawienie w jednej komórce i odwołanie bezwzględne ($, F4).',
      ask: 'Zapytaj, dlaczego zakres kończy się na 100. Zmień procent w B9 i niech przewidzi, co się stanie w Magazynie.'
    }
  });

  M.push({
    id: 'menu',
    title: 'Status: menu, kolory i filtr',
    subtitle: 'Status jednym kliknięciem, wiersz, który sam szarzeje, i widok tylko tego, czego szukasz',
    technique: 'Menu, formatowanie warunkowe, filtr',
    minutes: 20,
    why: [
      'Każda rzecz ma **status**: w domu, wystawione, zarezerwowane, sprzedane. Wpisywany ręcznie prędzej czy później zamieni się w „sprzedae” i formuły przestaną go liczyć. **Menu w komórce** daje gotowe opcje do kliknięcia, a **pole wyboru** to kwadracik do odhaczania.',
      '**Formatowanie warunkowe** to kolor z regułą: sprzedane wiersze same szarzeją. **Filtr** chowa na chwilę wiersze, których nie chcesz widzieć, i niczego nie kasuje.'
    ],
    realWorld: 'Kurierzy klikają statusy paczek cały dzień: „przyjęta”, „w drodze”, „doręczona”. A kupujący na Vinted i OLX filtrują po kategorii i sortują po cenie: pod spodem takiej strony jest tabela, a przycisk „od najtańszych” to zwykłe sortowanie.',
    example: {
      intro: 'Magazyn ze statusem, polami wyboru i regułą: sprzedane wiersze są szare.',
      sheets: [
        { caption: 'Karta „Magazyn”: status, zdjęcia i kolor z reguły', head: true, tabs: KARTY, tab: 0,
          marks: koloryStatusu(od(1, 8), 'I'), rows: magazyn({ do: 'I', nry: od(1, 8) }) }
      ],
      note: 'W regule jest `$H2`: dolar trzyma kolumnę H, a numer wiersza jedzie. Dlatego każdy wiersz sprawdza swój własny status.'
    },
    steps: [
      { text: 'Karta `Magazyn`. Kliknij **H2** i wklej statusy wszystkich 20 rzeczy.', copy: wklej(['H'], od(1, 20)), tip: 'Każda linijka trafia do kolejnej komórki w dół.' },
      { text: 'Zaznacz **H2:H100** (kliknij H2, przewiń, [[Shift]] i kliknij H100). Menu {{Wstaw}} → {{Menu}}. Opcje mają być cztery: `w domu`, `wystawione`, `zarezerwowane`, `sprzedane`. Brakujące dopisz przyciskiem **Dodaj kolejny element**, nadaj kolory, **Gotowe**.' },
      { text: 'Zdjęcia. Zaznacz **I2:I21**, {{Wstaw}} → {{Pole wyboru}}. Przy wciąż zaznaczonych polach wciśnij [[Spacja]]: odhaczają się wszystkie. Odznacz pola przy rzeczach **8** i **18**: te nie mają jeszcze zdjęć.' },
      { text: 'Kolor z regułą: {{Formatuj}} → {{Formatowanie warunkowe}}. W polu **Zastosuj do zakresu** wpisz `A2:R100`, pod **Formatuj komórki, jeśli** wybierz **Niestandardowa formuła to** i wklej formułę. Styl: szare tło i szary tekst, **Gotowe**.', copy: '=$H2="sprzedane"' },
      { text: 'Filtr: kliknij komórkę tabelki, {{Dane}} → {{Utwórz filtr}}. Lejek przy **Status** → **Wyczyść** → zaznacz tylko `wystawione` → **OK**. Potem lejek przy **Moja cena** → **Sortuj od Z do A**. Na górze najdroższa wystawiona rzecz: LEGO City.' },
      { text: 'Sprzątanie: lejek przy **Nr** → **Sortuj od A do Z**, potem {{Dane}} → {{Usuń filtr}}. Wszystkie 20 rzeczy wraca, po kolei.', tip: 'Gdy kiedyś „zginą” Ci wiersze, to prawie zawsze filtr. Szukaj lejka w nagłówku.' }
    ],
    check: [
      'Każda komórka w H2:H100 ma menu z czterema kolorowymi opcjami.',
      'Pól wyboru odhaczonych jest 18, puste są przy numerach 8 i 18.',
      'Sprzedane wiersze są szare w całej szerokości.',
      'Po usunięciu filtra widać wszystkie rzeczy w kolejności numerów.'
    ],
    variants: [
      { text: 'Zarezerwowane na żółto: **Dodaj kolejną regułę**, ten sam zakres, formuła poniżej, żółte tło.', copy: '=$H2="zarezerwowane"' },
      { text: 'Menu w kolumnie **G**: `Vinted` i `OLX`. Platforma bez literówek.' },
      { text: 'Filtr po warunku: lejek przy **Moja cena** → {{Filtrowanie wg warunku}} → **Większe niż** → `50`.' },
      { text: 'Sortowanie bez filtra: zaznacz całą tabelkę, {{Dane}} → {{Sortuj zakres}} → {{Zaawansowane opcje sortowania zakresów}} → **Dane mają wiersz nagłówka**. Zawsze cała tabelka, nie jedna kolumna.' }
    ],
    solo: {
      text: 'Zrób menu w kolumnie **C** (Kategoria) z czterema opcjami: książki, zabawki, gry, elektronika. Każda w innym kolorze.',
      hints: ['Zaznacz C2:C100.', 'Opcje napisane dokładnie tak jak w tabeli.']
    },
    discovery: { text: 'Wciśnij [[Ctrl]] + [[F]] i wpisz `LEGO`. Arkusz podświetla każdą komórkę z tym słowem. Przy 40 rzeczach to szybsze niż przewijanie.' },
    journalPrompt: 'Dlaczego status z menu jest lepszy niż wpisany ręcznie?',
    forParent: {
      teaches: 'Menu w komórce z kolorami, pola wyboru, formatowanie warunkowe z formułą dla całego wiersza ($H2), filtr po wartości, sortowanie z lejka, usuwanie filtra.',
      ask: 'Zmień status jednej rzeczy i niech przewidzi kolor wiersza. Zapytaj, co się stanie z liczeniem sprzedanych, gdy ktoś wpisze „sprzedae”.'
    }
  });

  /* =========================================================================================
     Rozdział 2. Centrum analiz
     ========================================================================================= */
  M.push({
    id: 'jezeli',
    title: 'JEŻELI i daty',
    subtitle: 'Arkusz ocenia cenę i liczy, ile dni rzecz czekała na kupującego',
    technique: 'JEŻELI i daty',
    minutes: 20,
    why: [
      '`JEŻELI` sprawdza warunek i wybiera jedną z dwóch odpowiedzi. Trzy części rozdzielone średnikiem: **warunek; co gdy tak; co gdy nie**. Dziś Arkusz pisze „za drogo?”, gdy Twoja cena jest wyższa niż propozycja z Pulpitu. Znak zapytania jest celowy: decyzję podejmujesz Ty.',
      'Dla Arkusza data to liczba dni, więc **data sprzedaży minus data wystawienia** to liczba dni czekania. Przy niesprzedanych rzeczach data sprzedaży jest pusta i odejmowanie dałoby bzdury, więc znów pomaga JEŻELI: „jeśli pusto, zostaw pusto”.'
    ],
    realWorld: 'Sklep decyduje formułą, czy dać darmową dostawę od 100 zł, i liczy, ile dni towar leży na półce. Coś, co leży za długo, dostaje przecenę. Prawie każda automatyczna decyzja w aplikacji to w środku jakieś JEŻELI.',
    example: {
      intro: 'Kolumna N ocenia cenę, kolumna O liczy dni do sprzedaży.',
      sheets: [
        { caption: 'Karta „Magazyn”: ocena ceny i dni do sprzedaży', fx: { cell: 'N4', text: '=JEŻELI(F4>M4;"za drogo?";"ok")' }, head: true, sel: 'N4', tabs: KARTY, tab: 0,
          marks: { N4: 'warn', N7: 'warn', O2: 'ok', O3: 'ok', O6: 'ok' }, rows: magazyn({ do: 'O', nry: od(1, 6) }) }
      ],
      note: 'LEGO City: 150 zł przy propozycji 149,50 zł. Różnica 50 groszy, a formuła i tak ją widzi.'
    },
    steps: [
      { text: 'Karta `Magazyn`, w **N1** wpisz `Ocena ceny`. W **N2** wklej formułę i przeciągnij do **N21**. Przeczytaj ją na głos: „jeżeli F2 jest większe od M2, napisz za drogo?, a jeśli nie, napisz ok”. „Za drogo?” powinno stać przy trzech rzeczach.', copy: '=JEŻELI(F2>M2;"za drogo?";"ok")', tip: 'Tekst w formule zawsze stoi w cudzysłowach prostych. Liczby i adresy nie.' },
      { text: 'Zmień na Pulpicie procent w **B9** na `40%`. W Magazynie „za drogo?” stoi teraz przy dziewięciu rzeczach. Ustaw z powrotem `50%`.' },
      { text: 'Kliknij **J2** i wklej daty: kiedy rzecz wystawiona i kiedy sprzedana. Wskakują w kolumny J i K.', copy: wklej(['J', 'K'], od(1, 20)), tip: 'Daty mają stać po prawej stronie komórki. Jeśli stoją po lewej, plik nie ma regionu Polska (misja 0).' },
      { text: 'W **O1** wpisz `Dni do sprzedaży`, w **O2** wklej formułę i przeciągnij do **O21**. Liczby pojawiają się tylko przy sprzedanych rzeczach.', copy: '=JEŻELI(K2="";"";K2-J2)', tip: '`K2=""` znaczy „K2 jest puste”, a dwa cudzysłowy bez niczego w środku to „zostaw pusto”. Gdy zamiast liczb widać daty: {{Formatuj}} → {{Liczba}} → {{Liczba}}.' },
      { text: 'Na **Pulpicie** w **A11** wpisz `Sprzedaż` (pogrub), w **A12** `Średnio dni do sprzedaży`, a w **B12**:', copy: '=ŚREDNIA(Magazyn!O2:O100)', tip: 'ŚREDNIA pomija puste komórki, więc liczy tylko sprzedane rzeczy.' }
    ],
    check: [
      'W kolumnie N są tylko „za drogo?” i „ok”: trzy razy „za drogo?” przy 50%.',
      'Daty w J i K stoją po prawej stronie komórek.',
      'Na Pulpicie w B12 jest ' + liczba(ST.sredniDni) + '.'
    ],
    variants: [
      { text: '„Za drogo?” na czerwono: zaznacz **N2:N100**, {{Formatuj}} → {{Formatowanie warunkowe}} → **Tekst zawiera** → `za drogo` → czerwony tekst.' },
      { text: 'Ile dni wisi ogłoszenie, licząc do dziś? W wolnej kolumnie, przeciągnij:', copy: '=JEŻELI(J2="";"";DZIŚ()-J2)' },
      { text: 'W jaki dzień tygodnia rzecz się sprzedała?', copy: '=JEŻELI(K2="";"";TEKST(K2;"dddd"))' },
      { text: 'Podpowiedź do obniżki: wystawione i wiszą dłużej niż 14 dni. ORAZ sprawdza dwa warunki naraz:', copy: '=JEŻELI(ORAZ(H2="wystawione";DZIŚ()-J2>14);"obniż cenę?";"")' }
    ],
    solo: {
      text: 'W kolumnie **S** zrób formułę, która pisze `drogie`, gdy Moja cena jest większa niż 100 zł, a `tanie` w przeciwnym razie. Ile jest drogich rzeczy? Potem skasuj kolumnę S.',
      hints: ['Warunek: F2>100.', 'Drogich rzeczy są trzy.']
    },
    discovery: { text: 'Wpisz w wolnej komórce `=DZIŚ()`. Jutro będzie tam inna data, bo DZIŚ() idzie z czasem. A [[Ctrl]] + [[;]] wstawia datę na stałe, więc datę sprzedaży wpisuj zawsze skrótem.' },
    journalPrompt: 'Jaką decyzję w sklepie mogłoby podejmować za Ciebie JEŻELI?',
    forParent: {
      teaches: 'JEŻELI (warunek; co gdy tak; co gdy nie), tekst w cudzysłowach, data jako liczba dni, odejmowanie dat, JEŻELI chroniące przed pustą komórką, ŚREDNIA pomijająca puste.',
      ask: 'Poproś, żeby przeczytał formułę z kolumny N na głos. Zapytaj, dlaczego przy dniach do sprzedaży potrzebne było JEŻELI.'
    }
  });

  M.push({
    id: 'licz-jezeli',
    title: 'Ile sprzedane i ile zarobione',
    subtitle: 'LICZ.JEŻELI, SUMA.JEŻELI i wykres w minutę',
    technique: 'Liczenie z warunkiem i wykres',
    minutes: 20,
    why: [
      '`LICZ.JEŻELI` liczy tylko pasujące wiersze, na przykład ile rzeczy ma status „sprzedane”. `SUMA.JEŻELI` dodaje ceny tylko z pasujących wierszy: ile pieniędzy dały sprzedane rzeczy albo ile warta jest każda kategoria.',
      'Na koniec **wykres**: zaznaczasz tabelkę i Arkusz rysuje ją za Ciebie. Kolumnowy porównuje (która kategoria większa), kołowy pokazuje części całości, liniowy zmianę w czasie.'
    ],
    realWorld: 'Kierowniczka sklepu sprawdza co wieczór, ile sprzedało się butów, a ile kurtek: to jedna SUMA.JEŻELI na kategorię. Na zebraniu pokazuje to wykresem, który nie rysuje się ręcznie, tylko przez Wstaw → Wykres.',
    example: {
      intro: 'Pulpit po tej misji: blok „Sprzedaż” i tabelka kategorii, z której powstaje wykres.',
      sheets: [
        { caption: 'Karta „Pulpit”', fx: { cell: 'B14', text: '=SUMA.JEŻELI(Magazyn!H2:H100;"sprzedane";Magazyn!F2:F100)' }, sel: 'B14', tabs: KARTY, tab: 1,
          marks: { A1: 'head', A8: 'head', A11: 'head', D1: 'head', E1: 'head', B13: 'ok', B14: 'ok', E2: 'ok', E3: 'ok', E4: 'ok', E5: 'ok' },
          rows: pulpit(14, { kategorie: true }) }
      ],
      note: 'Suma kolumny E to ' + zl(ST.suma) + ', tyle samo co „Wartość wszystkiego” w B3. To sprawdzenie, że żadna rzecz nie zgubiła się po drodze.'
    },
    steps: [
      { text: 'Na **Pulpicie** w **A13** wpisz `Sprzedane rzeczy`, a w **B13**:', copy: '=LICZ.JEŻELI(Magazyn!H2:H100;"sprzedane")', tip: 'Słowo w cudzysłowie musi być napisane dokładnie tak jak w menu statusu. Dlatego menu jest takie ważne.' },
      { text: 'W **A14** `Zarobione`, a w **B14** suma cen tylko sprzedanych rzeczy. Trzy części: gdzie szukać; czego szukać; co dodawać.', copy: '=SUMA.JEŻELI(Magazyn!H2:H100;"sprzedane";Magazyn!F2:F100)' },
      { text: 'Tabelka kategorii. Kliknij **D1** i wklej.', copy: 'Kategoria\tWartość\n' + KATEGORIE.join('\n') },
      { text: 'W **E2** suma cen jednej kategorii, przeciągnij do **E5**.', copy: '=SUMA.JEŻELI(Magazyn!C$2:C$100;D2;Magazyn!F$2:F$100)', tip: 'Warunkiem jest komórka D2, a dolary trzymają zakresy przy przeciąganiu. W E3 warunkiem jest już D3, czyli zabawki.' },
      { text: 'Wykres: zaznacz **D1:E5** i wybierz {{Wstaw}} → {{Wykres}}. W **Edytorze wykresów**: **Konfiguracja** → typ **Wykres kolumnowy**, potem **Dostosuj** → **Tytuły wykresu i osi** → `Wartość rzeczy w kategoriach`. Przesuń wykres pod tabelki.', tip: 'Edytor się zamknął? Kliknij dwa razy na wykres.' }
    ],
    check: [
      'B13 = ' + ST.sprzedane + ', B14 = ' + zl(ST.zarobione) + '.',
      'Najwięcej warte są zabawki: ' + zl(sumaGdzie('C', 'zabawki')) + ', i to ich kolumna na wykresie jest najwyższa.',
      'Suma kolumny E zgadza się z „Wartość wszystkiego” w B3.',
      'Zmiana statusu rzeczy w Magazynie zmienia B13 i B14.'
    ],
    variants: [
      { text: 'Ile rzeczy w każdej kategorii? W **F1** `Ile`, w **F2**, przeciągnij:', copy: '=LICZ.JEŻELI(Magazyn!C$2:C$100;D2)' },
      { text: 'Porównanie w cudzysłowie. Ile rzeczy kosztuje więcej niż 100 zł?', copy: '=LICZ.JEŻELI(Magazyn!F2:F100;">100")' },
      { text: 'Wykres kołowy platform: tabelka `Vinted` i `OLX` z SUMA.JEŻELI po kolumnie G, potem {{Wstaw}} → {{Wykres}} → **Wykres kołowy**.' },
      { text: 'Liczby na kolumnach: {{Dostosuj}} → {{Seria}} → **Etykiety danych**.' }
    ],
    solo: {
      text: 'W **A15** wpisz `Wystawione`, a w **B15** policz rzeczy ze statusem `wystawione`. Sam, na wzór B13.',
      hints: ['Skopiuj tekst formuły z paska nad siatką i zmień jedno słowo.', 'Wychodzi ' + ST.wystawione + '.']
    },
    discovery: { text: 'Gwiazdka w warunku zastępuje dowolne litery. Ile rzeczy ma w nazwie na początku LEGO?', copy: '=LICZ.JEŻELI(Magazyn!B2:B100;"LEGO*")' },
    journalPrompt: 'Która liczba z Pulpitu najbardziej Cię ciekawi?',
    parent: 'Pokaż rodzicowi Pulpit i wykres. Poproś, żeby zmienił status jednej rzeczy w Magazynie, i pokaż, jak Pulpit to łapie.',
    forParent: {
      teaches: 'LICZ.JEŻELI i SUMA.JEŻELI z warunkiem tekstowym i w komórce, pinezki na zakresach, sprawdzanie wyniku drugą drogą, wykres z zaznaczenia i dobór typu wykresu.',
      ask: 'Zapytaj, skąd wie, że wynik jest dobry. Dobra odpowiedź: suma kategorii zgadza się z wartością wszystkiego.'
    }
  });

  M.push({
    id: 'ceny',
    title: 'Ceny z rynku',
    subtitle: 'MEDIANA z podobnych ogłoszeń i WYSZUKAJ.PIONOWO, które przynosi ją do Magazynu',
    technique: 'MEDIANA i WYSZUKAJ.PIONOWO',
    minutes: 20,
    why: [
      'Prawdziwą cenę mówi rynek: za ile ludzie wystawiają taką samą rzecz. Na karcie **Ceny** zapisujesz po pięć cen podobnych ogłoszeń i liczysz **medianę**, czyli cenę środkową. Jedno dziwnie drogie ogłoszenie nie zawyża jej tak jak średniej.',
      '`WYSZUKAJ.PIONOWO` łączy karty po numerze: bierze Nr z Magazynu, szuka go w pierwszej kolumnie Cen i przynosi medianę z tego samego wiersza. Cztery części: **czego szukam; gdzie szukam; którą kolumnę przynieść; FAŁSZ** (tylko dokładnie ten numer).'
    ],
    realWorld: 'Pośrednicy od mieszkań zbierają ceny podobnych ofert i patrzą na środek, a nie na najdroższą. A kasa w sklepie przy każdym piknięciu robi to samo co WYSZUKAJ.PIONOWO: kod z etykiety idzie do cennika, cennik oddaje cenę.',
    example: {
      intro: 'Karta Ceny z medianą w H, a w Magazynie kolumna R, do której mediana przychodzi sama.',
      sheets: [
        { caption: 'Karta „Ceny”', fx: { cell: 'H2', text: '=MEDIANA(C2:G2)' }, head: true, sel: 'H2', tabs: KARTY.concat(['Ceny']), tab: 2,
          marks: { G2: 'note', H2: 'ok', H3: 'ok', H4: 'ok', H5: 'ok', H6: 'ok', H7: 'ok' }, rows: ceny(NRY_CEN) },
        { caption: 'Karta „Magazyn”: cena z rynku w kolumnie R', fx: { cell: 'R4', text: '=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(A4;Ceny!A:H;8;FAŁSZ);"")' }, head: true, sel: 'R4', tabs: KARTY.concat(['Ceny']), tab: 0,
          marks: { F4: 'blue', R4: 'ok', F5: 'blue', R5: 'ok' }, rows: magazyn({ do: 'R', nry: od(2, 5), puste: ['P', 'Q'] }) }
      ],
      note: 'LEGO City: średnia z pięciu cen to 150,80 zł, a mediana 140 zł. Średnią podbiło jedno ogłoszenie za 199 zł (żółte). Kolumny P i Q zostają na misję 8.'
    },
    steps: [
      { text: 'Nowa karta `Ceny`. Kliknij **A1** i wklej po pięć cen podobnych ogłoszeń dla sześciu rzeczy z Magazynu.',
        copy: 'Nr\tRzecz\tCena 1\tCena 2\tCena 3\tCena 4\tCena 5\tMediana\n' + NRY_CEN.map(function (nr) { return [nr, RZECZY[nr - 1][1]].concat(CENY[nr]).join('\t'); }).join('\n'),
        tip: 'Nr musi być taki sam jak w Magazynie: po nim Arkusz połączy obie karty.' },
      { text: 'W **H2** mediana z wiersza, przeciągnij do **H7**. Zaznacz kolumny od **C** do **H** i ustaw walutę.', copy: '=MEDIANA(C2:G2)', tip: 'Zakres może iść w bok: C2:G2 to pięć komórek w wierszu 2.' },
      { text: 'Karta `Magazyn`, w **R1** wpisz `Na rynku`. W **R2** wklej formułę i przeciągnij do **R21**. Przy sześciu rzeczach pojawia się cena z rynku.', copy: '=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(A2;Ceny!A:H;8;FAŁSZ);"")', tip: '`Ceny!A:H` to kolumny od A do H na karcie Ceny, a mediana jest w H, ósmej kolumnie: stąd 8. Bez JEŻELI.BŁĄD przy pozostałych rzeczach byłoby `#N/A`, czyli „nie znaleziono”.' },
      { text: 'Nowa wycena. Na karcie **Ceny** kliknij **A8** i wklej rzecz numer 6. Przeciągnij formułę z **H7** do **H8**. Wróć do Magazynu: przy Mario Kart pojawiło się 130 zł.', copy: ['6', RZECZY[5][1]].concat(CENY_NR_6).join('\t') },
      { text: 'Porównaj kolumny **F** i **R**. Mario Kart masz za 140 zł, a rynek mówi 130 zł. Przy której rzeczy obniżyłbyś cenę, a przy której zostawił?' }
    ],
    check: [
      'W kolumnie H są mediany: ' + NRY_CEN.map(function (nr) { return zl(mediana(CENY[nr])); }).join(', ') + ', a potem 130,00 zł.',
      'W Magazynie w kolumnie R jest siedem cen z rynku, a przy reszcie pusto.',
      'Umiesz powiedzieć, co znaczy 8 w formule i co znaczyłoby #N/A.'
    ],
    variants: [
      { text: 'Średnia dla porównania. W **I2** Cen, przeciągnij i porównaj z medianą:', copy: '=ŚREDNIA(C2:G2)' },
      { text: 'Nowsza kuzynka WYSZUKAJ.PIONOWO, bez liczenia kolumn:', copy: '=XLOOKUP(A2;Ceny!A:A;Ceny!H:H)' },
      { text: 'Najniższa i najwyższa cena z wiersza: `=MIN(C2:G2)` i `=MAX(C2:G2)`.' },
      { text: 'Kolor, gdy Twoja cena jest wyższa niż rynek: reguła na zakresie `F2:F100`, niestandardowa formuła:', copy: '=ORAZ($R2<>"";$F2>$R2)' }
    ],
    solo: {
      text: 'Prawdziwa wycena. Wybierz jedną rzecz z karty Pomysły, znajdź na Vinted albo OLX pięć podobnych ogłoszeń (do oglądania nie trzeba konta) i wpisz ich ceny w wierszu 9 karty Ceny, z numerem 21. Ile wychodzi mediana? Jeśli zabraknie czasu, dokończ następnego dnia.',
      hints: ['Szukaj tej samej rzeczy w podobnym stanie.', 'Formułę z H8 przeciągnij o wiersz w dół.']
    },
    discovery: { text: 'Kliknij pustą komórkę i wpisz `=MEDIANA(`. Arkusz pokazuje dymek z opisem funkcji i przykładem. Tak poznasz każdą funkcję, której nie było w Akademii. Wciśnij [[Esc]].' },
    journalPrompt: 'Przy której rzeczy rynek najbardziej różni się od Twojej ceny?',
    forParent: {
      teaches: 'Druga karta z danymi, MEDIANA na zakresie w wierszu i różnica wobec średniej, WYSZUKAJ.PIONOWO po numerze, #N/A i JEŻELI.BŁĄD, podpowiedzi funkcji jako źródło wiedzy.',
      ask: 'Zapytaj, dlaczego do wyceny lepsza jest mediana niż średnia i skąd w formule wzięło się 8.'
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
      'Jedna zmiana w edytorze i z tej samej tabeli dostajesz inną odpowiedź. To najszybszy sposób, żeby zadać danym nowe pytanie.'
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
      { text: 'Karta `Magazyn`. Zaznacz całe kolumny od **A** do **R**: kliknij literę A, przytrzymaj [[Shift]], kliknij R. Menu {{Wstaw}} → {{Tabela przestawna}} → **Nowy arkusz** → **Utwórz**. Nazwij nową kartę `Analiza`.', tip: 'Całe kolumny, a nie A1:R21. Wtedy nowe rzeczy same trafią do tabeli przestawnej.' },
      { text: 'W **Edytorze tabeli przestawnej** po prawej: przy **Wiersze** kliknij **Dodaj** → **Kategoria**, a przy **Wartości** → **Dodaj** → **Moja cena**. Wartość każdej kategorii bez jednej formuły.' },
      { text: 'Jeszcze raz **Wartości** → **Dodaj** → **Nr**, a w tym polu zmień **Podsumuj według** na **ILE.LICZB** (po angielsku **COUNT**). To liczba rzeczy. Zgadza się z Pulpitem?' },
      { text: 'Przy **Filtry** kliknij **Dodaj** → **Status**. Zostaw zaznaczone tylko `sprzedane`, **OK**. Teraz widać, ile zarobiłeś w każdej kategorii.' },
      { text: 'Inne pytanie: przy **Wiersze** kliknij **X** obok Kategoria i dodaj **Platforma**. Na której platformie zarobiłeś więcej?' }
    ],
    check: [
      'Bez filtra suma końcowa to ' + zl(ST.suma) + ' i ' + ST.ile + ' rzeczy, tak samo jak na Pulpicie.',
      'Z filtrem „sprzedane” suma końcowa to ' + zl(ST.zarobione) + ', tyle co „Zarobione” na Pulpicie.',
      'Wiesz, gdzie w edytorze są Wiersze, Wartości i Filtry.'
    ],
    variants: [
      { text: 'Krzyżówka: przy **Kolumny** dodaj **Status**. Każda kategoria w każdym statusie naraz.' },
      { text: 'Średnia zamiast sumy: przy Moja cena **Podsumuj według** → **ŚREDNIA**. W której kategorii rzeczy są najdroższe?' },
      { text: 'Wykres z tabeli przestawnej: zaznacz ją i {{Wstaw}} → {{Wykres}}. Sam się aktualizuje.' }
    ],
    solo: {
      text: 'Zrób drugą tabelę przestawną z Magazynu, na nowym arkuszu: ile rzeczy jest w każdym statusie i ile są warte.',
      hints: ['Wiersze: Status.', 'Wartości: Moja cena (SUMA) i Nr (ILE.LICZB).', 'W domu leżą rzeczy warte ' + zl(sumaGdzie('H', 'w domu')) + '.']
    },
    discovery: { text: 'Kliknij dwa razy dowolną liczbę w tabeli przestawnej. Arkusz otwiera nową kartę z wierszami, z których ta liczba powstała. Kartę potem usuń (prawy przycisk na karcie → Usuń).' },
    journalPrompt: 'Jakie pytanie do swojego sklepu zadałbyś tabeli przestawnej?',
    forParent: {
      teaches: 'Tabela przestawna z całych kolumn: Wiersze, Wartości (SUMA, ILE.LICZB), Filtry, zamiana pola na inne, porównanie wyniku z formułami na Pulpicie.',
      ask: 'Zadaj pytanie, na które odpowie tabela przestawna: „ile zarobiłeś na książkach?”. Niech pokaże, jak zmienić tabelę, żeby odpowiedzieć.'
    }
  });

  M.push({
    id: 'wiedza',
    title: 'Tekst: opis ogłoszenia i baza wiedzy',
    subtitle: 'Sklejanie tekstu, zawijanie, linki i szukanie',
    technique: 'Tekst w arkuszu',
    minutes: 20,
    why: [
      'Znak `&` skleja kawałki w jeden napis: tekst z komórek i Twoje słowa w cudzysłowach. Dzięki temu każda rzecz dostaje gotowy tytuł i opis ogłoszenia, które kopiujesz na Vinted albo OLX.',
      'Druga nowa karta, **Wiedza**, zbiera rady: jak robić zdjęcia, jak pakować, na co uważać. Jedna rada w jednym wierszu, z tematem z menu, długi tekst zawinięty w komórce. Szukasz w niej skrótem [[Ctrl]] + [[F]].'
    ],
    realWorld: 'Duże sklepy nie piszą opisów ręcznie dla dziesięciu tysięcy produktów: mają szablon i formułę. A działy obsługi klienta mają bazy z setkami odpowiedzi: nowa osoba w pracy nie musi wszystkiego pamiętać, tylko umieć szukać.',
    example: {
      intro: 'Tytuł i opis z formuł w Magazynie oraz karta Wiedza.',
      sheets: [
        { caption: 'Karta „Magazyn”: tytuł i opis z formuł', fx: { cell: 'Q3', text: '="Sprzedam: "&B3&". Stan: "&D3&". Cena: "&F3&" zł."' }, head: true, sel: 'Q3', tabs: KARTY.concat(['Ceny', 'Analiza']), tab: 0,
          marks: { P2: 'ok', P3: 'ok', P4: 'ok', Q2: 'ok', Q3: 'ok', Q4: 'ok' }, rows: magazyn({ do: 'Q', nry: od(1, 3) }) },
        { caption: 'Karta „Wiedza”', head: true, sel: 'D3', tabs: KARTY.concat(['Ceny', 'Analiza', 'Wiedza']), tab: 4,
          rows: [['Temat', 'Rada', 'Od kogo', 'Link']].concat(WIEDZA.map(function (w, i) { return w.concat([i === 1 ? 'Vinted' : '']); })) }
      ],
      note: 'Zmienisz stan albo cenę w Magazynie, a opis poprawi się sam. W D3 na karcie Wiedza jest link: kliknięcie komórki pokazuje okienko z adresem.'
    },
    steps: [
      { text: 'Karta `Magazyn`, w **P1** wpisz `Tytuł`. W **P2** wklej formułę i przeciągnij do **P21**.', copy: '=B2&" - stan "&D2', tip: 'Spacje też stoją w cudzysłowach. Bez nich wyjdzie „Hulajnoga- stanślady użycia”.' },
      { text: 'W **Q1** wpisz `Opis`, w **Q2** wklej formułę i przeciągnij do **Q21**. Kliknij literę **Q** i wybierz {{Formatuj}} → {{Zawijanie tekstu}} → {{Zawijaj}}.', copy: '="Sprzedam: "&B2&". Stan: "&D2&". Cena: "&F2&" zł."', tip: 'Skopiowana komórka z opisem wkleja się poza Arkuszem jako zwykły tekst, gotowy do ogłoszenia.' },
      { text: 'Nowa karta `Wiedza`. Kliknij **A1** i wklej pierwsze rady. Pogrub nagłówek, zablokuj wiersz 1, poszerz kolumnę **B** i ustaw w niej zawijanie tekstu.', copy: 'Temat\tRada\tOd kogo\tLink\n' + WIEDZA.map(function (w) { return w.join('\t'); }).join('\n') },
      { text: 'Menu tematów: zaznacz **A2:A200**, {{Wstaw}} → {{Menu}}, opcje: `zdjęcia`, `ceny`, `pakowanie`, `rozmowa`, `uwaga`. **Gotowe**.' },
      { text: 'Link: kliknij **D3** i wciśnij [[Ctrl]] + [[K]]. Wpisz tekst `Vinted` i adres `https://www.vinted.pl`, potem **Zastosuj**.' },
      { text: 'Szukanie: [[Ctrl]] + [[F]], wpisz `kopert`. Arkusz podświetla radę o pakowaniu. Przy 50 radach to najszybsza droga.' }
    ],
    check: [
      'Każda rzecz ma tytuł i opis, a nikt ich nie przepisywał ręcznie.',
      'Długie opisy i rady są zawinięte i widać je w całości.',
      'Temat rady wybiera się z menu, a w D3 jest działający link.'
    ],
    variants: [
      { text: 'Długość tytułu: krótszy tytuł widać w całości na liście ogłoszeń.', copy: '=DŁ(P2)' },
      { text: 'Skopiuj **Q2**, kliknij wolną komórkę i wciśnij [[Ctrl]] + [[Shift]] + [[V]]: wkleja się sam tekst, bez formuły. Przydaje się, gdy chcesz poprawić opis ręcznie.' },
      { text: 'Ile rad jest o cenach?', copy: '=LICZ.JEŻELI(A2:A200;"ceny")' },
      { text: 'Filtr po temacie: {{Dane}} → {{Utwórz filtr}}, lejek przy Temat, zostaw tylko `uwaga`.' }
    ],
    solo: {
      text: 'Rady od dorosłych. Zapytaj dwie dorosłe osoby: „Co sprzedałeś kiedyś w internecie i jaką masz jedną radę?”. Wpisz ich rady w nowych wierszach karty Wiedza, z tematem z menu i imieniem w kolumnie C.',
      hints: ['Nie musisz zdążyć dziś. Ważne, żeby rady trafiły do arkusza.', 'Nowy temat? Kliknij komórkę z menu, potem ikonę ołówka.']
    },
    discovery: { text: 'Do komórki da się wstawić obrazek: {{Wstaw}} → {{Obraz}} i opcja z napisem „w komórce”. Wstaw obok rady o zdjęciach przykład dobrego zdjęcia.' },
    journalPrompt: 'Która rada od dorosłych najbardziej Cię zaskoczyła?',
    parent: 'Poproś rodzica, żeby był jednym z dorosłych z zadania: niech opowie, co sprzedawał i czego się wtedy nauczył. Wpisz jego radę przy nim.',
    forParent: {
      teaches: 'Sklejanie tekstu znakiem &, zawijanie tekstu, kopiowanie wyniku formuły jako tekstu, karta z radami z menu tematów, link (Ctrl + K), szukanie (Ctrl + F).',
      ask: 'Poproś, żeby skopiował opis jednej rzeczy do wiadomości do Ciebie. Zapytaj, jak znajdzie radę o pakowaniu, gdy rad będzie 50.'
    }
  });

  M.push({
    id: 'pulpit',
    title: 'Cel, pasek i ochrona',
    subtitle: 'Pulpit na finał, zabezpieczenie formuł i sklep w telefonie',
    technique: 'Pulpit i ochrona',
    minutes: 20,
    why: [
      'Pulpitowi brakuje odpowiedzi na najważniejsze pytanie: **ile jeszcze do celu?** Wpisujesz cenę rzeczy, na którą zbierasz, a Arkusz liczy procent i rysuje pasek z kratek funkcją `POWT`, która powtarza znak tyle razy, ile każesz.',
      'Arkusz ma już mnóstwo formuł: jedno przypadkowe wpisanie liczby w B14 i Pulpit zaczyna kłamać. Dlatego **ochrona**: Arkusz ostrzega, zanim nadpiszesz formułę. A że sprzedaż dzieje się w telefonie, plik otwierasz też w aplikacji **Arkusze Google**.'
    ],
    realWorld: 'Zbiórki w internecie pokazują pasek „zebrano 70%”. W firmach plik z ważnymi liczbami ma chronione formuły i historię zmian: gdy coś się nie zgadza, widać, kto i kiedy zmienił komórkę.',
    example: {
      intro: 'Pulpit z celem 300 zł. Zarobione ' + zl(ST.zarobione) + ', więc pasek jest prawie pełny.',
      sheets: [
        { caption: 'Karta „Pulpit”, kolumny A i B', fx: { cell: 'B19', text: '=POWT("█";ZAOKR(MIN(B18;1)*10;0))&POWT("░";10-ZAOKR(MIN(B18;1)*10;0))' }, sel: 'B19', tabs: KARTY, tab: 1,
          marks: { A1: 'head', A8: 'head', A11: 'head', B14: 'ok', B17: 'note', B18: 'ok', B19: 'ok' }, rows: pulpit(19) }
      ],
      note: 'Nie masz jeszcze celu? Wpisz na razie 300 zł i zmień, gdy wybierzesz. Formuły się dostosują.'
    },
    steps: [
      { text: 'Na **Pulpicie** w **A17** wpisz `Cel`, a w **B17** cenę rzeczy, na którą zbierasz (albo na razie `300`), z walutą. W **A18** wpisz `Zebrane`, w **B18** podziel zarobione przez cel i ustaw {{Formatuj}} → {{Liczba}} → {{Procent}}.', copy: '=B14/B17', tip: 'Pusty cel daje `#DZIEL/0!`, bo przez zero dzielić nie wolno.' },
      { text: 'W **A19** wpisz `Pasek`, w **B19** wklej formułę. Pełne kratki to zebrane dziesiątki procent, puste to reszta.', copy: '=POWT("█";ZAOKR(MIN(B18;1)*10;0))&POWT("░";10-ZAOKR(MIN(B18;1)*10;0))', tip: '`ZAOKR(...*10;0)` zamienia 92% na 9 kratek, a `MIN(B18;1)` pilnuje, żeby przy 120% nie było więcej niż 10. Nie musisz jej pisać sam, ważne, żebyś wiedział, co robi który kawałek.' },
      { text: 'Wygląd: pogrub **B14** i **B19** i powiększ ich czcionkę polem z liczbą na pasku narzędzi. Na koniec {{Widok}} → {{Pokaż}} i wyłącz **Linie siatki**: Pulpit wygląda jak ekran aplikacji.' },
      { text: 'Ochrona: na Pulpicie zaznacz **B2:B19**, {{Dane}} → {{Chroń arkusze i zakresy}} → **Ustaw uprawnienia** → **Pokaż ostrzeżenie podczas edytowania tego zakresu** → **Gotowe**. To samo w Magazynie dla **L2:R100**. Spróbuj wpisać coś w B14: Arkusz pyta, czy na pewno. **Anuluj**.', tip: 'Ostrzeżenie tylko pyta, więc cel w B17 i procent w B9 dalej możesz zmieniać.' },
      { text: 'Telefon: zainstaluj aplikację **Arkusze Google** (razem z rodzicem) i zaloguj się tym samym kontem. Otwórz `Sklep treningowy` i zmień status rzeczy numer 4 na `sprzedane`. Na komputerze Pulpit już to widzi. Cofnij.' }
    ],
    check: [
      'B18 pokazuje ' + procent(ZEBRANE) + ', a pasek ma ' + KRATKI + ' pełnych kratek.',
      'Zmiana celu w B17 zmienia procent i pasek.',
      'Próba wpisania czegoś w chronioną komórkę kończy się pytaniem Arkusza.',
      'Zmiana z telefonu pojawiła się na komputerze.'
    ],
    variants: [
      { text: 'Zdanie zamiast liczby:', copy: '=JEŻELI(B18>=1;"Cel zdobyty!";"Brakuje "&(B17-B14)&" zł")' },
      { text: 'Historia zmian: {{Plik}} → {{Historia zmian}} → {{Zobacz historię zmian}} ([[Ctrl]] + [[Alt]] + [[Shift]] + [[H]]). Każda wersja z datą, zmiany zaznaczone kolorem.' },
      { text: 'Kopia na wszelki wypadek: {{Plik}} → {{Utwórz kopię}}. Eksport: {{Plik}} → {{Pobierz}} → **PDF** albo **Microsoft Excel**.' },
      { text: 'Ile rzeczy ma ocenę „za drogo?”', copy: '=LICZ.JEŻELI(Magazyn!N2:N100;"za drogo?")' }
    ],
    solo: {
      text: 'Dopisz na Pulpicie wiersz `Brakuje`: ile złotych zostało do celu. Ma pokazywać zero, a nie liczbę na minusie, gdy cel jest już zdobyty.',
      hints: ['Cel minus zarobione.', 'MAX z zera i tej różnicy nigdy nie spadnie poniżej zera.']
    },
    discovery: { text: 'Chwyć kartę **Pulpit** na dole ekranu i przeciągnij ją na sam początek. Plik otwiera się na pierwszej karcie, więc od teraz zaczynasz od najważniejszych liczb.' },
    journalPrompt: 'Na co chcesz zbierać i ile Ci brakuje?',
    parent: 'Porozmawiaj z rodzicem o celu: na co zbierasz i ile to kosztuje, i wpiszcie razem prawdziwą kwotę do B17. Sprawdźcie też okno **Udostępnij**: Dostęp ogólny „Ograniczony”, na liście osób tylko rodzic.',
    forParent: {
      teaches: 'Procent jako dzielenie, POWT do rysowania paska, MIN jako ogranicznik, wygląd pulpitu, ochrona zakresu z ostrzeżeniem, aplikacja Arkusze Google w telefonie.',
      ask: 'Zapytaj, co robi MIN w formule paska. Zmień coś w jego pliku i poproś, żeby znalazł to w historii zmian.'
    }
  });

  /* =========================================================================================
     Rozdział 3. Twój sklep
     ========================================================================================= */
  M.push({
    id: 'twoj-arkusz-1',
    title: 'Twój sklep, część 1',
    subtitle: 'Plan na kartce i Magazyn z prawdziwymi rzeczami',
    technique: 'Projekt',
    minutes: 20,
    why: [
      'Sklep treningowy był do ćwiczeń. Teraz budujesz swój: od zera, na rzeczach, które naprawdę chcesz sprzedać. Na start dziesięć, potem dopisujesz do czterdziestu.',
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
      { text: 'Nowy plik: `sheets.new`, nazwa `Mój sklep`, region Polska. Udostępnij go rodzicowi jako Edytujący.' },
      { text: 'Karta `Magazyn`: nagłówki z planu, gruby nagłówek z kolorem, blokada wiersza i dwóch kolumn, waluta w kolumnach z cenami.' },
      { text: 'Menu w kolumnach z wyborem (Status, Platforma, Kategoria) aż do wiersza 100 i reguła, która szarzy sprzedane wiersze.' },
      { text: 'Wpisz pierwsze dziesięć rzeczy: numer (uchwytem), nazwa, kategoria, stan, cena nowej (sprawdź w internecie albo oszacuj) i Twoja cena. Status: `w domu`.' }
    ],
    check: [
      'Masz plan na kartce: karty i kolumny.',
      'Plik „Mój sklep” ma region Polska i jest udostępniony rodzicowi.',
      'W Magazynie jest dziesięć prawdziwych rzeczy z numerami.',
      'Menu i reguły sięgają do wiersza 100.'
    ],
    variants: [
      { text: 'Skrót, ale dopiero gdy raz zbudujesz sam: w Sklepie treningowym prawy przycisk na karcie → {{Kopiuj do}} → **Istniejący arkusz kalkulacyjny** → `Mój sklep`. Karta przychodzi z formatami, menu i formułami. Wystarczy skasować przykładowe rzeczy.' },
      { text: 'Kolumna **Gdzie leży** z menu: szafa, piwnica, półka.' }
    ],
    solo: {
      text: 'Otwórz w Niezbędniku kartę „Lista Solo” i przejdź ją punkt po punkcie. Popraw w Magazynie to, czego brakuje.',
      hints: ['Niezbędnik jest w menu na górze strony Akademii.', 'Najczęściej brakuje zapasu w zakresach i blokady nagłówka.']
    },
    discovery: { text: 'Kliknij gwiazdkę obok nazwy pliku w lewym górnym rogu. Plik trafia do „Oznaczonych gwiazdką” na Dysku Google i znajdziesz go w sekundę.' },
    journalPrompt: 'Jakiej kolumny dodałeś w swoim Magazynie, a nie było jej w treningowym?',
    parent: 'Pokaż rodzicowi plan na kartce i powiedz, dlaczego wybrałeś te kolumny. Potem pokaż Magazyn z dziesięcioma rzeczami.',
    forParent: {
      teaches: 'Planowanie arkusza przed budową, nowy plik od zera, samodzielny Magazyn na prawdziwych rzeczach dziecka: formaty, menu, reguły, blokada, numery.',
      ask: 'Poproś o plan na kartce i zapytaj, po co jest każda kolumna. Sprawdź, czy menu sięgają do wiersza 100.'
    }
  });

  M.push({
    id: 'twoj-arkusz-2',
    title: 'Twój sklep, część 2',
    subtitle: 'Pulpit z Twoimi liczbami, ceny z rynku i baza wiedzy',
    technique: 'Projekt',
    minutes: 20,
    why: [
      'Masz Magazyn, czas na resztę sklepu: Pulpit, prawdziwe ceny z rynku i bazę wiedzy. Tym razem bez formuł do skopiowania. Gdy zapomnisz zapisu, masz Niezbędnik i podpowiedzi funkcji w Arkuszu.',
      'Zasada: każda liczba na Pulpicie odpowiada na jedno pytanie z Twojego planu. Od tej misji sklep żyje: dopisujesz rzeczy, zmieniasz statusy, wpisujesz daty sprzedaży, a Pulpit liczy sam.'
    ],
    realWorld: 'Programiści i analitycy też nie pamiętają wszystkich zapisów. Mają swoje ściągi, a przede wszystkim wiedzą, czego szukać. Dokładnie po to jest Niezbędnik.',
    steps: [
      { text: 'Karta `Pulpit`: ile rzeczy, wartość wszystkiego, sprzedane rzeczy i zarobione (SUMA, ILE.NIEPUSTYCH, LICZ.JEŻELI, SUMA.JEŻELI). Zakresy do wiersza 100.' },
      { text: 'Cel i pasek postępu: prawdziwy cel albo tymczasowy, procent i POWT. Wzór jest na karcie „Procent i pasek postępu” w Niezbędniku.' },
      { text: 'Karta `Ceny`: dla trzech swoich rzeczy znajdź po pięć podobnych ogłoszeń na Vinted albo OLX, wpisz ceny i policz medianę. W Magazynie kolumna `Na rynku` z WYSZUKAJ.PIONOWO i JEŻELI.BŁĄD.' },
      { text: 'Przenieś Wiedzę: w Sklepie treningowym prawy przycisk na karcie `Wiedza` → {{Kopiuj do}} → **Istniejący arkusz kalkulacyjny** → `Mój sklep`. W swoim pliku zmień nazwę nowej karty na `Wiedza`.' },
      { text: 'Gdy wystawisz pierwszą prawdziwą rzecz, zmień jej status na `wystawione` i wpisz datę skrótem [[Ctrl]] + [[;]]. Sklep działa.', tip: 'Ochronę formuł i telefon znasz z misji 9. Zrób je, gdy Pulpit będzie gotowy.' }
    ],
    check: [
      'Każda liczba na Pulpicie odpowiada na pytanie z planu, a zakresy sięgają do wiersza 100.',
      'Trzy Twoje rzeczy mają medianę z rynku, a Magazyn ją pokazuje.',
      'Karta Wiedza jest w Twoim pliku.',
      'Zmiana statusu jednej rzeczy zmienia liczby na Pulpicie.'
    ],
    variants: [
      { text: 'Nie pamiętasz zapisu funkcji? Zacznij pisać `=SUMA.J` i poczekaj na dymek z opisem. Albo otwórz {{Pomoc}} i wpisz nazwę funkcji.' },
      { text: 'Rytuał na koniec miesiąca: kopia pliku z datą w nazwie, spojrzenie na Pulpit i jedna nowa rada w Wiedzy z tego, czego się nauczyłeś.' }
    ],
    solo: {
      text: 'Dodaj do Pulpitu jedną liczbę, której nie było w Sklepie treningowym, a której Ty potrzebujesz. Na przykład ile rzeczy nie ma jeszcze zdjęć albo ile średnio dostajesz za książkę.',
      hints: ['Najpierw zadaj pytanie, potem szukaj funkcji.', 'LICZ.JEŻELI, SUMA.JEŻELI i ŚREDNIA.JEŻELI odpowiadają na większość pytań.']
    },
    discovery: { text: 'Na Dysku Google kliknij prawym przyciskiem plik `Mój sklep` → **Informacje o pliku**. Widać, kiedy powstał: Twój pierwszy arkusz od zera.' },
    journalPrompt: 'Co w swoim arkuszu zmieniłbyś za miesiąc, gdy sprzedasz pierwsze rzeczy?',
    parent: 'Pokaż rodzicowi cały plik „Mój sklep”: Magazyn, Pulpit, Ceny i Wiedzę. Wybierzcie razem pierwszą rzecz do wystawienia.',
    forParent: {
      teaches: 'Samodzielny Pulpit z formułami z kursu, wycena prawdziwych rzeczy z rynku, połączenie kart WYSZUKAJ.PIONOWO, kopiowanie karty do innego pliku, korzystanie z Niezbędnika. Arkusz zaczyna prawdziwą pracę.',
      ask: 'Umówcie się na krótki przegląd Pulpitu raz w miesiącu. Pytaj o plik, nie o kurs: co się sprzedało, co wisi najdłużej, ile do celu.'
    }
  });
})();
