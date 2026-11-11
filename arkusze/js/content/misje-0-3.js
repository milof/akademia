/* Misje 0-3: rozruch, formatowanie, uchwyt wypełniania, pierwsza formuła.
   Formatowanie w treści: **gruby**, `kod`, [[klawisz]], {{pozycja menu}}.
   Pole `copy` w kroku to tekst do skopiowania: formuła albo tabelka (kolumny rozdzielone tabulatorem, wiersze nową linią). */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.missions = window.ARKUSZE.missions || [];
window.ARKUSZE.missions.push(
{
  id: 'rozruch',
  title: 'Rozruch',
  subtitle: 'Siatka, adresy jak w statkach i Twój pierwszy arkusz',
  technique: 'Zasady gry',
  minutes: 20,
  why: [
    'Arkusz kalkulacyjny to wielka kartka w kratkę. Każda kratka to **komórka** i ma swój adres, jak w grze w statki: kolumna literą, wiersz cyfrą. **B3** to trzecia kratka w kolumnie B. Tyle wystarczy, żeby zacząć.',
    'W komórce może być tekst, liczba albo **formuła**, czyli działanie, które Arkusz liczy za Ciebie. Formuły są od misji 3. Dziś: zakładasz plik, uczysz się poruszać i robisz pierwszą tabelkę.'
  ],
  realWorld: 'Księgowe, nauczyciele, trenerzy i kierownicy sklepów zaczynają dzień od otwarcia arkusza. Adres komórki to ich wspólny język: „zerknij na D14” wystarczy, żeby wszyscy patrzyli w to samo miejsce.',
  example: {
    intro: 'Tak wygląda mała tabelka po misji 0. Komórka B3 jest zaznaczona: ma niebieską ramkę, a jej adres widać po lewej, nad siatką.',
    sheets: [
      { caption: 'Plik „Akademia”, karta Top 5', fx: { cell: 'B3', text: '9' }, head: true, sel: 'B3',
        rows: [['Co', 'Ocena'], ['Minecraft', '10'], ['Rower', '9'], ['Pizza', '10'], ['Matma', '6'], ['Basen', '8']] }
    ],
    note: 'Zwróć uwagę: liczby stoją po prawej stronie komórki, tekst po lewej. Arkusz sam rozpoznaje, co jest liczbą. Tak poznasz, czy wpisałeś liczbę, czy tekst.'
  },
  steps: [
    { text: 'Trzy zasady Akademii. **1.** Pracujesz na koncie, które ustawił rodzic, i udostępniasz pliki tylko jemu. **2.** Do arkusza nie wpisujesz haseł, nazwisk kolegów ani adresów. **3.** Nic nie da się zepsuć na zawsze: [[Ctrl]] + [[Z]] cofa, a Arkusz pamięta każdą wersję pliku.', tip: 'Zasady wrócą w misjach. Nie musisz ich zapamiętać dziś, wystarczy raz przeczytać.' },
    { text: 'Otwórz przeglądarkę, wpisz w pasku adresu `sheets.new` i wciśnij [[Enter]]. Otwiera się nowy, pusty arkusz.', tip: 'Jeśli przeglądarka pyta o konto, wybierz to, które wskazał rodzic. Arkusz zapisuje się sam na Dysku Google, nie ma przycisku Zapisz.' },
    { text: 'Nadaj plikowi nazwę: kliknij nazwę w lewym górnym rogu (na start jest tam **Arkusz kalkulacyjny bez nazwy**), wpisz `Akademia`, [[Enter]]. W tym jednym pliku zrobisz wszystkie misje, każdą na osobnej karcie.' },
    { text: 'Sprawdź region, żeby formuły z Akademii działały. Menu {{Plik}} → {{Ustawienia}}. W polu **Ustawienia regionalne** ma być **Polska**. Jeśli nie jest, zmień i kliknij **Zapisz ustawienia**.', tip: 'Od tego zależy, czy Arkusz rozumie polskie nazwy funkcji, takie jak SUMA, i czy w formułach rozdziela się rzeczy średnikiem. Rodzic wie, o co chodzi, na jego stronie jest to opisane.' },
    { text: 'Klikaj w komórki i patrz na adres w lewym górnym rogu nad siatką. Potem poruszaj się strzałkami. [[Enter]] przechodzi w dół, [[Tab]] w prawo. Znajdź komórkę **C7** i wpisz w niej swoje imię.' },
    { text: 'Tabelka Top 5. W **A1** wpisz `Co`, [[Tab]], w **B1** `Ocena`, [[Enter]]. Pod spodem wpisz 5 rzeczy, które lubisz, i oceń je od 1 do 10. Po każdej rzeczy [[Tab]], po ocenie [[Enter]].', tip: 'Gdy zaczniesz wiersz Tabem, Enter wraca na początek następnego wiersza. Sprytne.' },
    { text: 'Zepsuj coś celowo: wpisz w **A1** `bzdura`. Potem [[Ctrl]] + [[Z]]. Napis wraca. Cofać możesz wiele razy z rzędu.' },
    { text: 'Poprawianie. Kliknij komórkę i wpisz od nowa, stara treść znika. Chcesz zmienić jedną literę? Wciśnij [[F2]] albo kliknij dwa razy, wtedy edytujesz w środku. [[Delete]] czyści komórkę.' },
    { text: 'Zmień nazwę karty na dole ekranu: kliknij dwa razy napis **Arkusz1**, wpisz `Top 5`, [[Enter]]. Karty to zakładki w jednym pliku, jak karty w przeglądarce.' }
  ],
  check: [
    'Masz plik „Akademia” z kartą „Top 5” i tabelką z 5 wierszami.',
    'Umiesz powiedzieć, gdzie jest komórka D4, bez klikania.',
    'Cofnąłeś pomyłkę klawiszami, nie kasowaniem ręcznym.',
    'Liczby w kolumnie B stoją po prawej, tekst w kolumnie A po lewej.'
  ],
  solo: {
    text: 'Zrób drugą kartę: znak {{+}} w lewym dolnym rogu. Nazwij ją `Kumple` i zrób tabelkę: imię kolegi i jego ulubiona gra. Trzy wiersze wystarczą. Bez patrzenia w kroki.',
    hints: ['Nowa karta: plus w lewym dolnym rogu ekranu.', 'Nazwa karty: dwuklik na napisie Arkusz2.', 'Tab w prawo, Enter w dół.']
  },
  discovery: { text: 'Wciśnij [[Ctrl]] + [[/]]. Wyskakuje lista skrótów klawiszowych Arkuszy. Znajdź jeden, który wygląda ciekawie, i wypróbuj go. Potem zamknij okno klawiszem [[Esc]].' },
  journalPrompt: 'Jedno zdanie: co Cię zaskoczyło w pierwszym arkuszu?',
  parent: 'Pokaż rodzicowi plik „Akademia” i powiedz trzy zasady własnymi słowami. Poproś, żeby sprawdził razem z Tobą ustawienie regionu.',
  forParent: {
    teaches: 'Czym jest komórka i adres, nowy plik przez sheets.new, nazwa pliku i karty, region Polska, poruszanie się Enter i Tab, cofanie, pierwsza tabelka.',
    ask: 'Poproś, żeby wskazał komórkę C4 bez klikania i powiedział trzy zasady. Sprawdźcie razem Plik → Ustawienia → Ustawienia regionalne: Polska.'
  }
},
{
  id: 'tabela',
  title: 'Tabela, która dobrze wygląda',
  subtitle: 'Nagłówek, kolory, szerokość kolumn i format liczb',
  technique: 'Formatowanie',
  minutes: 25,
  why: [
    'Surowa tabelka działa, ale trudno ją czytać. Kilka ruchów zmienia ją w coś, co wygląda jak z aplikacji: **gruby nagłówek**, **kolor**, **szerokość kolumn** dopasowana do treści i **zablokowany pierwszy wiersz**, żeby nagłówek nie uciekał przy przewijaniu.',
    'Do tego **format liczb**: Arkusz sam dopisze `zł` albo `%` i wyrówna liczby. Ty wpisujesz tylko cyfry.'
  ],
  realWorld: 'Grafik dyżurów w szpitalu, plan lekcji, cennik w sklepie: ktoś musiał je sformatować tak, żeby nikt się nie pomylił. Gruby nagłówek i kwoty w złotych to nie ozdoba, tylko mniej pomyłek.',
  example: {
    intro: 'Ta sama tabelka po pięciu minutach: pogrubiony, kolorowy nagłówek, kolumny na miarę, kwoty w złotówkach.',
    sheets: [
      { caption: 'Karta „Kieszonkowe” po formatowaniu', head: true, sel: 'D2',
        rows: [['Data', 'Co', 'Kategoria', 'Kwota'], ['01.09.2026', 'lody', 'słodycze', '6,00 zł'], ['03.09.2026', 'komiks', 'rozrywka', '14,90 zł'], ['05.09.2026', 'żelki', 'słodycze', '4,50 zł'], ['06.09.2026', 'kino z kumplami', 'rozrywka', '25,00 zł'], ['08.09.2026', 'bilet na basen', 'sport', '12,00 zł']] }
    ],
    note: 'Kwoty wpisujesz jako zwykłe liczby, np. `14,9`. To format komórki dodaje `zł` i drugie zero. Dzięki temu Arkusz dalej umie na tych kwotach liczyć.'
  },
  steps: [
    { text: 'Nowa karta: {{+}} w lewym dolnym rogu, nazwij ją `Kieszonkowe`. Skopiuj tabelkę poniżej przyciskiem, kliknij komórkę **A1** i wciśnij [[Ctrl]] + [[V]]. Cała wskakuje na raz.', copy: 'Data\tCo\tKategoria\tKwota\n01.09.2026\tlody\tsłodycze\t6\n03.09.2026\tkomiks\trozrywka\t14,9\n05.09.2026\tżelki\tsłodycze\t4,5\n06.09.2026\tkino z kumplami\trozrywka\t25\n08.09.2026\tbilet na basen\tsport\t12', tip: 'To sztuczka na całą Akademię: gotowe tabelki wklejasz zamiast przepisywać. Potem podmieniasz wartości na swoje. Kwoty mogą być zmyślone.' },
    { text: 'Zaznacz nagłówek: kliknij numer wiersza **1** z lewej strony. Wciśnij [[Ctrl]] + [[B]]. Nagłówek jest gruby.' },
    { text: 'Kolor tła: przy zaznaczonym wierszu 1 kliknij na pasku narzędzi ikonę wiaderka **Kolor wypełnienia** i wybierz jasny kolor. Ciemny tekst na jasnym tle czyta się najlepiej.' },
    { text: 'Szerokość kolumn: najedź na linię między literami **B** i **C** na górze, aż kursor zmieni się w strzałkę w dwie strony. Kliknij dwa razy. Kolumna dopasowuje się do najdłuższego tekstu. Zrób tak z każdą kolumną.', tip: 'Możesz też przeciągnąć tę linię ręcznie, gdy chcesz szerzej.' },
    { text: 'Format kwot: zaznacz **D2** do **D6**. Menu {{Formatuj}} → {{Liczba}} → {{Waluta}}. Liczby dostają `zł` i grosze.', tip: 'Nie dopisuj `zł` ręcznie w komórce. Wtedy Arkusz myśli, że to tekst, i nie umie tego dodać.' },
    { text: 'Zablokuj nagłówek: {{Widok}} → {{Zablokuj}} → {{1 wiersz}}. Przewiń w dół, nagłówek stoi w miejscu. Przy 5 wierszach mało widać, ale przy 50 to ratuje życie.' },
    { text: 'Obramowanie: zaznacz całą tabelkę od **A1** do **D6**, na pasku narzędzi kliknij ikonę **Obramowania** (kratka) i wybierz wariant ze wszystkimi liniami.' },
    { text: 'Daty: kliknij **A2** i sprawdź, czy Arkusz widzi datę. Jeśli tak, stoi po prawej, jak liczba. Jeśli stoi po lewej, to tekst. Wtedy wpisz ją jeszcze raz w formie `1.09.2026`.' }
  ],
  check: [
    'Nagłówek jest gruby, ma kolor i nie ucieka przy przewijaniu.',
    'Żadna kolumna nie ucina tekstu.',
    'Kwoty mają `zł`, a Ty wpisywałeś same cyfry.',
    'Umiesz wkleić gotową tabelkę w trzech ruchach: Kopiuj, klik w A1, Ctrl + V.'
  ],
  variants: [
    { text: 'Szybka data: kliknij pustą komórkę w kolumnie A i wciśnij [[Ctrl]] + [[;]]. Wskakuje dzisiejsza data. Dopisz obok, co kupiłeś.' },
    { text: 'Procenty działają tak samo jak złotówki. Wpisz w wolnej komórce `0,25`, potem {{Formatuj}} → {{Liczba}} → {{Procent}}. Wychodzi 25%.' },
    { text: 'Wyrównanie: zaznacz kolumnę B i na pasku narzędzi kliknij ikonę wyrównania, wybierz do środka. Cofnij, jeśli wygląda gorzej.' }
  ],
  solo: {
    text: 'Wróć na kartę „Top 5” i sformatuj ją bez patrzenia w kroki: gruby kolorowy nagłówek, kolumny na miarę, obramowanie, zablokowany wiersz 1. Dodaj kolumnę **Cena** z formatem waluty i wpisz, ile coś kosztuje (może być zmyślone).',
    hints: ['Ctrl + B na nagłówku.', 'Dwuklik na linii między literami kolumn.', 'Formatuj → Liczba → Waluta.', 'Widok → Zablokuj → 1 wiersz.']
  },
  discovery: { text: 'Zaznacz kolumnę z kwotami i spójrz w prawy dolny róg ekranu. Arkusz pokazuje tam **Sumę**, bez żadnej formuły. Kliknij ten napis: zobaczysz też średnią, minimum i maksimum. To podgląd. W misji 4 nauczysz się zapisać to w komórce.' },
  journalPrompt: 'Która zmiana najbardziej poprawiła wygląd tabelki?',
  parent: 'Pokaż rodzicowi kartę „Kieszonkowe” i udostępnij mu plik: przycisk **Udostępnij** w prawym górnym rogu, jego adres e-mail, rola **Edytujący**, **Wyślij**. Od dziś rodzic widzi wszystkie karty i może zaglądać.',
  forParent: {
    teaches: 'Formatowanie: pogrubienie, kolor, szerokość kolumn, format waluty i procentu, blokada nagłówka, obramowanie. Wklejanie gotowej tabelki z Akademii zamiast przepisywania. Udostępnienie pliku rodzicowi.',
    ask: 'Poproś o udostępnienie pliku na Twój adres. Zapytaj, dlaczego nie wpisuje się „zł” ręcznie w komórce.'
  }
},
{
  id: 'przeciagnij',
  title: 'Przeciągnij i gotowe',
  subtitle: 'Uchwyt wypełniania: serie liczb, dni i dat w sekundę',
  technique: 'Uchwyt wypełniania',
  minutes: 20,
  why: [
    'W prawym dolnym rogu zaznaczonej komórki jest mały niebieski kwadracik. To **uchwyt wypełniania**. Chwytasz go i ciągniesz w dół, a Arkusz dopisuje dalszy ciąg: 1, 2, 3... albo poniedziałek, wtorek, środa... albo kolejne daty.',
    'To samo zrobisz później z formułami. Napiszesz jedną, przeciągniesz, i masz ją w całej kolumnie. Dziś uczysz rękę.'
  ],
  realWorld: 'Kto układa grafik pracy na cały miesiąc, na przykład w sklepie, nie wpisuje 30 dat ręcznie. Wpisuje pierwszą i przeciąga. Sekundy zamiast kwadransa.',
  example: {
    intro: 'Wpisane ręcznie: tylko wiersz 1 i wiersz 2. Resztę Arkusz dopisał sam. Kolumna D pokazuje, że gdy w komórce jest zwykłe słowo, uchwyt je kopiuje zamiast wymyślać ciąg.',
    sheets: [
      { caption: 'Karta „Tydzień”: trzy serie po jednym przeciągnięciu', head: true, sel: 'C8',
        rows: [['Nr', 'Dzień', 'Data', 'Trening'], ['1', 'poniedziałek', '14.09.2026', 'rower'], ['2', 'wtorek', '15.09.2026', 'rower'], ['3', 'środa', '16.09.2026', 'rower'], ['4', 'czwartek', '17.09.2026', 'rower'], ['5', 'piątek', '18.09.2026', 'rower'], ['6', 'sobota', '19.09.2026', 'rower'], ['7', 'niedziela', '20.09.2026', 'rower']] }
    ],
    note: 'Arkusz zgaduje wzór z tego, co zaznaczysz. Jedna komórka z liczbą 1 daje same jedynki. Dwie komórki, 1 i 2, dają 1, 2, 3, 4... Dni tygodnia i daty rozpoznaje po jednej komórce.'
  },
  steps: [
    { text: 'Nowa karta `Tydzień`. W **A1** nagłówek `Nr`, w **A2** wpisz `1`, w **A3** wpisz `2`. Zaznacz **A2** i **A3** razem: kliknij A2, trzymaj [[Shift]], kliknij A3.' },
    { text: 'Najedź na niebieski kwadracik w prawym dolnym rogu zaznaczenia. Kursor zmienia się w krzyżyk. Chwyć i przeciągnij w dół do **A8**. Puść. Masz 1 do 7.' },
    { text: 'W **B1** wpisz `Dzień`, w **B2** `poniedziałek`. Zaznacz **B2** i przeciągnij uchwyt do **B8**. Arkusz zna dni tygodnia.', tip: 'Wyszły same poniedziałki? Wpisz w B3 `wtorek`, zaznacz B2 i B3 razem i przeciągnij jeszcze raz. A gdyby dalej nie szło, wpisz 7 dni ręcznie. Zdarza się.' },
    { text: 'W **C1** wpisz `Data`, w **C2** datę najbliższego poniedziałku, np. `14.09.2026`. Przeciągnij uchwyt do **C8**. Daty idą dzień po dniu.', tip: 'Nie wiesz, jaki jest najbliższy poniedziałek? Wpisz dzisiejszą datę skrótem [[Ctrl]] + [[;]]. Nie szkodzi, że to inny dzień.' },
    { text: 'W **D1** wpisz `Trening`, w **D2** `rower`. Przeciągnij do **D8**. Słowo się kopiuje, bo nie ma ciągu dalszego. Zmień w kilku komórkach na coś innego.' },
    { text: 'Skrót zamiast ciągnięcia: kliknij **D2**, zaznacz do **D8** (z [[Shift]]), wciśnij [[Ctrl]] + [[D]]. To „wypełnij w dół”: kopiuje pierwszą komórkę na całe zaznaczenie.' },
    { text: 'Kopiowanie kawałka tabelki: zaznacz **A1** do **D8**, [[Ctrl]] + [[C]], kliknij **F1**, [[Ctrl]] + [[V]]. Masz kopię obok. Potem ją skasuj: zaznacz i [[Delete]].' }
  ],
  check: [
    'Zrobiłeś kolumnę 1 do 7 bez wpisywania siódemki.',
    'Dni tygodnia i daty poszły same po jednym przeciągnięciu.',
    'Wiesz, czym różni się przeciąganie jednej komórki od dwóch.'
  ],
  variants: [
    { text: 'Co drugi dzień: wpisz w dwóch komórkach `1` i `3`, zaznacz obie, przeciągnij. Arkusz łapie skok o 2.' },
    { text: 'Miesiące: wpisz `styczeń`, przeciągnij w dół 12 komórek.' },
    { text: 'Godziny: wpisz `8:00` i `9:00`, zaznacz obie, przeciągnij. Plan dnia w sekundę.' },
    { text: 'W prawo działa tak samo. Wpisz `1` w A10, `2` w B10, zaznacz obie i ciągnij w prawo do G10.' }
  ],
  solo: {
    text: 'Zrób kartę `Miesiąc`: numery dni od 1 do 30 w kolumnie A, daty od pierwszego dnia następnego miesiąca w kolumnie B, dni tygodnia w kolumnie C. Trzy przeciągnięcia, zero przepisywania.',
    hints: ['Liczby: dwie komórki, 1 i 2, potem uchwyt.', 'Data: jedna komórka, uchwyt.', 'Dzień tygodnia: wpisz go dla pierwszej daty, potem uchwyt.']
  },
  discovery: { text: 'Zaznacz A2 do A8 z liczbami i przeciągnij uchwyt jeszcze dalej, do A20. A potem w drugą stronę: chwyć uchwyt i cofnij zaznaczenie w górę. Arkusz kasuje to, co wystaje. Uchwyt działa w obie strony.' },
  journalPrompt: 'Jaka seria zaskoczyła Cię najbardziej: liczby, dni czy daty?',
  forParent: {
    teaches: 'Uchwyt wypełniania: serie liczb, dni tygodnia, dat i godzin, kopiowanie wartości, skrót Ctrl + D, kopiowanie i wklejanie zakresu.',
    ask: 'Poproś o pokaz: kolumna 1 do 10 w trzech ruchach. Zapytaj, dlaczego zaznacza dwie komórki, a nie jedną.'
  }
},
{
  id: 'pierwsza-formula',
  title: 'Pierwsza formuła',
  subtitle: 'Znak równości, cztery działania i adresy zamiast liczb',
  technique: 'Formuła',
  minutes: 25,
  why: [
    'Formuła zaczyna się od **=**. Gdy wpiszesz `=2+3` i [[Enter]], w komórce pojawia się 5. Ale prawdziwa moc jest gdzie indziej: zamiast liczb wpisujesz **adresy komórek**. `=B2*C2` mnoży to, co jest w B2, przez to, co jest w C2. Zmienisz B2, wynik zmienia się sam.',
    'Druga rzecz: formułę piszesz raz i **przeciągasz uchwytem** w dół. W każdym wierszu Arkusz sam podmienia numer wiersza. Jedna formuła, cała kolumna.'
  ],
  realWorld: 'Każda faktura i każdy paragon to ilość razy cena. Sprzedawca wpisuje cenę raz, a arkusz liczy resztę. Gdy cena się zmieni, nie przelicza niczego ręcznie.',
  example: {
    intro: 'Impreza dla kumpli. Ile kosztują napoje, jeśli jedna butelka to 3,50 zł, a bierzesz 6? Arkusz liczy, Ty patrzysz.',
    sheets: [
      { caption: 'Karta „Zakupy”: w D2 wpisujesz formułę', fx: { cell: 'D2', text: '=B2*C2' }, head: true, editing: 'D2', sel: 'D2',
        rows: [['Co', 'Ilość', 'Cena', 'Razem'], ['napoje', '6', '3,50 zł', ''], ['chipsy', '3', '5,99 zł', ''], ['pizza', '2', '24,00 zł', ''], ['balony', '20', '0,40 zł', '']] },
      { caption: 'Po Enter i przeciągnięciu D2 w dół', fx: { cell: 'D4', text: '=B4*C4' }, head: true, sel: 'D4', marks: { D2: 'ok', D3: 'ok', D4: 'ok', D5: 'ok' },
        rows: [['Co', 'Ilość', 'Cena', 'Razem'], ['napoje', '6', '3,50 zł', '21,00 zł'], ['chipsy', '3', '5,99 zł', '17,97 zł'], ['pizza', '2', '24,00 zł', '48,00 zł'], ['balony', '20', '0,40 zł', '8,00 zł']] }
    ],
    note: 'Spójrz na pasek nad siatką przy D4: formuła to `=B4*C4`, nie `=B2*C2`. Po przeciągnięciu Arkusz sam zmienił 2 na 4. O to chodzi.'
  },
  steps: [
    { text: 'Rozgrzewka. Na karcie `Tydzień` w wolnej komórce wpisz `=2+3` i [[Enter]]. Potem `=10-4`, `=6*7`, `=20/4`. Gwiazdka to mnożenie, ukośnik to dzielenie.' },
    { text: 'Nowa karta `Zakupy`. Wklej tabelkę: Kopiuj, klik w **A1**, [[Ctrl]] + [[V]].', copy: 'Co\tIlość\tCena\tRazem\nnapoje\t6\t3,5\nchipsy\t3\t5,99\npizza\t2\t24\nbalony\t20\t0,4' },
    { text: 'Kliknij **D2** i wpisz formułę, ale tak: wpisz `=`, potem **kliknij myszką komórkę B2**, wpisz `*`, kliknij **C2**, [[Enter]]. Klikanie wpisuje adres za Ciebie i nie robi literówek.', copy: '=B2*C2', tip: 'Zauważ kolory: gdy piszesz formułę, każda komórka w niej dostaje kolorową ramkę. Widzisz od razu, co liczysz.' },
    { text: 'Kliknij **D2**, chwyć uchwyt i przeciągnij do **D5**. Kliknij **D4** i spójrz na pasek formuły nad siatką. Numer wiersza sam się zmienił.' },
    { text: 'Zmień ilość napojów w **B2** z 6 na 12. Patrz na **D2**. Wynik zmienił się sam, bez dotykania formuły.' },
    { text: 'Zaznacz **C2** do **D5** i ustaw {{Formatuj}} → {{Liczba}} → {{Waluta}}. Wyniki formuł też można formatować.' },
    { text: 'Dodaj kolumnę **E** z nagłówkiem `Na osobę` i formułą, która dzieli Razem przez 4 kumpli. W **E2** wpisz ją i przeciągnij w dół.', copy: '=D2/4' }
  ],
  check: [
    'W kolumnie D są wyniki, a na pasku nad siatką widzisz formuły z adresami, nie liczby.',
    'Zmiana ilości w B zmienia wynik w D bez Twojej pomocy.',
    'Przeciągnąłeś formułę i wiesz, że numer wiersza zmienia się sam.'
  ],
  variants: [
    { text: 'Nawiasy działają jak w matmie. Najpierw dodaj dwie ceny, potem pomnóż:', copy: '=(C2+C3)*2' },
    { text: 'Potęga to daszek. Dwa do dziesiątej:', copy: '=2^10' },
    { text: 'Możesz mieszać adresy i liczby. Przecinek w liczbie jest w porządku, to polski zapis:', copy: '=B2*C2*1,23' },
    { text: 'Odejmowanie od budżetu. Wpisz w G1 `100`, a w G2:', copy: '=G1-D2-D3-D4-D5' }
  ],
  solo: {
    text: 'Zrób kartę `Oszczędzanie`: w A tygodnie 1 do 10 (uchwyt), w B ile odkładasz co tydzień (ta sama kwota), w C ile masz razem po każdym tygodniu. Podpowiedź: C2 to `=B2`, a C3 to `=C2+B3`. Przeciągnij C3 w dół.',
    hints: ['C3 dodaje to, co było (C2), do nowej wpłaty (B3).', 'Przeciągnij C3, nie C2.', 'Zmień kwotę w B i patrz, jak wszystko się przelicza.']
  },
  discovery: { text: 'Wpisz w wolnej komórce formułę poniżej i wciśnij Enter. To kostka do gry: losuje liczbę od 1 do 6. Wpisz cokolwiek w innej komórce, a kostka rzuca od nowa. Na końcu ją skasuj, bo będzie przeszkadzać.', copy: '=LOS.ZAKR(1;6)' },
  journalPrompt: 'Co się stało, gdy zmieniłeś liczbę w B2?',
  parent: 'Pokaż rodzicowi kartę „Zakupy”. Zmień jedną ilość na jego oczach i pokaż, że reszta przelicza się sama.',
  forParent: {
    teaches: 'Formuła zaczyna się od znaku równości; cztery działania; adresy komórek zamiast liczb (klikanie zamiast wpisywania); przeciąganie formuły i automatyczna zmiana numeru wiersza; przeliczanie po zmianie danych.',
    ask: 'Zmień dowolną liczbę w tabelce i zapytaj, dlaczego wynik się zmienił. Poproś, żeby pokazał formułę na pasku nad siatką.'
  }
});
