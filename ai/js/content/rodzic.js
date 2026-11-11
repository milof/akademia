/* Strona dla rodzica. Sekcje mogą mieć `paras` (tablica akapitów) albo `html`. `table: true` wstawia tabelę misji. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.parent = {
  title: 'Dla rodzica',
  intro: [
    'Ta strona jest dla Ciebie. Akademia to 14 misji po najwyżej 20 minut, do przejścia po kolei, jedna lub dwie w tygodniu. Celem nie jest obsługa ChatGPT, tylko sposób myślenia: powiedzieć, czego chcę, poprawiać zamiast zaczynać od nowa, sprawdzać, rozbijać duże na małe i pytać AI o rzeczy, o których się nie wiedziało.',
    'Stan na listopad 2026. Regulaminy i ustawienia narzędzi zmieniają się często, więc linki poniżej traktuj jako punkt startu, nie jako gwarancję.'
  ],
  sections: [
    {
      title: 'Jak to działa',
      html: '<ul>' +
        '<li><strong>Misje idą po kolei</strong>, bo każda korzysta z poprzedniej. Możesz je odblokować wszystkie naraz przełącznikiem na dole tej strony.</li>' +
        '<li><strong>Każda misja</strong> ma: po co to (z ramką „Kto tego używa naprawdę”), przykład rozmowy, kroki z gotowymi promptami do skopiowania, listę "po czym poznasz, że wyszło", krótkie dopytania, zadanie bez ściągi, prompt odkrycia i wpis do Dziennika.</li>' +
        '<li><strong>Na inny dzień.</strong> Misja mieści się w 20 minutach. Tematy, które się nie zmieściły, czekają pod zadaniem bez ściągi jako krótkie triki po kilka minut, każdy z gotowym promptem. Do zaliczenia misji nie są potrzebne. To dobry materiał na pięć minut w środku tygodnia.</li>' +
        '<li><strong>Plakietka „nowe triki”</strong> pojawia się przy misji, którą dziecko już zrobiło, gdy dojdzie do niej nowa treść. Znika po otwarciu misji. Odhaczone kroki, których treść się zmieniła, trzeba odhaczyć jeszcze raz. Zaliczenie misji zostaje.</li>' +
        '<li><strong>Niezbędnik</strong> to ściąga wszystkich technik. Karty odblokowują się z misjami. Da się wydrukować.</li>' +
        '<li><strong>Dziennik odkryć</strong> to jedno zdanie po każdej misji. Po kilku tygodniach robi się z tego najlepszy dowód postępu, lepszy niż odznaki.</li>' +
        '<li><strong>Postęp zapisuje się tylko w tej przeglądarce</strong>, osobno dla każdego domownika. Gdy domowników jest kilku, strona po otwarciu pyta, kto się uczy. Kod zapisu całej Akademii (wszystkie kursy, wszyscy domownicy) jest na stronie startowej, w <a href="../#rodzina">Rodzina i kopia</a>. Strona sama przypomina o kopii co kilka misji.</li>' +
        '<li><strong>Imię</strong> nie jest nigdzie w kodzie strony. Domowników dodaje się w <a href="../#rodzina">Rodzina i kopia</a>. Tam jest też <strong>link-zakładka</strong>: otwiera Akademię bez hasła, od razu jako wybrany domownik. Wystarczy otworzyć go na komputerze dziecka i dodać do zakładek.</li>' +
        '<li><strong>Raport dla taty</strong> jest na stronie startowej: kilka linijek o tym, co zaliczone i co w Dzienniku, do wklejenia w wiadomość. Kartę z Niezbędnika można też udostępnić linkiem, który otwiera się bez hasła.</li>' +
        '</ul>'
    },
    {
      title: 'Hasło do strony',
      html: '<p>Wejście jest zamknięte hasłem. Jedna bramka obsługuje stronę startową i oba kursy, więc hasło wpisuje się raz na danym komputerze, a potem przeglądarka pamięta. W Ustawieniach jest przycisk „Zablokuj stronę”, który każe wpisać je ponownie — na wszystkich trzech stronach.</p>' +
        '<p><strong>Dwa hasła, dwie role.</strong> Hasło dziecka otwiera kurs normalnie: misje idą po kolei, a zaliczone misje, odhaczone kroki i Dziennik zapisują się w tej przeglądarce. Drugie hasło, tylko Twoje, włącza podgląd: wszystkie misje i karty Niezbędnika są otwarte od razu, a strona <strong>nic nie zapisuje</strong>. Możesz klikać, zaliczać i cofać — po odświeżeniu postęp dziecka jest dokładnie taki, jak był. W podglądzie na dole ekranu wisi pasek „Tryb podglądu”, a przycisk „Wyjdź” wraca do pytania o hasło.</p>' +
        '<p><strong>Powiedzmy sobie szczerze, co to hasło robi, a czego nie.</strong> Zasłania stronę przed kimś, kto trafi na adres przypadkiem, i razem z blokadą indeksowania trzyma ją poza wynikami wyszukiwarek. Nie jest zamkiem. Darmowe GitHub Pages działa tylko z publicznego repozytorium, więc treść kursu jest widoczna dla każdego, kto trafi na <a href="https://github.com/milof/akademia" target="_blank" rel="noopener">samo repozytorium</a>. Nie ma tam nic prywatnego: żadnego imienia, żadnych rozmów, żadnych danych dziecka. Postęp i Dziennik zapisują się wyłącznie w przeglądarce na Waszym komputerze i nigdzie nie są wysyłane.</p>' +
        '<p>Samych haseł nie ma w repozytorium, są tam tylko ich skróty. Oba zmienisz w jednym pliku <code>js/gate.js</code>: hasło dziecka w linii <code>HASH_UCZEN</code>, Twoje w <code>HASH_PODGLAD</code>. Nowe hasło dziecka wpisz w polu na dole tej strony, skopiuj wygenerowaną linię i wklej ją w miejsce starej. Po zmianie wszyscy, łącznie z Tobą, wpisują nowe hasło jeszcze raz.</p>'
    },
    {
      title: 'Żeby nauka przydawała się od razu',
      html: '<p>Zdanie „to Ci się przyda w przyszłości” rzadko działa. Dla 10-latka przyszłość jest daleko, a z ust dorosłego brzmi jak obowiązek. Lepiej działają dwie rzeczy: nauka, która przydaje się <strong>już w tym tygodniu</strong>, i związek z dorosłym życiem, który dziecko <strong>odkrywa samo</strong>. Akademia ma na to trzy narzędzia.</p>' +
        '<ul>' +
        '<li><strong>Zlecenia</strong> (strona startowa, <a href="../#zlecenia">Zlecenia</a>). Dajesz prawdziwe zadanie, które rodzina i tak ma do zrobienia: porównanie przed zakupem, plan sobotniego wyjścia, obiad z tego, co jest w lodówce. Dziecko robi je technikami z misji i wpisuje wynik. Ty dopisujesz, <em>co z tego wyszło</em>: „kupiliśmy ten z Twojej tabeli”, „pojechaliśmy Twoją trasą”. To zdanie jest najważniejsze, bo łączy naukę z prawdziwym skutkiem. Wystarczy jedno zlecenie na tydzień albo dwa.</li>' +
        '<li><strong>Misja „Ja za 15 lat”</strong> (misja 10). Dziecko pyta AI o zawody, które łączą jego pasje, i o to, jak wygląda w nich zwykły wtorek. Ostatni krok to wywiad z Tobą: dziecko przygotowuje z AI pięć pytań o Twoją pracę. Odpowiedz i pokaż jedną prawdziwą rzecz, której używasz (arkusz, plan, rozmowę z AI), bez danych firmy. Dziesięć minut.</li>' +
        '<li><strong>Wyzwanie od rodzica</strong> w misji Solo (misja 11). Jedno z czterech wyzwań to prawdziwa sprawa od Ciebie albo otwarte zlecenie ze strony startowej. Na koniec dziecko porównuje swoją pierwszą rozmowę z AI z dzisiejszą: to najlepszy dowód postępu, jaki możesz mu pokazać.</li>' +
        '<li><strong>Ramka „Kto tego używa naprawdę”</strong> w każdej misji, pod „Po co to”. Jedno-dwa zdania o tym, kto w prawdziwej pracy robi to, czego uczy misja. Jeśli znasz kogoś takiego, opowiedz o nim: znajomy człowiek działa mocniej niż przykład z ekranu.</li>' +
        '</ul>' +
        '<p>Czego unikać: punktów i nagród za samo zaliczanie misji. Taka nagroda łatwo staje się celem zamiast ciekawości. Lepsza nagroda to „zrobiliśmy tak, jak zaplanowałeś”.</p>'
    },
    {
      title: 'Twoja rola',
      html: '<ul>' +
        '<li><strong>Bądź obok przy misjach z "Pokaż rodzicowi"</strong> (0, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13). Resztę może robić sam, ale w pokoju, w którym jesteś. W misjach 1, 7 i 8 jesteś potrzebny do konkretnej rzeczy: instrukcje projektu, film zrobiony przez AI i hasło rodzinne, zdjęcie Twoim telefonem.</li>' +
        '<li><strong>Nie poprawiaj promptów za niego.</strong> Gdy odpowiedź AI jest słaba, zapytaj: "Co byś dopisał, żeby zrozumiało?" Wolne pisanie jest w porządku, literówki też. AI je wybacza.</li>' +
        '<li><strong>Pytaj "jak to sprawdziłeś?"</strong> częściej niż "czy to prawda?". Chwal dopytywanie i sprawdzanie, nie sam wynik.</li>' +
        '<li><strong>Trzymaj granicę lekcji:</strong> AI tłumaczy, sprawdza rozumienie i robi quizy. Zadania pisze sam. Ta zasada jest w misji 0 i 3, ale to Ty ją egzekwujesz.</li>' +
        '<li><strong>Jedna misja to jedna sesja.</strong> Nie rób dwóch pod rząd, nawet jeśli prosi. Lepiej, żeby chciał wrócić, niż żeby miał dość.</li>' +
        '</ul>'
    },
    {
      title: 'Konto i ustawienia ChatGPT',
      html: '<p>Regulamin ChatGPT dla Europy wymaga ukończonych 13 lat, a osoba poniżej 18 lat potrzebuje zgody rodzica. OpenAI pisze wprost, że usługa nie jest przeznaczona dla dzieci poniżej 13 lat i że w kontekście edukacyjnym rozmowę z ChatGPT powinien prowadzić dorosły. Kontrola rodzicielska obejmuje tylko konta nastolatków poniżej 18 lat, dla 10-latka nie ma osobnej ścieżki. Dlatego Akademia zakłada: <strong>Twoje konto, Ty w pobliżu, Ty odpowiadasz za to, co się dzieje w czacie.</strong></p>' +
        '<p>Ustawienia, które warto zrobić raz. Zrób je <strong>dzień przed</strong> misją 0, z powodu opisanego w punkcie pierwszym:</p>' +
        '<ol>' +
        '<li><strong>Osobny projekt dla dziecka.</strong> W ChatGPT utwórz Projekt, np. „Akademia". Potem w projekcie kliknij trzy kropki, wybierz <em>Ustawienia projektu</em>, w sekcji pamięci przełącz na <em>Project-only memory</em> (pamięć tylko w obrębie projektu) i zapisz. Czaty dziecka nie mieszają się wtedy z Twoimi i nie wpływają na to, co ChatGPT pamięta o Tobie. Dziecko zaczyna każdą misję nowym czatem wewnątrz tego projektu. W misji 1 dziecko układa kartę startową (kim jest, jak ma wyglądać odpowiedź), a Ty wklejasz ją w <em>instrukcje projektu</em>. Instrukcje działają tylko w tym projekcie i nie zmieniają Twoich czatów. Przeczytaj kartę przed zapisaniem: bez nazwiska, szkoły i adresu. <strong>Uwaga:</strong> OpenAI podaje, że zmiana tego ustawienia działa dopiero po kilku godzinach, więc ustaw to z wyprzedzeniem i nie zakładaj, że odcięcie pamięci obowiązuje od razu. <a href="https://help.openai.com/en/articles/10169521-projects-in-chatgpt" target="_blank" rel="noopener">Jak działają Projekty</a>.</li>' +
        '<li><strong>Alternatywa: czat tymczasowy.</strong> W nowym czacie kliknij przycisk „Tymczasowy" w prawym górnym rogu. Rozmowa nie trafia do historii ani do pamięci i znika po 30 dniach. Działa od razu, więc to dobre rozwiązanie na pierwszą sesję, gdy pamięć projektu jeszcze się nie przełączyła. Minus: dziecko nie wróci do wcześniejszej rozmowy, a trybu nie zmienisz w trakcie czatu. <a href="https://help.openai.com/en/articles/8914046-temporary-chat-faq" target="_blank" rel="noopener">Czat tymczasowy</a>.</li>' +
        '<li><strong>Dane do trenowania.</strong> Ustawienia, Kontrola danych, wyłącz „Ulepszaj model dla wszystkich", jeśli nie chcesz, żeby rozmowy dziecka trafiały do trenowania modelu. <a href="https://help.openai.com/en/articles/7730893-data-controls-faq" target="_blank" rel="noopener">Kontrola danych</a>.</li>' +
        '<li><strong>Język.</strong> Ustawienia, Ogólne, Język: polski. Wtedy przyciski i menu są po polsku, co dla dziecka robi dużą różnicę.</li>' +
        '<li><strong>Pamięć.</strong> Ustawienia, Personalizacja, Pamięć. Sprawdź, co ChatGPT o Tobie pamięta, i zdecyduj, czy ma to być widoczne w rozmowach dziecka. Projekt z własną pamięcią rozwiązuje to najczyściej. <a href="https://help.openai.com/en/articles/8590148-memory-faq" target="_blank" rel="noopener">Pamięć w ChatGPT</a>.</li>' +
        '<li><strong>Reklamy.</strong> Od 24 sierpnia 2026 darmowe ChatGPT i plan Go w Polsce pokazują reklamy pod odpowiedziami, oznaczone jako sponsorowane. OpenAI nie pokazuje ich kontom osób poniżej 18 lat, ale dziecko pracuje na Twoim koncie, więc reklamy mogą się pojawić. Plan Plus i wyższe są bez reklam. Misja 4 uczy dziecko odróżniać reklamę od odpowiedzi. <a href="https://help.openai.com/en/articles/20001047-about-ads-in-chatgpt" target="_blank" rel="noopener">Reklamy w ChatGPT</a>.</li>' +
        '</ol>' +
        '<p><strong>Darmowe konto wystarcza na cały kurs.</strong> OpenAI podaje, że zwykłe rozmowy tekstowe są na nim bez limitu. Osobne limity mają wysyłanie plików i zdjęć, generowanie obrazków, tryb głosowy i analiza danych. ChatGPT sam informuje, gdy limit się skończy, i podaje, kiedy się odnowi. W praktyce dotknie to Was najwyżej w misji 8, w której dziecko wysyła zdjęcie lodówki albo zepsutej rzeczy. Jedyna rzecz w kursie, która wymaga płatnego konta, to Sites w trikach „Na inny dzień” misji 12, i jest opcjonalna.</p>' +
        '<p><strong>Gemini</strong> pojawia się w misji 9 (porównanie i tryb „Nauka ze wskazówkami”) oraz w kilku trikach „Na inny dzień”. Gemini dopuszcza konta dzieci poniżej 13 lat przez Family Link, ale nie w Europejskim Obszarze Gospodarczym, więc w Polsce ta ścieżka nie działa. <strong>Claude</strong> wymaga 18 lat i pojawia się tylko jako wzmianka. W obu przypadkach: Twoje konto, Ty obok, kilka minut.</p>' +
        '<p>Niezależne wskazówki: Common Sense Media zaleca dla dzieci 6-12 lat ograniczone używanie chatbotów, zawsze razem z rodzicem, i odradza AI jako wsparcie emocjonalne wszystkim poniżej 18 lat. <a href="https://www.commonsensemedia.org/articles/ai-chatbots-and-your-child-age-and-stage-guidance" target="_blank" rel="noopener">Wskazówki Common Sense Media</a>.</p>' +
        '<p class="small muted">Nazwy i ścieżki w menu sprawdzone w źródłach OpenAI 9 września 2026. OpenAI właśnie przebudowuje ustawienia pamięci, więc etykiety mogą się nieco różnić od powyższych. Jeśli któraś nie zgadza się z tym, co widzisz, kieruj się linkiem do pomocy przy danym punkcie.</p>' +
        '<p class="small muted">W listopadzie 2026 doszły do misji: tryb nauki, rozgałęzianie czatu, pytanie o zaznaczony fragment, podgląd kodu w czacie i reklamy. Opisy oparte są na zapowiedziach OpenAI i Google oraz relacjach prasy, nie na zrzutach ekranu z polskiej wersji. Jeśli przycisk nazywa się inaczej albo go nie ma, przy takim kroku jest podpowiedź albo prompt, który robi to samo w zwykłym czacie.</p>'
    },
    {
      title: 'Bezpieczeństwo i sygnały ostrzegawcze',
      html: '<p>Cztery zasady, które dziecko poznaje w misji 0: bez nazwiska, adresu, szkoły i zdjęć ludzi; AI może się mylić, ważne rzeczy sprawdzamy; AI tłumaczy, lekcje robimy sami; AI to nie kolega, więc sekrety, smutki i trudne sprawy idą do rodzica, nie do bota. Powtarzaj je od czasu do czasu własnymi słowami.</p>' +
        '<p>Na co zwracać uwagę:</p>' +
        '<ul>' +
        '<li><strong>AI jako "kumpel".</strong> Gdy dziecko mówi o ChatGPT jak o osobie, która go rozumie, albo chce z nim rozmawiać o samopoczuciu. To moment na rozmowę, nie na zakaz: AI jest narzędziem, dobrym do zadań, złym do przyjaźni.</li>' +
        '<li><strong>Ukrywanie rozmów.</strong> Czaty w Projekcie są widoczne dla Ciebie. Umówcie się od początku, że możesz do nich zajrzeć, i zaglądaj od czasu do czasu, bez śledztwa.</li>' +
        '<li><strong>Kopiowanie zamiast rozumienia.</strong> Jeśli zadania domowe nagle wyglądają jak pisane przez dorosłego, wróćcie do misji 3: AI tłumaczy, quiz sprawdza, dziecko pisze samo.</li>' +
        '<li><strong>Dane osobowe.</strong> Imię jest w porządku. Nazwisko, adres, nazwa szkoły, zdjęcia ludzi: nie. Jeśli coś takiego trafi do czatu, usuńcie rozmowę razem i porozmawiajcie, dlaczego.</li>' +
        '<li><strong>Zdjęcia.</strong> W misji 8 dziecko wysyła zdjęcie lodówki albo zepsutej rzeczy, Twoim telefonem. Zasada: rzeczy tak, ludzie, dokumenty i kartki z adresem nie. Przed wysłaniem rzućcie okiem, co jeszcze jest w kadrze.</li>' +
        '<li><strong>AI przytakuje.</strong> Chatboty chętnie zgadzają się z rozmówcą, także wtedy, gdy nie powinny. Misja 7 pokazuje to na pytaniu z przemyconą bzdurą. W rozmowach o samopoczuciu przytakiwanie jest szczególnie złym doradcą, i to jeszcze jeden powód czwartej zasady.</li>' +
        '<li><strong>Filmy zrobione przez AI i podrobione głosy.</strong> Narzędzia do robienia realistycznych filmów są dziś powszechne. Misja 7 uczy trzech sprawdzeń filmu i proponuje <strong>hasło rodzinne</strong>: słowo, które zna tylko rodzina, na wypadek telefonu z podrobionym głosem kogoś bliskiego. Ustalcie je razem i nie zapisujcie w żadnym czacie.</li>' +
        '</ul>'
    },
    {
      title: 'Misja po misji',
      paras: ['Czego uczy każda misja i o co zapytać po niej. Pytanie po misji robi więcej niż odznaka: zmusza do powtórzenia własnymi słowami.'],
      table: true
    },
    {
      title: 'Gdy misja nie idzie',
      html: '<ul>' +
        '<li><strong>Za dużo czytania.</strong> Przeczytaj mu sekcję "Po co to" na głos, resztę zrobi sam. Przykład rozmowy można pominąć.</li>' +
        '<li><strong>Nudny temat.</strong> Każdy prompt można przerobić: zamień "drukarka 3D" na cokolwiek, co go dziś kręci. Technika zostaje ta sama.</li>' +
        '<li><strong>Wolne pisanie frustruje.</strong> Trik z misji 1: AI zadaje pytania i samo układa kartę startową. Z misji 2: ołówek do poprawiania własnej wiadomości, zaznaczenie fragmentu zamiast przepisywania go i odpowiadanie literą A, B albo C. I gra tekstowa z misji 9, gdzie pisze się tylko numery. W misji 9 jest też trik „Trener na 7 dni” do ćwiczenia pisania.</li>' +
        '<li><strong>Nie mieści się w 20 minutach.</strong> Pomiń zadanie bez ściągi i triki „Na inny dzień”. Liczą się kroki z sekcji „Teraz Ty”.</li>' +
        '<li><strong>Zadanie "bez ściągi" za trudne.</strong> Pomiń. Wróci do niego za kilka misji. Misja jest zaliczona, gdy zrobił kroki z sekcji "Teraz Ty".</li>' +
        '<li><strong>Chce zaliczać bez robienia.</strong> Przycisk zaliczenia jest na końcu strony i można go cofnąć. Zasada domowa: zaliczamy po pokazaniu rozmowy.</li>' +
        '</ul>'
    },
    {
      title: 'Co dalej po Akademii',
      html: '<ul>' +
        '<li><strong>Dziennik co tydzień.</strong> Jedno pytanie "jak jeszcze możesz mi pomóc?" w nowym temacie i jeden wpis. To utrzymuje nawyk odkrywania.</li>' +
        '<li><strong>Solo co miesiąc.</strong> Jedna prawdziwa sprawa załatwiona z AI od początku do końca, pokazana Tobie.</li>' +
        '<li><strong>Nowe misje.</strong> Strona to zwykłe pliki. Misje są w katalogu <code>js/content</code>, każda to jeden obiekt z polami: tytuł, kroki, prompty. Możesz dopisać własną, albo poprosić o to ChatGPT, wklejając mu jedną istniejącą misję jako wzór.</li>' +
        '<li><strong>Budowanie dalej.</strong> Misje 12 i 13 pokazały, że opis zamienia się w program. Następny krok to zwykle własna strona o hobby albo prosta gra dla kolegów, z Twoją pomocą przy publikacji.</li>' +
        '</ul>'
    }
  ]
};
