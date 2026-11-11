/* Misje 4-7: funkcje, pinezka ($), sortowanie i filtr, wykresy. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.missions = window.ARKUSZE.missions || [];
window.ARKUSZE.missions.push(
{
  id: 'suma',
  title: 'SUMA i spółka',
  subtitle: 'Funkcje: gotowe działania na całą kolumnę',
  technique: 'Funkcje',
  minutes: 25,
  why: [
    'Dodawanie 30 komórek plusem to męka. **Funkcja** robi to jednym słowem: `=SUMA(D2:D31)`. Dwukropek znaczy „od... do...”, więc `D2:D31` to wszystkie komórki od D2 do D31. Taki kawałek nazywa się **zakres**.',
    'Pięć funkcji załatwia większość spraw: **SUMA** dodaje, **ŚREDNIA** liczy średnią, **MIN** i **MAX** znajdują najmniejszą i największą liczbę, **ILE.LICZB** liczy, ile jest liczb. Wszystkie działają tak samo: nazwa, nawias, zakres, nawias.'
  ],
  realWorld: 'Skarbnik klubu sportowego liczy SUMĄ składki, a trener ŚREDNIĄ sprawdza, ile zawodnik przebiega na treningu. MIN i MAX od razu mówią: najlepszy wynik i najgorszy dzień.',
  example: {
    intro: 'Podsumowanie wydatków. Pięć formuł, każda z tym samym zakresem D2:D6.',
    sheets: [
      { caption: 'Karta „Kieszonkowe” z podsumowaniem pod tabelką', fx: { cell: 'D8', text: '=SUMA(D2:D6)' }, head: true, sel: 'D8', marks: { D8: 'ok', D9: 'ok', D10: 'ok', D11: 'ok', D12: 'ok' },
        rows: [['Data', 'Co', 'Kategoria', 'Kwota'], ['01.09.2026', 'lody', 'słodycze', '6,00 zł'], ['03.09.2026', 'komiks', 'rozrywka', '14,90 zł'], ['05.09.2026', 'żelki', 'słodycze', '4,50 zł'], ['06.09.2026', 'kino z kumplami', 'rozrywka', '25,00 zł'], ['08.09.2026', 'bilet na basen', 'sport', '12,00 zł'], ['', '', '', ''], ['', '', 'Razem', '62,40 zł'], ['', '', 'Średnio', '12,48 zł'], ['', '', 'Najdrożej', '25,00 zł'], ['', '', 'Najtaniej', '4,50 zł'], ['', '', 'Ile wydatków', '5']] }
    ],
    note: 'Zakres D2:D6 zaznaczasz myszką w trakcie pisania formuły. Po wpisaniu `=SUMA(` przeciągnij po komórkach, Arkusz wpisze adresy sam. Potem `)` i Enter.'
  },
  steps: [
    { text: 'Wróć na kartę `Kieszonkowe`. W **C8** wpisz `Razem`. W **D8** wpisz `=SUMA(`, potem **zaznacz myszką** D2 do D6, wpisz `)` i [[Enter]].', copy: '=SUMA(D2:D6)', tip: 'Gdy zaczynasz pisać `=SU`, Arkusz podpowiada funkcje z opisem. Możesz wybrać z listy strzałkami i Tabem.' },
    { text: 'Średnia. W **C9** wpisz `Średnio`, w **D9**:', copy: '=ŚREDNIA(D2:D6)', tip: 'Małe litery też działają: `=średnia(D2:D6)`. Arkusz sam zamieni na wielkie.' },
    { text: 'Największy wydatek. W **C10** `Najdrożej`, w **D10**:', copy: '=MAX(D2:D6)', tip: 'W Arkuszach Google największa liczba to MAX, choć w Excelu nazywa się MAKS. Gdyby MAX pokazał błąd, spróbuj MAKS.' },
    { text: 'Najmniejszy. W **C11** `Najtaniej`, w **D11**:', copy: '=MIN(D2:D6)' },
    { text: 'Ile było wydatków? W **C12** `Ile wydatków`, w **D12**:', copy: '=ILE.LICZB(D2:D6)' },
    { text: 'Dopisz nowy wydatek w wierszu 7 (data, co, kategoria, kwota). Czy suma go policzyła? Nie, bo zakres kończy się na D6. Kliknij **D8** i zmień `D6` na `D7`. Albo od razu daj zapas: `D2:D50`. Zrób tak we wszystkich pięciu formułach.', tip: 'Zapas w zakresie to normalna rzecz. Puste komórki nie psują sumy ani średniej.' },
    { text: 'Zepsuj formułę celowo: w wolnej komórce wpisz `=SUMA(D2:D6` bez nawiasu na końcu. Arkusz pokaże błąd albo sam dopisze nawias. Potem wpisz `=SUMA(D2,D6)` z przecinkiem zamiast średnika i zobacz, co się stanie. Skasuj oba.', tip: 'Czerwony trójkącik w rogu komórki i napis z `#` to błąd. Najedź na komórkę, Arkusz mówi, co jest nie tak. Częste: `#NAZWA?` (literówka w nazwie funkcji) i `#BŁĄD!` (coś nie tak w zapisie, np. przecinek zamiast średnika).' }
  ],
  check: [
    'Pod tabelką masz pięć podsumowań, każde z formułą, nie wpisanym ręcznie wynikiem.',
    'Umiesz przeczytać `D2:D6` po polsku: od D2 do D6.',
    'Wiesz, co zrobić, gdy dopisujesz wiersz, a suma go nie widzi.'
  ],
  variants: [
    { text: 'Zakres może obejmować kilka kolumn. Suma wszystkiego w tabelce od B do D:', copy: '=SUMA(B2:D6)' },
    { text: 'Kilka kawałków naraz, oddzielonych średnikiem:', copy: '=SUMA(D2:D3;D6)' },
    { text: 'ILE.LICZB liczy tylko liczby. Ile jest wpisanych rzeczy w kolumnie B, czyli tekstów?', copy: '=ILE.NIEPUSTYCH(B2:B6)' },
    { text: 'Funkcja w funkcji. Średnia zaokrąglona do pełnych złotych:', copy: '=ZAOKR(ŚREDNIA(D2:D6);0)' }
  ],
  solo: {
    text: 'Na karcie `Top 5` policz pod tabelką: średnią ocen, najwyższą i najniższą ocenę oraz sumę cen z kolumny, którą dodałeś w misji 1. Bez kopiowania formuł z Akademii.',
    hints: ['Nazwa funkcji, nawias, zakres, nawias.', 'Zakres zaznaczasz myszką w trakcie pisania.', 'Arkusz podpowiada nazwy po pierwszych literach.']
  },
  discovery: { text: 'Zaznacz D2 do D6 i spójrz w prawy dolny róg ekranu: Arkusz pokazuje sumę od razu, bez formuły. Kliknij ten napis, wybierz **Średnia** i porównaj z D9. To szybki sposób na sprawdzenie, czy formuła nie kłamie.' },
  journalPrompt: 'Która funkcja przydała Ci się najbardziej i do czego?',
  parent: 'Pokaż rodzicowi podsumowanie kieszonkowego. Zapytaj go, ile wydaje na kawę w tygodniu, i policzcie razem, ile to na miesiąc.',
  forParent: {
    teaches: 'Funkcje SUMA, ŚREDNIA, MIN, MAX, ILE.LICZB; pojęcie zakresu (D2:D6); zaznaczanie zakresu myszką w trakcie pisania formuły; zapas w zakresie; czytanie błędów #NAZWA? i #BŁĄD!.',
    ask: 'Poproś, żeby przeczytał głośno formułę z D8 i wytłumaczył dwukropek. Dopiszcie razem wydatek i sprawdźcie, czy suma go widzi.'
  }
},
{
  id: 'pinezka',
  title: 'Pinezka, czyli znak dolara',
  subtitle: 'Jedna komórka dla wszystkich formuł',
  technique: 'Odwołanie bezwzględne',
  minutes: 20,
  why: [
    'Przeciągasz formułę w dół i numer wiersza się zmienia. Zwykle o to chodzi. Ale czasem jedna komórka ma **zostać na miejscu**: kurs waluty, stawka, rabat, liczba kumpli. Wtedy przypinasz ją **pinezką**: znakiem dolara przed literą i przed cyfrą, `$B$1`.',
    'Przypięty adres nie rusza się przy przeciąganiu. Zmieniasz kurs w jednej komórce i wszystkie ceny przeliczają się same. Bez tego musiałbyś poprawiać każdą formułę osobno.'
  ],
  realWorld: 'Sklep, który sprowadza części rowerowe z Niemiec, trzyma kurs euro w jednej komórce. Kurs się zmienia, ktoś poprawia jedną liczbę i cały cennik przelicza się sam.',
  example: {
    intro: 'Ceny gier są w euro, a Ty chcesz je w złotówkach. Kurs euro stoi w jednej komórce, B1.',
    sheets: [
      { caption: 'Karta „Gry w euro”: kurs w B1, ceny w euro w B4:B7', fx: { cell: 'C4', text: '=B4*$B$1' }, sel: 'C4', marks: { B1: 'note', C4: 'ok', C5: 'ok', C6: 'ok', C7: 'ok' },
        rows: [['Kurs euro', '4,30 zł', ''], ['', '', ''], ['Gra', 'Cena w euro', 'Cena w zł'], ['Minecraft', '29,99 €', '128,96 zł'], ['Stardew Valley', '13,99 €', '60,16 zł'], ['Rocket League', '0,00 €', '0,00 zł'], ['Terraria', '9,99 €', '42,96 zł']] }
    ],
    note: 'Formuła w C4 to `=B4*$B$1`. Przeciągnięta do C7 zamienia się w `=B7*$B$1`: B4 pojechało w dół, a $B$1 zostało. Gdyby nie było dolarów, w C5 byłoby `=B5*B2`, czyli mnożenie przez pustą komórkę. Wynik zero.'
  },
  steps: [
    { text: 'Nowa karta `Gry w euro`. Wklej tabelkę: Kopiuj, klik w **A1**, [[Ctrl]] + [[V]].', copy: 'Kurs euro\t4,3\n\nGra\tCena w euro\tCena w zł\nMinecraft\t29,99\nStardew Valley\t13,99\nRocket League\t0\nTerraria\t9,99' },
    { text: 'Najpierw źle, żeby zobaczyć problem. W **C4** wpisz formułę bez dolarów i przeciągnij do **C7**. Kliknij **C5** i spójrz na pasek formuły: `=B5*B2`. B2 jest puste, więc wynik to 0. Formuła pojechała za daleko.', copy: '=B4*B1' },
    { text: 'Teraz dobrze. Kliknij **C4**, wpisz formułę z dolarami i [[Enter]]. Przeciągnij do **C7**. Wszystkie ceny w złotówkach.', copy: '=B4*$B$1', tip: 'Skrót: gdy piszesz formułę i kursor stoi na adresie B1, wciśnij [[F4]]. Arkusz sam dopisze dolary. Kolejne F4 przełącza warianty.' },
    { text: 'Zmień kurs w **B1** na `4,5`. Wszystkie ceny w kolumnie C przeliczają się same. To jest cały sens pinezki.' },
    { text: 'Format: zaznacz **B4** do **B7** i ustaw euro: {{Formatuj}} → {{Liczba}} → {{Waluta niestandardowa}}, wyszukaj `euro`. Kolumnę **C** ustaw jako zwykłą {{Waluta}}.' },
    { text: 'Drugi przykład. Karta `Zakupy` z misji 3: w **G1** wpisz `Kumple`, w **G2** wpisz `4`. Zmień formułę w **E2** tak, żeby dzieliła przez G2 z pinezką, i przeciągnij w dół. Teraz liczbę kumpli zmieniasz w jednym miejscu.', copy: '=D2/$G$2' }
  ],
  check: [
    'Zmiana kursu w jednej komórce przelicza całą kolumnę.',
    'Umiesz powiedzieć, co robi dolar przed literą i przed cyfrą.',
    'Widziałeś, co się dzieje bez dolarów, i wiesz, dlaczego wyszło zero.'
  ],
  variants: [
    { text: 'Rabat. Wpisz w H1 `Rabat`, w H2 `0,2` (format procent). Cena po rabacie w I2, przeciągnij w dół:', copy: '=D2*(1-$H$2)' },
    { text: 'Pinezka tylko na wiersz: `B$1`. Litera może się zmieniać przy przeciąganiu w prawo, cyfra stoi. Tego użyjesz w Odkryciu.' },
    { text: 'Nazwa zamiast adresu: zaznacz B1, menu {{Dane}} → {{Nazwane zakresy}}, nazwij ją `kurs`. Potem formuła może brzmieć:', copy: '=B4*kurs' }
  ],
  solo: {
    text: 'Zrób kartę `Oszczędzanie 2`: w B1 wpisz, ile odkładasz tygodniowo. W A4:A13 tygodnie 1 do 10. W B4 formuła, która mnoży numer tygodnia przez kwotę z B1, z pinezką. Przeciągnij w dół. Zmień B1 i patrz.',
    hints: ['`=A4*$B$1`.', 'Bez dolarów wyjdzie źle od drugiego wiersza.', 'F4 dopisuje dolary za Ciebie.']
  },
  discovery: { text: 'Tabliczka mnożenia w trzech ruchach. Nowa karta. W A2:A11 wpisz 1 do 10 (uchwyt). W B1:K1 też 1 do 10 (uchwyt w prawo). W B2 wklej formułę poniżej, przeciągnij B2 w prawo do K2, potem zaznacz B2:K2 i przeciągnij w dół do wiersza 11. Sto wyników z jednej formuły.', copy: '=$A2*B$1' },
  journalPrompt: 'Do czego jeszcze przydałaby się komórka przypięta pinezką?',
  parent: 'Pokaż rodzicowi kartę „Gry w euro” i zmień kurs na jego oczach. Zapytaj, gdzie w jego pracy albo w domu jest „jedna liczba, od której zależy reszta”.',
  forParent: {
    teaches: 'Odwołanie bezwzględne ($B$1) i względne; dlaczego formuła bez dolarów „ucieka”; skrót F4; odwołania mieszane (B$1) w tabliczce mnożenia; nazwane zakresy.',
    ask: 'Poproś o wyjaśnienie, dlaczego bez dolarów wyszło zero. Zmień kurs euro i zapytaj, co się przeliczyło.'
  }
},
{
  id: 'sortuj',
  title: 'Sortuj i filtruj',
  subtitle: 'Kto jest na czele i jak widzieć tylko to, co chcesz',
  technique: 'Sortowanie i filtr',
  minutes: 25,
  why: [
    'Tabelka z 30 wierszami to bałagan, dopóki jej nie **posortujesz**: od największej liczby, alfabetycznie, od najnowszej daty. Arkusz przestawia całe wiersze, więc imię zostaje przy swoich punktach.',
    '**Filtr** to lejek: pokazuje tylko wiersze, które spełniają warunek, reszta chowa się na chwilę. Nic nie znika, tylko się chowa. Idealne do pytań „pokaż tylko wyniki Kuby” albo „tylko wydatki na słodycze”.'
  ],
  realWorld: 'Tabela każdej ligi piłkarskiej to posortowany arkusz: punkty od największej. Kierownik sklepu filtruje tabelę sprzedaży, żeby zobaczyć tylko jeden dzień albo tylko jeden towar.',
  example: {
    intro: 'Liga kumpli: kto, w co, ile punktów. Najpierw sortowanie, potem filtr.',
    sheets: [
      { caption: 'Karta „Liga” posortowana po punktach, od największej', head: true, sel: 'C1',
        rows: [['Kto', 'Gra', 'Punkty', 'Data'], ['Kuba', 'Mario Kart', '48', '12.09.2026'], ['Ja', 'Mario Kart', '45', '12.09.2026'], ['Ola', 'Uno', '40', '13.09.2026'], ['Ja', 'Uno', '37', '13.09.2026'], ['Kuba', 'Uno', '35', '13.09.2026'], ['Ola', 'Mario Kart', '31', '12.09.2026']] },
      { caption: 'Ta sama karta z filtrem: tylko wiersze z „Ja”', head: true, marks: { A1: 'blue', B1: 'blue', C1: 'blue', D1: 'blue' },
        rows: [['Kto ▾', 'Gra ▾', 'Punkty ▾', 'Data ▾'], ['Ja', 'Mario Kart', '45', '12.09.2026'], ['Ja', 'Uno', '37', '13.09.2026']] }
    ],
    note: 'Przy filtrze numery wierszy po lewej robią skoki, a schowane wiersze wracają po wyłączeniu filtra. Sortowanie zmienia kolejność na stałe, ale zawsze możesz posortować z powrotem po dacie.'
  },
  steps: [
    { text: 'Nowa karta `Liga`. Wklej tabelkę. Sformatuj nagłówek (misja 1) i zablokuj wiersz 1.', copy: 'Kto\tGra\tPunkty\tData\nJa\tMario Kart\t45\t12.09.2026\nKuba\tMario Kart\t48\t12.09.2026\nOla\tMario Kart\t31\t12.09.2026\nJa\tUno\t37\t13.09.2026\nKuba\tUno\t35\t13.09.2026\nOla\tUno\t40\t13.09.2026', tip: 'Podmień imiona na swoich kumpli i wpisz prawdziwe wyniki z ostatniej gry. Wtedy tabela zaczyna mieć sens.' },
    { text: 'Sortowanie całej tabelki: zaznacz **A1** do **D7**. Menu {{Dane}} → {{Sortuj zakres}} → {{Zaawansowane opcje sortowania zakresów}}. Zaznacz **Dane mają wiersz nagłówka**, wybierz kolumnę **Punkty**, **Z → A**, kliknij **Sortuj**.', tip: 'Zaznaczasz całą tabelkę, nie jedną kolumnę. Inaczej posortujesz same punkty, a imiona zostaną na miejscu i Kuba dostanie punkty Oli. Jeśli tak się stało: Ctrl + Z.' },
    { text: 'Sprawdź: kto jest na górze? Posortuj jeszcze raz, tym razem po kolumnie **Kto**, **A → Z**. Wyniki jednej osoby stoją razem.' },
    { text: 'Filtr: kliknij dowolną komórkę tabelki, menu {{Dane}} → {{Utwórz filtr}}. W nagłówkach pojawiają się małe lejki.' },
    { text: 'Kliknij lejek przy **Kto**. Kliknij **Wyczyść**, potem zaznacz tylko swoje imię, **OK**. Widzisz tylko swoje wyniki. Suma Twoich punktów? Zaznacz kolumnę Punkty i spójrz w prawy dolny róg.' },
    { text: 'Filtr po warunku: lejek przy **Punkty** → {{Filtrowanie wg warunku}} → **Większe niż** → `40` → **OK**. Tylko dobre wyniki.' },
    { text: 'Zdejmij filtr: {{Dane}} → {{Usuń filtr}}. Wszystkie wiersze wracają.', tip: 'Filtr nic nie kasuje. Gdy „zginęły” wiersze, to prawie zawsze filtr. Szukaj lejka w nagłówku.' }
  ],
  check: [
    'Posortowałeś po punktach i imiona zostały przy swoich wynikach.',
    'Umiesz pokazać tylko wyniki jednej osoby i wrócić do wszystkich.',
    'Wiesz, czym różni się sortowanie (zmienia kolejność) od filtra (chowa wiersze).'
  ],
  variants: [
    { text: 'Szybkie sortowanie jednym kliknięciem: prawy przycisk na literze kolumny **C** → **Sortuj arkusz od Z do A**. Sortuje cały arkusz po tej kolumnie. Zablokowany nagłówek zostaje na miejscu.' },
    { text: 'Sortuj po dwóch rzeczach: w zaawansowanych opcjach dodaj drugą kolumnę sortowania. Najpierw po Grze, potem po Punktach. Ranking osobno w każdej grze.' },
    { text: 'Filtr po kolorze: pokoloruj dwa wiersze na żółto, potem lejek → {{Filtrowanie według koloru}}.' }
  ],
  solo: {
    text: 'Karta `Kieszonkowe`: posortuj wydatki od najdroższego. Potem załóż filtr i pokaż tylko kategorię „słodycze”. Ile poszło na słodycze? Odpowiedź z prawego dolnego rogu. Zdejmij filtr i posortuj z powrotem po dacie.',
    hints: ['Zaznacz całą tabelkę, nie jedną kolumnę.', 'Dane → Sortuj zakres → Zaawansowane opcje.', 'Dane → Utwórz filtr, lejek przy Kategoria.']
  },
  discovery: { text: 'Widok przefiltrowany zapamiętuje filtr pod nazwą i nie zmienia tego, co widzą inni. {{Dane}} → {{Widoki filtrów}} → utwórz nowy widok. Nazwij go swoim imieniem, ustaw filtr na siebie, zamknij krzyżykiem. Twój widok czeka w tym samym menu.' },
  journalPrompt: 'Kto wygrał ligę i jak to sprawdziłeś w trzy sekundy?',
  parent: 'Pokaż rodzicowi ligę posortowaną po punktach i filtr na jedną osobę. Zapytaj, co jego zdaniem warto dodać do tabelki.',
  forParent: {
    teaches: 'Sortowanie zakresu z nagłówkiem (całe wiersze, nie jedna kolumna), sortowanie po kilku kolumnach, filtr po wartości, po warunku i po kolorze, usuwanie filtra, widoki filtrów.',
    ask: 'Poproś o posortowanie ligi od najlepszego i o filtr na jedną osobę. Zapytaj, dlaczego zaznacza całą tabelkę przed sortowaniem.'
  }
},
{
  id: 'wykres',
  title: 'Wykres w minutę',
  subtitle: 'Kolumny, koło czy linia: jak pokazać liczby obrazkiem',
  technique: 'Wykres',
  minutes: 25,
  why: [
    'Liczby w tabelce trzeba czytać. Wykres widzi się od razu: kto ma najwięcej, na co idzie najwięcej kasy, czy coś rośnie. Arkusz robi wykres z zaznaczonych komórek jednym kliknięciem, a Ty go tylko poprawiasz.',
    'Trzy typy załatwiają większość: **kolumnowy** porównuje (kto ile), **kołowy** dzieli całość na kawałki (na co poszło), **liniowy** pokazuje zmianę w czasie (jak rośnie). Zły typ to najczęstszy błąd: kołowy do porównania 10 osób to plama.'
  ],
  realWorld: 'Komentatorzy sportowi, prezenterzy pogody i dziennikarze pokazują liczby wykresami, bo widz ma na nie kilka sekund. Ktoś te wykresy przygotował i bardzo często zaczynał od arkusza.',
  example: {
    intro: 'Do wykresu potrzebujesz małej tabelki: nazwy w jednej kolumnie, liczby w drugiej. Zaznaczasz ją razem z nagłówkiem i klikasz Wstaw → Wykres. Arkusz zgaduje typ, a Ty poprawiasz w Edytorze wykresów po prawej.',
    sheets: [
      { caption: 'Karta „Liga”: dane do wykresu kolumnowego, zaznaczone razem z nagłówkiem', head: true, marks: { A1: 'blue', B1: 'blue', A2: 'blue', B2: 'blue', A3: 'blue', B3: 'blue', A4: 'blue', B4: 'blue' },
        rows: [['Kto', 'Punkty razem'], ['Kuba', '83'], ['Ja', '82'], ['Ola', '71']] }
    ],
    note: 'W Edytorze wykresów zakładka **Konfiguracja** to typ wykresu i dane, a **Dostosuj** to tytuł, kolory i podpisy. Z tej tabelki wychodzą trzy kolumny, najwyższa dla Kuby.'
  },
  steps: [
    { text: 'Na karcie `Liga` zrób obok małą tabelkę podsumowującą: w **F1** `Kto`, w **G1** `Punkty razem`, pod spodem imiona i sumy punktów każdej osoby. Policz z tabelki albo użyj filtra z misji 6.', tip: 'W misji 9 nauczysz się, żeby Arkusz sam sumował punkty każdej osoby. Dziś możesz wpisać ręcznie.' },
    { text: 'Zaznacz **F1** do **G4**, nagłówek razem z danymi. Menu {{Wstaw}} → {{Wykres}}. Wykres wskakuje na arkusz, a po prawej otwiera się **Edytor wykresów**.' },
    { text: 'W zakładce **Konfiguracja** sprawdź **Typ wykresu**. Ma być **Wykres kolumnowy**. Jeśli Arkusz wybrał inny, zmień z listy.' },
    { text: 'Zakładka **Dostosuj** → **Tytuły wykresu i osi**. Wpisz tytuł: `Liga: punkty razem`. Potem **Seria** → zmień kolor kolumn.', tip: 'Edytor zamknięty? Kliknij dwa razy na wykres, wraca.' },
    { text: 'Przesuń wykres: chwyć go i przeciągnij pod tabelkę. Powiększ, ciągnąc za róg. Zmień liczbę w **G2** i patrz, jak kolumna rośnie.' },
    { text: 'Drugi wykres, inny typ. Karta `Kieszonkowe`: zrób tabelkę **F1** `Kategoria`, **G1** `Razem`, pod spodem kategorie i sumy (słodycze, rozrywka, sport). Zaznacz, {{Wstaw}} → {{Wykres}}, typ **Wykres kołowy**. Widzisz, na co idzie najwięcej.' },
    { text: 'Trzeci typ. Karta `Oszczędzanie` z misji 3: zaznacz tygodnie i kwotę razem, wstaw wykres, typ **Wykres liniowy**. Linia idzie w górę. To Twoje oszczędności w czasie.' }
  ],
  check: [
    'Masz trzy wykresy trzech typów i umiesz powiedzieć, do czego każdy pasuje.',
    'Każdy wykres ma tytuł, który mówi, co pokazuje.',
    'Zmiana liczby w tabelce zmienia wykres.'
  ],
  variants: [
    { text: 'Podpisy na kolumnach: {{Dostosuj}} → {{Seria}} → zaznacz **Etykiety danych**. Liczby siedzą na słupkach.' },
    { text: 'Wykres słupkowy to kolumnowy położony na boku. Lepszy, gdy nazwy są długie.' },
    { text: 'Wykres na osobnej karcie: trzy kropki w rogu wykresu → przenieś do własnego arkusza. Duży i czysty.' },
    { text: 'Kolejność w kołowym: posortuj tabelkę od największej (misja 6), a wykres ułoży kawałki od największego.' }
  ],
  solo: {
    text: 'Zrób wykres kolumnowy z ocen na karcie `Top 5`: co lubisz najbardziej? Dodaj tytuł i podpisy na kolumnach. Potem zmień typ na kołowy i oceń: który lepiej pokazuje różnice?',
    hints: ['Zaznacz nazwy i oceny razem z nagłówkiem.', 'Wstaw → Wykres.', 'Dostosuj → Tytuły wykresu i osi.']
  },
  discovery: { text: 'Wykres, który rośnie razem z tabelką: na karcie `Kieszonkowe` zaznacz **B1** do **B50**, potem trzymając [[Ctrl]] zaznacz **D1** do **D50**. Wstaw wykres kolumnowy. Dopisz wydatek pod tabelką: nowa kolumna wyskakuje na wykresie sama, bo zakres ma zapas.' },
  journalPrompt: 'Który typ wykresu pasował do czego? Jedno zdanie.',
  parent: 'Pokaż rodzicowi wykres kołowy wydatków. Zapytaj, jaki wykres zrobiłby z domowych rachunków i dlaczego taki.',
  forParent: {
    teaches: 'Wstawianie wykresu z zaznaczonej tabelki; typy: kolumnowy (porównanie), kołowy (części całości), liniowy (zmiana w czasie); Edytor wykresów: Konfiguracja i Dostosuj; tytuł, kolory, etykiety danych; wykres podąża za danymi.',
    ask: 'Zapytaj, dlaczego do ligi wybrał kolumny, a do wydatków koło. Poproś o zmianę koloru serii na Twoich oczach.'
  }
});
