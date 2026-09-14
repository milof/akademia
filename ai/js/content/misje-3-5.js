/* Misje 3-5: rozumienie tematu, research, plan w krokach. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 3,
  title: 'Zrozum trudny temat',
  subtitle: 'AI jako cierpliwy nauczyciel, który nigdy nie wzdycha',
  technique: 'Wytłumacz mi',
  minutes: 30,
  why: [
    'AI może wyjaśnić Ci każdą rzecz tyle razy, ile chcesz, na tyle sposobów, ile chcesz, i nigdy się nie zniecierpliwi. To jego najmocniejsza strona. Warunek: musisz powiedzieć, kiedy nie rozumiesz.',
    'Cztery ruchy: **wytłumacz jak 10-latkowi**, **daj porównanie do czegoś, co znam**, **wytłumacz inaczej**, **sprawdź mnie quizem**. Działa na Enigmę, ułamki, fotosyntezę i zasady gry, której nie ogarniasz.'
  ],
  example: {
    intro: 'Temat: jak Polacy złamali Enigmę, niemiecką maszynę szyfrującą z II wojny światowej.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Wytłumacz, jak działała Enigma i dlaczego to Polacy pierwsi ją złamali. Użyj porównania do czegoś, co znam. Maksymalnie 8 zdań.' },
      { who: 'ai', text: 'Wyobraź sobie szyfr z podwórka: A to Z, B to Y. Enigma robiła to samo, ale po każdej wciśniętej literze przekręcała zasady, jak zamek z trzema kręcącymi się tarczami. Niemcy myśleli, że jest nie do złamania. Trzech polskich matematyków, z Marianem Rejewskim na czele, w 1932 roku rozgryzło ją matematyką, nie szpiegostwem. Tuż przed wojną Polacy przekazali swoje odkrycia Anglikom i Francuzom. Na tym zbudowano później słynne prace w Bletchley Park.' },
      { who: 'ty', text: 'Nie rozumiem części o kręcących się tarczach. Inaczej, prościej.' },
      { who: 'ai', text: 'Masz koło z literami. Wciskasz A, wychodzi Q. Koło obraca się o jedną literę. Wciskasz A drugi raz, wychodzi już K. Dlatego to samo słowo za każdym razem wyglądało inaczej.' }
    ],
    note: 'Zdanie `Nie rozumiem części o...` to najważniejsze zdanie tej misji. Nikt Cię za nie nie oceni, a AI od razu zmieni sposób tłumaczenia.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o wyjaśnienie z porównaniem.', prompt: 'Mam 10 lat. Wytłumacz, jak działała Enigma i dlaczego to Polacy pierwsi ją złamali. Użyj porównania do czegoś, co znam. Maksymalnie 8 zdań.' },
    { text: 'Znajdź w odpowiedzi jedną rzecz, której nie rozumiesz do końca, i napisz o niej. Wzór: `Nie rozumiem części o ... . Inaczej, prościej.`', tip: 'Jeśli rozumiesz wszystko, wybierz najtrudniejsze zdanie i poproś o przykład.' },
    { text: 'Sprawdź, czy naprawdę rozumiesz. Poproś o quiz.', prompt: 'Zrób mi quiz: 3 pytania o Enigmę, po jednym. Czekaj na moją odpowiedź i mów, czy dobrze.' },
    { text: 'Odpowiadaj na pytania quizu krótko, po jednym słowie albo zdaniu. Jeśli się pomylisz, poproś: `Wytłumacz to jeszcze raz, inaczej.`' },
    { text: 'Teraz to samo z tematem ze szkoły, który Cię męczy. Uzupełnij i wyślij w nowym czacie.', prompt: 'Mam 10 lat. Wytłumacz mi ... (temat) jak koledze, prostymi słowami, z jednym porównaniem do codziennego życia. Maksymalnie 6 zdań. Potem zadaj mi 2 pytania sprawdzające.', tip: 'To jest ta dozwolona pomoc w lekcjach: AI tłumaczy, Ty rozumiesz i robisz zadanie sam. Napisanie zadania przez AI to oszukiwanie siebie, bo na sprawdzianie bota nie będzie.' }
  ],
  check: [
    'Umiesz wytłumaczyć Enigmę komuś w 3 zdaniach, bez patrzenia na ekran.',
    'Przynajmniej raz napisałeś, że czegoś nie rozumiesz, i dostałeś inne tłumaczenie.',
    'Zrobiłeś quiz i wiesz, co poszło dobrze.'
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
    hints: ['Zacznij od karty startowej: wiek, temat, forma.', 'Za każdym razem, gdy coś jest niejasne: `Nie rozumiem części o ...`.', 'Na koniec: `Sprawdź mnie quizem`.']
  },
  discovery: 'Co w historii Enigmy jest najbardziej zaskakujące? Podaj 3 rzeczy, o które mógłbym jeszcze zapytać, każdą w jednym zdaniu.',
  journalPrompt: 'Jaki temat zrozumiałeś dziś lepiej niż wczoraj?',
  parent: 'Wytłumacz rodzicowi Enigmę w 3 zdaniach. Jeśli zada pytanie, na które nie umiesz odpowiedzieć, to świetnie: masz gotowe pytanie na następny czat.',
  forParent: {
    teaches: 'Uczenie się z AI: prośba o proste wyjaśnienie z porównaniem, mówienie wprost, że czegoś nie rozumie, quiz sprawdzający. Granica: AI tłumaczy, zadania robi sam.',
    ask: 'Poproś o wyjaśnienie Enigmy w 3 zdaniach. Zapytaj, co było najtrudniejsze do zrozumienia i jak sobie z tym poradził.'
  }
},
{
  id: 4,
  title: 'Porównaj i sprawdź',
  subtitle: 'Research: tabela, kryteria i drugie miejsce',
  technique: 'Porównanie i sprawdzenie',
  minutes: 30,
  why: [
    'Gdy chcesz coś kupić, zbudować albo wybrać, AI potrafi w minutę zebrać to, na co w internecie poszłoby pół godziny. Ale zbiera z pamięci, a pamięć bywa nieaktualna. Dlatego research z AI ma dwa kroki: **zebrać** i **sprawdzić**.',
    'Zbieranie: poproś o **tabelę** i o **kryteria**, czyli na co patrzeć. Sprawdzanie: zanim wydasz pieniądze albo coś zbudujesz, potwierdź najważniejszą rzecz w **drugim miejscu**. Drugie miejsce to wyszukiwarka, Wikipedia, opakowanie w sklepie albo rodzic.'
  ],
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
    { text: 'Zapytaj o kryteria, czyli na co patrzeć przy wyborze.', prompt: 'Podaj 3 rzeczy, na które muszę zwrócić uwagę przy kupowaniu filamentu, żeby nie kupić złego. Krótko.' },
    { text: 'Zapytaj, czego AI nie jest pewne.', prompt: 'Skąd to wiesz? Które informacje w tabeli mogą być nieaktualne albo zależeć od sklepu?' },
    { text: 'Sprawdź w drugim miejscu. Wpisz w wyszukiwarkę `filament PLA 1.75 cena` i porównaj cenę z tym, co powiedziało AI. Zapisz sobie, czy się zgadzało.', tip: 'Różnica to normalna rzecz. AI nie widzi dzisiejszych cen, chyba że ma włączone szukanie w sieci. Ważne, że Ty to wiesz.' },
    { text: 'Zrób to samo z rzeczą, którą naprawdę chcesz kupić albo wybrać. Uzupełnij i wyślij w nowym czacie.', prompt: 'Mam 10 lat i chcę wybrać ... (rzecz). Mam do wydania ... zł. Porównaj 3 opcje w tabeli i podaj 3 kryteria, na które patrzeć. Na końcu: co byś wybrał i dlaczego, w 2 zdaniach.' }
  ],
  check: [
    'Masz tabelę i umiesz powiedzieć 3 kryteria wyboru.',
    'Zapytałeś `Skąd to wiesz?` i wiesz, czego AI nie jest pewne.',
    'Sprawdziłeś przynajmniej jedną rzecz w drugim miejscu.'
  ],
  followups: [
    'Skąd to wiesz?',
    'Zrób z tego tabelę.',
    'Podaj 3 kryteria, na które patrzeć.',
    'Co byś wybrał na moim miejscu i dlaczego? 2 zdania.',
    'Co powinienem sprawdzić, zanim kupię?'
  ],
  solo: {
    text: 'Wybierz coś, co Cię ciekawi z II wojny światowej: dwa czołgi, dwa samoloty, dwie bitwy. Poproś o porównanie w tabeli i sprawdź jedną liczbę z tabeli w Wikipedii.',
    hints: ['Tabela: `Porównaj X i Y w tabeli: ...` i wypisz, co ma być w kolumnach.', 'Do Wikipedii: wpisz nazwę w wyszukiwarkę z dopiskiem `wikipedia`.', 'Zgadza się? Świetnie. Nie zgadza? Jeszcze lepiej, masz temat na Dziennik.']
  },
  discovery: 'Jakich pytań nie zadałem, a powinienem, zanim wydam pieniądze na filament? Podaj 3, krótko.',
  journalPrompt: 'Co się zgadzało po sprawdzeniu w drugim miejscu, a co nie?',
  parent: 'Zanim cokolwiek kupisz, pokaż rodzicowi tabelę i to, co sprawdziłeś w drugim miejscu. Zakupy to zawsze wspólna decyzja.',
  forParent: {
    teaches: 'Research w dwóch krokach: zebrać (tabela, kryteria, pytanie "skąd to wiesz") i sprawdzić w drugim miejscu przed decyzją.',
    ask: 'Zapytaj, co sprawdził w drugim miejscu i czy się zgadzało. Obejrzyjcie tabelę razem przed jakimkolwiek zakupem.'
  }
},
{
  id: 5,
  title: 'Rozbij duży plan na kroki',
  subtitle: 'Z wielkiej rzeczy zrób listę małych',
  technique: 'Plan w krokach',
  minutes: 30,
  why: [
    'Duże rzeczy przerażają, bo nie wiadomo, od czego zacząć. Wypad do lasu, projekt na konkurs, porządek w pokoju. AI świetnie rozbija duże na małe: **co najpierw**, **co potem**, **co może pójść nie tak**, **checklista**.',
    'Ty decydujesz, co jest celem. AI układa kroki. A potem to Ty je robisz, więc plan musi być dla Ciebie, nie dla dorosłego z samochodem i portfelem.'
  ],
  example: {
    intro: 'Cel: cały dzień w lesie z kumplami i rodzicami, z ogniskiem.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Planuję z rodzicami i 3 kumplami cały dzień w lesie, z ogniskiem. Zrób plan w krokach: co przygotować dzień wcześniej, co rano, co robić w lesie. Krótko, w punktach.' },
      { who: 'ai', text: 'Dzień wcześniej: 1. Ustalcie z rodzicami miejsce i godziny. 2. Spakuj plecak (lista z misji 2). 3. Naładuj latarkę. Rano: 4. Sprawdź pogodę. 5. Weź wodę i jedzenie z lodówki. W lesie: 6. Najpierw obóz i miejsce na ognisko, z dorosłym. 7. Zbieranie drewna: tylko suche, leżące. 8. Gry: podchody, budowa szałasu. 9. Gaszenie ogniska wodą do zimna. 10. Sprzątanie, nic nie zostaje.' },
      { who: 'ty', text: 'Co może pójść nie tak? 5 rzeczy i co wtedy zrobić.' },
      { who: 'ai', text: '1. Deszcz: folia NRC i kurtki, ognisko pod osłoną. 2. Ktoś się skaleczy: apteczka, dorosły. 3. Ktoś się zgubi: zasada "stój i gwiżdż trzy razy". 4. Mokre drewno: brzozowa kora i drobne gałązki na rozpałkę. 5. Kleszcze: długie spodnie, sprawdzenie po powrocie.' }
    ],
    note: 'Pytanie `co może pójść nie tak?` to ulubione pytanie każdego, kto planuje na serio. Zadawaj je zawsze, nawet przy urodzinach.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o plan w krokach.', prompt: 'Mam 10 lat. Planuję z rodzicami i 3 kumplami cały dzień w lesie, z ogniskiem. Zrób plan w krokach: co przygotować dzień wcześniej, co rano, co robić w lesie. Krótko, w punktach.' },
    { text: 'Zapytaj o problemy, zanim się zdarzą.', prompt: 'Co może pójść nie tak? Podaj 5 rzeczy i co wtedy zrobić. Krótko.' },
    { text: 'Dopasuj plan do siebie. Powiedz AI, co z planu nie zależy od Ciebie, i poproś o wersję z Twoimi zadaniami.', prompt: 'Rzeczy z samochodem, zakupami i ogniem robią dorośli. Zrób osobną listę tylko z tym, co mogę zrobić sam, jako 10-latek.' },
    { text: 'Zamień plan w checklistę.', prompt: 'Zrób z tego checklistę do odhaczania, maksymalnie 12 punktów, w kolejności robienia.', tip: 'Checklistę możesz skopiować z ChatGPT i wkleić do notatnika na komputerze albo wydrukować. Odhaczanie robi robotę.' },
    { text: 'Teraz Twoja własna duża rzecz. Uzupełnij i wyślij w nowym czacie.', prompt: 'Mam 10 lat. Chcę ... (duża rzecz: zrobić, zorganizować, nauczyć się). Mam na to ... (czas). Rozbij to na kroki po kolei, krótko. Potem powiedz, co może pójść nie tak.' }
  ],
  check: [
    'Masz plan, w którym pierwszy krok jest tak mały, że możesz go zrobić dziś.',
    'Wiesz, co może pójść nie tak, i masz na to odpowiedź.',
    'Plan zawiera tylko rzeczy, które naprawdę zależą od Ciebie.'
  ],
  followups: [
    'Co najpierw? Tylko jedna rzecz.',
    'Co może pójść nie tak?',
    'Zrób z tego checklistę.',
    'Który krok jest najtrudniejszy i jak go ułatwić?',
    'Ile czasu zajmie każdy krok?'
  ],
  solo: {
    text: 'Zaplanuj z AI coś prawdziwego na najbliższy tydzień: porządek w pokoju w 3 podejściach, nauka do sprawdzianu, budowa czegoś z kumplem. Zrób pierwszy krok jeszcze dziś.',
    hints: ['Karta startowa, a potem: `Rozbij to na kroki.`', 'Zawsze: `Co może pójść nie tak?`', 'Na koniec: `Zrób z tego checklistę.`']
  },
  discovery: 'Gdybyś był mną, co w tym planie zrobiłbyś inaczej? Podaj 3 rzeczy, krótko.',
  journalPrompt: 'Jaki pierwszy krok z planu zrobiłeś albo zrobisz dziś?',
  parent: 'Pokaż rodzicowi plan wypadu i checklistę. Rodzic zatwierdza miejsce, godziny i wszystko, co dotyczy ognia.',
  forParent: {
    teaches: 'Rozbijanie dużego celu na kroki, pytanie "co może pójść nie tak", oddzielanie zadań dziecka od zadań dorosłych, checklista.',
    ask: 'Poproś o plan i zapytaj, który krok jest jego, a który Wasz. Ustalcie termin pierwszego kroku.'
  }
});
