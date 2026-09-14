/* Misje 0-2. Treść po polsku dla 10-latka. Formatowanie: **gruby**, `kod`, [[klawisz]]. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 0,
  title: 'Rozruch',
  subtitle: 'Zasady gry i pierwsze słowa do AI',
  technique: 'Zasady gry',
  minutes: 15,
  why: [
    'ChatGPT to program, który przeczytał ogromną część internetu i książek. Nauczył się z tego, jak wyglądają dobre odpowiedzi. Dlatego umie wyjaśniać, podpowiadać i pisać. Ale nie jest człowiekiem i nie zawsze ma rację.',
    'Najlepiej działa, gdy mówisz mu jasno, czego chcesz. Tego będziesz się uczyć przez całą Akademię. Dziś: zasady, kilka skrótów i pierwsza rozmowa.'
  ],
  example: {
    intro: 'Tak może wyglądać pierwsza wymiana zdań. Krótko z Twojej strony, krótko z jego.',
    turns: [
      { who: 'ty', text: 'Cześć! Mam 10 lat i uczę się dobrze rozmawiać z AI. Odpowiadaj krótko i prosto, po polsku. Na start: opowiedz mi jedną zaskakującą rzecz o drukarkach 3D, w maksymalnie 3 zdaniach.' },
      { who: 'ai', text: 'Cześć! Na Międzynarodowej Stacji Kosmicznej działa drukarka 3D. Astronauci wydrukowali na niej klucz, którego projekt wysłano z Ziemi mailem. Zamiast czekać miesiące na rakietę z narzędziem, mieli je w kilka godzin.' }
    ],
    note: 'Zauważ: poprosiłeś o 3 zdania i dostałeś 3 zdania. AI słucha, gdy mówisz mu, jak ma odpowiadać.'
  },
  steps: [
    { text: 'Poznaj cztery zasady Akademii. **1.** Nie podajesz nazwiska, adresu, nazwy szkoły ani zdjęć ludzi. **2.** AI może się mylić, więc ważne rzeczy sprawdzasz. **3.** AI wyjaśnia i podpowiada, ale zadania domowe robisz sam. **4.** O trudnych i smutnych sprawach rozmawiasz z rodzicem, nie z botem.', tip: 'Zasady wrócą w misjach. Nie musisz ich zapamiętać dziś, wystarczy raz przeczytać.' },
    { text: 'Skróty, które oszczędzą Ci mnóstwo pisania: [[Ctrl]] + [[C]] kopiuje zaznaczony tekst, [[Ctrl]] + [[V]] wkleja, [[Ctrl]] + [[A]] zaznacza wszystko. W ChatGPT [[Enter]] wysyła wiadomość, a [[Shift]] + [[Enter]] robi nową linię bez wysyłania.' },
    { text: 'Otwórz ChatGPT razem z rodzicem, na jego koncie, i wejdź do Twojego projektu. Kliknij **Nowy czat**.', tip: 'Nowy czat to czysta kartka. Gdy zmieniasz temat, zaczynaj nowy czat. Wtedy AI się nie gubi.' },
    { text: 'Skopiuj ten tekst przyciskiem, wklej w okno czatu ([[Ctrl]] + [[V]]) i wyślij ([[Enter]]).', prompt: 'Cześć! Mam 10 lat i uczę się dobrze rozmawiać z AI. Odpowiadaj krótko i prosto, po polsku. Na start: opowiedz mi jedną zaskakującą rzecz o drukarkach 3D, w maksymalnie 3 zdaniach.' },
    { text: 'Teraz napisz sam jedną krótką wiadomość o tym, co Cię w odpowiedzi zaciekawiło. Wystarczy kilka słów, np. `a jak to działa?`', tip: 'Nie musisz pisać pełnych zdań ani dbać o literówki. AI zrozumie.' }
  ],
  check: [
    'AI odpowiedziało krótko, tak jak prosiłeś.',
    'Wiesz, gdzie jest przycisk nowego czatu.',
    'Wkleiłeś tekst klawiszami, nie przepisywałeś go.'
  ],
  followups: [
    'Powiedz to jeszcze prościej.',
    'Skąd to wiesz?',
    'A co z tego wynika dla mnie?'
  ],
  solo: {
    text: 'Zapytaj AI o coś, co Cię dziś zaciekawiło, jednym zdaniem. Potem dopytaj jednym słowem: `Dlaczego?`',
    hints: ['Może być cokolwiek: gra, zwierzę, pogoda, dlaczego niebo jest niebieskie.', 'Literówki nie przeszkadzają. Długość też nie.']
  },
  discovery: 'Jestem 10-latkiem i dopiero zaczynam z AI. Podaj 5 rzeczy, w których możesz mi pomóc w zwykłym dniu. Każda w jednym zdaniu.',
  journalPrompt: 'Jedno zdanie: co Cię zaskoczyło w pierwszej rozmowie?',
  parent: 'Pokaż rodzicowi pierwszą rozmowę i powiedz mu cztery zasady własnymi słowami.',
  forParent: {
    teaches: 'Cztery zasady bezpieczeństwa, skróty klawiszowe, nowy czat, pierwsza krótka wymiana zdań.',
    ask: 'Poproś, żeby powiedział cztery zasady własnymi słowami. Zapytaj, co go zaskoczyło.'
  }
},
{
  id: 1,
  title: 'Powiedz, kim jesteś i czego chcesz',
  subtitle: 'Karta startowa: trzy zdania, które zmieniają wszystko',
  technique: 'Karta startowa',
  minutes: 25,
  why: [
    'AI nie wie, kim jesteś. Nie wie, że masz 10 lat, że to Twój pierwszy wydruk i że masz godzinę. Jeśli tego nie powiesz, dostaniesz odpowiedź dla nikogo: długą, ogólną, nudną.',
    'Karta startowa to trzy zdania na początek rozmowy: **kim jestem**, **czego chcę**, **jak ma wyglądać odpowiedź**. Zajmuje 20 sekund, a oszczędza 10 minut przewijania.'
  ],
  example: {
    intro: 'Ta sama sprawa, dwa początki.',
    turns: [
      { who: 'ty', text: 'drukarka 3d co wydrukować' },
      { who: 'ai', text: 'Oto 20 pomysłów na wydruki 3D: 1. Wazon o organicznym kształcie. 2. Uchwyt na słuchawki. 3. Organizer na kable. 4. Doniczka samonawadniająca... (i tak dalej przez pół ekranu)' },
      { who: 'ty', text: 'Mam 10 lat i pierwszy raz sam wydrukuję coś na drukarce 3D rodzica. Chcę coś prostego i fajnego, na godzinę druku. Zaproponuj 5 pomysłów, każdy w jednym zdaniu, i powiedz, który jest najłatwiejszy.' },
      { who: 'ai', text: '1. Breloczek z Twoim inicjałem, płaski, drukuje się szybko. 2. Kostka do gry z wgłębionymi oczkami. 3. Klips do zamykania paczki chipsów. 4. Mały stojak na telefon. 5. Gwizdek, który naprawdę gwiżdże. Najłatwiejszy: breloczek, bo jest płaski i nic w nim nie może się przewrócić w trakcie druku.' }
    ],
    note: 'Drugi początek dostał odpowiedź dla siebie: krótką, na temat, z decyzją. Różnica to trzy zdania.'
  },
  steps: [
    { text: 'Nowy czat. Skopiuj kartę startową i wyślij.', prompt: 'Mam 10 lat i pierwszy raz sam wydrukuję coś na drukarce 3D rodzica. Chcę coś prostego i fajnego, na godzinę druku. Zaproponuj 5 pomysłów, każdy w jednym zdaniu, i powiedz, który jest najłatwiejszy.' },
    { text: 'Przeczytaj odpowiedź i sprawdź: jest 5 pomysłów? Każdy w jednym zdaniu? AI wskazało najłatwiejszy? Jeśli nie, napisz krótko: `Prosiłem o 5 pomysłów, po jednym zdaniu.`', tip: 'AI czasem zapomina o formie. Przypomnienie jednym zdaniem zwykle wystarcza.' },
    { text: 'Wybierz jeden pomysł i dopytaj, co musisz przygotować.', prompt: 'Wybieram numer 2. Czego potrzebuję i ile to potrwa? Krok po kroku, krótko.' },
    { text: 'Teraz Twoja własna karta startowa, o czymkolwiek. Uzupełnij trzy luki i wyślij w nowym czacie.', prompt: 'Mam 10 lat i ... (co robisz albo co masz). Chcę ... (jeden cel). Odpowiedz ... (krótko / w punktach / w 5 zdaniach / jak dla 10-latka).', tip: 'Pisanie idzie wolno? Jest trik: skopiuj kartę, a na końcu dopisz: `Zadaj mi najpierw 3 krótkie pytania, odpowiem jednym słowem.` AI zrobi robotę pytania za Ciebie.' }
  ],
  check: [
    'Odpowiedź ma dokładnie taką formę, o jaką prosiłeś: liczba punktów, długość, prostota.',
    'Nie musiałeś nic przewijać ani szukać w niej sensu.',
    'Umiesz powiedzieć z pamięci trzy części karty startowej.'
  ],
  followups: [
    'Zadaj mi 3 krótkie pytania, żeby lepiej mi pomóc. Odpowiem jednym słowem.',
    'Krócej. Maksymalnie 3 zdania.',
    'Wybieram numer 1. Co dalej?'
  ],
  solo: {
    text: 'W nowym czacie użyj karty startowej do czegoś z Twojego dnia: gra, kolega, coś do zbudowania, pytanie z lekcji. Bez kopiowania, własnymi słowami, mogą być literówki.',
    hints: ['Kim jestem: wiek i sytuacja w jednym zdaniu.', 'Czego chcę: jedna rzecz, nie trzy.', 'Jak odpowiedzieć: `w 5 punktach`, `w 3 zdaniach`, `jak dla 10-latka`.']
  },
  discovery: 'Znasz już moją kartę startową. Co jeszcze warto Ci o mnie powiedzieć, żebyś pomagał mi lepiej? Podaj 3 rzeczy, krótko.',
  journalPrompt: 'Co zmieniło się w odpowiedzi, gdy dodałeś kartę startową?',
  forParent: {
    teaches: 'Kontekst i cel na starcie rozmowy: kim jestem, czego chcę, jak ma wyglądać odpowiedź. Trik na wolne pisanie: prosić AI, żeby samo zadawało pytania.',
    ask: 'Poproś, żeby pokazał dwa początki rozmowy i powiedział, czym różniły się odpowiedzi.'
  }
},
{
  id: 2,
  title: 'Dopytuj i poprawiaj',
  subtitle: 'Nie zaczynaj od nowa. Powiedz, co zmienić.',
  technique: 'Dopytywanie',
  minutes: 25,
  why: [
    'Pierwsza odpowiedź AI rzadko jest najlepsza. To pierwszy szkic. Dobra wiadomość: nie musisz pisać wszystkiego od nowa. Wystarczy jedno słowo albo krótkie zdanie o tym, co zmienić.',
    'Sześć słów robi większość roboty: **krócej**, **prościej**, **inaczej**, **dodaj**, **usuń**, **dlaczego**. Rozmowa z AI to nie jeden strzał. To ping-pong.'
  ],
  example: {
    intro: 'Zestaw do plecaka na dzień w lesie. Patrz, jak lista zmienia się po każdej krótkiej wiadomości.',
    turns: [
      { who: 'ty', text: 'Mam 10 lat. Jadę z rodzicami i kumplami na dzień do lasu. Zrób listę rzeczy do mojego plecaka survivalowego.' },
      { who: 'ai', text: 'Oto 25 rzeczy: nóż, krzesiwo, apteczka, lina 10 m, folia NRC, latarka, zapasowe baterie, kompas, mapa... (długa lista)' },
      { who: 'ty', text: 'Za dużo. Zostaw 10 najważniejszych, od najważniejszej.' },
      { who: 'ai', text: '1. Woda, 1,5 litra. 2. Apteczka. 3. Kurtka przeciwdeszczowa. 4. Latarka. 5. Gwizdek. 6. Jedzenie. 7. Folia NRC. 8. Sznurek. 9. Czapka. 10. Worek na śmieci.' },
      { who: 'ty', text: 'Po co gwizdek?' },
      { who: 'ai', text: 'Gwizdek słychać dalej niż krzyk i nie męczy gardła. Trzy gwizdnięcia to znany sygnał: potrzebuję pomocy.' }
    ],
    note: 'Trzy krótkie wiadomości i masz listę, którą rozumiesz. Nie napisałeś ani jednego długiego zdania.'
  },
  steps: [
    { text: 'Nowy czat. Poproś o listę.', prompt: 'Mam 10 lat. Jadę z rodzicami i trzema kumplami na cały dzień do lasu, będzie ognisko. Zrób listę rzeczy do mojego plecaka.' },
    { text: 'Za dużo? Skróć jednym zdaniem.', prompt: 'Za dużo. Zostaw 10 najważniejszych, od najważniejszej.' },
    { text: 'Wybierz z listy jedną rzecz, której nie rozumiesz, i zapytaj, po co ona jest. Wystarczy: `Po co numer 4?`' },
    { text: 'Zmień warunki i patrz, jak lista się zmienia.', prompt: 'A jeśli będzie padać cały dzień? Popraw listę.' },
    { text: 'Poproś AI, żeby to ono dopytywało Ciebie.', prompt: 'Zadawaj mi po jednym pytaniu o ten wypad, a po każdej mojej odpowiedzi poprawiaj listę.', tip: 'To najlepszy trik dla kogoś, kto nie lubi dużo pisać. Ty odpowiadasz jednym słowem, AI robi resztę.' }
  ],
  check: [
    'Lista po Twoich wiadomościach jest inna niż na początku: krótsza, jaśniejsza, dopasowana do Ciebie.',
    'Ani razu nie zaczynałeś rozmowy od nowa.',
    'Rozumiesz, po co jest każda rzecz na liście.'
  ],
  followups: [
    'Krócej.',
    'Prościej, jak dla 10-latka.',
    'Inaczej. Daj inny pomysł.',
    'Dodaj coś do jedzenia.',
    'Usuń rzeczy, które ważą więcej niż kilogram.',
    'Dlaczego?'
  ],
  solo: {
    text: 'Poproś AI o cokolwiek: przepis, pomysł na zabawę, wyjaśnienie. Potem popraw odpowiedź trzema krótkimi wiadomościami. Cel: po trzeciej odpowiedź ma być dokładnie taka, jakiej chcesz.',
    hints: ['Użyj słów: krócej, prościej, inaczej, dodaj, usuń.', 'Jeśli AI nie rozumie, powiedz, co Ci się nie podoba: `to za trudne`, `to nie dla dzieci`, `to nudne`.']
  },
  discovery: 'Jakie 3 pytania powinienem Ci jeszcze zadać, żeby ta lista była naprawdę dobra? Zadaj mi je po kolei.',
  journalPrompt: 'Które krótkie słowo najbardziej zmieniło odpowiedź?',
  parent: 'Pokaż rodzicowi końcową listę do plecaka i zapytaj, co by dodał albo wyrzucił. Rodzic jest tu lepszym sprawdzeniem niż AI.',
  forParent: {
    teaches: 'Poprawianie odpowiedzi krótkimi wiadomościami zamiast zaczynania od nowa. Prośba, żeby AI samo dopytywało.',
    ask: 'Poproś, żeby pokazał, jak zmieniała się lista po każdej wiadomości. Sprawdźcie listę razem.'
  }
});
