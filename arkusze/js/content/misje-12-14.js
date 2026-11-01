/* Misje 12-14: tabela przestawna, projekt w dwóch częściach. */
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
  id: 'twoj-arkusz-1',
  title: 'Twój arkusz, część 1',
  subtitle: 'Wybierasz temat i budujesz coś, czego naprawdę użyjesz',
  technique: 'Wszystko razem',
  minutes: 30,
  why: [
    'W tej misji nie ma gotowych tabelek do wklejenia ani formuł do skopiowania. Masz Niezbędnik z trzynastu misji i jedną prawdziwą sprawę. Sam decydujesz, jakich narzędzi użyć.',
    'Dziś: wersja, która działa. Nie musi być ładna ani skończona. Ma liczyć coś, co Cię obchodzi. Dopracowanie i pokazanie światu jest w części 2.'
  ],
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
    { text: 'Nazwana wersja: w historii zmian trzy kropki przy wersji → nadaj jej nazwę, np. „po misji 14”. Łatwiej wrócić.' },
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
