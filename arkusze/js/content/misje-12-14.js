/* Misje 12-15: tabela przestawna, ankieta wśród dorosłych, projekt w dwóch częściach. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.missions = window.ARKUSZE.missions || [];
window.ARKUSZE.missions.push(
{
  id: 'przestawna',
  title: 'Tabela przestawna liczy za Ciebie',
  subtitle: 'Podsumowania z dużej tabelki w trzy kliknięcia, bez formuł',
  technique: 'Tabela przestawna',
  minutes: 25,
  why: [
    'W misji 9 sumowałeś po kategorii formułą. Działa, ale przy 10 kategoriach i 3 pytaniach to sporo formuł. **Tabela przestawna** robi to bez ani jednej: wskazujesz tabelkę, mówisz „wiersze: kategoria, wartości: kwota” i masz gotowe podsumowanie. Zmieniasz zdanie, przestawiasz jednym kliknięciem.',
    'To narzędzie, którym dorośli w pracy odpowiadają na pytania „ile czego, kiedy, u kogo”. Ty nauczysz się go dziś na lidze i kieszonkowym.'
  ],
  realWorld: 'Analityk w firmie dostaje tabelę z tysiącami wierszy sprzedaży i w minutę odpowiada szefowi, ile czego sprzedano w każdym mieście. Właśnie tabelą przestawną. To jedno z najczęściej używanych narzędzi w biurach.',
  example: {
    intro: 'Trzy kliknięcia w Edytorze tabeli przestawnej: Wiersze → Kto, Wartości → Punkty (SUMA), Wartości → Punkty jeszcze raz (ILE.LICZB).',
    sheets: [
      { caption: 'Tabela przestawna z karty „Liga”: punkty razem i liczba gier na osobę', head: true, marks: { A5: 'head', B5: 'head', C5: 'head' },
        rows: [['Kto', 'SUMA z Punkty', 'ILE.LICZB z Punkty'], ['Kuba', '83', '2'], ['Ja', '82', '2'], ['Ola', '71', '2'], ['Suma końcowa', '236', '6']] }
    ],
    note: 'Tabela przestawna nie zmienia Twoich danych. To osobny widok, zwykle na nowej karcie. Aktualizuje się sama, o ile zakres źródłowy obejmuje nowe wiersze. Dlatego jako źródło zaznaczamy całe kolumny.'
  },
  steps: [
    { text: 'Karta `Liga`. Zaznacz całe kolumny **A** do **D**: kliknij literę A, trzymaj [[Shift]], kliknij D. Menu {{Wstaw}} → {{Tabela przestawna}}. Wybierz **Nowy arkusz**, **Utwórz**.', tip: 'Całe kolumny, nie A1:D7. Wtedy nowe wyniki dopisane pod tabelką same trafiają do podsumowania.' },
    { text: 'Po prawej jest **Edytor tabeli przestawnej**. Przy **Wiersze** kliknij **Dodaj** → **Kto**. Imiona wskakują do kolumny A.' },
    { text: 'Przy **Wartości** kliknij **Dodaj** → **Punkty**. Domyślnie sumuje: punkty razem na osobę. Kto wygrywa?' },
    { text: 'Jeszcze raz **Wartości** → **Dodaj** → **Punkty**, a w tym drugim polu zmień **Podsumuj według** na **ILE.LICZB**, czyli liczenie (jeśli lista jest po angielsku: **COUNT**). Masz liczbę gier każdej osoby.' },
    { text: 'Dodaj **Kolumny** → **Gra**. Teraz widzisz punkty każdej osoby w każdej grze osobno, jak w krzyżówce. Za dużo? Kliknij **X** przy Gra, żeby zdjąć.' },
    { text: 'Sortowanie: przy **Wiersze** → **Kto** ustaw **Sortuj według** na **SUMA z Punkty**, kolejność **malejąco**. Ranking gotowy.' },
    { text: 'Dopisz na karcie `Liga` nowy wynik w wierszu 8. Wróć na kartę z tabelą przestawną. Suma zmieniła się sama.' },
    { text: 'Druga tabela przestawna, z `Kieszonkowe`: całe kolumny A:D, {{Wstaw}} → {{Tabela przestawna}}. Wiersze: **Kategoria**, Wartości: **Kwota**. Porównaj z sumami z misji 9. Zgadza się?' }
  ],
  check: [
    'Masz tabelę przestawną, która pokazuje punkty razem na osobę, bez formuł.',
    'Umiesz dodać i zdjąć pole w Wierszach, Kolumnach i Wartościach.',
    'Nowy wynik w Lidze sam pojawia się w podsumowaniu.'
  ],
  variants: [
    { text: 'Średnia zamiast sumy: **Podsumuj według** → **ŚREDNIA** (AVERAGE). Kto gra najrówniej?' },
    { text: 'Filtr w tabeli przestawnej: **Filtry** → **Dodaj** → **Gra**, zaznacz tylko jedną. Ranking w jednej grze.' },
    { text: 'Data w wierszach: Kieszonkowe, Wiersze → **Data**. Prawy przycisk na dacie w tabeli przestawnej → grupowanie dat → **Miesiąc**. Wydatki miesiąc po miesiącu.' },
    { text: 'Wykres z tabeli przestawnej: zaznacz ją i {{Wstaw}} → {{Wykres}}. Wykres podsumowania, który sam się aktualizuje.' }
  ],
  solo: {
    text: 'Zrób tabelę przestawną z `Kieszonkowe`, która odpowiada na trzy pytania naraz: ile razem na kategorię, ile razy kupowałeś w każdej kategorii, jaki był największy pojedynczy wydatek w kategorii (MAX).',
    hints: ['Trzy razy Wartości → Kwota, każda z innym Podsumuj według.', 'Całe kolumny jako źródło.', 'Sortuj wiersze malejąco po sumie.']
  },
  discovery: { text: 'Kliknij literę kolumny **Punkty** na karcie `Liga`, potem {{Dane}} → {{Statystyki kolumn}}. Arkusz sam rysuje rozkład liczb i podaje sumę, średnią, najwięcej i najmniej. Przełącz strzałkami na kolumnę Kto: ile razy występuje każde imię.' },
  journalPrompt: 'Na jakie pytanie odpowiedziała Ci tabela przestawna w trzy kliknięcia?',
  parent: 'Pokaż rodzicowi tabelę przestawną z ligi. Poproś, żeby zadał pytanie do danych („kto ma najwięcej w Uno?”), i odpowiedz mu, przestawiając pola.',
  forParent: {
    teaches: 'Tabela przestawna: źródło jako całe kolumny, Wiersze, Kolumny, Wartości, Filtry; zmiana funkcji podsumowania (SUMA, ILE.LICZB, ŚREDNIA, MAX); sortowanie; automatyczna aktualizacja; statystyki kolumn.',
    ask: 'Zadaj pytanie do danych i poproś o odpowiedź tabelą przestawną. Zapytaj, czym to się różni od SUMA.JEŻELI z misji 9.'
  }
},
{
  id: 'ankieta',
  added: '2026-11-08',
  title: 'Kto w pracy liczy w arkuszu?',
  subtitle: 'Ankieta wśród dorosłych, odpowiedzi z menu i wynik, który liczy formuła',
  technique: 'Ankieta',
  minutes: 30,
  why: [
    'Dorośli mówią, że arkusze „przydają się w pracy”. Zamiast wierzyć na słowo, sprawdzisz to jak badacz: zrobisz krótką ankietę wśród dorosłych, wpiszesz odpowiedzi do tabeli i policzysz wynik formułą.',
    'To prawdziwa robota z danymi. **Pytania** ustalasz z góry. **Odpowiedzi** wpisujesz zawsze tak samo, a menu w komórce pilnuje literówek. **Wynik** liczy formuła, nie Ty. Wszystko, czego potrzebujesz, już znasz: menu, LICZ.JEŻELI, pinezkę, procent, wykres i sklejanie tekstu.'
  ],
  realWorld: 'Firmy badające opinie robią dokładnie to samo, tylko z tysiącem osób: te same pytania, odpowiedzi z listy, wynik z formuły. Takie liczby słyszysz potem w wiadomościach: „60% Polaków uważa...”.',
  example: {
    intro: 'Tak może wyglądać karta po ankiecie wśród pięciorga dorosłych. Komórka H2 liczy odpowiedzi „tak”.',
    sheets: [
      { caption: 'Karta „Ankieta”: odpowiedzi i podsumowanie', fx: { cell: 'H2', text: '=LICZ.JEŻELI(C2:C20;"tak")' }, head: true, sel: 'H2', marks: { H2: 'ok', H3: 'ok', H4: 'ok' },
        rows: [['Kto', 'Praca', 'Arkusze w pracy', 'Do czego', 'Jak często', '', 'Podsumowanie', ''],
          ['ciocia', 'sklep', 'tak', 'zamówienia towaru', 'co tydzień', '', 'Używa arkuszy', '4'],
          ['dziadek', 'emeryt', 'nie', '', 'nigdy', '', 'Zapytanych', '5'],
          ['wujek', 'warsztat', 'tak', 'cennik części', 'co tydzień', '', 'Procent', '80%'],
          ['sąsiadka', 'szpital', 'tak', 'grafik dyżurów', 'codziennie', '', '', ''],
          ['trener', 'klub sportowy', 'tak', 'wyniki zawodników', 'rzadko', '', '', '']] }
    ],
    note: 'Imion ani nazw firm nie ma, bo nie są potrzebne. Wystarczy, kim ktoś dla Ciebie jest i gdzie mniej więcej pracuje.'
  },
  steps: [
    { text: 'Najpierw wywiady, z dala od komputera. Zapytaj przynajmniej 4 dorosłych: rodziców, dziadków, ciocię, trenera, sąsiada. Trzy pytania: **gdzie pracujesz** (wystarczy ogólnie: sklep, biuro, szpital), **czy używasz w pracy arkuszy albo tabel**, **do czego i jak często**. Zapisz odpowiedzi na kartce.', tip: 'Możesz to zrobić dzień wcześniej, przy obiedzie albo przez telefon. Bez nazwisk i nazw firm: wystarczy „ciocia, sklep”.' },
    { text: 'Nowa karta `Ankieta`. Wklej nagłówek, potem wpisz odpowiedzi: jeden dorosły w jednym wierszu. Sformatuj nagłówek jak w misji 1.', copy: 'Kto\tPraca\tArkusze w pracy\tDo czego\tJak często' },
    { text: 'Menu w komórce, żeby odpowiedzi zawsze brzmiały tak samo. Zaznacz **C2** do **C20**, {{Wstaw}} → {{Menu}}, wpisz opcje `tak` i `nie`, **Gotowe**. To samo w **E2** do **E20** z opcjami `codziennie`, `co tydzień`, `rzadko`, `nigdy`.', tip: 'Ludzie odpowiadają „jasne”, „pewnie”, „no raczej”. Formuła policzy tylko jedno, zawsze takie samo słowo, a menu pilnuje, żeby nim było.' },
    { text: 'Podsumowanie obok. W **G1** `Podsumowanie`, w **G2** `Używa arkuszy`, a w **H2** formuła, która liczy odpowiedzi „tak”:', copy: '=LICZ.JEŻELI(C2:C20;"tak")' },
    { text: 'W **G3** `Zapytanych`, w **H3** formuła, która liczy wypełnione wiersze w kolumnie Kto:', copy: '=ILE.NIEPUSTYCH(A2:A20)' },
    { text: 'W **G4** `Procent`, w **H4** podziel jedno przez drugie. Potem {{Formatuj}} → {{Liczba}} → {{Procent}}.', copy: '=H2/H3' },
    { text: 'Jak często? Mała tabelka niżej: w **G6** `Jak często`, w **H6** `Ile osób`, w **G7** do **G10** wpisz `codziennie`, `co tydzień`, `rzadko`, `nigdy`. W **H7** formuła, przeciągnij do **H10**.', copy: '=LICZ.JEŻELI($E$2:$E$20;G7)', tip: 'Pinezki z misji 5 trzymają zakres odpowiedzi w miejscu, a G7 przy przeciąganiu zmienia się w G8, G9 i G10.' },
    { text: 'Wykres: zaznacz **G6** do **H10**, {{Wstaw}} → {{Wykres}}, typ **Wykres kołowy**, bo to części całości (misja 7). Tytuł: `Jak często dorośli używają arkuszy`.' },
    { text: 'Wniosek w jednym zdaniu, sklejony formułą jak w misji 10. W **G12**:', copy: '=H2&" z "&H3&" zapytanych dorosłych używa arkuszy w pracy."' },
    { text: 'Pokaż wynik osobom, które pytałeś. Tę, która używa arkuszy najczęściej, poproś, żeby pokazała Ci jeden swój arkusz z pracy, bez tajnych danych. Poszukaj w nim rzeczy, które znasz: SUMA, sortowanie, kolory, filtr, wykres.' }
  ],
  check: [
    'Masz kartę `Ankieta` z odpowiedziami przynajmniej 4 dorosłych.',
    'Kolumny „Arkusze w pracy” i „Jak często” mają menu, więc nie ma w nich literówek.',
    'Formuły same liczą, ilu dorosłych używa arkuszy i jaki to procent.',
    'Widziałeś przynajmniej jeden prawdziwy arkusz z czyjejś pracy i znalazłeś w nim coś, co znasz.'
  ],
  variants: [
    { text: 'Zapytaj jeszcze dwie osoby i dopisz je pod tabelką. Liczby i wykres zmieniają się same, bo zakresy sięgają do wiersza 20.' },
    { text: 'Kolory z misji 8: zaznacz **A2** do **E20**, {{Formatuj}} → {{Formatowanie warunkowe}}, „Niestandardowa formuła to”. Wiersze z odpowiedzią „tak” robią się zielone.', copy: '=$C2="tak"' },
    { text: 'Tabela przestawna z misji 12: Wiersze → **Jak często**, Wartości → **Kto**. Arkusz policzy osoby w każdej grupie bez jednej formuły (liczenie: ILE.NIEPUSTYCH, po angielsku COUNTA).' }
  ],
  solo: {
    text: 'Zrób drugą ankietę, tym razem wśród kumpli albo w klasie, na temat, który Cię ciekawi: ulubiona gra, sport, ile czasu przed ekranem. Te same zasady: pytania ustalone z góry, odpowiedzi z menu, wynik z formuły, jeden wykres.',
    hints: ['Najpierw na kartce: 3 pytania i lista możliwych odpowiedzi do każdego.', 'Bez nazwisk: wystarczą inicjały albo numery.', 'Na końcu wniosek w jednym zdaniu, sklejony znakiem &.']
  },
  discovery: { text: 'Zapytaj rodzica o wynik jakiejś ankiety, który ostatnio słyszał w wiadomościach („60% Polaków...”). Ilu ludzi zapytano? Jak brzmiało pytanie? Twoja ankieta działa tak samo, tylko jest mniejsza.' },
  journalPrompt: 'Co Cię najbardziej zaskoczyło w odpowiedziach dorosłych?',
  parent: 'Pokaż rodzicowi wykres i zdanie z wnioskiem. Poproś, żeby pokazał Ci jeden swój arkusz albo tabelę z pracy, i znajdź w nim trzy rzeczy, które znasz z Akademii.',
  forParent: {
    teaches: 'Zbieranie danych do tabeli (stałe odpowiedzi z menu), LICZ.JEŻELI z pinezką, procent, wykres kołowy i wniosek sklejony formułą. Przy okazji dziecko samo sprawdza, czy arkusze „przydają się w pracy”, zamiast słyszeć to od dorosłych.',
    ask: 'Odpowiedz na ankietę jako pierwszy i pokaż mu prawdziwy arkusz ze swojej pracy, bez danych firmy. Zapytaj, co w nim rozpoznał.'
  }
},
{
  id: 'twoj-arkusz-1',
  title: 'Twój arkusz, część 1',
  subtitle: 'Wybierasz temat i budujesz coś, czego naprawdę użyjesz',
  technique: 'Wszystko razem',
  minutes: 30,
  why: [
    'W tej misji nie ma gotowych tabelek do wklejenia ani formuł do skopiowania. Masz Niezbędnik z czternastu misji i jedną prawdziwą sprawę. Sam decydujesz, jakich narzędzi użyć.',
    'Dziś: wersja, która działa. Nie musi być ładna ani skończona. Ma liczyć coś, co Cię obchodzi. Dopracowanie i pokazanie światu jest w części 2.'
  ],
  realWorld: 'Wielu dorosłych ma prywatny arkusz, którego nikt im nie kazał zrobić: budżet domowy, trening do maratonu, kolekcję płyt. Zrobili go, bo coś ich obchodziło. Tak samo jak Ty dziś.',
  steps: [
    { text: 'Wybierz jedno wyzwanie. **A. Kieszonkowe na serio:** karta z wpisami (data, co, kategoria z menu, kwota), podsumowanie po kategoriach, wykres, ile zostało z miesięcznego budżetu. **B. Liga kumpli na serio:** wpisy z gier, ranking, kto wygrał najwięcej razy, wykres. **C. Trener słówek:** lista z polami wyboru, procent nauki, karta Quiz z WYSZUKAJ.PIONOWO i JEŻELI, odliczanie do sprawdzianu. **D. Własny temat:** kolekcja, treningi, przeczytane książki, oszczędzanie na coś. Warunek: minimum jedna formuła, jedno podsumowanie i jeden wykres.' },
    { text: 'Zanim klikniesz, napisz na kartce, jakie karty będą w pliku i co ma liczyć każda. Trzy zdania wystarczą.', tip: 'Plan na kartce to najlepsza rzecz, jaką robią ludzie budujący arkusze na co dzień. Oszczędza godzinę poprawiania.' },
    { text: 'Nowy plik: `sheets.new`, nazwa od tematu, region Polska (misja 0). Nie rób tego w pliku Akademia. To Twoja własna rzecz.' },
    { text: 'Karta z danymi najpierw: nagłówek, format liczb i dat, menu w kolumnach, gdzie ma być wybór (misja 8), zablokowany wiersz 1. Wpisz przynajmniej 8 prawdziwych wierszy.' },
    { text: 'Podsumowanie: osobna karta albo miejsce obok. Minimum trzy liczby, które chcesz widzieć od razu (SUMA, LICZ.JEŻELI, SUMA.JEŻELI, MAX, odliczanie). Zakresy z zapasem.' },
    { text: 'Jeden wykres, który pasuje do pytania: porównanie to kolumny, części całości to koło, zmiana w czasie to linia. Tytuł obowiązkowy.' },
    { text: 'Odhacz, których narzędzi użyłeś: format, uchwyt, formuła, funkcja, pinezka, sortowanie lub filtr, wykres, formatowanie warunkowe, JEŻELI i spółka, daty, karty lub WYSZUKAJ.PIONOWO, tabela przestawna. Jeśli mniej niż pięć, dołóż jedną.' }
  ],
  check: [
    'Plik ma dane, podsumowanie i wykres, a gdy dopisujesz wiersz, wszystko się przelicza.',
    'Użyłeś przynajmniej pięciu narzędzi z Niezbędnika i umiesz je nazwać.',
    'Nic nie wklejałeś z Akademii. Wszystko z głowy albo z Niezbędnika.'
  ],
  solo: {
    text: 'Zapisz w Dzienniku, czego zabrakło albo co Cię zatrzymało. To lista rzeczy do części 2. Jeśli utknąłeś na formule: Niezbędnik, karta z misji, z której ją znasz.',
    hints: ['Błąd w formule: najedź na czerwony trójkącik i przeczytaj.', '#N/A w WYSZUKAJ.PIONOWO: brakuje w cenniku.', 'Suma nie widzi nowego wiersza: powiększ zakres.']
  },
  discovery: { text: 'Zapytaj kogoś w domu, jaką tabelkę prowadzi na papierze albo w głowie: zakupy, rachunki, treningi, leki dla kota. Zrób z tego kartę w 10 minut. Pierwsza robota na zamówienie.' },
  journalPrompt: 'Co zbudowałeś i co było najtrudniejsze?',
  parent: 'Pokaż rodzicowi działający plik. Nie musi być ładny. Powiedz, jakich narzędzi użyłeś. To Twój pierwszy arkusz od pomysłu do wyniku.',
  forParent: {
    teaches: 'Samodzielny dobór narzędzi do prawdziwego zadania, plan na kartce przed klikaniem, dane oddzielone od podsumowania, zakresy z zapasem, nazwanie użytych technik.',
    ask: 'Poproś o pokaz i o listę użytych narzędzi. Zapytaj, co było najtrudniejsze bez ściągi. Dobry moment na konkretną pochwałę.'
  }
},
{
  id: 'twoj-arkusz-2',
  title: 'Twój arkusz, część 2',
  subtitle: 'Dopracuj, zabezpiecz, udostępnij i zabierz w telefonie',
  technique: 'Dopracowanie i współpraca',
  minutes: 30,
  why: [
    'Wersja pierwsza liczy. Teraz robisz to, co robią wszyscy, którzy budują arkusze: **jedna zmiana naraz**, sprawdzenie, następna. Kolory z regułami zamiast ręcznych, ochrona komórek z formułami, żeby nikt (ani Ty) nie skasował ich przypadkiem, i porządek w kartach.',
    'Arkusz to też współpraca: udostępniasz go rodzicowi z komentarzem, sprawdzasz w **historii zmian**, kto co zmienił, i otwierasz w telefonie w aplikacji Arkusze Google. Twoja liga może żyć na telefonach Twoim i kumpli.'
  ],
  realWorld: 'W pracy arkusze prawie zawsze są wspólne: kilka osób edytuje ten sam plik, a historia zmian pokazuje, kto co zmienił. Ochrona formuł to codzienna ostrożność, bo jedno przypadkowe skasowanie psuje liczby całego zespołu.',
  steps: [
    { text: 'Kopia na wszelki wypadek: {{Plik}} → {{Utwórz kopię}}, nazwa z dopiskiem `wersja 1`. Gdy coś zepsujesz, masz do czego wrócić.' },
    { text: 'Kolory z regułami: przynajmniej jedno formatowanie warunkowe, które coś mówi. Przekroczony budżet na czerwono, zwycięzca na zielono, nieodhaczone słowa na żółto.' },
    { text: 'Ochrona formuł: zaznacz komórki z formułami (podsumowanie), menu {{Dane}} → {{Chroń arkusze i zakresy}} → **Ustaw uprawnienia** → **Pokaż ostrzeżenie podczas edytowania tego zakresu**. Od teraz przy próbie nadpisania Arkusz pyta, czy na pewno.', tip: 'Ostrzeżenie wystarczy. Opcja „Określ, kto może edytować” przydaje się, gdy plik edytują kumple.' },
    { text: 'Porządek: karty w sensownej kolejności (przeciągnij kartę), kolory kart (prawy przycisk na karcie → {{Zmień kolor}}). Skasuj karty testowe.' },
    { text: 'Komentarz: kliknij komórkę z najważniejszą liczbą, prawy przycisk → {{Komentarz}} (albo [[Ctrl]] + [[Alt]] + [[M]]). Napisz, co ta liczba znaczy. Wpisz `@` i adres rodzica, żeby dostał powiadomienie.' },
    { text: 'Udostępnij rodzicowi jako **Edytujący** (misja 1), jeśli jeszcze nie ma. Poproś, żeby zmienił jedną komórkę. Potem {{Plik}} → {{Historia zmian}} → {{Zobacz historię zmian}} (albo [[Ctrl]] + [[Alt]] + [[Shift]] + [[H]]): widzisz, kto i co zmienił, i możesz przywrócić starszą wersję.', tip: 'Historia zmian to lepsze Ctrl + Z: działa nawet po tygodniu i po zamknięciu pliku.' },
    { text: 'Telefon: zainstaluj aplikację **Arkusze Google** i zaloguj się tym samym kontem. Otwórz swój plik. Dopisz jeden wiersz z telefonu i zobacz go na komputerze.' },
    { text: 'Eksport: {{Plik}} → {{Pobierz}} → **PDF** (do wydruku) albo **Microsoft Excel** (dla kogoś bez Google). Zobacz, jak wygląda w PDF.' }
  ],
  check: [
    'Ktoś inny może dopisać wiersz, a formuły są chronione ostrzeżeniem.',
    'Widzisz w historii zmian, co zmienił rodzic, i umiesz to cofnąć.',
    'Plik otwiera się na telefonie i zmiana z telefonu jest widoczna na komputerze.',
    'Umiesz powiedzieć w 3 zdaniach, co Twój arkusz liczy i dla kogo jest.'
  ],
  variants: [
    { text: 'Dostęp przez link: w oknie {{Udostępnij}} pole **Dostęp ogólny** zostaw na **Ograniczony**. Link „dla każdej osoby” to jak kartka przypięta na przystanku: każdy, kto go ma, widzi Twoje dane. Zawsze zapytaj rodzica, zanim to włączysz.' },
    { id: 'k2xci2b', text: 'Nazwana wersja: w historii zmian trzy kropki przy wersji → nadaj jej nazwę, np. „po misji 15”. Łatwiej wrócić.' }, // id: stary klucz kroku, żeby ptaszek przetrwał zmianę numeru
    { text: 'Karta „Instrukcja” na początku: trzy zdania, co gdzie wpisywać. Dla kumpla, który dostanie plik za pół roku. Albo dla Ciebie.' },
    { text: 'Szablon do powtarzania: {{Plik}} → {{Utwórz kopię}} co miesiąc, wyczyść dane, formuły zostają.' }
  ],
  solo: {
    text: 'Zrób plik dla kogoś innego: liga dla kumpli z prawem edycji dla nich, lista zakupów dla domu z polami wyboru na telefon albo plan treningów dla rodzica. Udostępnij, poproś o jeden wpis, sprawdź historię zmian.',
    hints: ['Udostępnij → adres → Edytujący.', 'Chroń formuły ostrzeżeniem.', 'Historia zmian pokaże, kto co dopisał.']
  },
  discovery: { text: 'Arkusz może wysłać Ci powiadomienie, gdy ktoś coś zmieni: {{Narzędzia}} → {{Ustawienia powiadomień}} → {{Edytuj powiadomienia}} → wybierz, kiedy i jak. Włącz na lidze, żeby wiedzieć, gdy kumpel dopisze wynik.' },
  journalPrompt: 'Co dodałeś w części 2 i co powiedział rodzic, gdy zobaczył plik?',
  parent: 'Pokaż rodzicowi gotowy plik, historię zmian i wersję na telefonie. Poproś o jedno zdanie, co by dodał. To zadanie na następny tydzień.',
  forParent: {
    teaches: 'Kopia pliku, formatowanie warunkowe jako komunikat, ochrona zakresów z ostrzeżeniem, porządek w kartach, komentarze z @, udostępnianie i historia zmian, aplikacja na telefon, eksport do PDF i Excel, dostęp „ograniczony” a „każda osoba mająca link”.',
    ask: 'Zmień coś w jego pliku i poproś, żeby znalazł tę zmianę w historii i ją cofnął. Zapytaj, dlaczego link „dla każdej osoby” to zły pomysł.'
  }
});
