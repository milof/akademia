/* Misje 9-13: odkrywanie, zwykły wtorek (zawody), solo, budowanie w dwóch sesjach.
   Każda mieści się w 20 minutach, reszta w `bonus`. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 'jak-jeszcze',
  updated: '2026-11-11',
  title: 'Jak jeszcze możesz mi pomóc?',
  subtitle: 'Odkrywanie nowych zastosowań i drugie AI',
  technique: 'Odkrywanie',
  minutes: 20,
  why: [
    'Większość ludzi używa AI do trzech rzeczy i nigdy nie sprawdza czwartej. Ty masz przewagę: umiesz zapytać AI o nie samo. `Jak jeszcze możesz mi pomóc?` to pytanie, które otwiera drzwi, o których nie wiedziałeś.',
    'Druga rzecz: ChatGPT nie jest jedynym AI. Gemini odpowiada inaczej na to samo pytanie i ma własny tryb nauki. Kto zna kilka narzędzi, wybiera lepsze do sprawy, zamiast brać to, co pod ręką.'
  ],
  realWorld: 'W firmach są ludzie, którzy testują nowe narzędzia: sprawdzają kilka programów do tej samej rzeczy i wybierają najlepszy dla zespołu. Kto zna trzy AI zamiast jednego, wie, po które sięgnąć.',
  example: {
    intro: 'Pytanie o rzeczy, o których nie wiesz, że nie wiesz.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Lubię druk 3D, II wojnę światową, survival i granie z kumplami. Podaj 10 rzeczy, w których możesz mi pomóc, a o których 10-latek pewnie nie wie. Każda w jednym zdaniu.' },
      { who: 'ai', text: '1. Poprowadzę grę tekstową, w której jesteś pomocnikiem polskich kryptologów w 1932 roku. 2. Wymyślę zagadki survivalowe dla Twoich kumpli. 3. Pomogę zaprojektować w słowach model do druku, zanim otworzysz program. 4. Zrobię quiz z Twojej ulubionej gry. 5. Przetłumaczę instrukcję po angielsku na proste polskie zdania. 6. Będę Twoim trenerem szybszego pisania na klawiaturze przez tydzień... (i tak dalej)' },
      { who: 'ty', text: 'Numer 1. Zaczynamy. Krótkie opisy, po każdym daj mi 3 opcje do wyboru.' }
    ],
    note: 'Gra tekstowa to jeden z najfajniejszych sposobów na czytanie i podejmowanie decyzji. Ty piszesz tylko numer opcji. Idealne, gdy nie lubisz dużo pisać.'
  },
  steps: [
    { text: 'Nowy czat. Zapytaj o rzeczy, o których nie wiesz.', prompt: 'Mam 10 lat. Lubię druk 3D, II wojnę światową, survival i granie z kumplami. Podaj 10 rzeczy, w których możesz mi pomóc, a o których 10-latek pewnie nie wie. Każda w jednym zdaniu.' },
    { text: 'Wybierz jedną i spróbuj od razu. Wystarczy: `Numer 4. Zaczynamy.`' },
    { text: 'Gra tekstowa z historii. Odpowiadasz numerem, a na końcu AI powie, co było prawdą, a co wymyśliło.', prompt: 'Poprowadź grę tekstową: jest 1932 rok, mam 10 lat i pomagam w Biurze Szyfrów w Warszawie, gdzie matematycy próbują złamać Enigmę. Krótkie opisy, maksymalnie 4 zdania. Po każdym daj mi 3 opcje do wyboru z numerami. Prawdziwe fakty mieszaj z przygodą. Gdy napiszę „koniec”, powiedz, co było prawdą, a co wymyśliłeś. Zaczynaj.', tip: 'Wolisz czystą przygodę? Zamień początek na: `jestem rozbitkiem na bezludnej wyspie i mam przeżyć 3 dni`. Gdy zrobi się nudno: `Zaskocz mnie.`' },
    { text: 'Drugie AI, z rodzicem, na jego koncie. Otwórz Gemini i wyślij ten sam prompt, co w kroku 1. Potem w Gemini kliknij **Narzędzia**, wybierz **Nauka ze wskazówkami** i poproś o wyjaśnienie jednej rzeczy z gry. Porównaj z trybem nauki w ChatGPT z misji 3 i zapisz w Dzienniku jedną różnicę.', tip: 'Nie ma lepszego i gorszego. Jedno pisze krócej, drugie daje więcej pomysłów, trzecie ładniej tłumaczy. Zauważ, które lubisz do czego. Claude też jest ciekawy, ale wymaga 18 lat: tylko na koncie rodzica, z nim obok.' }
  ],
  check: [
    'Spróbowałeś przynajmniej jednej rzeczy, o której wcześniej nie wiedziałeś.',
    'Zagrałeś w grę tekstową i wiesz, co w niej było prawdą.',
    'Widziałeś to samo pytanie w dwóch AI i umiesz powiedzieć jedną różnicę.'
  ],
  followups: [
    'Jak jeszcze możesz mi pomóc w tym temacie? 5 pomysłów.',
    'Zaskocz mnie.',
    'Numer 3. Zaczynamy.',
    'Zakończ grę i podsumuj, co zrobiłem dobrze.',
    'Bądź moim trenerem survivalu. Zadaj mi jedno pytanie, oceń odpowiedź, daj następne.'
  ],
  solo: {
    text: 'Raz w tygodniu zadaj to pytanie w nowym temacie: szkoła, kumple, hobby, dom. Zapisuj w Dzienniku każdą rzecz, która zadziałała. Po miesiącu masz własną listę trików, jakiej nie ma nikt inny.',
    hints: ['`Mam 10 lat i ... . Jak możesz mi w tym pomóc? 5 pomysłów, o których nie wiem.`', 'Jeden pomysł od razu wypróbuj. Reszta może poczekać.']
  },
  bonus: [
    { title: 'Trener na 7 dni', text: 'AI może prowadzić Cię przez cały tydzień. Najlepiej w czymś, co Cię spowalnia, na przykład w pisaniu na klawiaturze. Wracaj codziennie do tego samego czatu i nazwij go `Trener pisania`, żeby łatwo go znaleźć.', prompt: 'Bądź moim trenerem pisania na klawiaturze przez 7 dni. Mam 10 lat i piszę wolno. Każdego dnia daj mi jedno ćwiczenie na 5 minut. Zacznij od dnia 1. Jutro napiszę „dzień 2”.' },
    { title: 'Debata z AI', text: 'AI broni zdania przeciwnego niż Twoje. To trening myślenia: szukasz argumentów i słuchasz cudzych. Temat jest prawdziwy, bo od września 2026 w polskich podstawówkach obowiązuje zakaz telefonów.', prompt: 'Zagrajmy w debatę. Temat: czy w szkole powinien być zakaz telefonów. Ja mówię swoje zdanie, a Ty bronisz przeciwnego. Odpowiadaj krótko, maksymalnie 3 zdania, i czekaj na moją odpowiedź. Na koniec powiedz, który mój argument był najlepszy.' },
    { title: 'Rozmowa po angielsku', text: 'AI jest cierpliwym partnerem do rozmowy po angielsku, na Twoim poziomie. Nie śmieje się z błędów i od razu pokazuje, jak powiedzieć lepiej.', prompt: 'Porozmawiajmy po angielsku. Mam 10 lat i znam angielski podstawowo. Pisz bardzo krótkie, łatwe zdania. Zadawaj mi po jednym pytaniu o moje hobby. Gdy zrobię błąd, pokaż poprawne zdanie, a pod spodem krótko po polsku, co poprawiłeś.' }
  ],
  discovery: 'Jakie pytanie powinienem Ci zadać, a jeszcze nigdy nie zadałem? Podaj 3 i wyjaśnij w jednym zdaniu, dlaczego warto.',
  journalPrompt: 'Nowe zastosowania AI, które dziś odkryłeś. Choćby jedno.',
  forParent: {
    teaches: 'Pytanie AI o nieznane zastosowania, gra tekstowa z historii (z rozróżnieniem prawdy i fikcji na końcu), porównanie ChatGPT i Gemini na tym samym prompcie, tryb „Nauka ze wskazówkami” w Gemini.',
    ask: 'Zapytaj, które nowe zastosowanie mu się spodobało i czym różniły się odpowiedzi dwóch AI. Otwórzcie Gemini razem.'
  }
},
{
  id: 'ja-za-15-lat',
  added: '2026-11-08',
  title: 'Ja za 15 lat',
  subtitle: 'Zawody, które łączą Twoje pasje, i umiejętności, które już ćwiczysz',
  technique: 'Zwykły wtorek',
  minutes: 20,
  why: [
    'Dorośli często mówią: „to Ci się przyda w przyszłości”. Dziś nie musisz im wierzyć na słowo. Sprawdzisz sam: zapytasz AI, jakie prace łączą rzeczy, które lubisz, i co ludzie w tych pracach robią naprawdę.',
    'Nowa technika: **zwykły wtorek**. Filmy i reklamy pokazują najfajniejsze pięć minut z czyjejś pracy. Pytanie o zwykły wtorek pokazuje resztę dnia: co jest nudne, co trudne, czego trzeba umieć i w czym pomaga już AI. Działa też przed kupnem psa, zapisaniem się na zajęcia albo wyjazdem na obóz.',
    'Na koniec sprawdzisz to w drugim miejscu. Tym razem drugie miejsce to człowiek: ktoś z rodziny, kto naprawdę chodzi do pracy. Pytania do niego przygotujesz z AI.'
  ],
  realWorld: 'Kto szuka nowej pracy, pyta na rozmowie: „Jak wygląda tu zwykły dzień?”. Doradcy zawodowi w szkołach robią z uczniami dokładnie to ćwiczenie. Ty robisz je kilka lat wcześniej.',
  example: {
    intro: 'Rozmowa o pracy, która łączy drony, mapy i komputer.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Lubię druk 3D, drony i historię II wojny światowej. Podaj 5 zawodów, które łączą te rzeczy. Każdy w jednym zdaniu, bez trudnych słów.' },
      { who: 'ai', text: '1. Projektant części do druku 3D: rysuje na komputerze części, które potem drukuje się w warsztacie albo fabryce. 2. Operator drona do pomiarów: lata nad budowami, polami i lasami i robi z tego mapy. 3. Konserwator w muzeum: odnawia stare przedmioty, czasem dorabia brakujące kawałki w 3D. 4. Konstruktor dronów: projektuje i testuje nowe drony. 5. Twórca filmów historycznych: robi filmy o historii, a ujęcia z góry kręci dronem.' },
      { who: 'ty', text: 'Numer 2. Opisz zwykły wtorek takiej osoby. Co robi rano, co po południu, co jest nudne, a co najfajniejsze. Maksymalnie 8 zdań.' },
      { who: 'ai', text: 'Rano sprawdza pogodę, bo w silnym wietrze i deszczu dron nie poleci. Ładuje baterie i planuje trasę lotu na komputerze. Jedzie na budowę i rozkłada na ziemi znaczniki do pomiarów. Sam lot trwa krócej niż przygotowania. Po południu siedzi przy komputerze: program skleja setki zdjęć w jedną mapę. Potem liczy, ile ziemi wykopano, i wpisuje to do tabeli dla kierownika budowy. Nudne: czekanie na pogodę i długie liczenie. Najfajniejsze: widok z góry, którego nikt inny nie ma.' }
    ],
    note: 'Z ośmiu zdań tylko jedno jest o lataniu. Reszta to plan, komputer i tabela, czyli rzeczy, których uczysz się w Akademii. Właśnie dlatego pytamy o zwykły wtorek, a nie o to, co jest najfajniejsze.'
  },
  steps: [
    { text: 'Nowy czat. Wpisz w miejsce kropek trzy rzeczy, które lubisz, i wyślij.', prompt: 'Mam 10 lat. Lubię ..., ... i ... . Podaj 5 zawodów, które łączą te rzeczy. Każdy w jednym zdaniu, bez trudnych słów.', tip: 'Gry, piłka, LEGO, zwierzęta, rysowanie: wszystko się liczy. Nie musisz wybierać „poważnych” pasji.' },
    { text: 'Wybierz zawód, który brzmi najciekawiej, i poproś o zwykły wtorek. Wpisz jego numer.', prompt: 'Numer ... . Opisz zwykły wtorek takiej osoby. Co robi rano, co po południu, co jest nudne, a co najfajniejsze. Maksymalnie 8 zdań. Na koniec 2 zdania: w czym pomaga jej dziś AI, a czego AI za nią nie zrobi.' },
    { text: 'Mapa umiejętności. Otwórz Niezbędnik w drugiej karcie przeglądarki, znajdź dwie rzeczy, które już ćwiczysz, i wpisz je w prompt.', prompt: 'Jakich 6 umiejętności potrzebuje taka osoba? W Akademii ćwiczę już: ... i ... . Zrób mi tabelkę z trzema kolumnami: umiejętność, czy już to ćwiczę (tak / trochę / jeszcze nie), jak 10-latek może to ćwiczyć teraz.', tip: 'Liczą się też rzeczy spoza Akademii AI: tabele w Arkuszach, angielski, rysowanie, sport.' },
    { text: 'Drugie miejsce to człowiek. Przygotuj z AI krótki wywiad z rodzicem albo kimś dorosłym z rodziny, a potem go zrób. Poproś też, żeby pokazał Ci jedną rzecz, której w pracy używa: tabelę, plan, program albo rozmowę z AI.', prompt: 'Chcę zrobić krótki wywiad z rodzicem o jego pracy. Ułóż mi 5 pytań: o zwykły wtorek, o to, co jest nudne, czego nauczył się dopiero w pracy i czy używa AI. Krótkie pytania, bez trudnych słów.', tip: 'Sprawdź, czy w jego pracy jest plan, tabela albo sprawdzanie. Prawie zawsze jest.' }
  ],
  check: [
    'Masz listę 5 zawodów, które łączą Twoje pasje.',
    'Umiesz opowiedzieć zwykły wtorek jednego z nich: co jest fajne, co nudne i w czym pomaga AI.',
    'Masz tabelkę umiejętności i wiesz, które już ćwiczysz.',
    'Zrobiłeś wywiad i wiesz, jak wygląda zwykły wtorek rodzica w pracy.'
  ],
  followups: [
    'Co w tej pracy jest najtrudniejsze?',
    'Ile lat trzeba się tego uczyć i gdzie?',
    'Numer ... . Opisz zwykły wtorek w 5 zdaniach i podaj 4 umiejętności, które są tam potrzebne.',
    'Jakie są podobne zawody, o których mało kto słyszał?',
    'Jak ten zwykły wtorek może wyglądać za 15 lat? Co się zmieni?'
  ],
  solo: {
    text: 'Wybierz rzecz, którą chcesz mieć albo robić: psa, drukarkę 3D, obóz survivalowy, grę na instrumencie. Poproś o zwykły wtorek z tą rzeczą i zdecyduj, czy dalej jej chcesz.',
    hints: ['Karta startowa: wiek, co Cię ciekawi, jaka ma być odpowiedź.', 'Dopytaj: `Co jest w tym najbardziej nudne?`', 'Na koniec: `Jak mogę spróbować tego przez tydzień, zanim zdecyduję?`']
  },
  bonus: [
    { title: 'Kto to robi w Polsce', text: 'Zawód z czatu jest prawdziwy, gdy znajdziesz prawdziwe miejsca, w których się go wykonuje. Niech AI poszuka w internecie, a Ty kliknij jeden link.', prompt: 'Poszukaj w internecie 3 polskich firm albo miejsc, w których pracuje ... (zawód). Przy każdym jedno zdanie, co tam robią, i link.', tip: 'Kliknij jeden link i sprawdź, czy to miejsce naprawdę istnieje i robi to, co napisało AI.' },
    { title: 'Tydzień próby', text: 'Zanim pokochasz zawód, spróbuj go w małej wersji. Siedem dni po 15 minut wystarczy, żeby poczuć, czy to dla Ciebie.', prompt: 'Jaki mały projekt na 7 dni mogę zrobić, żeby spróbować pracy ... ? Mam 10 lat i 15 minut dziennie. Plan dzień po dniu, krótko.' },
    { title: 'Zawód, którego jeszcze nie ma', text: 'Wiele zawodów, w których będziesz pracować, jeszcze nie ma nazwy. Zgadnijcie razem z AI, jakie mogą powstać.', prompt: 'Jakie zawody mogą powstać, zanim skończę 25 lat, a dziś jeszcze ich nie ma? Podaj 3, każdy w jednym zdaniu, i napisz, czego warto się uczyć już teraz, żeby w nich pracować.' }
  ],
  discovery: 'Jakie pytanie o moją przyszłość powinienem zadać rodzicowi, a jeszcze nie zadałem? Podaj 3, każde w jednym zdaniu.',
  journalPrompt: 'Który zawód brzmi najlepiej i co z Akademii by Ci się w nim przydało?',
  parent: 'Opowiedz rodzicowi o zawodzie, który wybrałeś, i o jego zwykłym wtorku. Potem zrób z nim wywiad i poproś, żeby pokazał jedną rzecz, której używa w pracy.',
  forParent: {
    teaches: 'Pytanie o realia zamiast reklamy („zwykły wtorek”), także o to, w czym AI pomaga w danym zawodzie. Tabelka umiejętności: co już ćwiczy, co jeszcze nie. Wywiad z dorosłym przygotowany z AI. Dziecko samo odkrywa, że plan, porównanie, sprawdzanie i tabele są w prawie każdej pracy, zamiast słyszeć to od dorosłego.',
    ask: 'Odpowiedz na jego 5 pytań i pokaż jedną prawdziwą rzecz: arkusz, plan albo rozmowę z AI, bez danych firmy. Te 10 minut zrobi więcej niż każde „to Ci się przyda”.'
  }
},
{
  id: 'solo',
  updated: '2026-11-11',
  title: 'Solo',
  subtitle: 'Zadanie bez ściągi, na czas. Sam dobierasz techniki.',
  technique: 'Wszystko razem',
  minutes: 20,
  why: [
    'W tej misji nie ma gotowych promptów do kopiowania. Masz dziesięć technik w Niezbędniku, jedną prawdziwą sprawę do załatwienia i 15 minut na zegarze. Sam decydujesz, czego użyć i w jakiej kolejności.',
    'To nie jest test z ocenami. To sprawdzenie, czy potrafisz bez podpowiedzi. Jeśli się zatniesz, Niezbędnik jest obok, korzystaj z niego, tak robią wszyscy. Na koniec zobaczysz, ile się nauczyłeś od pierwszej rozmowy.'
  ],
  realWorld: 'W prawdziwej pracy nikt nie daje gotowej ściągi. Mechanik, pilot czy programista dostaje problem i sam dobiera narzędzia. Ta misja to trening dokładnie takiej sytuacji.',
  steps: [
    { text: 'Wybierz jedno wyzwanie. **A.** Zrozum temat ze szkoły, który Cię męczy, tak, żeby wytłumaczyć go rodzicowi w 3 zdaniach, i przygotuj 3 pytania sprawdzające dla siebie. **B.** Wybierz rzecz do kupienia do 100 zł: porównaj 3 opcje, ustal kryteria, sprawdź cenę w źródle i przygotuj rekomendację dla rodzica. **C.** Przygotuj minilekcję dla kumpli o czymś, co umiesz: 3 węzły, zasady gry, jak działa drukarka 3D. **D.** Wyzwanie od rodzica: poproś o prawdziwą sprawę do załatwienia albo weź otwarte zlecenie ze strony startowej Akademii.' },
    { text: 'Ustaw minutnik na 15 minut: w telefonie rodzica albo w Windows (klawisz [[Windows]], wpisz `zegar`, aplikacja Alarmy i zegar, zakładka Czasomierz). Zanim go włączysz, zapisz na kartce cztery techniki, których użyjesz.', tip: 'Karta startowa. Dopytywanie. Wytłumacz mi. Porównanie i sprawdzenie. Plan w krokach. Trzy wersje. Sprawdzanie. Opisz sytuację. Odkrywanie. Zwykły wtorek.' },
    { text: 'Start. Nowy czat, karta startowa własnymi słowami, potem krótkie wiadomości. Gdy odpowiedź nie pasuje, poprawiaj, nie zaczynaj od nowa. Literówki nie grają roli.' },
    { text: 'Zanim minutnik zadzwoni, sprawdź jedną rzecz poza AI: w źródle, w Wikipedii albo u rodzica. Zawsze, nawet w wyzwaniu C.' },
    { text: 'Przed i po. Znajdź na liście czatów swoją pierwszą rozmowę z misji 0 i porównaj ją z dzisiejszą: jak długie są Twoje wiadomości, ile razy poprawiałeś, czy AI zrozumiało Cię za pierwszym razem. Zapisz jedną różnicę w Dzienniku.', tip: 'Nie ma już pierwszej rozmowy? Porównaj z najstarszym czatem, jaki znajdziesz, albo z pierwszym wpisem w Dzienniku.' }
  ],
  check: [
    'Masz gotowy wynik: wyjaśnienie, rekomendację, plan lekcji albo załatwioną sprawę, który możesz pokazać komuś.',
    'Użyłeś przynajmniej czterech technik i umiesz je nazwać.',
    'Sprawdziłeś jedną rzecz poza AI.',
    'Zmieściłeś się w 15 minutach albo wiesz, co zabrało najwięcej czasu.',
    'Ani razu nie skopiowałeś gotowego promptu z Akademii.'
  ],
  solo: {
    text: 'Zrób drugie wyzwanie z listy w innym dniu. Za trzecim razem wybierz własny temat.',
    hints: ['Wróć do Niezbędnika, gdy nie wiesz, jak zapytać.', 'Jeśli utknąłeś, zapytaj AI: `Jak powinienem Ci zadać to pytanie, żebyś pomógł mi najlepiej?`']
  },
  bonus: [
    { title: 'Solo w Gemini', text: 'Zrób drugie wyzwanie w Gemini, z rodzicem, na jego koncie. Techniki działają w każdym AI, bo to techniki rozmowy, a nie przyciski. Zauważ, czy coś trzeba było powiedzieć inaczej.' },
    { title: 'Naucz kumpla jednej techniki', text: 'Kto uczy, ten umie podwójnie. Wybierz jedną technikę z Niezbędnika i naucz jej kumpla w 5 minut. Przygotuj się z AI.', prompt: 'Chcę nauczyć kumpla techniki ... w 5 minut. Ułóż mi plan: co powiedzieć, co pokazać na przykładzie i jedno zadanie dla niego. Krótko.' }
  ],
  discovery: 'Oceń, jak rozmawiałem z Tobą w tym czacie. Co robiłem dobrze, a co mógłbym robić lepiej? 3 punkty, szczerze i krótko.',
  journalPrompt: 'Czym różni się Twoja pierwsza rozmowa z AI od dzisiejszej?',
  parent: 'Pokaż rodzicowi wynik i powiedz, jakich technik użyłeś. Pokaż też pierwszą i dzisiejszą rozmowę obok siebie. To Twoja pierwsza samodzielna robota z AI, od początku do końca.',
  forParent: {
    teaches: 'Samodzielny dobór technik do prawdziwego zadania, bez gotowych promptów i na czas (15 minut). Wyzwanie od rodzica albo zlecenie ze strony startowej. Porównanie pierwszej rozmowy z dzisiejszą.',
    ask: 'Daj mu prawdziwą sprawę jako wyzwanie D. Poproś o wynik i o nazwy technik, których użył. Obejrzyjcie razem pierwszą i dzisiejszą rozmowę: to najlepszy dowód postępu.'
  }
},
{
  id: 'zbuduj-1',
  updated: '2026-11-11',
  title: 'Zbuduj coś z AI, część 1',
  subtitle: 'Gra albo strona, w jednym pliku, na Twoim komputerze',
  technique: 'Tworzenie',
  minutes: 20,
  why: [
    'AI potrafi napisać działający program. Ty nie musisz umieć programować, żeby go zbudować. Musisz umieć powiedzieć, co ma robić, zapisać plik i mówić, co zmienić. To wszystko już umiesz z poprzednich misji.',
    'Dziś: pierwsza wersja, która działa. Najpierw AI zada Ci pytania o grę, potem napisze kod. Grę sprawdzisz od razu w czacie, a potem zapiszesz jako plik. Nie ma być ładna ani skończona. Ulepszanie jest w części 2.'
  ],
  realWorld: 'Twórcy gier zaczynają od prototypu: brzydkiej wersji, w której da się tylko poruszać i przegrać. Grafika dochodzi, dopiero gdy granie jest fajne. Coraz więcej programistów pisze pierwsze wersje razem z AI, tak jak Ty dziś.',
  example: {
    intro: 'Gra w jednym pliku. Najpierw pytania, potem kod.',
    turns: [
      { who: 'ty', text: 'Chcę zrobić prostą grę w przeglądarce: statek unika spadających asteroid. Zanim napiszesz kod, zadaj mi 3 krótkie pytania o grę, po jednym. Potem napisz całą grę w jednym pliku HTML, bez bibliotek z internetu i bez obrazków, z komentarzami po polsku. Cały kod w jednym bloku.' },
      { who: 'ai', text: 'Pytanie 1 z 3: jak ma się sterować statkiem: strzałkami czy myszką?' },
      { who: 'ty', text: 'strzalkami' },
      { who: 'ai', text: '(po trzech pytaniach) Oto cała gra w jednym bloku kodu, z komentarzami po polsku... Zapisz ją jako plik gra.html i otwórz w przeglądarce.' },
      { who: 'ty', text: 'Działa. Zmień asteroidy na czerwone i zrób, żeby leciały wolniej na początku.' },
      { who: 'ai', text: '(cały kod jeszcze raz, z dwiema zmianami)' }
    ],
    note: 'Pytania na początku sprawiają, że gra jest Twoja, a nie przypadkowa. Prośba `Cały kod w jednym bloku` jest ważna: jeden blok to jedno kliknięcie Kopiuj i jedno wklejenie.'
  },
  steps: [
    { text: 'Wybierz, co budujesz. **Gra:** statek unika asteroid. **Quiz:** 5 pytań o II wojnie światowej z punktami. **Strona:** strona o Twoich wydrukach 3D z listą i opisami. Wszystko w jednym pliku.' },
    { text: 'Nowy czat. Najpierw opis, potem kod. Wyślij prompt na grę (albo przerób go pod quiz lub stronę) i odpowiadaj krótko na pytania AI.', prompt: 'Chcę zrobić prostą grę w przeglądarce: statek na dole ekranu unika spadających asteroid. Zanim napiszesz kod, zadaj mi 4 krótkie pytania o grę, po jednym: o sterowanie, kolory, punkty i co się dzieje na końcu. Potem napisz całą grę w jednym pliku HTML: HTML, CSS i JavaScript razem, bez bibliotek z internetu i bez obrazków, z krótkimi komentarzami po polsku. Daj cały kod w jednym bloku. Na końcu w 3 punktach napisz, jak zapisać go jako plik .html w Notatniku w Windows.', tip: 'Komentarze po polsku to zdania w kodzie, które mówią, co robi dany kawałek. Przydadzą się, gdy zechcesz sam coś zmienić.' },
    { text: 'Podgląd w czacie. Nad blokiem z kodem poszukaj przełącznika **Podgląd** (po angielsku **Preview**). Jeśli jest, kliknij: gra uruchomi się w czacie. Zagraj raz i sprawdź, czy robi to, co chciałeś.', tip: 'Nie ma Podglądu? Nic nie szkodzi, przejdź do następnego kroku. Podgląd to szybka próba. Plik na komputerze to Twoja gra na zawsze: możesz ją wysłać kumplom i ulepszać.' },
    { text: 'Zapisz plik. Skopiuj kod przyciskiem **Kopiuj** w rogu bloku. Otwórz Notatnik (klawisz [[Windows]], wpisz `notatnik`, [[Enter]]), wklej ([[Ctrl]] + [[V]]) i zapisz ([[Ctrl]] + [[S]]): nazwa `gra.html`, w polu **Zapisz jako typ** wybierz **Wszystkie pliki**, kodowanie **UTF-8**, miejsce: Pulpit.', tip: 'Jeśli plik nazywa się gra.html.txt, to nie zadziała. Pole „Zapisz jako typ” musi być na „Wszystkie pliki”.' },
    { text: 'Wejdź na Pulpit i kliknij dwa razy na `gra.html`. Otworzy się w przeglądarce. Graj.', tip: 'Nie działa albo nic się nie dzieje? Napisz do AI dokładnie, co widzisz, jak w misji 8: `Otworzyłem plik, widzę ... , a powinno ... .` Skopiuj nowy cały kod, w Notatniku [[Ctrl]] + [[A]], [[Ctrl]] + [[V]], [[Ctrl]] + [[S]], odśwież przeglądarkę klawiszem [[F5]].' }
  ],
  check: [
    'Plik otwiera się w przeglądarce i coś robi: gra działa, quiz zadaje pytania albo strona się wyświetla.',
    'AI zadało Ci pytania, zanim napisało kod, a gra ma Twoje odpowiedzi.',
    'Umiesz sam zrobić pętlę: skopiuj kod, wklej w Notatniku, zapisz, odśwież.',
    'Wiesz, gdzie na dysku jest Twój plik.'
  ],
  followups: [
    'Daj cały kod jeszcze raz, w jednym bloku.',
    'Otworzyłem plik i widzę ... , a powinno być ... . Napraw.',
    'Zrób to prościej, mniej rzeczy, ale żeby działało.',
    'Wytłumacz w 3 zdaniach, co robi ten kod, jak dla 10-latka.'
  ],
  bonus: [
    { title: 'Sam zmień liczbę w kodzie', text: 'Pierwszy raz zmieniasz program sam, bez AI. Znajdź w kodzie linijkę z prędkością asteroid (dlatego prosiłeś o komentarze po polsku), zmień liczbę w Notatniku, zapisz ([[Ctrl]] + [[S]]) i odśwież przeglądarkę ([[F5]]).', prompt: 'W którym miejscu kodu ustawia się prędkość asteroid? Pokaż tę jedną linijkę i powiedz, którą liczbę mam zmienić, żeby leciały wolniej.', tip: 'Zepsułeś? Nic się nie stało: cały kod nadal jest w czacie, skopiuj go jeszcze raz.' },
    { title: 'Gra w Canvas Gemini', text: 'Gemini też buduje gry. Z rodzicem, na jego koncie, otwórz Gemini, kliknij **Narzędzia** i wybierz **Canvas**. Wklej ten sam opis gry. Gemini pokaże grę obok rozmowy. Porównaj, która wersja lepsza i dlaczego.', prompt: 'Napisz prostą grę w jednym pliku HTML: statek na dole ekranu unika spadających asteroid, sterowanie strzałkami, punkty rosną z czasem, po zderzeniu „Koniec gry” i przycisk „Jeszcze raz”.' },
    { title: 'Link dla kumpli (Sites)', text: 'Na płatnym koncie ChatGPT jest funkcja Sites: robi z opisu stronę z własnym linkiem, który można wysłać kumplom. Na darmowym koncie jej nie ma, a w Polsce może jeszcze nie działać. To decyzja rodzica, bo link otworzy każdy, kto go dostanie.', tip: 'Bez Sites też wyślesz grę: plik .html przez komunikator rodzica albo na pendrive.' }
  ],
  discovery: 'Wytłumacz mi w 5 zdaniach, jak dla 10-latka, co się dzieje w tym kodzie, gdy wciskam strzałkę.',
  journalPrompt: 'Co zbudowałeś i co było najtrudniejsze w zapisaniu pliku?',
  parent: 'Pokaż rodzicowi działającą grę albo stronę. Nie musi być ładna. Działa, a to Ty ją zrobiłeś.',
  forParent: {
    teaches: 'Zamiana opisu w działający program: najpierw pytania AI o grę, potem kod w jednym pliku HTML z komentarzami po polsku. Podgląd w czacie (jeśli jest), zapis w Notatniku (rozszerzenie .html, „Wszystkie pliki”), otwarcie w przeglądarce, pętla popraw i odśwież.',
    ask: 'Poproś o pokaz. Zapytaj, jak zapisał plik i co zrobił, gdy coś nie działało. Przy problemie z zapisem sprawdźcie razem pole „Zapisz jako typ”.'
  }
},
{
  id: 'zbuduj-2',
  updated: '2026-11-11',
  title: 'Zbuduj coś z AI, część 2',
  subtitle: 'Ulepsz, napraw, daj kumplowi do testu',
  technique: 'Iteracja',
  minutes: 20,
  why: [
    'Wersja pierwsza działa. Teraz robisz to, co robią wszyscy twórcy: dodajesz **jedną rzecz naraz**, sprawdzasz, zapisujesz kopię, dodajesz następną. Jedna zmiana naraz, bo gdy coś się zepsuje, wiesz, co to zepsuło.',
    'Gdy coś się psuje, nie kasujesz wszystkiego. Opisujesz AI dokładnie, co się dzieje, i prosisz o poprawkę. A gdy AI trzeci raz „naprawia” i dalej nie działa, wracasz do działającej wersji i próbujesz inaczej. Na koniec najważniejszy test: ktoś inny gra w Twoją grę, a Ty patrzysz i nic nie mówisz.'
  ],
  realWorld: 'Gry, w które grasz, dostają poprawki latami: jedna zmiana, test, następna. Programiści zapisują każdą działającą wersję, żeby móc do niej wrócić, gdy coś się zepsuje. Twoja kopia działającej wersji to ten sam pomysł.',
  example: {
    intro: 'Ulepszanie gry krok po kroku.',
    turns: [
      { who: 'ty', text: 'Dodaj tylko jedną rzecz: najlepszy wynik, który gra pamięta nawet po zamknięciu przeglądarki. Na górze kodu dopisz do listy zmian: wersja 2. Daj cały kod w jednym bloku.' },
      { who: 'ai', text: '(cały kod, z rekordem zapisywanym w przeglądarce i listą zmian na górze)' },
      { who: 'ty', text: 'Po zderzeniu gra się zawiesza i przycisk "Jeszcze raz" nic nie robi. Wcześniej działał. Napraw, daj cały kod.' },
      { who: 'ai', text: 'Błąd był w tym, że zapis rekordu zatrzymywał pętlę gry. Poprawione. (cały kod)' }
    ],
    note: 'Zauważ zdanie `Wcześniej działał`. Mówi AI, że zepsuła to ostatnia zmiana. To najlepsza wskazówka, jaką możesz dać.'
  },
  steps: [
    { text: 'Zrób kopię działającej wersji. W Notatniku: **Plik**, **Zapisz jako**, nazwa `gra1.html`. Od teraz pracujesz w kopii, oryginał zostaje.', tip: 'Twórcy nazywają to wersjami. gra1, gra2, gra3. Gdy coś pójdzie źle, wracasz do poprzedniej.' },
    { text: 'Wybierz jedno ulepszenie i poproś o nie. Lista zmian na górze kodu przypomni Ci za tydzień, co dodałeś w której wersji.', prompt: 'Dodaj tylko jedną rzecz: ... (np. najlepszy wynik, który gra pamięta po zamknięciu, drugi rodzaj przeszkód, poziomy trudności). Nic więcej nie zmieniaj. Na samej górze kodu prowadź listę zmian w komentarzu: wersja 1, wersja 2 i co doszło. Daj cały kod w jednym bloku.' },
    { text: 'Kopiuj, wklej w Notatniku ([[Ctrl]] + [[A]], [[Ctrl]] + [[V]]), zapisz ([[Ctrl]] + [[S]]), odśwież przeglądarkę ([[F5]]). Działa? Odhacz. Nie działa? Następny krok.' },
    { text: 'Naprawianie. Opisz dokładnie, co się dzieje, i co działało wcześniej.', prompt: 'Po ostatniej zmianie ... (co się dzieje, np. gra się zawiesza, nic nie widać, przycisk nie działa). Wcześniej działało. Napraw i daj cały kod w jednym bloku.', tip: 'AI kręci się w kółko? Po trzech nieudanych poprawkach przestań. Wróć do ostatniej działającej wersji (gra1), otwórz nowy czat, wklej ten kod i poproś o tę samą zmianę innymi słowami. Dla odważnych, z rodzicem: [[F12]] w przeglądarce, zakładka **Konsola**, skopiuj czerwony tekst i wklej go do AI.' },
    { text: 'Test u kumpla. Daj grę kumplowi albo komuś z rodziny. Patrz, jak gra, i nic nie podpowiadaj. Zapisz w Dzienniku, gdzie się zaciął, co go zdziwiło i co by dodał. To jest lista Twoich następnych ulepszeń.', tip: 'Najtrudniejsze w tym kroku jest milczenie. Każde Twoje „kliknij tu” to miejsce, którego gra nie tłumaczy sama.' }
  ],
  check: [
    'Masz przynajmniej dwie wersje plików i najnowsza działa.',
    'Na górze kodu jest lista zmian.',
    'Naprawiłeś przynajmniej jeden błąd, opisując go, a nie kasując wszystkiego.',
    'Ktoś poza Tobą zagrał, a Ty zapisałeś, gdzie się zaciął.'
  ],
  followups: [
    'Dodaj tylko jedną rzecz: ... . Nic więcej. Cały kod.',
    'Po ostatniej zmianie ... . Wcześniej działało. Napraw.',
    'Co jeszcze mogę dodać? 5 pomysłów od najłatwiejszego.',
    'Pokaż mi listę zmian z góry kodu i powiedz, co było w każdej wersji.'
  ],
  solo: {
    text: 'Zbuduj drugą rzecz od zera, bez zaglądania do misji 12: quiz dla kumpli, stronę o hobby, prostą grę. Od pierwszego promptu do pokazania komuś.',
    hints: ['Najpierw opis: `Zanim napiszesz kod, zadaj mi 4 pytania.`', '`Jeden plik HTML, bez bibliotek z internetu, cały kod w jednym bloku.`', 'Jedna zmiana naraz. Kopie plików.']
  },
  bonus: [
    { title: 'Drugie AI szuka błędu', text: 'Gdy ChatGPT nie umie naprawić błędu, pokaż kod drugiemu AI. Świeże oczy często widzą od razu. Z rodzicem otwórz Gemini, wklej prompt i za dwukropkiem cały kod.', prompt: 'W tej grze jest błąd: ... (co się dzieje). Znajdź go i wytłumacz w 2 zdaniach, co było źle. Potem daj poprawiony cały kod w jednym bloku. Kod: ' },
    { title: 'Gra na telefonie', text: 'Telefon nie ma strzałek, więc gra potrzebuje sterowania dotykiem. Jedna zmiana, jak zawsze.', prompt: 'Zrób, żeby gra działała też na telefonie: sterowanie dotykiem (dotknięcie lewej albo prawej połowy ekranu), plansza dopasowana do ekranu. Nic więcej nie zmieniaj. Cały kod w jednym bloku.', tip: 'Plik wyślij przez komunikator rodzica i otwórz w przeglądarce telefonu. Na niektórych telefonach trzeba go najpierw zapisać, a potem wybrać przeglądarkę do otwarcia.' }
  ],
  discovery: 'Co jeszcze mógłbym zbudować z Tobą w jednym pliku HTML, mając 10 lat? 5 pomysłów, od najłatwiejszego, każdy w jednym zdaniu.',
  journalPrompt: 'Co dodałeś, co się zepsuło, jak to naprawiłeś i gdzie zaciął się tester?',
  parent: 'Pokaż rodzicowi najnowszą wersję i opowiedz o jednym błędzie, który naprawiłeś. To jest ostatnia warstwa. Odznaka Akademii jest Twoja.',
  forParent: {
    teaches: 'Ulepszanie jedną zmianą naraz, kopie wersji i lista zmian w kodzie, naprawianie przez dokładny opis błędu, powrót do działającej wersji, gdy AI kręci się w kółko, test u kogoś innego bez podpowiadania.',
    ask: 'Zagraj w jego grę jako tester: nic nie pytaj, po prostu graj. Potem poproś o historię jednego błędu i zapytaj, co chciałby zbudować następne.'
  }
});
