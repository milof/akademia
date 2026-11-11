/* Misje 3-5: rozumienie tematu, research, plan w krokach. Każda mieści się w 20 minutach, reszta w `bonus`. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 'trudny-temat',
  updated: '2026-11-11',
  title: 'Zrozum trudny temat',
  subtitle: 'AI jako cierpliwy nauczyciel, który nigdy nie wzdycha',
  technique: 'Wytłumacz mi',
  minutes: 20,
  why: [
    'AI może wyjaśnić Ci każdą rzecz tyle razy, ile chcesz, na tyle sposobów, ile chcesz, i nigdy się nie zniecierpliwi. To jego najmocniejsza strona. Warunek: musisz powiedzieć, kiedy nie rozumiesz.',
    'Cztery ruchy: **najpierw zgadnij**, **wytłumacz z porównaniem do czegoś, co znam**, **nie rozumiem części o...**, **sprawdź mnie quizem**. Pierwszy jest nowy i działa jak trik: mózg lepiej zapamiętuje to, co najpierw sam próbował zgadnąć, nawet jeśli zgadł źle.',
    'Do tego **tryb nauki**. W nim AI nie podaje gotowej odpowiedzi, tylko prowadzi Cię pytaniami, jak dobry korepetytor.'
  ],
  realWorld: 'Przewodnik w muzeum wojskowym opowiada tę samą historię dzieciom, turystom z zagranicy i dziadkom, za każdym razem inaczej. Lekarz robi to samo, gdy tłumaczy pacjentowi chorobę bez trudnych słów.',
  example: {
    intro: 'Temat: jak Polacy złamali Enigmę, niemiecką maszynę szyfrującą z II wojny światowej.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Chcę zrozumieć, jak Polacy złamali Enigmę. Zanim cokolwiek wyjaśnisz, zapytaj mnie, jak myślę, że działała. Potem wytłumacz z porównaniem do czegoś, co znam. Maksymalnie 8 zdań.' },
      { who: 'ai', text: 'Najpierw Ty. Jak myślisz: co Enigma robiła z literami, które wpisywał niemiecki żołnierz?' },
      { who: 'ty', text: 'zamieniala na inne litery?' },
      { who: 'ai', text: 'Dobry strzał! Wyobraź sobie szyfr z podwórka: A to Z, B to Y. Enigma robiła to samo, ale po każdej wciśniętej literze przekręcała zasady, jak zamek z trzema kręcącymi się tarczami. Niemcy myśleli, że jest nie do złamania. Trzech polskich matematyków, z Marianem Rejewskim na czele, w 1932 roku rozgryzło ją matematyką, nie szpiegostwem. Tuż przed wojną Polacy przekazali swoje odkrycia Anglikom i Francuzom.' },
      { who: 'ty', text: 'Nie rozumiem części o kręcących się tarczach. Inaczej, prościej.' },
      { who: 'ai', text: 'Masz koło z literami. Wciskasz A, wychodzi Q. Koło obraca się o jedną literę. Wciskasz A drugi raz, wychodzi już K. Dlatego to samo słowo za każdym razem wyglądało inaczej.' }
    ],
    note: 'Zgadywanie trwało 5 sekund, a teraz pamiętasz, że zgadłeś dobrze. Zdanie `Nie rozumiem części o...` to drugie najważniejsze zdanie tej misji. Nikt Cię za nie nie oceni, a AI od razu zmieni sposób tłumaczenia.'
  },
  steps: [
    { text: 'Nowy czat. Najpierw zgadnij, potem słuchaj. Wyślij i odpowiedz na pytanie AI, jak umiesz.', prompt: 'Mam 10 lat. Chcę zrozumieć, jak Polacy złamali Enigmę. Zanim cokolwiek wyjaśnisz, zapytaj mnie, jak myślę, że działała. Potem wytłumacz z porównaniem do czegoś, co znam. Maksymalnie 8 zdań.', tip: 'Strzelaj śmiało, nawet `nie wiem, może...`. Zła odpowiedź też pomaga.' },
    { text: 'Znajdź w wyjaśnieniu jedną rzecz, której nie rozumiesz do końca, i napisz o niej. Wzór: `Nie rozumiem części o ... . Inaczej, prościej.`', tip: 'Jeśli rozumiesz wszystko, wybierz najtrudniejsze zdanie i poproś o przykład.' },
    { text: 'Sprawdź, czy naprawdę rozumiesz. Poproś o quiz i odpowiadaj krótko, po jednym słowie albo zdaniu. Gdy się pomylisz: `Wytłumacz to jeszcze raz, inaczej.`', prompt: 'Zrób mi quiz: 3 pytania o Enigmę, po jednym. Czekaj na moją odpowiedź i mów, czy dobrze.' },
    { text: 'Tryb nauki, z tematem ze szkoły, który Cię męczy. W nowym czacie kliknij **+** przy polu wiadomości i poszukaj trybu nauki (po angielsku **Study and learn**). Włącz go i wyślij prompt.', prompt: 'Mam 10 lat. Chcę zrozumieć ... (temat ze szkoły). Prowadź mnie pytaniami, po jednym, i nie podawaj od razu odpowiedzi. Gdy utknę, daj podpowiedź.', tip: 'Nie ma u Ciebie takiego trybu? Ten prompt robi to samo w zwykłym czacie. To jest ta dozwolona pomoc w lekcjach: AI prowadzi, Ty myślisz i robisz zadanie sam. Napisanie zadania przez AI to oszukiwanie siebie, bo na sprawdzianie bota nie będzie.' }
  ],
  check: [
    'Zgadłeś, zanim AI wyjaśniło, i wiesz, co zgadłeś dobrze.',
    'Umiesz wytłumaczyć Enigmę komuś w 3 zdaniach, bez patrzenia na ekran.',
    'Przynajmniej raz napisałeś, że czegoś nie rozumiesz, i dostałeś inne tłumaczenie.',
    'W trybie nauki doszedłeś do odpowiedzi sam, z podpowiedziami.'
  ],
  followups: [
    'Nie rozumiem. Inaczej, prościej.',
    'Daj przykład z życia.',
    'Wytłumacz to samo w 3 zdaniach.',
    'Zrób mi quiz z 3 pytań, po jednym.',
    'Co w tym jest najważniejsze, gdybym miał zapamiętać jedną rzecz?'
  ],
  solo: {
    text: 'Wybierz coś, czego nigdy nie rozumiałeś: dlaczego samolot lata, jak działa internet, czym jest inflacja. Doprowadź do momentu, w którym umiesz to wytłumaczyć rodzicowi w 3 zdaniach.',
    hints: ['Zacznij od zgadywania: `Najpierw zapytaj mnie, jak myślę, że to działa.`', 'Za każdym razem, gdy coś jest niejasne: `Nie rozumiem części o ...`.', 'Na koniec: `Sprawdź mnie quizem`.']
  },
  bonus: [
    { title: 'Ja tłumaczę AI', text: 'Najlepszy sprawdzian rozumienia to wytłumaczyć komuś. Tym razem tłumaczysz Ty, a AI szuka dziur w Twoim wyjaśnieniu.', prompt: 'Sprawdź, czy dobrze rozumiem. Wytłumaczę Ci Enigmę własnymi słowami, a Ty powiedz, co jest dobrze, co źle i czego brakuje. Krótko. Moje wyjaśnienie: ' },
    { title: 'Wytłumacz przez moje hobby', text: 'Porównanie do czegoś, co kochasz, zostaje w głowie najdłużej. Ale każde porównanie trochę kłamie, więc poproś też o to, co w nim nie pasuje.', prompt: 'Wytłumacz mi, jak działała Enigma, jakby to był odcinek Mandaloriana. Maksymalnie 6 zdań. Na końcu jedno zdanie: co w tym porównaniu nie pasuje do prawdy.' },
    { title: 'Oś czasu i tabelka', text: 'Ściana tekstu męczy. Ten sam temat jako oś czasu albo tabelka widać od razu.', prompt: 'Zrób oś czasu łamania Enigmy: 6 dat, przy każdej jedno krótkie zdanie. Potem tabelkę: kto, co zrobił, skąd był.' }
  ],
  discovery: 'Co w historii Enigmy jest najbardziej zaskakujące? Podaj 3 rzeczy, o które mógłbym jeszcze zapytać, każdą w jednym zdaniu.',
  journalPrompt: 'Jaki temat zrozumiałeś dziś lepiej niż wczoraj? Co zgadłeś, zanim AI wyjaśniło?',
  parent: 'Wytłumacz rodzicowi Enigmę w 3 zdaniach. Jeśli zada pytanie, na które nie umiesz odpowiedzieć, to świetnie: masz gotowe pytanie na następny czat.',
  forParent: {
    teaches: 'Uczenie się z AI: najpierw zgadnij, potem wyjaśnienie z porównaniem, mówienie wprost, że czegoś nie rozumie, quiz sprawdzający. Tryb nauki w ChatGPT (albo prompt „prowadź mnie pytaniami”) do tematów szkolnych. Granica: AI tłumaczy i prowadzi, zadania robi sam.',
    ask: 'Poproś o wyjaśnienie Enigmy w 3 zdaniach. Zapytaj, co zgadł na początku i jak sobie poradził w trybie nauki.'
  }
},
{
  id: 'porownaj',
  updated: '2026-11-11',
  title: 'Porównaj i sprawdź',
  subtitle: 'Research: tabela, wady, źródła i reklamy',
  technique: 'Porównanie i sprawdzenie',
  minutes: 20,
  why: [
    'Gdy chcesz coś kupić, zbudować albo wybrać, AI potrafi w minutę zebrać to, na co w internecie poszłoby pół godziny. Ale zbiera z pamięci, a pamięć bywa nieaktualna. Dlatego research z AI ma dwa kroki: **zebrać** i **sprawdzić**.',
    'Zbieranie: poproś o **tabelę**, o **kryteria** i o **wady**, nie tylko zalety. Sprawdzanie: AI umie dziś **szukać w internecie** i podaje **źródła**, czyli strony, z których wzięło informację. Źródło masz pod ręką, ale musisz w nie kliknąć. I jeszcze jedno: pod odpowiedzią może pojawić się **reklama**. Reklama to nie rada AI.'
  ],
  realWorld: 'Dziennikarz, zanim opublikuje ważną informację, sprawdza ją w drugim, niezależnym źródle. Zaopatrzeniowiec w fabryce robi tabelę ofert od kilku dostawców, zanim wyda pieniądze firmy. Tabela i drugie miejsce to ich codzienność.',
  example: {
    intro: 'Temat: jaki filament do pierwszych wydruków. Zobacz, jak tabela porządkuje bałagan.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat, zaczynam drukować w 3D. Porównaj PLA, PETG i TPU w tabeli: łatwość druku, wytrzymałość, do czego się nadaje, cena. Na końcu napisz, co wybrać na start i dlaczego, w 2 zdaniach.' },
      { who: 'ai', text: '(tabela z trzema kolumnami) PLA: bardzo łatwy, sztywny, do figurek i breloczków, tani. PETG: średnio łatwy, mocniejszy i odporny na ciepło, do uchwytów i części, trochę droższy. TPU: trudny, gumowy i giętki, do etui i kółek. Na start: PLA. Drukuje się najłatwiej i wybacza błędy, a to teraz najważniejsze.' },
      { who: 'ty', text: 'Skąd to wiesz? Co powinienem sprawdzić na opakowaniu w sklepie?' },
      { who: 'ai', text: 'To ogólna wiedza o materiałach, ale ceny i konkretne parametry różnią się między markami. Na opakowaniu sprawdź: średnicę (1,75 mm musi pasować do drukarki) i zalecaną temperaturę druku.' }
    ],
    note: 'Najważniejsza wiadomość to `Skąd to wiesz?`. AI samo powiedziało, czego nie jest pewne. Teraz wiesz, co sprawdzić.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o porównanie w tabeli.', prompt: 'Mam 10 lat, zaczynam drukować w 3D. Porównaj PLA, PETG i TPU w tabeli: łatwość druku, wytrzymałość, do czego się nadaje, cena. Na końcu napisz, co wybrać na start i dlaczego, w 2 zdaniach.' },
    { text: 'Zapytaj, czego AI nie jest pewne.', prompt: 'Skąd to wiesz? Które informacje w tabeli mogą być nieaktualne albo zależeć od sklepu?' },
    { text: 'Niech AI poszuka w internecie. Potem znajdź przy odpowiedzi małe przyciski albo linki ze źródłami, kliknij jeden i znajdź na tej stronie cenę. Zgadza się z tym, co napisało AI?', prompt: 'Poszukaj w internecie aktualnych cen filamentu PLA 1,75 mm w polskich sklepach. Podaj 3 ceny i przy każdej źródło.', tip: 'Na stronie sklepu wciśnij [[Ctrl]] + [[F]] i wpisz `zł`: przeglądarka podświetli ceny. AI czasem przekręci liczbę albo weźmie cenę innego produktu, dlatego klikasz.' },
    { text: 'Rozejrzyj się pod odpowiedzią. Na darmowym koncie ChatGPT pod odpowiedzią może stać ramka z napisem **Sponsorowane**. To reklama: firma zapłaciła, żeby tam była. Nie jest częścią odpowiedzi i nie jest radą AI.', tip: 'Nie widzisz reklamy? Możliwe, że konto rodzica jest płatne, wtedy reklam nie ma. Zasada i tak się przyda: na YouTube, w grach i w sklepach słowo „Sponsorowane” znaczy to samo.' },
    { text: 'Zrób to samo z rzeczą, którą naprawdę chcesz kupić albo wybrać. Tym razem poproś też o wady. Uzupełnij i wyślij w nowym czacie.', prompt: 'Mam 10 lat i chcę wybrać ... (rzecz). Mam do wydania ... zł. Porównaj 3 opcje w tabeli, podaj 3 kryteria, na które patrzeć, i przy każdej opcji jej największą wadę. Na końcu: co byś wybrał i dlaczego, w 2 zdaniach.', tip: 'Pytanie o wady chroni przed zachwytem. Każda rzecz ma jakąś wadę, a Ty chcesz wiedzieć jaką, zanim wydasz pieniądze.' }
  ],
  check: [
    'Masz tabelę i umiesz powiedzieć 3 kryteria wyboru.',
    'Kliknąłeś w źródło i sprawdziłeś, czy liczba z odpowiedzi jest na tej stronie.',
    'Wiesz, jak wygląda reklama w ChatGPT i że to nie rada AI.',
    'Znasz największą wadę rzeczy, którą chcesz wybrać.'
  ],
  followups: [
    'Skąd to wiesz?',
    'Zrób z tego tabelę.',
    'Podaj 3 kryteria, na które patrzeć.',
    'Co jest najgorsze w każdej z tych opcji?',
    'Poszukaj w internecie i podaj źródła.'
  ],
  solo: {
    text: 'Wybierz coś, co Cię ciekawi z II wojny światowej: dwa czołgi, dwa samoloty, dwie bitwy. Poproś o porównanie w tabeli i sprawdź jedną liczbę z tabeli w Wikipedii.',
    hints: ['Tabela: `Porównaj X i Y w tabeli: ...` i wypisz, co ma być w kolumnach.', 'Do Wikipedii: wpisz nazwę w wyszukiwarkę z dopiskiem `wikipedia`.', 'Zgadza się? Świetnie. Nie zgadza? Jeszcze lepiej, masz temat na Dziennik.']
  },
  bonus: [
    { title: 'Recenzje ludzi', text: 'AI zna opinie z pamięci. Prawdziwi kupujący piszą recenzje w sklepach. Zapytaj AI, na co ludzie zwykle narzekają, a potem sprawdź w recenzjach w sklepie, czy to prawda.', prompt: 'Na co najczęściej narzekają ludzie, którzy kupili ... ? Podaj 3 rzeczy. Potem powiedz, jak szukać tego w recenzjach w sklepie internetowym.' },
    { title: 'Tabela do Arkuszy', text: 'Tabelę z ChatGPT przeniesiesz do Arkuszy Google: zaznacz ją myszką, [[Ctrl]] + [[C]], w Arkuszu kliknij komórkę A1 i [[Ctrl]] + [[V]]. Tam możesz ją posortować, dopisać swoje kolumny i pokazać rodzicowi.', prompt: 'Zrób tę tabelę jeszcze raz tak, żebym mógł ją wkleić do Arkuszy Google: w pierwszej kolumnie nazwy, ceny jako same liczby, bez „zł”.', tip: 'Jeśli w domu ktoś przerabia Akademię Arkuszy, to dobra okazja, żeby się wymienić trikami.' }
  ],
  discovery: 'Jakich pytań nie zadałem, a powinienem, zanim wydam pieniądze na filament? Podaj 3, krótko.',
  journalPrompt: 'Co się zgadzało po kliknięciu w źródło, a co nie?',
  parent: 'Zanim cokolwiek kupisz, pokaż rodzicowi tabelę i to, co sprawdziłeś w źródle. Zakupy to zawsze wspólna decyzja, także wtedy, gdy podsuwa je reklama.',
  forParent: {
    teaches: 'Research w dwóch krokach: zebrać (tabela, kryteria, wady, pytanie „skąd to wiesz”) i sprawdzić (szukanie w sieci, kliknięcie w źródło, Ctrl + F). Rozpoznawanie reklamy oznaczonej „Sponsorowane” pod odpowiedzią.',
    ask: 'Zapytaj, w które źródło kliknął i czy się zgadzało. Jeśli na Waszym koncie są reklamy, pokażcie sobie jedną i porozmawiajcie, czym różni się od odpowiedzi.'
  }
},
{
  id: 'plan-na-kroki',
  updated: '2026-11-11',
  title: 'Rozbij duży plan na kroki',
  subtitle: 'Z wielkiej rzeczy zrób listę małych',
  technique: 'Plan w krokach',
  minutes: 20,
  why: [
    'Duże rzeczy przerażają, bo nie wiadomo, od czego zacząć. Wypad do lasu, projekt na konkurs, porządek w pokoju. AI świetnie rozbija duże na małe: **co najpierw**, **co o której godzinie**, **co może pójść nie tak**, **kto co robi**, **checklista**.',
    'Ty decydujesz, co jest celem. AI układa kroki. A potem to Ty je robisz, więc plan musi być dla Ciebie, nie dla dorosłego z samochodem i portfelem. I musi mieć pierwszy krok tak mały, że zrobisz go jeszcze dziś.'
  ],
  realWorld: 'Przewodnik górski przed wyprawą rozpisuje trasę na odcinki, sprawdza, co może pójść nie tak, i ma checklistę sprzętu. Kierownik budowy robi to samo z całym domem: wielki plan pocięty na tygodnie.',
  example: {
    intro: 'Cel: sobota w lesie z kumplami i rodzicami, z ogniskiem.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Planuję z rodzicami i 3 kumplami sobotę w lesie, z ogniskiem: wyjazd o 10:00, powrót o 17:00. Zrób plan: co przygotować w piątek, co rano, a w lesie godzina po godzinie. Krótko, w punktach.' },
      { who: 'ai', text: 'Piątek: 1. Ustalcie z rodzicami miejsce. 2. Spakuj plecak (lista z misji 2). 3. Naładuj latarkę. Sobota rano: 4. Sprawdź pogodę. 5. Weź wodę i jedzenie z lodówki. W lesie: 10:30 obóz i miejsce na ognisko, z dorosłym. 11:00 zbieranie drewna, tylko suche i leżące. 12:00 ognisko i kiełbaski. 13:00 podchody. 15:00 budowa szałasu. 16:15 gaszenie ogniska wodą do zimna i sprzątanie. 16:30 powrót.' },
      { who: 'ty', text: 'Co może pójść nie tak? 5 rzeczy i co wtedy zrobić.' },
      { who: 'ai', text: '1. Deszcz: folia NRC i kurtki, ognisko pod osłoną. 2. Ktoś się skaleczy: apteczka, dorosły. 3. Ktoś się zgubi: zasada „stój i gwiżdż trzy razy”. 4. Mokre drewno: brzozowa kora i drobne gałązki na rozpałkę. 5. Kleszcze: długie spodnie, sprawdzenie po powrocie.' }
    ],
    note: 'Godziny zamieniają listę w plan dnia. A pytanie `co może pójść nie tak?` to ulubione pytanie każdego, kto planuje na serio. Zadawaj je zawsze, nawet przy urodzinach.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o plan z godzinami.', prompt: 'Mam 10 lat. Planuję z rodzicami i 3 kumplami sobotę w lesie, z ogniskiem: wyjazd o 10:00, powrót o 17:00. Zrób plan: co przygotować w piątek, co rano, a w lesie godzina po godzinie. Krótko, w punktach.' },
    { text: 'Zapytaj o problemy, zanim się zdarzą.', prompt: 'Co może pójść nie tak? Podaj 5 rzeczy i co wtedy zrobić. Krótko.' },
    { text: 'Rozdziel zadania. Kto co robi?', prompt: 'Rzeczy z samochodem, zakupami i ogniem robią dorośli. Zrób tabelkę: kto (dorośli, ja, każdy z 3 kumpli), co robi, do kiedy. Dla mnie i kumpli tylko rzeczy, które 10-latek zrobi sam.', tip: 'Gdy każdy ma swoje zadanie, nikt nie stoi bezczynnie i nikt nie robi dwa razy tego samego.' },
    { text: 'Zamień plan w checklistę i zacznij od najmniejszego kroku.', prompt: 'Zrób z mojej części checklistę do odhaczania, maksymalnie 10 punktów, w kolejności robienia. Na samej górze dopisz jeden pierwszy krok, który zrobię dziś w 5 minut.', tip: 'Zrób ten pierwszy krok od razu, zanim zamkniesz czat. Pięć minut to mniej niż ta misja. Checklistę skopiuj do notatnika albo wydrukuj.' },
    { text: 'Teraz Twoja własna duża rzecz. Uzupełnij i wyślij w nowym czacie.', prompt: 'Mam 10 lat. Chcę ... (duża rzecz: zrobić, zorganizować, nauczyć się). Mam na to ... (czas). Rozbij to na kroki po kolei, krótko. Powiedz, co może pójść nie tak, i jaki jest pierwszy krok na 5 minut.' }
  ],
  check: [
    'Masz plan z godzinami, a pierwszy krok jest tak mały, że zrobiłeś go dziś.',
    'Wiesz, co może pójść nie tak, i masz na to odpowiedź.',
    'Każdy ma swoje zadanie, a Twoje naprawdę zależą od Ciebie.'
  ],
  followups: [
    'Co najpierw? Tylko jedna rzecz.',
    'Co może pójść nie tak?',
    'Zrób z tego checklistę.',
    'Który krok jest najtrudniejszy i jak go ułatwić?',
    'Ile czasu zajmie każdy krok?'
  ],
  solo: {
    text: 'Zaplanuj z AI coś prawdziwego na najbliższy tydzień: porządek w pokoju w 3 podejściach, budowa czegoś z kumplem, prezent dla kogoś z rodziny. Zrób pierwszy krok jeszcze dziś.',
    hints: ['Karta startowa, a potem: `Rozbij to na kroki.`', 'Zawsze: `Co może pójść nie tak?`', 'Na koniec: `Jaki jest pierwszy krok na 5 minut?`']
  },
  bonus: [
    { title: 'Wracam z postępem', text: 'Plan żyje. Gdy coś zrobisz albo coś się nie uda, wróć do tego samego czatu, nie do nowego. AI widzi cały plan i poprawia tylko to, co trzeba.', prompt: 'Zrobiłem kroki 1 do 3. Krok 4 się nie udał, bo ... . Co teraz? Popraw plan.' },
    { title: 'Plan nauki do sprawdzianu', text: 'Nauka po kawałku przez kilka dni działa lepiej niż wszystko wieczorem przed sprawdzianem. Tak działa pamięć każdego człowieka, nie tylko Twoja.', prompt: 'Mam sprawdzian z ... za 4 dni. Mogę się uczyć 15 minut dziennie. Zrób plan na 4 dni: co każdego dnia. Ostatniego dnia quiz z całości.', tip: 'Quiz zrobisz techniką z misji 3: `Zrób mi quiz, po jednym pytaniu.`' }
  ],
  discovery: 'Gdybyś był mną, co w tym planie zrobiłbyś inaczej? Podaj 3 rzeczy, krótko.',
  journalPrompt: 'Jaki pierwszy krok z planu zrobiłeś dziś?',
  parent: 'Pokaż rodzicowi plan wypadu i tabelkę, kto co robi. Rodzic zatwierdza miejsce, godziny i wszystko, co dotyczy ognia.',
  forParent: {
    teaches: 'Rozbijanie dużego celu na kroki z godzinami, pytanie „co może pójść nie tak”, podział zadań (kto co robi, dorośli osobno), checklista z pierwszym krokiem na 5 minut.',
    ask: 'Poproś o plan i zapytaj, który krok jest jego, a który Wasz. Zapytaj, jaki pierwszy krok zrobił dziś.'
  }
});
