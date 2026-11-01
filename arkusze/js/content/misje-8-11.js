/* Misje 8-11: formatowanie warunkowe i pola wyboru, JEŻELI i spółka, daty i tekst, karty i WYSZUKAJ.PIONOWO. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.missions = window.ARKUSZE.missions || [];
window.ARKUSZE.missions.push(
{
  id: 'kolory',
  title: 'Kolory, które włączają się same',
  subtitle: 'Formatowanie warunkowe, pola wyboru i menu w komórce',
  technique: 'Formatowanie warunkowe',
  minutes: 30,
  why: [
    'Zamiast kolorować komórki ręcznie, dajesz Arkuszowi **regułę**: „jeśli liczba jest większa niż 40, zrób zielone tło”. Kolor włącza się sam, gdy warunek jest spełniony, i gaśnie, gdy przestaje. To **formatowanie warunkowe**.',
    'Do tego dwie rzeczy, które robią z tabelki aplikację: **pole wyboru** (kliknięcie odhacza) i **menu w komórce** (wybierasz z listy zamiast pisać, bez literówek).'
  ],
  example: {
    intro: 'Lista słówek z angielskiego. Kliknięcie w pole wyboru odhacza słowo. Reguła koloruje na żółto wiersze, których jeszcze nie umiesz.',
    sheets: [
      { caption: 'Karta „Słówka”: pola wyboru i kolor z reguły', head: true, sel: 'C3', marks: { A3: 'note', B3: 'note', A4: 'note', B4: 'note', A6: 'note', B6: 'note' },
        rows: [['Angielski', 'Polski', 'Umiem'], ['umbrella', 'parasol', '☑'], ['forget', 'zapominać', '☐'], ['although', 'chociaż', '☐'], ['brave', 'odważny', '☑'], ['neighbour', 'sąsiad', '☐']] }
    ],
    note: 'Zaznaczone pole to w środku wartość PRAWDA, puste to FAŁSZ. Dlatego funkcje z misji 9 będą umiały to liczyć: ile słów umiesz, ile zostało.'
  },
  steps: [
    { text: 'Nowa karta `Słówka`. Wklej tabelkę. Potem podmień słowa na te z Twojej ostatniej listy od korepetytora, choćby osiem.', copy: 'Angielski\tPolski\tUmiem\numbrella\tparasol\nforget\tzapominać\nalthough\tchociaż\nbrave\todważny\nneighbour\tsąsiad\nkitchen\tkuchnia\nlazy\tleniwy\nscissors\tnożyczki' },
    { text: 'Pola wyboru: zaznacz **C2** do **C9**. Menu {{Wstaw}} → {{Pole wyboru}}. Kliknij kilka, żeby odhaczyć słowa, które już umiesz.' },
    { text: 'Reguła kolorująca. Zaznacz **A2** do **C9**. Menu {{Formatuj}} → {{Formatowanie warunkowe}}. Po prawej, pod **Formatuj komórki, jeśli**, wybierz **Niestandardowa formuła to** i wklej formułę poniżej. Kolor tła: jasnożółty. **Gotowe**.', copy: '=$C2=FAŁSZ', tip: 'Formuła sprawdza pole wyboru w kolumnie C tego samego wiersza. Dolar przed C to pinezka z misji 5: kolumna stoi, wiersz jedzie. Odhacz słowo, żółty gaśnie. Gdyby reguła nie działała, spróbuj `=$C2=FALSE`.' },
    { text: 'Prosta reguła bez formuły. Karta `Liga`: zaznacz **C2** do **C7** (punkty). {{Formatuj}} → {{Formatowanie warunkowe}} → **Formatuj komórki, jeśli** → **Większe niż** → `40` → zielone tło → **Gotowe**.' },
    { text: 'Skala kolorów. Przy tym samym zaznaczeniu kliknij **Dodaj kolejną regułę**, zakładka **Skala kolorów**. Wybierz skalę od białego do zielonego. Najwięcej punktów, najciemniej.' },
    { text: 'Menu w komórce. Karta `Kieszonkowe`: zaznacz **C2** do **C50** (kategoria). {{Wstaw}} → {{Menu}}. Wpisz opcje: `słodycze`, `rozrywka`, `sport`, `inne` (każda kolejna przez **Dodaj kolejny element**). Nadaj im kolory. **Gotowe**. Teraz kategorię wybierasz kliknięciem.', tip: 'Menu chroni przed literówkami. „słodycze” i „slodycze” to dla Arkusza dwie różne rzeczy, a przy sumowaniu po kategorii (misja 9) to boli.' },
    { text: 'Sprawdź, czy istniejące kategorie pasują do opcji z menu. Jeśli przy komórce pojawił się czerwony trójkącik, wartości nie ma na liście: kliknij komórkę i wybierz z menu.' }
  ],
  check: [
    'Klikasz pole wyboru, a kolor wiersza zmienia się sam.',
    'Punkty powyżej 40 są zielone, a skala pokazuje, kto ma najwięcej.',
    'Kategorię w Kieszonkowym wybierasz z menu, nie wpisujesz.'
  ],
  variants: [
    { text: 'Reguła na tekst: {{Formatowanie warunkowe}} → **Tekst zawiera** → `Kuba` → kolor. Wszystkie komórki z Kubą świecą.' },
    { text: 'Cały wiersz w kolorze, nie jedna komórka: na Lidze zaznacz A2:D7 i użyj formuły z dolarem przed literą kolumny:', copy: '=$C2>40' },
    { text: 'Podświetl dzisiejsze wydatki. Zaznacz A2:D50 na Kieszonkowym, formuła:', copy: '=$A2=DZIŚ()' }
  ],
  solo: {
    text: 'Karta `Top 5`: dodaj kolumnę **Zrobione** z polami wyboru i regułę, która szarzy albo przekreśla wiersz po odhaczeniu. Potem regułę na ocenę: 9 i więcej na zielono.',
    hints: ['Wstaw → Pole wyboru.', 'Niestandardowa formuła: `=$C2=PRAWDA`, jeśli pola są w kolumnie C.', 'Styl formatowania ma przycisk przekreślenia (S z kreską).']
  },
  discovery: { text: 'Pasek postępu w komórce, bez wykresu. Wpisz w wolnej komórce na karcie `Słówka` formułę poniżej: rysuje tyle kwadracików, ile słówek odhaczyłeś, i rośnie, gdy odhaczasz kolejne. LICZ.JEŻELI rozbieramy na części w misji 9.', copy: '=POWT("■";LICZ.JEŻELI(C2:C9;PRAWDA))' },
  journalPrompt: 'Jaką regułę kolorowania dodałbyś do swojej ligi albo listy?',
  parent: 'Pokaż rodzicowi listę słówek z polami wyboru. Umówcie się, że przed korepetycjami odhaczasz, co umiesz, a żółte wiersze powtarzasz.',
  forParent: {
    teaches: 'Formatowanie warunkowe: reguła prosta (większe niż, tekst zawiera), skala kolorów, formuła niestandardowa z odwołaniem $C2; pola wyboru (PRAWDA/FAŁSZ); menu w komórce (lista rozwijana) i po co ono przy sumowaniu po kategorii.',
    ask: 'Poproś, żeby odhaczył słowo i pokazał, jak gaśnie kolor. Zapytaj, dlaczego kategorie lepiej wybierać z menu niż wpisywać.'
  }
},
{
  id: 'jezeli',
  title: 'JEŻELI, czyli decyzja w formule',
  subtitle: 'Arkusz odpowiada „tak” albo „nie” i liczy tylko to, co pasuje',
  technique: 'JEŻELI i spółka',
  minutes: 30,
  why: [
    '**JEŻELI** to pytanie z dwiema odpowiedziami: `=JEŻELI(C2>40;"wygrana";"przegrana")`. Jeśli C2 jest większe niż 40, komórka pokazuje „wygrana”, jeśli nie, „przegrana”. Trzy części oddzielone średnikami: warunek, co gdy tak, co gdy nie.',
    'Dwie kuzynki robią to na całej kolumnie naraz: **LICZ.JEŻELI** liczy komórki, które spełniają warunek (ile słów umiem), **SUMA.JEŻELI** sumuje tylko te wiersze, które pasują (ile poszło na słodycze). Z nich robi się prawdziwe podsumowania.'
  ],
  example: {
    intro: 'Dwa podsumowania, które liczą się same, gdy odhaczasz słowa i dopisujesz wydatki.',
    sheets: [
      { caption: 'Karta „Słówka”: licznik nauki', fx: { cell: 'F2', text: '=LICZ.JEŻELI(C2:C9;PRAWDA)' }, head: true, sel: 'F2', marks: { F2: 'ok', F3: 'ok', F4: 'ok', F5: 'ok' },
        rows: [['Angielski', 'Polski', 'Umiem', '', 'Podsumowanie', ''], ['umbrella', 'parasol', '☑', '', 'Umiem', '3'], ['forget', 'zapominać', '☐', '', 'Wszystkich', '8'], ['although', 'chociaż', '☐', '', 'Procent', '38%'], ['brave', 'odważny', '☑', '', 'Zostało', '5'], ['neighbour', 'sąsiad', '☐', '', '', '']] },
      { caption: 'Karta „Kieszonkowe”: suma po kategorii', fx: { cell: 'G2', text: '=SUMA.JEŻELI(C$2:C$50;F2;D$2:D$50)' }, head: true, sel: 'G2', marks: { G2: 'ok', G3: 'ok', G4: 'ok' },
        rows: [['Data', 'Co', 'Kategoria', 'Kwota', '', 'Kategoria', 'Razem'], ['01.09.2026', 'lody', 'słodycze', '6,00 zł', '', 'słodycze', '10,50 zł'], ['03.09.2026', 'komiks', 'rozrywka', '14,90 zł', '', 'rozrywka', '39,90 zł'], ['05.09.2026', 'żelki', 'słodycze', '4,50 zł', '', 'sport', '12,00 zł'], ['06.09.2026', 'kino z kumplami', 'rozrywka', '25,00 zł', '', '', ''], ['08.09.2026', 'bilet na basen', 'sport', '12,00 zł', '', '', '']] }
    ],
    note: 'SUMA.JEŻELI ma trzy części: gdzie szukać (kategorie), czego szukać (F2, czyli „słodycze”), co sumować (kwoty). Dolary przed cyframi to pinezki: przy przeciąganiu w dół zakresy stoją, a F2 zmienia się w F3 i F4.'
  },
  steps: [
    { text: 'Karta `Liga`. W **E1** wpisz `Wynik`. W **E2** formuła JEŻELI, potem przeciągnij do **E7**.', copy: '=JEŻELI(C2>40;"wygrana";"przegrana")', tip: 'Cudzysłowy są ważne: tekst w formule zawsze stoi w cudzysłowach. Liczby i adresy nie.' },
    { text: 'Zmień próg: kliknij **E2**, zamień 40 na 45, [[Enter]], przeciągnij od nowa. Kto teraz wygrywa?' },
    { text: 'Karta `Słówka`. W **E1** `Podsumowanie`. W **E2** `Umiem`, w **F2**:', copy: '=LICZ.JEŻELI(C2:C9;PRAWDA)', tip: 'Odhacz jedno słowo więcej i patrz na F2. Jeśli F2 pokazuje 0 mimo odhaczonych pól, spróbuj `TRUE` zamiast `PRAWDA`.' },
    { text: 'W **E3** `Wszystkich`, w **F3**:', copy: '=ILE.NIEPUSTYCH(A2:A9)' },
    { text: 'W **E4** `Procent`, w **F4** podziel jedno przez drugie. Potem {{Formatuj}} → {{Liczba}} → {{Procent}}.', copy: '=F2/F3' },
    { text: 'W **E5** `Zostało`, w **F5**:', copy: '=F3-F2' },
    { text: 'Karta `Kieszonkowe`. W **F1** `Kategoria`, w **G1** `Razem`. W **F2**, **F3**, **F4** wpisz kategorie: `słodycze`, `rozrywka`, `sport`. W **G2** formuła, przeciągnij do **G4**.', copy: '=SUMA.JEŻELI(C$2:C$50;F2;D$2:D$50)', tip: 'Zakres do 50 to zapas na nowe wydatki. Gdy dopiszesz wydatek w wierszu 8, suma go zobaczy.' },
    { text: 'Ile razy kupiłeś słodycze? W **H1** `Ile razy`, w **H2**, przeciągnij:', copy: '=LICZ.JEŻELI(C$2:C$50;F2)' },
    { text: 'Wróć do wykresu kołowego z misji 7 i podmień wpisane ręcznie sumy na te formuły (albo wskaż wykresowi nowe komórki F1:G4). Wykres od dziś aktualizuje się sam.' }
  ],
  check: [
    'Kolumna Wynik mówi „wygrana” albo „przegrana” i zmienia się, gdy zmienisz próg.',
    'Licznik słówek rośnie, gdy odhaczasz pole.',
    'Suma po kategorii widzi wydatek dopisany pod tabelką.'
  ],
  variants: [
    { text: 'Trzy odpowiedzi zamiast dwóch: JEŻELI w JEŻELI.', copy: '=JEŻELI(C2>45;"super";JEŻELI(C2>35;"nieźle";"ćwicz"))' },
    { text: 'Warunek na tekst. Ile wierszy ma Kuba?', copy: '=LICZ.JEŻELI(A2:A7;"Kuba")' },
    { text: 'Porównanie w cudzysłowie. Ile wyników powyżej 40?', copy: '=LICZ.JEŻELI(C2:C7;">40")' },
    { text: 'Średnia tylko z jednej kategorii:', copy: '=ŚREDNIA.JEŻELI(C$2:C$50;F2;D$2:D$50)' },
    { text: 'Puste zamiast napisu, gdy warunek nie pasuje: dwa cudzysłowy bez nic w środku.', copy: '=JEŻELI(C2>40;"wygrana";"")' }
  ],
  solo: {
    text: 'Karta `Liga`: tabelkę „Kto” i „Punkty razem” z misji 7 przerób tak, żeby sumy liczyła SUMA.JEŻELI, a liczbę gier każdej osoby LICZ.JEŻELI. Dopisz nowy wynik i sprawdź, czy tabelka i wykres się zmieniły.',
    hints: ['SUMA.JEŻELI(gdzie imiona; imię; gdzie punkty).', 'Pinezki na zakresach, nie na imieniu.', 'Wykres z misji 7 podpięty pod te komórki aktualizuje się sam.']
  },
  discovery: { text: 'Karta `Słówka`: podłącz JEŻELI do procentu. W wolnej komórce formuła poniżej. Gdy dojdziesz do 100%, komórka Ci pogratuluje. Zmień napisy na własne.', copy: '=JEŻELI(F4=1;"Wszystko umiesz!";JEŻELI(F4>=0,5;"Ponad połowa, dobra robota";"Jeszcze trochę"))' },
  journalPrompt: 'Jakie pytanie zadałeś Arkuszowi przez JEŻELI i co odpowiedział?',
  parent: 'Pokaż rodzicowi licznik słówek i sumy po kategoriach. Poproś, żeby dopisał jeden wydatek, i sprawdźcie, czy suma kategorii go złapała.',
  forParent: {
    teaches: 'JEŻELI z trzema częściami (warunek; gdy tak; gdy nie), tekst w cudzysłowach; LICZ.JEŻELI i SUMA.JEŻELI z warunkiem w komórce; procent z dzielenia; podsumowania, które zasilają wykresy; zagnieżdżone JEŻELI.',
    ask: 'Poproś, żeby przeczytał formułę JEŻELI po polsku, część po części. Zapytaj, dlaczego w SUMA.JEŻELI są dolary przed cyframi.'
  }
},
{
  id: 'daty',
  title: 'Daty, odliczanie i sklejanie słów',
  subtitle: 'Ile dni do urodzin i jak Arkusz łączy tekst',
  technique: 'Daty i tekst',
  minutes: 25,
  why: [
    'Data w Arkuszu to liczba w przebraniu: liczba dni od pewnego dnia dawno temu. Dlatego daty można odejmować. `=B2-DZIŚ()` daje, ile dni zostało do daty w B2. **DZIŚ()** zawsze zwraca dzisiejszą datę, więc odliczanie samo maleje każdego dnia.',
    'Tekst też ma swoje sztuczki. Znak **&** skleja: `=A2&" "&B2` łączy dwa słowa ze spacją. **DŁ** liczy litery, **LITERY.WIELKIE** krzyczy. Przydaje się przy słówkach, listach i podpisach.'
  ],
  example: {
    intro: 'Odliczanie do ważnych dni. Stan na 11 września 2026. Jutro wszystkie liczby będą o jeden mniejsze, same.',
    sheets: [
      { caption: 'Karta „Odliczanie”', fx: { cell: 'C2', text: '=B2-DZIŚ()' }, head: true, sel: 'C2', marks: { C2: 'ok', C3: 'ok', C4: 'ok', C5: 'ok' },
        rows: [['Co', 'Kiedy', 'Ile dni'], ['Urodziny', '14.11.2026', '64'], ['Święta', '24.12.2026', '104'], ['Wakacje', '26.06.2027', '288'], ['Koniec Akademii', '20.12.2026', '100']] }
    ],
    note: 'Jeśli po odjęciu dat Arkusz pokaże dziwną datę zamiast liczby, to tylko format. Zaznacz komórkę i ustaw {{Formatuj}} → {{Liczba}} → {{Liczba}}. Wynik to liczba dni.'
  },
  steps: [
    { text: 'Nowa karta `Odliczanie`. Wklej tabelkę i podmień daty na swoje: urodziny, wyjazd, mecz, koniec roku.', copy: 'Co\tKiedy\tIle dni\nUrodziny\t14.11.2026\nŚwięta\t24.12.2026\nWakacje\t26.06.2027\nKoniec Akademii\t20.12.2026' },
    { text: 'W **C2** odejmij dzisiaj od daty. Przeciągnij do **C5**. Jeśli wyszła data zamiast liczby: {{Formatuj}} → {{Liczba}} → {{Liczba}}, a potem zmniejsz miejsca po przecinku ikoną `.0` na pasku narzędzi.', copy: '=B2-DZIŚ()', tip: 'Wynik ujemny? Data już minęła. Wpisz następny rok.' },
    { text: 'W **D1** `Dzień tygodnia`, w **D2** formuła TEKST, która zamienia datę w nazwę dnia. Przeciągnij.', copy: '=TEKST(B2;"dddd")', tip: '`dddd` to wzór: cztery d to pełna nazwa dnia. Trzy d dałyby skrót, np. „pon.”.' },
    { text: 'Ile dni już trwa Akademia? W **F1** `Start`, w **F2** wpisz datę misji 0. W **F3**:', copy: '=DZIŚ()-F2' },
    { text: 'Sklejanie tekstu. Karta `Słówka`: w **D1** `Fiszka`, w **D2** formuła, która łączy słowo i tłumaczenie w jedno. Przeciągnij.', copy: '=A2&" = "&B2', tip: 'Spacje i znaki w cudzysłowach sklejasz tak samo jak komórki. Znak `&` między każdym kawałkiem.' },
    { text: 'Ile liter ma słowo? W **E1** `Liter`, w **E2**:', copy: '=DŁ(A2)' },
    { text: 'Słówko drukowanymi, żeby zapadło w pamięć. W **F1** `Głośno`, w **F2**:', copy: '=LITERY.WIELKIE(A2)' }
  ],
  check: [
    'Odliczanie pokazuje liczbę dni, nie datę, i wiesz, że jutro będzie o 1 mniej.',
    'Umiesz skleić dwie komórki ze spacją albo znakiem między nimi.',
    'Znasz różnicę między tekstem w cudzysłowie a adresem komórki w formule.'
  ],
  variants: [
    { text: 'Dzisiejsza data na stałe, która nie zmieni się jutro: kliknij komórkę, [[Ctrl]] + [[;]]. Data jako formuła, która idzie z czasem:', copy: '=DZIŚ()' },
    { text: 'Data za 30 dni od dziś:', copy: '=DZIŚ()+30' },
    { text: 'Tygodnie zamiast dni, zaokrąglone:', copy: '=ZAOKR((B2-DZIŚ())/7;0)' },
    { text: 'Sklej w zdanie z odliczaniem:', copy: '=A2&" za "&C2&" dni"' },
    { text: 'Same małe litery:', copy: '=LITERY.MAŁE(A2)' }
  ],
  solo: {
    text: 'Zrób kartę `Plan tygodnia`: daty od dzisiaj przez 7 dni (uchwyt), obok dzień tygodnia formułą TEKST, obok co masz tego dnia (trening, angielski, nic). Potem sklej w kolumnie D zdanie w stylu „poniedziałek: angielski”.',
    hints: ['`=TEKST(A2;"dddd")`.', '`=B2&": "&C2`.', 'Ctrl + ; wstawia dzisiejszą datę na start.']
  },
  discovery: { text: 'Odliczanie w godzinach, dla zabawy. TERAZ() to dzisiejsza data razem z godziną. Wpisz formułę poniżej: ile godzin do pierwszej daty z tabelki. Jeśli wyjdzie data, ustaw format Liczba. Liczba zmienia się przy każdej zmianie w arkuszu.', copy: '=(B2-TERAZ())*24' },
  journalPrompt: 'Ile dni zostało do Twojego najważniejszego dnia?',
  parent: 'Pokaż rodzicowi odliczanie. Dodajcie razem jedną rodzinną datę.',
  forParent: {
    teaches: 'Daty jako liczby, odejmowanie dat, DZIŚ() i TERAZ(), format wyniku (liczba, nie data), TEKST z wzorem dddd, sklejanie tekstu znakiem &, DŁ, LITERY.WIELKIE.',
    ask: 'Zapytaj, dlaczego liczba dni jutro będzie inna, choć nikt jej nie zmieni. Poproś o sklejenie Twojego imienia z dzisiejszą datą w jednej komórce.'
  }
},
{
  id: 'karty',
  title: 'Karty gadają ze sobą',
  subtitle: 'Odwołania między kartami i WYSZUKAJ.PIONOWO, czyli cennik pod ręką',
  technique: 'WYSZUKAJ.PIONOWO',
  minutes: 30,
  why: [
    'Formuła może sięgać na inną kartę: `=Kieszonkowe!D8` bierze komórkę D8 z karty „Kieszonkowe”. Wykrzyknik znaczy „z karty”. Dzięki temu robisz kartę **Podsumowanie**, która zbiera najważniejsze liczby ze wszystkich kart w jednym miejscu.',
    '**WYSZUKAJ.PIONOWO** to szukanie w cenniku: podajesz nazwę, a funkcja znajduje ją w pierwszej kolumnie tabelki i przynosi wartość z innej kolumny tego wiersza. Wpisujesz „pizza”, dostajesz cenę. Słówko po angielsku, dostajesz tłumaczenie. To jedna z najważniejszych funkcji w każdej pracy z tabelami.'
  ],
  example: {
    intro: 'Cennik na jednej karcie, lista na imprezę na drugiej. Wpisujesz, co kupujesz, a cena przychodzi sama.',
    sheets: [
      { caption: 'Karta „Cennik”', head: true, tabs: ['Cennik', 'Impreza'], tab: 0,
        rows: [['Produkt', 'Cena'], ['napój', '3,50 zł'], ['chipsy', '5,99 zł'], ['pizza', '24,00 zł'], ['balony', '0,40 zł'], ['tort', '45,00 zł']] },
      { caption: 'Karta „Impreza”: cena przychodzi sama z Cennika', fx: { cell: 'C2', text: '=WYSZUKAJ.PIONOWO(A2;Cennik!A:B;2;FAŁSZ)' }, head: true, sel: 'C2', marks: { C2: 'ok', C3: 'ok', C4: 'ok', C5: 'warn', D5: 'warn' }, tabs: ['Cennik', 'Impreza'], tab: 1,
        rows: [['Co', 'Ilość', 'Cena', 'Razem'], ['pizza', '3', '24,00 zł', '72,00 zł'], ['napój', '12', '3,50 zł', '42,00 zł'], ['tort', '1', '45,00 zł', '45,00 zł'], ['lody', '4', '#N/A', '#N/A']] }
    ],
    note: 'Cztery części WYSZUKAJ.PIONOWO: **czego szukam** (A2, czyli „pizza”), **gdzie** (kolumny A do B na karcie Cennik), **którą kolumnę przynieść** (2, czyli Cena), **FAŁSZ** (tylko dokładne dopasowanie). „lody” nie ma w cenniku, stąd `#N/A`, czyli „nie znaleziono”. To nie awaria, to informacja.'
  },
  steps: [
    { text: 'Nowa karta `Cennik`. Wklej tabelkę.', copy: 'Produkt\tCena\nnapój\t3,5\nchipsy\t5,99\npizza\t24\nbalony\t0,4\ntort\t45' },
    { text: 'Druga nowa karta `Impreza`. Wklej tabelkę.', copy: 'Co\tIlość\tCena\tRazem\npizza\t3\nnapój\t12\ntort\t1\nlody\t4' },
    { text: 'Rozgrzewka z wykrzyknikiem. Na karcie `Impreza` w **F1** wpisz `Cena tortu`, w **F2** wpisz `=`, potem **kliknij kartę Cennik** na dole, kliknij komórkę **B6**, [[Enter]]. Arkusz sam wraca na Impreza i wpisuje odwołanie.', copy: '=Cennik!B6' },
    { text: 'Teraz cena z cennika dla każdego wiersza. W **C2** formuła poniżej, potem przeciągnij do **C5**.', copy: '=WYSZUKAJ.PIONOWO(A2;Cennik!A:B;2;FAŁSZ)', tip: '`Cennik!A:B` to całe kolumny A i B na karcie Cennik. Bez numerów wierszy, więc cennik może rosnąć, a formuła nie wymaga poprawek.' },
    { text: 'W **D2** Razem: ilość razy cena, przeciągnij. Pod tabelką SUMA kolumny D. Znasz to z misji 3 i 4.', copy: '=B2*C2' },
    { text: 'Wiersz z lodami pokazuje `#N/A`. Dopisz lody do cennika: karta Cennik, wiersz 7, cena `8`. Wróć: cena już jest. Tak działa „nie znaleziono”: brakuje w cenniku, dopisujesz, działa.' },
    { text: 'Zamień `#N/A` na czytelny napis, gdyby czegoś znów brakło. W **C2** formuła owinięta w JEŻELI.BŁĄD, przeciągnij.', copy: '=JEŻELI.BŁĄD(WYSZUKAJ.PIONOWO(A2;Cennik!A:B;2;FAŁSZ);"brak w cenniku")' },
    { text: 'Karta `Podsumowanie`: nowa karta, w **A1** `Wydatki razem`, w **B1** odwołanie do sumy z karty Kieszonkowe. W **A2** `Słówka umiem`, w **B2** odwołanie do licznika z karty Słówka (F2). Jedna karta, wszystkie ważne liczby.', copy: '=Kieszonkowe!D8', tip: 'Nazwa karty ze spacją potrzebuje apostrofów: `=\'Gry w euro\'!C4`. Klikanie zamiast pisania załatwia to za Ciebie.' }
  ],
  check: [
    'Zmiana ceny w Cenniku zmienia koszt na Imprezie.',
    'Umiesz przeczytać cztery części WYSZUKAJ.PIONOWO po polsku.',
    'Wiesz, co znaczy #N/A i co z nim zrobić.',
    'Masz kartę Podsumowanie, która ciągnie liczby z innych kart.'
  ],
  variants: [
    { text: 'Trzecia kolumna w cenniku (np. Sklep). Przynieś ją, zmieniając 2 na 3:', copy: '=WYSZUKAJ.PIONOWO(A2;Cennik!A:C;3;FAŁSZ)' },
    { text: 'Słówka: na nowej karcie wpisz angielskie słowo w A2, a tłumaczenie przyjdzie z karty Słówka:', copy: '=WYSZUKAJ.PIONOWO(A2;Słówka!A:B;2;FAŁSZ)' },
    { text: 'Nowsza kuzynka, bez liczenia kolumn: czego szukam; gdzie szukać; co przynieść.', copy: '=XLOOKUP(A2;Cennik!A:A;Cennik!B:B)' },
    { text: 'Zakres z innej karty w zwykłej funkcji:', copy: '=SUMA(Liga!C2:C50)' }
  ],
  solo: {
    text: 'Zrób quiz ze słówek: karta `Quiz`, w A wpisujesz słowo po angielsku, w B swoją odpowiedź po polsku, w C WYSZUKAJ.PIONOWO przynosi prawdziwe tłumaczenie z karty Słówka, a D mówi przez JEŻELI „dobrze” albo „źle”, porównując B i C.',
    hints: ['`=WYSZUKAJ.PIONOWO(A2;Słówka!A:B;2;FAŁSZ)`.', '`=JEŻELI(B2=C2;"dobrze";"źle")`.', 'Ukryj kolumnę C (prawy przycisk na literze → Ukryj kolumnę), żeby nie ściągać.']
  },
  discovery: { text: 'Jedna komórka, która pyta o cokolwiek: na karcie `Impreza` w **H1** zrób menu (misja 8) z produktami z cennika, a w **H2** wklej formułę poniżej. Wybierasz z listy, cena wyskakuje. Tak działają wyszukiwarki w prawdziwych arkuszach.', copy: '=WYSZUKAJ.PIONOWO(H1;Cennik!A:B;2;FAŁSZ)' },
  journalPrompt: 'Do czego jeszcze użyłbyś cennika, który sam podaje ceny?',
  parent: 'Pokaż rodzicowi Cennik i Imprezę. Zmień cenę pizzy i pokaż, że koszt imprezy się zmienił. Zapytaj, czy w jego pracy używa się WYSZUKAJ.PIONOWO (po angielsku nazywa się VLOOKUP).',
  forParent: {
    teaches: 'Odwołania między kartami (Karta!A1), WYSZUKAJ.PIONOWO z czterema argumentami i FAŁSZ, zakres całych kolumn, błąd #N/A i JEŻELI.BŁĄD, karta Podsumowanie, XLOOKUP jako nowsza wersja.',
    ask: 'Poproś o wytłumaczenie każdej z czterech części formuły. Dopiszcie razem produkt do cennika i sprawdźcie, czy zniknęło #N/A.'
  }
});
