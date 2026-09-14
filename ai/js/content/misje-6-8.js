/* Misje 6-8: kilka wersji, łapanie błędów, sprawy domowe. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 6,
  title: 'Kilka wersji i wybór',
  subtitle: 'Nie bierz pierwszej. Poproś o trzy i wybierz.',
  technique: 'Trzy wersje',
  minutes: 25,
  why: [
    'AI nie ma jednej odpowiedzi. Ma ich setki i pokazuje pierwszą, która przyszła. Gdy poprosisz o **3 wersje**, dostajesz wybór, a wybór to Ty decydujesz, nie maszyna.',
    'Do tego dwa ruchy: **połącz** najlepsze kawałki z różnych wersji i **oceń moje**, czyli daj AI swoją wersję do poprawki. Działa na wiadomości, pomysły na prezent, nazwy, opisy, wszystko, co ma więcej niż jedną dobrą odpowiedź.'
  ],
  example: {
    intro: 'Zaproszenie dla kumpli na wypad do lasu.',
    turns: [
      { who: 'ty', text: 'Napisz zaproszenie dla 3 kumpli na wypad do lasu w sobotę, z ogniskiem. Daj 3 wersje: 1) krótka, 2) śmieszna, 3) taka, którą pokażę ich rodzicom. Każda maksymalnie 3 zdania.' },
      { who: 'ai', text: '1) Sobota, las, ognisko. Zbiórka o 10 u mnie. Wchodzisz? 2) Uwaga, misja specjalna: sobota, las, ognisko, kiełbaski w roli głównej. Wymagane: dobry humor i suche skarpety. Odmowa nie jest opcją. 3) Cześć! W sobotę jedziemy z moimi rodzicami na cały dzień do lasu, będzie ognisko. Zbiórka o 10:00, powrót około 17:00, chętnie zabierzemy Twojego syna.' },
      { who: 'ty', text: 'Weź początek z wersji 2 i koniec z wersji 1.' },
      { who: 'ai', text: 'Uwaga, misja specjalna: sobota, las, ognisko, kiełbaski w roli głównej. Zbiórka o 10 u mnie. Wchodzisz?' }
    ],
    note: 'Trzecia wersja przypomina o czymś ważnym: inna wersja dla kumpli, inna dla dorosłych. AI robi obie w sekundę, a Ty wybierasz.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o 3 wersje zaproszenia.', prompt: 'Napisz zaproszenie dla 3 kumpli na wypad do lasu w sobotę, z ogniskiem. Daj 3 wersje: 1) krótka, 2) śmieszna, 3) taka, którą pokażę ich rodzicom. Każda maksymalnie 3 zdania.' },
    { text: 'Połącz najlepsze kawałki. Napisz, który początek i który koniec chcesz, np. `Weź początek z 2 i koniec z 1.`' },
    { text: 'Napisz własną wersję zaproszenia, choćby dwa zdania, i daj AI do oceny.', prompt: 'Oceń moją wersję i popraw tylko to, co trzeba, nie zmieniaj mojego stylu: ', tip: 'Wklej ten prompt, a za dwukropkiem dopisz swoje zaproszenie. Zobacz, co AI zmieniło i czy się z tym zgadzasz. Możesz się nie zgodzić.' },
    { text: 'Teraz pomysły. Kumpel ma urodziny i kocha Mandalorianina. Poproś o wersje.', prompt: 'Mój kumpel ma 10 lat i kocha serial Mandalorian. Podaj 5 pomysłów na prezent do 50 zł, w tym 2 do zrobienia samemu albo wydrukowania w 3D. Każdy w jednym zdaniu.' },
    { text: 'Wybierz jeden pomysł i poproś o 3 wersje jego wykonania: najprostszą, najładniejszą i najbardziej zaskakującą.' }
  ],
  check: [
    'Miałeś do wyboru przynajmniej 3 wersje i wybrałeś świadomie, nie pierwszą z góry.',
    'Połączyłeś kawałki z różnych wersji w jedną.',
    'Dałeś AI swoją wersję do oceny i sam zdecydowałeś, które poprawki przyjąć.'
  ],
  followups: [
    'Daj 3 wersje: krótką, śmieszną i poważną.',
    'Weź początek z 2 i koniec z 1.',
    'Jeszcze 3, ale zupełnie inne.',
    'Oceń moją wersję, popraw tylko to, co trzeba.',
    'Która wersja jest najlepsza dla 10-latka i dlaczego? Jedno zdanie.'
  ],
  solo: {
    text: 'Wymyśl z AI nazwę i krótki opis dla rzeczy, którą wydrukujesz albo zbudujesz. Poproś o 5 nazw, wybierz 2, poproś o 3 opisy do każdej, połącz w jeden.',
    hints: ['Karta startowa: co to za rzecz, dla kogo, jaki klimat.', '`Daj 5 nazw, każda maksymalnie 2 słowa.`', '`Oceń moją nazwę` działa też tutaj.']
  },
  discovery: 'W jakich 5 sytuacjach z życia 10-latka przydaje się prośba o 3 wersje? Podaj przykłady, o których pewnie nie pomyślałem.',
  journalPrompt: 'Którą wersję wybrałeś i dlaczego nie pierwszą?',
  forParent: {
    teaches: 'Proszenie o kilka wersji zamiast brania pierwszej, łączenie fragmentów, dawanie własnej wersji do oceny. Wybór zostaje po stronie dziecka.',
    ask: 'Zapytaj, którą wersję wybrał i dlaczego. Sprawdź, czy przyjął wszystkie poprawki AI, czy niektóre odrzucił.'
  }
},
{
  id: 7,
  title: 'Złap AI na błędzie',
  subtitle: 'Kiedy sprawdzać i jak to zrobić w minutę',
  technique: 'Sprawdzanie',
  minutes: 20,
  why: [
    'AI brzmi pewnie nawet wtedy, gdy zgaduje. Najczęściej myli się w **liczbach i datach**, w **nazwiskach i nazwach**, w **rzeczach bardzo nowych** i w **rzeczach bardzo szczegółowych**. Nie dlatego, że kłamie. Zgaduje z pamięci, jak człowiek, który czytał dużo, ale nie wszystko zapamiętał.',
    'Nie musisz sprawdzać wszystkiego. Zasada jest krótka: **pieniądze, zdrowie, bezpieczeństwo, szkoła: sprawdź w drugim miejscu**. Reszta może zostać niesprawdzona, to tylko rozmowa.'
  ],
  example: {
    intro: 'Fakty o czołgu Sherman. Patrz, co się dzieje, gdy zapytasz o pewność.',
    turns: [
      { who: 'ty', text: 'Podaj 5 faktów o czołgu Sherman z II wojny światowej, z liczbami: rok, masa, prędkość, ile wyprodukowano, załoga.' },
      { who: 'ai', text: '1. Wprowadzony w 1942 roku. 2. Masa około 30 ton. 3. Prędkość do około 40 km/h. 4. Wyprodukowano około 50 tysięcy sztuk. 5. Załoga: 5 osób.' },
      { who: 'ty', text: 'Które z tych liczb są pewne, a które przybliżone albo zależą od wersji? Oznacz.' },
      { who: 'ai', text: 'Pewne: rok wprowadzenia i załoga 5 osób. Przybliżone: masa i prędkość, bo Sherman miał wiele wersji o różnych parametrach. Liczba wyprodukowanych to około 49-50 tysięcy, w źródłach są różne liczby.' }
    ],
    note: 'AI samo powiedziało, gdzie zgaduje. To nie znaczy, że kłamało w pierwszej odpowiedzi. Po prostu podało średnią. Teraz wiesz, którą liczbę sprawdzić.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o fakty z liczbami.', prompt: 'Podaj 5 faktów o czołgu Sherman z II wojny światowej, z liczbami: rok, masa, prędkość, ile wyprodukowano, załoga. Krótko.' },
    { text: 'Zapytaj o pewność.', prompt: 'Które z tych liczb są pewne, a które przybliżone albo zależą od wersji? Oznacz każdą.' },
    { text: 'Wybierz jedną liczbę i sprawdź ją w Wikipedii. Wpisz w wyszukiwarkę `M4 Sherman wikipedia`, znajdź tabelkę po prawej i porównaj.', tip: 'Różni się? Wróć do czatu i napisz: `Wikipedia podaje X. Skąd różnica?` Zobacz, co odpowie.' },
    { text: 'Uważaj na jedną pułapkę. Napisz do AI `Jesteś pewien?` przy fakcie, który sprawdziłeś i jest poprawny. Czasem AI zmieni zdanie tylko dlatego, że naciskasz, mimo że miało rację.', tip: 'Wniosek: naciskanie na AI nic nie sprawdza. Sprawdza tylko drugie miejsce: Wikipedia, książka, rodzic, nauczyciel.' },
    { text: 'Na koniec zadaj AI pytanie o nie samo.', prompt: 'W jakich tematach mylisz się najczęściej? Odpowiedz szczerze, w 5 punktach, krótko.' }
  ],
  check: [
    'Sprawdziłeś jedną liczbę w drugim miejscu i wiesz, czy się zgadzała.',
    'Umiesz wymienić 4 sytuacje, w których zawsze sprawdzasz: pieniądze, zdrowie, bezpieczeństwo, szkoła.',
    'Wiesz, że `Jesteś pewien?` nic nie sprawdza.'
  ],
  followups: [
    'Które z tych informacji są pewne, a które przybliżone? Oznacz.',
    'Skąd to wiesz?',
    'Wikipedia podaje inną liczbę. Skąd różnica?',
    'Co powinienem sprawdzić w innym miejscu, zanim to komuś powtórzę?'
  ],
  solo: {
    text: 'Poproś AI o 5 faktów o czymś, co dobrze znasz: Twoja gra, Twoja drukarka, Twoja ulubiona postać. Znajdź błąd albo nieścisłość. Znasz to lepiej niż AI, więc masz przewagę.',
    hints: ['Im bardziej szczegółowe pytanie, tym większa szansa na błąd: daty, liczby, nazwy odcinków, statystyki.', 'Znalazłeś błąd? Napisz o nim do AI i patrz, czy przyzna się bez kręcenia.']
  },
  discovery: 'Jak mogę w 1 minutę sprawdzić, czy to, co mówisz, jest prawdą? Podaj 3 sposoby dla 10-latka.',
  journalPrompt: 'Jaką rzecz sprawdziłeś i co z tego wyszło?',
  forParent: {
    teaches: 'Gdzie AI myli się najczęściej, zasada "pieniądze, zdrowie, bezpieczeństwo, szkoła: sprawdź", sprawdzanie w Wikipedii, pułapka "jesteś pewien?".',
    ask: 'Zapytaj, którą liczbę sprawdził i czy się zgadzała. Poproś o cztery sytuacje, w których zawsze trzeba sprawdzić.'
  }
},
{
  id: 8,
  title: 'Sprawy domowe',
  subtitle: 'Lodówka, zepsuta rzecz i lista zakupów',
  technique: 'Opisz sytuację',
  minutes: 30,
  why: [
    'AI najbardziej przydaje się w małych, codziennych sprawach, o których nikt nie robi filmów. Co zjeść z tego, co jest w lodówce. Jak naprawić zamek w plecaku. Co kupić na ognisko dla 6 osób.',
    'Klucz to **dokładny opis sytuacji** i **ograniczenia**: co masz, czego nie masz, czego nie możesz. `Mam tylko...`, `Nie mogę użyć...`, `Mam 15 minut`. Im dokładniej opiszesz, tym mniej razy będziesz poprawiać.'
  ],
  example: {
    intro: 'Zamek błyskawiczny w plecaku się zacina. Dwa opisy tej samej sprawy.',
    turns: [
      { who: 'ty', text: 'zamek w plecaku nie działa' },
      { who: 'ai', text: 'Może być kilka przyczyn: zamek się zaciął, wysunął się z prowadnicy, uszkodzone ząbki, zepsuty suwak... (długa lista z 8 przypadkami)' },
      { who: 'ty', text: 'Zamek w plecaku zacina się w połowie, przy szwie. Ząbki wyglądają całe. Mam 10 lat, mam w domu ołówek, mydło i szczoteczkę. Co zrobić krok po kroku?' },
      { who: 'ai', text: '1. Szczoteczką wyczyść ząbki w miejscu, gdzie się zacina, pewnie siedzi tam nitka albo piasek. 2. Potrzyj ząbki grafitem z ołówka, to smar. 3. Przesuń suwak kilka razy powoli. 4. Jeśli nadal się zacina, sprawdź, czy nitka ze szwu nie wchodzi w zamek, i poproś dorosłego o jej odcięcie.' }
    ],
    note: 'Drugi opis ma: co dokładnie się dzieje, co masz pod ręką, czego chcesz. Odpowiedź od razu jest do zrobienia.'
  },
  steps: [
    { text: 'Zadanie 1: lodówka. Sprawdź, co jest w Waszej lodówce, wpisz 4 do 6 rzeczy i wyślij.', prompt: 'Mam 10 lat i chcę zrobić sobie coś do jedzenia pod okiem rodzica. W lodówce mam: ... . Mam 15 minut i nie mogę użyć piekarnika. Zaproponuj 3 rzeczy do zrobienia, każda w 2 zdaniach, od najprostszej.', tip: 'Wpisz prawdziwe rzeczy z lodówki. Nudne składniki dają najciekawsze odpowiedzi.' },
    { text: 'Wybierz jedną propozycję i poproś o przepis krok po kroku, po jednym kroku naraz.', prompt: 'Wybieram numer 1. Prowadź mnie krok po kroku, po jednym kroku. Czekaj, aż napiszę "ok".' },
    { text: 'Zadanie 2: zepsuta rzecz. Znajdź w domu coś, co nie działa jak trzeba: zamek, zabawka, skrzypiące drzwi, plątające się słuchawki. Opisz dokładnie i zapytaj.', prompt: 'Mam 10 lat. Problem: ... (co dokładnie się dzieje, gdzie, od kiedy). Mam pod ręką: ... . Co mogę zrobić sam krok po kroku, a przy czym poprosić dorosłego?' },
    { text: 'Zadanie 3: lista zakupów na ognisko. Poproś o listę pogrupowaną tak, jak chodzi się po sklepie.', prompt: 'Zrób listę zakupów na ognisko dla 6 osób, w tym 4 dzieci. Pogrupuj po działach sklepu: pieczywo, nabiał, warzywa, napoje, inne. Podaj ilości. Krótko.' },
    { text: 'Popraw listę pod Wasz dom. Napisz, czego już macie, i poproś o skrócenie: `Mamy już chleb i ketchup. Usuń to i policz, ile to mniej więcej będzie kosztować.`' }
  ],
  check: [
    'Zrobiłeś przynajmniej jedną prawdziwą rzecz w domu: coś zjadłeś, coś naprawiłeś albo lista poszła na zakupy.',
    'Twoje opisy miały ograniczenia: co masz, czego nie możesz, ile czasu.',
    'Wiesz, przy czym poprosić dorosłego, a co zrobić samemu.'
  ],
  followups: [
    'Prowadź mnie krok po kroku, po jednym kroku. Czekaj na moje "ok".',
    'Mam tylko ... . Popraw.',
    'Nie mogę użyć ... . Co zamiast tego?',
    'Przy którym kroku powinienem poprosić dorosłego?',
    'Zrób z tego listę do odhaczania.'
  ],
  solo: {
    text: 'Znajdź w domu jedną prawdziwą sprawę do załatwienia dziś: bałagan, drobna naprawa, coś do zorganizowania. Opisz dokładnie, z ograniczeniami, i zrób pierwszy krok.',
    hints: ['Opis: co się dzieje, co masz, czego nie możesz, ile masz czasu.', '`Krok po kroku, po jednym kroku.`', 'Zapytaj, przy czym poprosić dorosłego. Ostre, gorące i elektryczne rzeczy to zawsze dorosły.']
  },
  discovery: 'W jakich 5 domowych sprawach jeszcze możesz mi pomóc? Coś, o czym 10-latek pewnie nie pomyślał.',
  journalPrompt: 'Jaką prawdziwą rzecz załatwiłeś dziś z pomocą AI?',
  parent: 'Pokaż rodzicowi, co zrobiłeś, i listę zakupów. Ostre, gorące i elektryczne rzeczy zawsze z dorosłym, to nie jest zasada AI, to zasada domu.',
  forParent: {
    teaches: 'Dokładny opis sytuacji z ograniczeniami (co mam, czego nie mogę, ile czasu), prowadzenie krok po kroku, pytanie, kiedy zawołać dorosłego.',
    ask: 'Zapytaj, co zrobił w domu z pomocą AI i przy czym poprosił o pomoc. Pochwal dokładny opis problemu, to najcenniejsza umiejętność z tej misji.'
  }
});
