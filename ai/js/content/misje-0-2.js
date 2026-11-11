/* Misje 0-2. Treść po polsku dla 10-latka. Formatowanie: **gruby**, `kod`, [[klawisz]].
   Misja mieści się w 20 minutach. Tematy, które się nie zmieściły, siedzą w `bonus` (sekcja „Na inny dzień”). */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.missions = window.AKADEMIA.missions || [];
window.AKADEMIA.missions.push(
{
  id: 'rozruch',
  updated: '2026-11-11',
  title: 'Rozruch',
  subtitle: 'Zasady gry, mapa ekranu i pierwsze słowa do AI',
  technique: 'Zasady gry',
  minutes: 20,
  why: [
    'ChatGPT to program, który przeczytał ogromną część internetu i książek. Nauczył się z tego, jak wyglądają dobre odpowiedzi. Dlatego umie wyjaśniać, podpowiadać i pisać. Ale nie jest człowiekiem i nie zawsze ma rację.',
    'Najlepiej działa, gdy mówisz mu jasno, czego chcesz. Tego będziesz się uczyć przez całą Akademię. Dziś: zasady, mapa ekranu, kilka skrótów, pierwsza rozmowa i jedna ważna różnica: kiedy pytać AI, a kiedy wyszukiwarkę.'
  ],
  realWorld: 'Lekarze, prawnicy i programiści też mają zasady pracy z AI. W wielu firmach nie wolno wklejać do czatu danych klientów ani pacjentów. Twoja zasada „nie podaję prywatnych rzeczy” to ta sama zasada, tylko w wersji dla Ciebie.',
  example: {
    intro: 'Tak może wyglądać pierwsza wymiana zdań. Krótko z Twojej strony, krótko z jego.',
    turns: [
      { who: 'ty', text: 'Cześć! Mam 10 lat i uczę się dobrze rozmawiać z AI. Odpowiadaj krótko i prosto, po polsku. Na start: opowiedz mi jedną zaskakującą rzecz o drukarkach 3D, w maksymalnie 3 zdaniach.' },
      { who: 'ai', text: 'Cześć! Na Międzynarodowej Stacji Kosmicznej działa drukarka 3D. Astronauci wydrukowali na niej klucz, którego projekt wysłano z Ziemi mailem. Zamiast czekać miesiące na rakietę z narzędziem, mieli je w kilka godzin.' }
    ],
    note: 'Zauważ: poprosiłeś o 3 zdania i dostałeś 3 zdania. AI słucha, gdy mówisz mu, jak ma odpowiadać.'
  },
  steps: [
    { text: 'Poznaj cztery zasady Akademii. **1.** Nie podajesz nazwiska, adresu, nazwy szkoły ani zdjęć ludzi. **2.** AI może się mylić, więc ważne rzeczy sprawdzasz. **3.** AI wyjaśnia i podpowiada, ale zadania domowe robisz sam. **4.** AI to nie kolega. Zawsze jest miłe i zawsze ma czas, ale Cię nie zna i nic dla niego nie znaczysz. Sekrety, smutki i trudne sprawy mówisz rodzicowi albo komuś bliskiemu, nie botowi.', tip: 'Zasady wrócą w misjach. Nie musisz ich zapamiętać dziś, wystarczy raz przeczytać.' },
    { text: 'Skróty, które oszczędzą Ci mnóstwo pisania: [[Ctrl]] + [[C]] kopiuje zaznaczony tekst, [[Ctrl]] + [[V]] wkleja, [[Ctrl]] + [[A]] zaznacza wszystko. W ChatGPT [[Enter]] wysyła wiadomość, a [[Shift]] + [[Enter]] robi nową linię bez wysyłania.' },
    { text: 'Otwórz ChatGPT razem z rodzicem, na jego koncie, i wejdź do Twojego projektu. Znajdź na ekranie cztery miejsca: **Nowy czat** (czysta kartka), **listę czatów** po lewej (tu wracasz do starych rozmów), **pole wiadomości** na dole i **przycisk +** obok niego (zdjęcia i narzędzia, przydadzą się później). Kliknij **Nowy czat**.', tip: 'Nowy czat to czysta kartka. Gdy zmieniasz temat, zaczynaj nowy czat. Wtedy AI się nie gubi.' },
    { text: 'Skopiuj ten tekst przyciskiem, wklej w okno czatu ([[Ctrl]] + [[V]]) i wyślij ([[Enter]]).', prompt: 'Cześć! Mam 10 lat i uczę się dobrze rozmawiać z AI. Odpowiadaj krótko i prosto, po polsku. Na start: opowiedz mi jedną zaskakującą rzecz o drukarkach 3D, w maksymalnie 3 zdaniach.' },
    { text: 'Teraz napisz sam jedną krótką wiadomość o tym, co Cię w odpowiedzi zaciekawiło. Wystarczy kilka słów, np. `a jak to działa?`', tip: 'Nie musisz pisać pełnych zdań ani dbać o literówki. AI zrozumie.' },
    { text: 'AI czy wyszukiwarka? AI uczyło się z tekstów do jakiegoś dnia i o tym, co stało się potem, samo z siebie nie wie. Zapytaj je, kiedy lepiej pytać jego, a kiedy wyszukiwarkę.', prompt: 'Kiedy lepiej zapytać Ciebie, a kiedy wpisać pytanie w wyszukiwarkę? Podaj 3 przykłady do każdego, krótko, dla 10-latka.', tip: 'Prosta zasada: **dziś, teraz, cena, godzina otwarcia, wynik meczu**: wyszukiwarka albo prośba do AI `Poszukaj w internecie`. **Wyjaśnij, wymyśl, zaplanuj, popraw**: AI.' }
  ],
  check: [
    'AI odpowiedziało krótko, tak jak prosiłeś.',
    'Pokażesz palcem nowy czat, listę czatów, pole wiadomości i przycisk +.',
    'Wkleiłeś tekst klawiszami, nie przepisywałeś go.',
    'Umiesz powiedzieć, o co pytasz AI, a co sprawdzasz w wyszukiwarce.'
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
  bonus: [
    { title: 'Co AI o Tobie pamięta', text: 'ChatGPT potrafi pamiętać rzeczy z wcześniejszych rozmów, na przykład że lubisz drukarki 3D. Sprawdźcie z rodzicem, co pamięta w Twoim projekcie. Czat tymczasowy nie zapamiętuje niczego. To jeszcze jeden powód, żeby nie pisać prywatnych rzeczy: nie zawsze wiesz, co zostanie zapamiętane.', prompt: 'Co pamiętasz o mnie z wcześniejszych rozmów w tym projekcie? Wypisz krótko w punktach.', tip: 'Rób to z rodzicem. Jeśli AI pamięta coś, czego nie chcesz, rodzic usunie to w ustawieniach pamięci.' },
    { title: 'Do kiedy sięga Twoja wiedza?', text: 'Każde AI uczyło się do jakiegoś dnia. Zapytaj je o to wprost. Potem zapytaj o coś, co na pewno wydarzyło się w tym tygodniu, i zobacz, czy samo poszuka w internecie, czy przyzna, że nie wie.', prompt: 'Do kiedy sięga Twoja wiedza? Co ważnego mogło się wydarzyć potem, czego możesz nie wiedzieć? Odpowiedz w 3 zdaniach.' }
  ],
  discovery: 'Jestem 10-latkiem i dopiero zaczynam z AI. Podaj 5 rzeczy, w których możesz mi pomóc w zwykłym dniu. Każda w jednym zdaniu.',
  journalPrompt: 'Jedno zdanie: co Cię zaskoczyło w pierwszej rozmowie?',
  parent: 'Pokaż rodzicowi pierwszą rozmowę i powiedz mu cztery zasady własnymi słowami.',
  forParent: {
    teaches: 'Cztery zasady bezpieczeństwa (czwarta: AI to nie kolega, trudne sprawy do ludzi), mapa ekranu ChatGPT, skróty klawiszowe, nowy czat, pierwsza krótka wymiana zdań, kiedy pytać AI, a kiedy wyszukiwarkę.',
    ask: 'Poproś, żeby powiedział cztery zasady własnymi słowami. Zapytaj, co go zaskoczyło i o co zapytałby wyszukiwarkę zamiast AI.'
  }
},
{
  id: 'karta-startowa',
  updated: '2026-11-11',
  title: 'Powiedz, kim jesteś i czego chcesz',
  subtitle: 'Karta startowa: trzy zdania, które zmieniają wszystko',
  technique: 'Karta startowa',
  minutes: 20,
  why: [
    'AI nie wie, kim jesteś. Nie wie, że masz 10 lat, że to Twój pierwszy wydruk i że masz godzinę. Jeśli tego nie powiesz, dostaniesz odpowiedź dla nikogo: długą, ogólną, nudną.',
    'Karta startowa to trzy zdania na początek rozmowy: **kim jestem**, **czego chcę** (i po co), **jak ma wyglądać odpowiedź**. Zajmuje 20 sekund, a oszczędza 10 minut przewijania. Dziś nauczysz się też, jak zapisać kartę na stałe, żeby nie wpisywać jej za każdym razem.'
  ],
  realWorld: 'Projektant, który drukuje części w 3D dla klientów, zawsze najpierw pyta: do czego ta część, jaki ma mieć rozmiar, ile może kosztować. Bez tego wydrukuje coś ładnego, ale nieprzydatnego. Karta startowa to te same pytania, tylko odpowiadasz na nie, zanim AI zapyta.',
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
    { text: 'Teraz Twoja własna karta startowa, o czymkolwiek. Uzupełnij luki i wyślij w nowym czacie. Zwróć uwagę na **po co**: gdy AI wie, do czego Ci to, dobiera odpowiedź do celu.', prompt: 'Mam 10 lat i ... (co robisz albo co masz). Chcę ... (jeden cel), bo ... (po co: na sprawdzian w piątek, żeby pokazać kumplom, na prezent). Odpowiedz ... (krótko / w punktach / w 5 zdaniach / jak dla 10-latka).' },
    { text: 'Pisanie idzie wolno? Niech AI ułoży kartę za Ciebie. Wyślij to w nowym czacie i odpowiadaj jednym słowem.', prompt: 'Zadaj mi po kolei 4 krótkie pytania: ile mam lat, co lubię, w czym najczęściej chcę pomocy i jakie odpowiedzi lubię. Odpowiem jednym słowem. Na końcu ułóż z moich odpowiedzi kartę startową w 3 zdaniach, do skopiowania.', tip: 'Gotową kartę skopiuj przyciskiem pod odpowiedzią. Przyda się w następnym kroku.' },
    { text: 'Karta na stałe. Z rodzicem wklejcie kartę w **instrukcje Twojego projektu** w ChatGPT. Od teraz każdy nowy czat w projekcie zna ją sam. W instrukcjach trzymasz to, co się nie zmienia: **kim jestem** i **jak ma wyglądać odpowiedź**. W czacie piszesz tylko, **czego chcesz teraz**.', tip: 'Instrukcje ustawia rodzic, na stronie projektu (pole z instrukcjami albo trzy kropki, ustawienia projektu). Potem sprawdź: nowy czat w projekcie i samo `Co wydrukować na godzinę?`. Czy AI pamięta, że masz 10 lat?' }
  ],
  check: [
    'Odpowiedź ma dokładnie taką formę, o jaką prosiłeś: liczba punktów, długość, prostota.',
    'Twoja własna karta mówi, po co Ci odpowiedź.',
    'Twój projekt ma kartę w instrukcjach i nowy czat bez karty i tak wie, że masz 10 lat.',
    'Umiesz powiedzieć z pamięci trzy części karty startowej.'
  ],
  followups: [
    'Zadaj mi 3 krótkie pytania, żeby lepiej mi pomóc. Odpowiem jednym słowem.',
    'Krócej. Maksymalnie 3 zdania.',
    'Wybieram numer 2. Czego potrzebuję i ile to potrwa? Krok po kroku, krótko.'
  ],
  solo: {
    text: 'W nowym czacie użyj karty startowej do czegoś z Twojego dnia: gra, kolega, coś do zbudowania, pytanie z lekcji. Bez kopiowania, własnymi słowami, mogą być literówki.',
    hints: ['Kim jestem: wiek i sytuacja w jednym zdaniu.', 'Czego chcę i po co: jedna rzecz, nie trzy.', 'Jak odpowiedzieć: `w 5 punktach`, `w 3 zdaniach`, `jak dla 10-latka`.']
  },
  bonus: [
    { title: 'Pokaż przykład', text: 'Gdy trudno opisać, jak ma wyglądać odpowiedź, pokaż ją. Jeden przykład mówi więcej niż długi opis.', prompt: 'Zrób mi listę 5 rzeczy do zabrania na basen, w takim stylu jak ten przykład: `Ręcznik, bo mokry nie wrócisz autobusem.` Każda rzecz z krótkim, śmiesznym powodem.' },
    { title: 'Powiedz, czego nie chcesz', text: 'Czasem łatwiej powiedzieć, czego nie chcesz, niż czego chcesz. AI słucha zakazów tak samo jak próśb.', prompt: 'Wyjaśnij mi, jak działa drukarka 3D. Bez trudnych słów, bez angielskich nazw i bez listy dłuższej niż 5 punktów.' },
    { title: 'Nazwij czat i wróć', text: 'Na liście czatów po lewej najedź na rozmowę, kliknij trzy kropki i zmień nazwę na taką, którą znajdziesz za tydzień, np. `Wydruk breloczka`. Gdy wrócisz po kilku dniach, pisz w tym samym czacie, nie w nowym.', prompt: 'Wracam po kilku dniach. Przypomnij w 3 punktach, co ustaliliśmy, i powiedz, co mam zrobić teraz.' }
  ],
  discovery: 'Znasz już moją kartę startową. Co jeszcze warto Ci o mnie powiedzieć, żebyś pomagał mi lepiej? Podaj 3 rzeczy, krótko.',
  journalPrompt: 'Co zmieniło się w odpowiedzi, gdy dodałeś kartę startową?',
  parent: 'Wklejcie razem kartę w instrukcje projektu. Przeczytaj ją przed zapisaniem: nie może tam być nazwiska, szkoły ani adresu.',
  forParent: {
    teaches: 'Kontekst i cel na starcie rozmowy: kim jestem, czego chcę i po co, jak ma wyglądać odpowiedź. Karta ułożona przez AI z odpowiedzi jednym słowem. Karta na stałe w instrukcjach projektu (stałe rzeczy tam, bieżąca prośba w czacie).',
    ask: 'Poproś, żeby pokazał dwa początki rozmowy i powiedział, czym różniły się odpowiedzi. Ustawcie razem instrukcje projektu i sprawdźcie, czy nowy czat je zna.'
  }
},
{
  id: 'dopytuj',
  updated: '2026-11-11',
  title: 'Dopytuj i poprawiaj',
  subtitle: 'Nie zaczynaj od nowa. Powiedz, co zmienić.',
  technique: 'Dopytywanie',
  minutes: 20,
  why: [
    'Pierwsza odpowiedź AI rzadko jest najlepsza. To pierwszy szkic. Dobra wiadomość: nie musisz pisać wszystkiego od nowa. Wystarczy jedno słowo albo krótkie zdanie o tym, co zmienić.',
    'Sześć słów robi większość roboty: **krócej**, **prościej**, **inaczej**, **dodaj**, **usuń**, **dlaczego**. Do tego trzy sztuczki, przy których prawie nie piszesz: **zaznacz i zapytaj**, **ołówek** do poprawiania własnej wiadomości i **odpowiadanie literą**. Rozmowa z AI to nie jeden strzał. To ping-pong.'
  ],
  realWorld: 'Montażysta nie składa filmu za jednym razem. Reżyser ogląda wersję i mówi: krócej tutaj, wytnij to, dodaj muzykę. I tak kilkanaście razy. Tak powstał każdy odcinek serialu, który oglądasz.',
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
    { text: 'Zaznacz i zapytaj. Zaznacz myszką na liście jedną rzecz, której nie rozumiesz. Obok zaznaczenia pojawi się mały przycisk do pytania o ten kawałek. Kliknij go i dopisz jedno słowo: `Po co?`', tip: 'Nie widzisz przycisku? Napisz po prostu `Po co numer 4?`. Działa tak samo, tylko trzeba więcej pisać.' },
    { text: 'Zmień warunki, ale chroń to, co dobre. Powiedz AI, co ma zostać.', prompt: 'A jeśli będzie padać cały dzień? Popraw listę. Wodę, apteczkę i latarkę zostaw bez zmian.', tip: 'Gdy coś Ci się podoba, powiedz to: `To zostaw, zmień tylko ...`. Inaczej AI czasem poprawi też to, co było dobre.' },
    { text: 'Ołówek. Najedź myszką na swoją pierwszą wiadomość i kliknij ikonę ołówka pod nią. Zmień `trzema kumplami` na `dwoma kumplami i psem` i wyślij. AI napisze listę od nowa, od tego miejsca.', tip: 'Ołówek przydaje się, gdy w wiadomości była literówka albo zły pomysł. Zamiast tłumaczyć, co miałeś na myśli, poprawiasz i wysyłasz jeszcze raz.' },
    { text: 'Niech AI pyta, a Ty odpowiadasz literą.', prompt: 'Zadawaj mi po jednym pytaniu o ten wypad, z odpowiedziami A, B i C do wyboru. Ja odpowiem jedną literą. Po każdej mojej odpowiedzi popraw listę.', tip: 'To najlepszy trik dla kogoś, kto nie lubi dużo pisać. Ty piszesz jedną literę, AI robi resztę.' }
  ],
  check: [
    'Lista po Twoich wiadomościach jest inna niż na początku: krótsza, jaśniejsza, dopasowana do Ciebie.',
    'Ani razu nie zaczynałeś rozmowy od nowa.',
    'Poprawiłeś swoją wiadomość ołówkiem i dopytałeś o kawałek przez zaznaczenie.',
    'Rozumiesz, po co jest każda rzecz na liście.'
  ],
  followups: [
    'Krócej.',
    'Prościej, jak dla 10-latka.',
    'Inaczej. Daj inny pomysł.',
    'Dodaj coś do jedzenia.',
    'To zostaw. Zmień tylko ... .',
    'Dlaczego?'
  ],
  solo: {
    text: 'Poproś AI o cokolwiek: przepis, pomysł na zabawę, wyjaśnienie. Potem popraw odpowiedź trzema krótkimi wiadomościami. Cel: po trzeciej odpowiedź ma być dokładnie taka, jakiej chcesz.',
    hints: ['Użyj słów: krócej, prościej, inaczej, dodaj, usuń.', 'Zła pierwsza wiadomość? Ołówek, popraw, wyślij jeszcze raz.', 'Jeśli AI nie rozumie, powiedz, co Ci się nie podoba: `to za trudne`, `to nie dla dzieci`, `to nudne`.']
  },
  bonus: [
    { title: 'Podsumuj i zacznij czysto', text: 'Bardzo długi czat zaczyna się gubić: AI zapomina, co było na początku, albo miesza. Wtedy poproś o podsumowanie, skopiuj je i wklej w nowy czat.', prompt: 'Podsumuj w 5 punktach wszystko, co ustaliliśmy w tej rozmowie. Tak, żebym mógł to wkleić w nowy czat i od razu działać dalej.' },
    { title: 'Słownik trudnych słów', text: 'Trafiłeś na słowo, którego nie znasz? Nie zgaduj i nie przeskakuj. Zapytaj od razu, w tym samym czacie. Na koniec długiej rozmowy możesz poprosić o cały słowniczek.', prompt: 'Zrób mi słowniczek trudnych słów z tej rozmowy. Każde słowo w jednym zdaniu, z przykładem z życia 10-latka.' }
  ],
  discovery: 'Jakie 3 pytania powinienem Ci jeszcze zadać, żeby ta lista była naprawdę dobra? Zadaj mi je po kolei.',
  journalPrompt: 'Które krótkie słowo albo która sztuczka najbardziej zmieniła odpowiedź?',
  parent: 'Pokaż rodzicowi końcową listę do plecaka i zapytaj, co by dodał albo wyrzucił. Rodzic jest tu lepszym sprawdzeniem niż AI.',
  forParent: {
    teaches: 'Poprawianie odpowiedzi krótkimi wiadomościami zamiast zaczynania od nowa. Sztuczki z małą ilością pisania: zaznacz i zapytaj, ołówek przy własnej wiadomości, odpowiadanie literą. Mówienie, co ma zostać bez zmian.',
    ask: 'Poproś, żeby pokazał, jak zmieniała się lista po każdej wiadomości, i jak działa ołówek. Sprawdźcie listę razem.'
  }
});
