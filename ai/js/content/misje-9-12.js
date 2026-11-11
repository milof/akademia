/* Misje 9-13: odkrywanie, zwykły wtorek (zawody), solo, budowanie w dwóch sesjach. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 'jak-jeszcze',
  title: 'Jak jeszcze możesz mi pomóc?',
  subtitle: 'Odkrywanie nowych zastosowań i porównanie trzech AI',
  technique: 'Odkrywanie',
  minutes: 30,
  why: [
    'Większość ludzi używa AI do trzech rzeczy i nigdy nie sprawdza czwartej. Ty masz przewagę: umiesz zapytać AI o nie samo. `Jak jeszcze możesz mi pomóc?` to pytanie, które otwiera drzwi, o których nie wiedziałeś.',
    'Druga rzecz: ChatGPT nie jest jedynym AI. Gemini i Claude odpowiadają inaczej na to samo pytanie. Kto zna kilka narzędzi, wybiera lepsze do sprawy, zamiast brać to, co pod ręką.'
  ],
  realWorld: 'W firmach są ludzie, którzy testują nowe narzędzia: sprawdzają kilka programów do tej samej rzeczy i wybierają najlepszy dla zespołu. Kto zna trzy AI zamiast jednego, wie, po które sięgnąć.',
  example: {
    intro: 'Pytanie o rzeczy, o których nie wiesz, że nie wiesz.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Lubię druk 3D, II wojnę światową, survival i granie z kumplami. Podaj 10 rzeczy, w których możesz mi pomóc, a o których 10-latek pewnie nie wie. Każda w jednym zdaniu.' },
      { who: 'ai', text: '1. Poprowadzę grę tekstową, w której jesteś dowódcą okrętu podwodnego. 2. Wymyślę zagadki survivalowe dla Twoich kumpli. 3. Pomogę zaprojektować w słowach model do druku, zanim otworzysz program. 4. Zrobię quiz z Twojej ulubionej gry. 5. Przetłumaczę instrukcję po angielsku na proste polskie zdania. 6. Ułożę plan treningu, żeby szybciej pisać na klawiaturze... (i tak dalej)' },
      { who: 'ty', text: 'Numer 1. Zaczynamy. Krótkie opisy, po każdym daj mi 3 opcje do wyboru.' }
    ],
    note: 'Gra tekstowa to jeden z najfajniejszych sposobów na czytanie i podejmowanie decyzji. Ty piszesz tylko numer opcji. Idealne, gdy nie lubisz dużo pisać.'
  },
  steps: [
    { text: 'Nowy czat. Zapytaj o rzeczy, o których nie wiesz.', prompt: 'Mam 10 lat. Lubię druk 3D, II wojnę światową, survival i granie z kumplami. Podaj 10 rzeczy, w których możesz mi pomóc, a o których 10-latek pewnie nie wie. Każda w jednym zdaniu.' },
    { text: 'Wybierz jedną i spróbuj od razu. Wystarczy: `Numer 4. Zaczynamy.`' },
    { text: 'Poproś o grę tekstową.', prompt: 'Poprowadź grę tekstową: jestem rozbitkiem na bezludnej wyspie i mam przeżyć 3 dni. Krótkie opisy, maksymalnie 4 zdania. Po każdym daj mi 3 opcje do wyboru z numerami. Zaczynaj.', tip: 'Odpowiadasz numerem. Gdy zrobi się nudno: `Zaskocz mnie.` Gdy chcesz skończyć: `Zakończ grę i podsumuj, co zrobiłem dobrze.`' },
    { text: 'Nadaj AI rolę.', prompt: 'Bądź moim trenerem survivalu. Zadaj mi jedno pytanie o to, co zrobić w trudnej sytuacji w lesie. Oceń odpowiedź i daj następne. Krótko.' },
    { text: 'Porównanie AI. Razem z rodzicem otwórz Gemini, a potem Claude, na jego kontach. W każdym wyślij ten sam prompt, co w kroku 1. Zapisz w Dzienniku, czym różniły się odpowiedzi.', tip: 'Nie ma lepszego i gorszego. Jedno pisze krócej, drugie daje więcej pomysłów, trzecie ładniej tłumaczy. Zauważ, które lubisz do czego.' }
  ],
  check: [
    'Spróbowałeś przynajmniej jednej rzeczy, o której wcześniej nie wiedziałeś.',
    'Zagrałeś w grę tekstową albo rozmawiałeś z AI w roli.',
    'Widziałeś to samo pytanie w trzech różnych AI i umiesz powiedzieć jedną różnicę.'
  ],
  followups: [
    'Jak jeszcze możesz mi pomóc w tym temacie? 5 pomysłów.',
    'Zaskocz mnie.',
    'Numer 3. Zaczynamy.',
    'Zakończ grę i podsumuj, co zrobiłem dobrze.',
    'Co byś zaproponował 10-latkowi, który nudzi się w deszczowy dzień?'
  ],
  solo: {
    text: 'Raz w tygodniu zadaj to pytanie w nowym temacie: szkoła, kumple, hobby, dom. Zapisuj w Dzienniku każdą rzecz, która zadziałała. Po miesiącu masz własną listę trików, jakiej nie ma nikt inny.',
    hints: ['`Mam 10 lat i ... . Jak możesz mi w tym pomóc? 5 pomysłów, o których nie wiem.`', 'Jeden pomysł od razu wypróbuj. Reszta może poczekać.']
  },
  discovery: 'Jakie pytanie powinienem Ci zadać, a jeszcze nigdy nie zadałem? Podaj 3 i wyjaśnij w jednym zdaniu, dlaczego warto.',
  journalPrompt: 'Trzy nowe zastosowania AI, które dziś odkryłeś. Choćby jedno.',
  forParent: {
    teaches: 'Pytanie AI o nieznane zastosowania, gra tekstowa i role jako sposób na czytanie i decyzje, porównanie ChatGPT, Gemini i Claude na tym samym prompcie.',
    ask: 'Zapytaj, które nowe zastosowanie mu się spodobało i czym różniły się odpowiedzi trzech AI. Otwórzcie Gemini i Claude razem.'
  }
},
{
  id: 'ja-za-15-lat',
  added: '2026-11-08',
  title: 'Ja za 15 lat',
  subtitle: 'Zawody, które łączą Twoje pasje, i umiejętności, które już ćwiczysz',
  technique: 'Zwykły wtorek',
  minutes: 30,
  why: [
    'Dorośli często mówią: „to Ci się przyda w przyszłości”. Dziś nie musisz im wierzyć na słowo. Sprawdzisz sam: zapytasz AI, jakie prace łączą rzeczy, które lubisz, i co ludzie w tych pracach robią naprawdę.',
    'Nowa technika: **zwykły wtorek**. Filmy i reklamy pokazują najfajniejsze pięć minut z czyjejś pracy. Pytanie o zwykły wtorek pokazuje resztę dnia: co jest nudne, co trudne i czego trzeba umieć. Działa też przed kupnem psa, zapisaniem się na zajęcia albo wyjazdem na obóz.',
    'Na koniec sprawdzisz to w drugim miejscu. Tym razem drugie miejsce to człowiek: ktoś z rodziny, kto naprawdę chodzi do pracy.'
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
    { text: 'Wybierz zawód, który brzmi najciekawiej, i poproś o zwykły wtorek. Wpisz jego numer.', prompt: 'Numer ... . Opisz zwykły wtorek takiej osoby. Co robi rano, co po południu, co jest nudne, a co najfajniejsze. Maksymalnie 8 zdań.' },
    { text: 'Teraz najważniejsze pytanie. Wyślij je bez zmian.', prompt: 'Jakich umiejętności potrzebuje taka osoba? Podaj 6, każdą w kilku słowach. Przy każdej napisz, czy 10-latek może ją ćwiczyć już teraz i jak.' },
    { text: 'Porównaj tę listę z tym, czego uczysz się w Akademii. Otwórz Niezbędnik w drugiej karcie przeglądarki i znajdź przynajmniej dwie umiejętności, które już ćwiczysz. Napisz je AI.', prompt: 'W Akademii ćwiczę już: ... i ... . Do czego dokładnie przydadzą się w tym zawodzie? Daj po jednym przykładzie.', tip: 'Liczą się też rzeczy spoza Akademii AI: tabele w Arkuszach, angielski, rysowanie, sport.' },
    { text: 'Drugi zawód, szybciej. Wybierz inny numer z listy i zadaj oba pytania w jednej wiadomości.', prompt: 'Numer ... . Opisz zwykły wtorek w 5 zdaniach i podaj 4 umiejętności, które są tam potrzebne.' },
    { text: 'Drugie miejsce to człowiek. Zapytaj rodzica albo kogoś dorosłego z rodziny o jego zwykły wtorek w pracy. Trzy pytania wystarczą: **co robisz rano**, **co jest nudne**, **czego nauczyłeś się dopiero w pracy**. Poproś, żeby pokazał Ci jedną rzecz, której w pracy używa: tabelę, plan, program albo rozmowę z AI.', tip: 'Sprawdź, czy w jego pracy jest plan, tabela albo sprawdzanie. Prawie zawsze jest.' }
  ],
  check: [
    'Masz listę 5 zawodów, które łączą Twoje pasje.',
    'Umiesz opowiedzieć zwykły wtorek jednego z nich: co jest fajne, a co nudne.',
    'Znalazłeś przynajmniej dwie umiejętności z tego zawodu, które już ćwiczysz.',
    'Wiesz, jak wygląda zwykły wtorek rodzica w pracy.'
  ],
  followups: [
    'Co w tej pracy jest najtrudniejsze?',
    'Ile lat trzeba się tego uczyć i gdzie?',
    'Jaki mały projekt mogę zrobić w tym tygodniu, żeby tego spróbować?',
    'Jakie są podobne zawody, o których mało kto słyszał?',
    'Jak ten zwykły wtorek może wyglądać za 15 lat? Co się zmieni?'
  ],
  solo: {
    text: 'Wybierz rzecz, którą chcesz mieć albo robić: psa, drukarkę 3D, obóz survivalowy, grę na instrumencie. Poproś o zwykły wtorek z tą rzeczą i zdecyduj, czy dalej jej chcesz.',
    hints: ['Karta startowa: wiek, co Cię ciekawi, jaka ma być odpowiedź.', 'Dopytaj: `Co jest w tym najbardziej nudne?`', 'Na koniec: `Jak mogę spróbować tego przez tydzień, zanim zdecyduję?`']
  },
  discovery: 'Jakie zawody mogą powstać, zanim skończę 25 lat, a dziś jeszcze ich nie ma? Podaj 3, każdy w jednym zdaniu, i napisz, czego warto się uczyć już teraz, żeby w nich pracować.',
  journalPrompt: 'Który zawód brzmi najlepiej i co z Akademii by Ci się w nim przydało?',
  parent: 'Opowiedz rodzicowi o zawodzie, który wybrałeś, i o jego zwykłym wtorku. Potem zamieńcie się: niech rodzic opowie swój zwykły wtorek w pracy i pokaże jedną rzecz, której w niej używa.',
  forParent: {
    teaches: 'Pytanie o realia zamiast reklamy („zwykły wtorek”) i samodzielne łączenie tego, czego się uczy, z tym, co robią dorośli. Dziecko samo odkrywa, że plan, porównanie, sprawdzanie i tabele są w prawie każdej pracy, zamiast słyszeć to od dorosłego.',
    ask: 'Opowiedz mu swój zwykły wtorek w pracy, w trzech zdaniach, i pokaż jedną prawdziwą rzecz: arkusz, plan albo rozmowę z AI, bez danych firmy. Te 10 minut zrobi więcej niż każde „to Ci się przyda”.'
  }
},
{
  id: 'solo',
  title: 'Solo',
  subtitle: 'Zadanie bez ściągi. Sam dobierasz techniki.',
  technique: 'Wszystko razem',
  minutes: 30,
  why: [
    'W tej misji nie ma gotowych promptów do kopiowania. Masz dziesięć technik w Niezbędniku i jedną prawdziwą sprawę do załatwienia. Sam decydujesz, czego użyć i w jakiej kolejności.',
    'To nie jest test z ocenami. To sprawdzenie, czy potrafisz bez podpowiedzi. Jeśli się zatniesz, Niezbędnik jest obok, korzystaj z niego, tak robią wszyscy.'
  ],
  realWorld: 'W prawdziwej pracy nikt nie daje gotowej ściągi. Mechanik, pilot czy programista dostaje problem i sam dobiera narzędzia. Ta misja to trening dokładnie takiej sytuacji.',
  steps: [
    { text: 'Wybierz jedno wyzwanie. **A.** Zrozum temat ze szkoły, który Cię męczy, tak, żeby wytłumaczyć go rodzicowi w 3 zdaniach, i przygotuj 3 pytania sprawdzające dla siebie. **B.** Wybierz rzecz do kupienia do 100 zł: porównaj 3 opcje, ustal kryteria, sprawdź cenę w drugim miejscu i przygotuj rekomendację dla rodzica. **C.** Przygotuj minilekcję dla kumpli o czymś, co umiesz: 3 węzły, zasady gry, jak działa drukarka 3D. Plan, co pokazać, i quiz na koniec.' },
    { text: 'Zanim zaczniesz, napisz na kartce albo w notatniku, jakich technik użyjesz. Minimum cztery.', tip: 'Karta startowa. Dopytywanie. Wytłumacz mi. Porównanie i sprawdzenie. Plan w krokach. Trzy wersje. Sprawdzanie. Opisz sytuację. Odkrywanie. Zwykły wtorek.' },
    { text: 'Nowy czat. Zacznij od karty startowej własnymi słowami. Literówki nie grają roli.' },
    { text: 'Pracuj krótkimi wiadomościami. Gdy odpowiedź nie pasuje, poprawiaj, nie zaczynaj od nowa.' },
    { text: 'Gdy uznasz, że wynik jest gotowy, sprawdź jedną rzecz w drugim miejscu. Zawsze, nawet w wyzwaniu C.' },
    { text: 'Odhacz, które techniki naprawdę użyłeś. Jeśli mniej niż cztery, wróć do czatu i dołóż jedną. Na przykład: `Co może pójść nie tak?` albo `Daj 3 wersje`.' }
  ],
  check: [
    'Masz gotowy wynik: wyjaśnienie, rekomendację albo plan lekcji, który możesz pokazać komuś.',
    'Użyłeś przynajmniej czterech technik i umiesz je nazwać.',
    'Sprawdziłeś jedną rzecz poza AI.',
    'Ani razu nie skopiowałeś gotowego promptu z Akademii.'
  ],
  solo: {
    text: 'Zrób drugie wyzwanie z listy w innym dniu. Za trzecim razem wybierz własny temat.',
    hints: ['Wróć do Niezbędnika, gdy nie wiesz, jak zapytać.', 'Jeśli utknąłeś, zapytaj AI: `Jak powinienem Ci zadać to pytanie, żebyś pomógł mi najlepiej?`']
  },
  discovery: 'Oceń, jak rozmawiałem z Tobą w tym czacie. Co robiłem dobrze, a co mógłbym robić lepiej? 3 punkty, szczerze i krótko.',
  journalPrompt: 'Jakich technik użyłeś i która zrobiła największą różnicę?',
  parent: 'Pokaż rodzicowi wynik i powiedz, jakich technik użyłeś. To Twoja pierwsza samodzielna robota z AI, od początku do końca.',
  forParent: {
    teaches: 'Samodzielny dobór technik do prawdziwego zadania, bez gotowych promptów. Autoocena i prośba do AI o ocenę sposobu rozmowy.',
    ask: 'Poproś o wynik i o nazwy technik, których użył. Zapytaj, co było najtrudniejsze bez ściągi. To dobry moment na pochwałę za konkret.'
  }
},
{
  id: 'zbuduj-1',
  title: 'Zbuduj coś z AI, część 1',
  subtitle: 'Gra albo strona, w jednym pliku, na Twoim komputerze',
  technique: 'Tworzenie',
  minutes: 30,
  why: [
    'AI potrafi napisać działający program. Ty nie musisz umieć programować, żeby go zbudować. Musisz umieć powiedzieć, co ma robić, zapisać plik i mówić, co zmienić. To wszystko już umiesz z poprzednich misji.',
    'Dziś: pierwsza wersja, która działa. Nie ma być ładna ani skończona. Ma się otworzyć w przeglądarce i coś robić. Ulepszanie jest w części 2.'
  ],
  realWorld: 'Twórcy gier zaczynają od prototypu: brzydkiej wersji, w której da się tylko poruszać i przegrać. Grafika dochodzi, dopiero gdy granie jest fajne. Coraz więcej programistów pisze pierwsze wersje razem z AI, tak jak Ty dziś.',
  example: {
    intro: 'Gra w jednym pliku. Zwróć uwagę, jak dokładnie opisane są zasady i forma odpowiedzi.',
    turns: [
      { who: 'ty', text: 'Napisz prostą grę w jednym pliku HTML: HTML, CSS i JavaScript razem, bez bibliotek z internetu i bez obrazków. Gra: statek na dole ekranu unika spadających asteroid, sterowanie strzałkami w lewo i w prawo. Punkty rosną z czasem. Po zderzeniu napis "Koniec gry" i przycisk "Jeszcze raz". Daj cały kod w jednym bloku.' },
      { who: 'ai', text: '(blok kodu z przyciskiem Kopiuj w prawym górnym rogu) ... Zapisz to jako plik gra.html i otwórz w przeglądarce.' },
      { who: 'ty', text: 'Działa. Zmień asteroidy na czerwone i zrób, żeby leciały wolniej na początku.' },
      { who: 'ai', text: '(cały kod jeszcze raz, z dwiema zmianami)' }
    ],
    note: 'Prośba `Daj cały kod w jednym bloku` jest ważna. Jeden blok to jedno kliknięcie Kopiuj i jedno wklejenie. Kawałki do wklejania w środek pliku to pułapka na początek.'
  },
  steps: [
    { text: 'Wybierz, co budujesz. **Gra:** statek unika asteroid. **Quiz:** 5 pytań o II wojnie światowej z punktami. **Strona:** strona o Twoich wydrukach 3D z listą i opisami. Wszystko w jednym pliku.' },
    { text: 'Nowy czat. Wyślij prompt na grę albo przerób go pod quiz lub stronę.', prompt: 'Napisz prostą grę w jednym pliku HTML: HTML, CSS i JavaScript razem, bez bibliotek z internetu i bez obrazków. Gra: statek na dole ekranu unika spadających asteroid, sterowanie strzałkami w lewo i w prawo. Punkty rosną z czasem. Po zderzeniu napis "Koniec gry" i przycisk "Jeszcze raz". Daj cały kod w jednym bloku. Na końcu w 3 punktach napisz, jak zapisać go jako plik .html w Notatniku w Windows i otworzyć.', tip: 'Wersja na stronę: `Napisz stronę w jednym pliku HTML o moich wydrukach 3D: tytuł, krótki opis, lista 3 wydruków z opisami, ładne kolory. Bez obrazków z internetu. Daj cały kod w jednym bloku.`' },
    { text: 'Skopiuj kod przyciskiem **Kopiuj** w rogu bloku z kodem w ChatGPT. Nie zaznaczaj ręcznie.' },
    { text: 'Otwórz Notatnik w Windows: wciśnij klawisz [[Windows]], wpisz `notatnik`, [[Enter]]. Wklej kod ([[Ctrl]] + [[V]]).' },
    { text: 'Zapisz: [[Ctrl]] + [[S]]. W oknie zapisu wpisz nazwę `gra.html`, w polu **Zapisz jako typ** wybierz **Wszystkie pliki**, kodowanie **UTF-8**. Zapisz na Pulpicie.', tip: 'Jeśli plik nazywa się gra.html.txt, to nie zadziała. Pole "Zapisz jako typ" musi być na "Wszystkie pliki".' },
    { text: 'Wejdź na Pulpit i kliknij dwa razy na `gra.html`. Otworzy się w przeglądarce. Graj.' },
    { text: 'Nie działa albo nic się nie dzieje? Napisz do AI dokładnie, co widzisz, jak w misji 8: `Otworzyłem plik, widzę ... , a powinno ... .` Skopiuj nowy cały kod, w Notatniku [[Ctrl]] + [[A]], [[Ctrl]] + [[V]], [[Ctrl]] + [[S]], odśwież przeglądarkę klawiszem [[F5]].' }
  ],
  check: [
    'Plik otwiera się w przeglądarce i coś robi: gra działa, quiz zadaje pytania albo strona się wyświetla.',
    'Umiesz sam zrobić pętlę: skopiuj kod, wklej w Notatniku, zapisz, odśwież.',
    'Wiesz, gdzie na dysku jest Twój plik.'
  ],
  followups: [
    'Daj cały kod jeszcze raz, w jednym bloku.',
    'Otworzyłem plik i widzę ... , a powinno być ... . Napraw.',
    'Zrób to prościej, mniej rzeczy, ale żeby działało.',
    'Wytłumacz w 3 zdaniach, co robi ten kod, jak dla 10-latka.'
  ],
  discovery: 'Wytłumacz mi w 5 zdaniach, jak dla 10-latka, co się dzieje w tym kodzie, gdy wciskam strzałkę.',
  journalPrompt: 'Co zbudowałeś i co było najtrudniejsze w zapisaniu pliku?',
  parent: 'Pokaż rodzicowi działającą grę albo stronę. Nie musi być ładna. Działa, a to Ty ją zrobiłeś.',
  forParent: {
    teaches: 'Zamiana opisu w działający program: dokładny opis, jeden plik HTML, zapis w Notatniku (rozszerzenie .html, "Wszystkie pliki"), otwarcie w przeglądarce, pętla popraw i odśwież.',
    ask: 'Poproś o pokaz. Zapytaj, jak zapisał plik i co zrobił, gdy coś nie działało. Przy problemie z zapisem sprawdźcie razem pole "Zapisz jako typ".'
  }
},
{
  id: 'zbuduj-2',
  title: 'Zbuduj coś z AI, część 2',
  subtitle: 'Ulepsz, napraw, pokaż kumplom',
  technique: 'Iteracja',
  minutes: 30,
  why: [
    'Wersja pierwsza działa. Teraz robisz to, co robią wszyscy twórcy: dodajesz **jedną rzecz naraz**, sprawdzasz, zapisujesz kopię, dodajesz następną. Jedna zmiana naraz, bo gdy coś się zepsuje, wiesz, co to zepsuło.',
    'Gdy coś się psuje, nie kasujesz wszystkiego. Opisujesz AI dokładnie, co się dzieje, i prosisz o poprawkę. To jest naprawianie, a naprawianie to połowa budowania.'
  ],
  realWorld: 'Gry, w które grasz, dostają poprawki latami: jedna zmiana, test, następna. Programiści zapisują każdą działającą wersję, żeby móc do niej wrócić, gdy coś się zepsuje. Twoja kopia działającej wersji to ten sam pomysł.',
  example: {
    intro: 'Ulepszanie gry krok po kroku.',
    turns: [
      { who: 'ty', text: 'Dodaj tylko jedną rzecz: dźwięk przy zderzeniu, bez plików z internetu. Daj cały kod w jednym bloku.' },
      { who: 'ai', text: '(cały kod, z dźwiękiem generowanym w przeglądarce)' },
      { who: 'ty', text: 'Po zderzeniu gra się zawiesza i przycisk "Jeszcze raz" nic nie robi. Wcześniej działał. Napraw, daj cały kod.' },
      { who: 'ai', text: 'Błąd był w tym, że dźwięk zatrzymywał pętlę gry. Poprawione. (cały kod)' }
    ],
    note: 'Zauważ zdanie `Wcześniej działał`. Mówi AI, że zepsuła to ostatnia zmiana. To najlepsza wskazówka, jaką możesz dać.'
  },
  steps: [
    { text: 'Zrób kopię działającej wersji. W Notatniku: **Plik**, **Zapisz jako**, nazwa `gra1.html`. Od teraz pracujesz w kopii, oryginał zostaje.', tip: 'Twórcy nazywają to wersjami. gra1, gra2, gra3. Gdy coś pójdzie źle, wracasz do poprzedniej.' },
    { text: 'Wybierz jedno ulepszenie i poproś o nie.', prompt: 'Dodaj tylko jedną rzecz: ... (np. licznik najlepszego wyniku, drugi rodzaj przeszkód, zmiana kolorów, poziomy trudności). Nic więcej nie zmieniaj. Daj cały kod w jednym bloku.' },
    { text: 'Kopiuj, wklej w Notatniku ([[Ctrl]] + [[A]], [[Ctrl]] + [[V]]), zapisz ([[Ctrl]] + [[S]]), odśwież przeglądarkę ([[F5]]). Działa? Odhacz. Nie działa? Krok 4.' },
    { text: 'Naprawianie. Opisz dokładnie, co się dzieje, i co działało wcześniej.', prompt: 'Po ostatniej zmianie ... (co się dzieje, np. gra się zawiesza, nic nie widać, przycisk nie działa). Wcześniej działało. Napraw i daj cały kod w jednym bloku.', tip: 'Dla odważnych, z rodzicem: w przeglądarce wciśnij [[F12]], kliknij zakładkę **Konsola**, skopiuj czerwony tekst i wklej go do AI. Czerwony tekst to opis błędu, AI go rozumie.' },
    { text: 'Powtórz kroki 2 do 4 jeszcze dwa razy, z dwoma kolejnymi ulepszeniami. Każde w nowym pliku: gra2, gra3.' },
    { text: 'Pokaż kumplom. Wyślij im plik albo pokaż na swoim komputerze. Zapytaj, co by dodali, i zapisz ich pomysły w Dzienniku.' }
  ],
  check: [
    'Masz przynajmniej trzy wersje plików i najnowsza działa.',
    'Naprawiłeś przynajmniej jeden błąd, opisując go, a nie kasując wszystkiego.',
    'Ktoś poza Tobą zagrał albo zobaczył Twoją stronę.'
  ],
  followups: [
    'Dodaj tylko jedną rzecz: ... . Nic więcej. Cały kod.',
    'Po ostatniej zmianie ... . Wcześniej działało. Napraw.',
    'Co jeszcze mogę dodać? 5 pomysłów od najłatwiejszego.',
    'Zrób, żeby działało też na telefonie, dotykiem.'
  ],
  solo: {
    text: 'Zbuduj drugą rzecz od zera, bez zaglądania do misji 12: quiz dla kumpli, stronę o hobby, prostą grę. Od pierwszego promptu do pokazania komuś.',
    hints: ['Dokładny opis: co ma być na ekranie, jak się steruje, co się dzieje na końcu.', '`Jeden plik HTML, bez bibliotek z internetu, cały kod w jednym bloku.`', 'Jedna zmiana naraz. Kopie plików.']
  },
  discovery: 'Co jeszcze mógłbym zbudować z Tobą w jednym pliku HTML, mając 10 lat? 5 pomysłów, od najłatwiejszego, każdy w jednym zdaniu.',
  journalPrompt: 'Co dodałeś, co się zepsuło i jak to naprawiłeś?',
  parent: 'Pokaż rodzicowi najnowszą wersję i opowiedz o jednym błędzie, który naprawiłeś. To jest ostatnia warstwa. Odznaka Akademii jest Twoja.',
  forParent: {
    teaches: 'Ulepszanie jedną zmianą naraz, kopie wersji, naprawianie przez dokładny opis błędu (i opcjonalnie konsolę przeglądarki), pokazanie efektu innym.',
    ask: 'Poproś o pokaz najnowszej wersji i historię jednego błędu. Zapytaj, co chciałby zbudować następne. To dobry moment na rozmowę, co dalej po Akademii.'
  }
});
