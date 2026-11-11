/* Misje 6-8: kilka wersji, łapanie błędów, sprawy domowe. Każda mieści się w 20 minutach, reszta w `bonus`. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 'kilka-wersji',
  updated: '2026-11-11',
  title: 'Kilka wersji i wybór',
  subtitle: 'Nie bierz pierwszej. Poproś o trzy i wybierz.',
  technique: 'Trzy wersje',
  minutes: 20,
  why: [
    'AI nie ma jednej odpowiedzi. Ma ich setki i pokazuje pierwszą, która przyszła. Gdy poprosisz o **3 wersje**, dostajesz wybór, a wybór to Ty decydujesz, nie maszyna.',
    'Do tego cztery ruchy: **połącz** najlepsze kawałki, **oceń moje** według kryteriów, **jeszcze raz** jednym kliknięciem i **rozgałęź**, gdy chcesz sprawdzić dwie drogi naraz i żadnej nie zgubić. Działa na wiadomości, pomysły na prezent, nazwy, opisy, wszystko, co ma więcej niż jedną dobrą odpowiedź.'
  ],
  realWorld: 'Graficy, którzy robią plakaty filmowe i okładki gier, pokazują klientowi kilka wersji, nigdy jedną. Klient wybiera albo mówi: napis z pierwszej, kolory z trzeciej. To jest Twoje „połącz najlepsze kawałki”.',
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
    { text: 'Jeszcze raz, jednym kliknięciem. Pod odpowiedzią AI jest okrągła strzałka (spróbuj ponownie). Kliknij ją: AI napisze nową wersję tej samej odpowiedzi. Strzałkami przy odpowiedzi przełączasz się między wersjami i wybierasz lepszą.', tip: 'Strzałka nie kosztuje ani jednego słowa pisania. Używaj jej zawsze, gdy odpowiedź jest prawie dobra.' },
    { text: 'Napisz własną wersję zaproszenia, choćby dwa zdania, i daj AI do oceny według kryteriów.', prompt: 'Oceń moją wersję w skali od 1 do 5 za: jasność, humor i czy kumple zrozumieją, kiedy i gdzie. Potem popraw tylko to, co trzeba, nie zmieniaj mojego stylu: ', tip: 'Wklej ten prompt, a za dwukropkiem dopisz swoje zaproszenie. Z ocenami widać, co poprawić. Możesz się z oceną nie zgodzić.' },
    { text: 'Pomysły i dwie drogi naraz. Poproś o pomysły na prezent. Potem pod odpowiedzią kliknij trzy kropki i wybierz **Rozgałęź w nowym czacie**. Otworzy się kopia rozmowy. W kopii dopytujesz o pomysł 1, w starym czacie o pomysł 2. Żaden się nie miesza.', prompt: 'Mój kumpel ma 10 lat i kocha serial Mandalorian. Podaj 5 pomysłów na prezent do 50 zł, w tym 2 do zrobienia samemu albo wydrukowania w 3D. Każdy w jednym zdaniu.', tip: 'Rozgałęzianie działa w ChatGPT w przeglądarce. Nie widzisz tej opcji? Otwórz nowy czat i wklej tam listę pomysłów.' }
  ],
  check: [
    'Miałeś do wyboru przynajmniej 3 wersje i wybrałeś świadomie, nie pierwszą z góry.',
    'Połączyłeś kawałki z różnych wersji w jedną.',
    'Użyłeś strzałki „jeszcze raz” i wiesz, jak wrócić do poprzedniej wersji.',
    'Dostałeś ocenę swojej wersji i sam zdecydowałeś, które poprawki przyjąć.'
  ],
  followups: [
    'Daj 3 wersje: krótką, śmieszną i poważną.',
    'Weź początek z 2 i koniec z 1.',
    'Jeszcze 3, ale zupełnie inne.',
    'Oceń moją wersję od 1 do 5 za jasność i humor. Popraw tylko to, co trzeba.',
    'Która wersja jest najlepsza dla 10-latka i dlaczego? Jedno zdanie.'
  ],
  solo: {
    text: 'Wymyśl z AI nazwę i krótki opis dla rzeczy, którą wydrukujesz albo zbudujesz. Poproś o 5 nazw, wybierz 2, poproś o 3 opisy do każdej, połącz w jeden.',
    hints: ['Karta startowa: co to za rzecz, dla kogo, jaki klimat.', '`Daj 5 nazw, każda maksymalnie 2 słowa.`', '`Oceń moją nazwę` działa też tutaj.']
  },
  bonus: [
    { title: 'Wiadomość do nauczyciela', text: 'Do nauczyciela piszesz inaczej niż do kumpla: grzecznie, krótko i z konkretem. Poproś o dwie wersje i wybierz.', prompt: 'Pomóż mi napisać krótką wiadomość do nauczyciela przez dziennik elektroniczny. Chcę zapytać ... . Daj 2 wersje: bardzo krótką i trochę dłuższą. Grzecznie, ale bez przesady.', tip: 'Przeczytaj z rodzicem przed wysłaniem i zmień jedno zdanie na swoje. Nauczyciel powinien usłyszeć Ciebie, nie bota. Nazwiska nauczyciela nie wpisuj, wystarczy „Pani” albo „Pan”.' },
    { title: '20 pomysłów, wybierz 3', text: 'Najlepsze pomysły rzadko są w pierwszej piątce. Poproś o dużo, także o te zwariowane, a potem bądź sitem: skreśl wszystko oprócz trzech.', prompt: 'Daj 20 pomysłów na nazwę dla naszej paczki na wypad do lasu. Im dziwniejsze, tym lepiej. Krótko, w jednej liście.', tip: 'Potem napisz AI, które 3 zostawiasz i dlaczego, i poproś o 3 nowe w ich stylu.' }
  ],
  discovery: 'W jakich 5 sytuacjach z życia 10-latka przydaje się prośba o 3 wersje? Podaj przykłady, o których pewnie nie pomyślałem.',
  journalPrompt: 'Którą wersję wybrałeś i dlaczego nie pierwszą?',
  forParent: {
    teaches: 'Proszenie o kilka wersji zamiast brania pierwszej, łączenie fragmentów, ocena własnej wersji według kryteriów, strzałka „spróbuj ponownie” i przełączanie wersji, rozgałęzianie czatu, żeby sprawdzić dwie drogi naraz.',
    ask: 'Zapytaj, którą wersję wybrał i dlaczego. Sprawdź, czy przyjął wszystkie poprawki AI, czy niektóre odrzucił. Poproś, żeby pokazał rozgałęziony czat.'
  }
},
{
  id: 'zlap-blad',
  updated: '2026-11-11',
  title: 'Złap AI na błędzie',
  subtitle: 'Kiedy sprawdzać, jak to zrobić w minutę i czy to zrobiło AI',
  technique: 'Sprawdzanie',
  minutes: 20,
  why: [
    'AI brzmi pewnie nawet wtedy, gdy zgaduje. Najczęściej myli się w **liczbach i datach**, w **nazwiskach i nazwach**, w **rzeczach bardzo nowych** i w **rzeczach bardzo szczegółowych**. Do tego lubi się zgadzać: gdy w pytaniu przemycisz bzdurę, czasem ją **przytaknie**, zamiast poprawić.',
    'Nie musisz sprawdzać wszystkiego. Zasada jest krótka: **pieniądze, zdrowie, bezpieczeństwo, szkoła: sprawdź w drugim miejscu**. A filmy w internecie? AI umie dziś zrobić film, który wygląda jak prawdziwy. Trzy szybkie sprawdzenia chronią przed nabraniem się.'
  ],
  realWorld: 'W redakcjach pracują weryfikatorzy faktów: sprawdzają liczby, daty i cytaty, zanim tekst trafi do ludzi. Historyk robi to samo ze starymi dokumentami z wojny: nie wierzy jednemu źródłu, nawet bardzo pewnemu.',
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
    { text: 'AI przytakuje. W nowym czacie zadaj pytanie z przemyconą bzdurą. Sherman miał 5 osób załogi, a pytanie udaje, że 3. Patrz, czy AI Cię poprawi, czy pójdzie za Tobą.', prompt: 'Dlaczego czołg Sherman miał tylko 3 osoby załogi? Odpowiedz krótko.', tip: 'Poprawiło? Dobrze. Przytaknęło? Złapałeś je. Wniosek w obu przypadkach: nie podsuwaj odpowiedzi w pytaniu. Pytaj `Ile osób miała załoga?`, a nie `Prawda, że 3?`. I jeszcze jedno: `Jesteś pewien?` nic nie sprawdza, bo AI czasem zmienia zdanie tylko dlatego, że naciskasz.' },
    { text: 'Film zrobiony przez AI? Zanim uwierzysz w niezwykły film z internetu, zrób trzy sprawdzenia. **1. Szczegóły:** ręce, napisy, twarze w tle i rzeczy, które dziwnie się ruszają albo znikają. **2. Kto to pokazuje:** znana redakcja czy nieznane konto? **3. Czy piszą o tym inni:** jeśli coś wielkiego naprawdę się stało, piszą o tym poważne strony z wiadomościami.', tip: 'Poproś rodzica, żeby pokazał Ci jeden film, o którym wiadomo, że zrobiło go AI, i znajdźcie w nim jeden znak. Czasem w rogu jest też znak wodny z nazwą programu. Brak znaku niczego nie dowodzi.' }
  ],
  check: [
    'Sprawdziłeś jedną liczbę w drugim miejscu i wiesz, czy się zgadzała.',
    'Umiesz wymienić 4 sytuacje, w których zawsze sprawdzasz: pieniądze, zdrowie, bezpieczeństwo, szkoła.',
    'Wiesz, czemu nie podsuwać odpowiedzi w pytaniu i że `Jesteś pewien?` nic nie sprawdza.',
    'Znasz trzy sprawdzenia filmu: szczegóły, kto pokazuje, czy piszą o tym inni.'
  ],
  followups: [
    'Które z tych informacji są pewne, a które przybliżone? Oznacz.',
    'Skąd to wiesz?',
    'Wikipedia podaje inną liczbę. Skąd różnica?',
    'W jakich tematach mylisz się najczęściej? 5 punktów, szczerze.',
    'Co powinienem sprawdzić w innym miejscu, zanim to komuś powtórzę?'
  ],
  solo: {
    text: 'Poproś AI o 5 faktów o czymś, co dobrze znasz: Twoja gra, Twoja drukarka, Twoja ulubiona postać. Znajdź błąd albo nieścisłość. Znasz to lepiej niż AI, więc masz przewagę.',
    hints: ['Im bardziej szczegółowe pytanie, tym większa szansa na błąd: daty, liczby, nazwy odcinków, statystyki.', 'Znalazłeś błąd? Napisz o nim do AI i patrz, czy przyzna się bez kręcenia.']
  },
  bonus: [
    { title: 'Wymyślone źródła', text: 'AI potrafi wymyślić tytuł książki, nazwisko autora albo link, które brzmią całkiem prawdziwie, a nie istnieją. Poproś o książki, a potem wpisz każdy tytuł w wyszukiwarkę.', prompt: 'Podaj 3 książki dla dzieci o łamaniu Enigmy, z autorami i rokiem wydania.', tip: 'Wszystkie istnieją? Brawo dla AI. Któraś nie? Złapałeś zmyślone źródło, napisz o tym AI.' },
    { title: 'Źródło mówi co innego', text: 'Gdy AI szuka w internecie, podaje źródła. Czasem źródło mówi coś innego niż odpowiedź. Kliknij źródło i znajdź na stronie to samo zdanie albo liczbę: [[Ctrl]] + [[F]] szuka słowa na stronie.', prompt: 'Poszukaj w internecie, ile ważył czołg Sherman, i podaj źródło.' },
    { title: 'Hasło rodzinne', text: 'AI umie podrobić czyjś głos z krótkiego nagrania. Oszuści dzwonią i udają kogoś z rodziny: „To ja, miałem wypadek, potrzebuję pieniędzy”. Ustalcie w domu hasło rodzinne: słowo, które zna tylko rodzina. Kto go nie zna, ten nie jest z rodziny, nawet jeśli brzmi znajomo.', tip: 'Zróbcie to razem z rodzicem. Hasła nie zapisuj w żadnym czacie ani w Dzienniku.' },
    { title: 'Dwa AI się kłócą', text: 'Zadaj to samo pytanie z liczbą w ChatGPT i w Gemini, z rodzicem, na jego koncie. Różne odpowiedzi to sygnał, że trzeba sprawdzić w drugim miejscu. Takie same odpowiedzi to jeszcze nie dowód, ale dobry znak.', prompt: 'Ile czołgów Sherman wyprodukowano? Podaj jedną liczbę i powiedz, jak bardzo jesteś pewien.' }
  ],
  discovery: 'Jak mogę w 1 minutę sprawdzić, czy to, co mówisz, jest prawdą? Podaj 3 sposoby dla 10-latka.',
  journalPrompt: 'Jaką rzecz sprawdziłeś i co z tego wyszło? Czy AI dało się złapać na przytakiwaniu?',
  parent: 'Pokaż rodzicowi, co AI odpowiedziało na pytanie z przemyconą bzdurą. Poproś o jeden film zrobiony przez AI do wspólnego sprawdzenia i ustalcie hasło rodzinne.',
  forParent: {
    teaches: 'Gdzie AI myli się najczęściej, zasada „pieniądze, zdrowie, bezpieczeństwo, szkoła: sprawdź”, sprawdzanie w Wikipedii, przytakiwanie AI (pytania z podsuniętą odpowiedzią, pułapka „jesteś pewien?”), trzy sprawdzenia filmu, który mogło zrobić AI.',
    ask: 'Pokaż mu jeden film zrobiony przez AI (wiele jest opisanych w serwisach z wiadomościami) i poproś, żeby znalazł znak. Ustalcie hasło rodzinne na wypadek telefonu z podrobionym głosem.'
  }
},
{
  id: 'sprawy-domowe',
  updated: '2026-11-11',
  title: 'Sprawy domowe',
  subtitle: 'Lodówka, zepsuta rzecz i przepis na ognisko',
  technique: 'Opisz sytuację',
  minutes: 20,
  why: [
    'AI najbardziej przydaje się w małych, codziennych sprawach, o których nikt nie robi filmów. Co zjeść z tego, co jest w lodówce. Dlaczego wydruk się odkleił. Ile kiełbasek kupić na ognisko dla 7 osób.',
    'Klucz to **dokładny opis sytuacji** i **ograniczenia**: co masz, czego nie masz, czego nie możesz. Dwa skróty oszczędzają pisanie: **zdjęcie zamiast opisu** (rzeczy tak, ludzie nie) i prośba, żeby AI **pytało jak mechanik**, po jednym pytaniu, aż znajdzie przyczynę.'
  ],
  realWorld: 'Kucharz w restauracji układa danie dnia z tego, co dostawca przywiózł rano. Złota rączka zaczyna od dokładnego opisu: co się zepsuło, kiedy, co już próbowano. Dokładny opis oszczędza im godziny.',
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
    { text: 'Zadanie 1: lodówka, pokazana zamiast opisana. Z rodzicem otwórz ChatGPT na jego telefonie, w Twoim projekcie. Kliknij **+**, zrób zdjęcie wnętrza lodówki i dopisz prompt.', prompt: 'Mam 10 lat i chcę zrobić sobie coś do jedzenia pod okiem rodzica. Na zdjęciu jest nasza lodówka. Mam 15 minut i nie mogę użyć piekarnika. Zaproponuj 3 rzeczy, każda w 2 zdaniach, od najprostszej.', tip: 'Zdjęcia rzeczy: tak. Zdjęcia ludzi, dokumentów i kartek z adresem: nie. Zanim wyślesz, rzuć okiem, co jeszcze jest w kadrze. Nie ma telefonu pod ręką? Wypisz 4 do 6 rzeczy z lodówki, działa tak samo.' },
    { text: 'Wybierz jedną propozycję i poproś o przepis krok po kroku, po jednym kroku naraz.', prompt: 'Wybieram numer 1. Prowadź mnie krok po kroku, po jednym kroku. Czekaj, aż napiszę "ok".' },
    { text: 'Zadanie 2: coś nie działa. Może to być nieudany wydruk 3D (odkleił się, ma nitki jak pajęczyna), zacinający się zamek, skrzypiące drzwi. Zrób zdjęcie albo opisz w jednym zdaniu i niech AI szuka przyczyny jak mechanik.', prompt: 'Mam 10 lat. Problem: ... (co się dzieje). Zanim cokolwiek doradzisz, zadawaj mi po jednym pytaniu, jak mechanik, który szuka przyczyny. Gdy ją znajdziesz, powiedz, co mogę zrobić sam, a przy czym zawołać dorosłego.', tip: 'Ostre, gorące i elektryczne rzeczy to zawsze dorosły. Drukarka 3D ma gorącą dyszę i stół, więc przy niej też.' },
    { text: 'Zadanie 3: przepis na ognisko dla więcej osób. Niech AI przeliczy ilości i zrobi listę zakupów.', prompt: 'Przepis na kiełbaski z warzywami na ognisko jest dla 4 osób. Będzie nas 7, w tym 4 dzieci. Przelicz ilości i zrób listę zakupów pogrupowaną po działach sklepu: pieczywo, mięso, warzywa, napoje, inne. Krótko.', tip: 'Popraw listę pod Wasz dom: `Mamy już chleb i ketchup. Usuń to.` Przeliczanie to matematyka, więc jedną liczbę sprawdź sam. Na przykład: jeśli na 4 osoby było 8 kiełbasek, to na 7 osób powinno być 14.' }
  ],
  check: [
    'Zrobiłeś przynajmniej jedną prawdziwą rzecz w domu: coś zjadłeś, coś naprawiłeś albo lista poszła na zakupy.',
    'Wysłałeś zdjęcie rzeczy i sprawdziłeś, co jeszcze jest w kadrze.',
    'AI szukało przyczyny pytaniami, zanim cokolwiek doradziło.',
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
    text: 'Znajdź w domu jedną prawdziwą sprawę do załatwienia dziś: bałagan, drobna naprawa, coś do zorganizowania. Opisz dokładnie albo pokaż zdjęciem, z ograniczeniami, i zrób pierwszy krok.',
    hints: ['Opis: co się dzieje, co masz, czego nie możesz, ile masz czasu.', '`Zadawaj mi po jednym pytaniu, jak mechanik.`', 'Zapytaj, przy czym poprosić dorosłego. Ostre, gorące i elektryczne rzeczy to zawsze dorosły.']
  },
  bonus: [
    { title: 'Instrukcja po angielsku', text: 'Nowa zabawka, część do drukarki, gra planszowa, a instrukcja tylko po angielsku? AI zamieni ją na proste polskie kroki. Wklej tekst za dwukropkiem albo zrób zdjęcie kartki.', prompt: 'To jest instrukcja po angielsku. Zamień ją na proste polskie kroki, ponumerowane, jak dla 10-latka. Trudne słowa wyjaśnij w nawiasie: ', tip: 'Gdy coś brzmi groźnie (prąd, bateria, ogrzewanie), przeczytaj ten krok z rodzicem w oryginale.' }
  ],
  discovery: 'W jakich 5 domowych sprawach jeszcze możesz mi pomóc? Coś, o czym 10-latek pewnie nie pomyślał.',
  journalPrompt: 'Jaką prawdziwą rzecz załatwiłeś dziś z pomocą AI?',
  parent: 'Pokaż rodzicowi, co zrobiłeś, i listę zakupów. Ostre, gorące i elektryczne rzeczy zawsze z dorosłym, to nie jest zasada AI, to zasada domu.',
  forParent: {
    teaches: 'Dokładny opis sytuacji z ograniczeniami (co mam, czego nie mogę, ile czasu), zdjęcie rzeczy zamiast opisu (bez ludzi i dokumentów w kadrze), AI szukające przyczyny pytaniami jak mechanik, przeliczanie przepisu, pytanie, kiedy zawołać dorosłego.',
    ask: 'Zapytaj, co zrobił w domu z pomocą AI i przy czym poprosił o pomoc. Zdjęcie lodówki róbcie Twoim telefonem, w jego projekcie. Na darmowym koncie liczba zdjęć dziennie jest ograniczona.'
  }
});
