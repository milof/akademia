/* Strona dla rodzica. Sekcje mogą mieć `paras` (tablica akapitów) albo `html`. `table: true` wstawia tabelę misji. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.parent = {
  title: 'Dla rodzica',
  intro: [
    'Ta strona jest dla Ciebie. Akademia Arkuszy to 23 misje po 15–20 minut, do przejścia po kolei, jedna lub dwie w tygodniu. Poziom: od zera do środka, czyli od „co to komórka” do JEŻELI, WYSZUKAJ.PIONOWO i tabeli przestawnej. Celem nie jest znajomość menu, tylko sposób myślenia: dane osobno, podsumowanie osobno, formuła zamiast liczenia w głowie, zakres z zapasem, sprawdzenie, czy wynik ma sens.',
    'Cały kurs stoi na jednym przykładzie: sklepie z rzeczami z domu, które dziecko chce sprzedać na Vinted albo OLX. Misje 0–19 dziecko robi w pliku „Sklep treningowy” na danych przykładowych, a trzy ostatnie to własny plik „Mój sklep” na prawdziwych rzeczach. Stan na listopad 2026: Google zmienia nazwy w menu częściej, niż byśmy chcieli, więc ścieżki traktuj jako punkt startu.'
  ],
  sections: [
    {
      title: 'Jak to działa',
      html: '<ul>' +
        '<li><strong>Misje idą po kolei</strong>, bo każda korzysta z poprzedniej. Możesz je odblokować wszystkie naraz przełącznikiem na dole tej strony.</li>' +
        '<li><strong>Każda misja</strong> ma: po co to (z ramką „Kto tego używa naprawdę”), podgląd arkusza (jak ma wyglądać wynik), kroki z formułami i tabelkami do skopiowania, listę „po czym poznasz, że wyszło”, warianty do spróbowania, zadanie bez ściągi, odkrycie i wpis do Dziennika.</li>' +
        '<li><strong>Przycisk Kopiuj</strong> wkłada formułę albo całą tabelkę do schowka. Dziecko klika komórkę w Arkuszu i wciska Ctrl + V. Tabelki wklejają się od razu w kilka kolumn, więc wolne pisanie nie blokuje misji. Dane przykładowe są celowo te same u każdego: dzięki temu liczby w podglądach zgadzają się z tym, co dziecko widzi u siebie.</li>' +
        '<li><strong>Niezbędnik</strong> to ściąga wszystkich formuł i ścieżek w menu. Karty odblokowują się z misjami. Da się wydrukować.</li>' +
        '<li><strong>Dziennik odkryć</strong> to jedno zdanie po każdej misji. Po kilku tygodniach robi się z tego najlepszy dowód postępu.</li>' +
        '<li><strong>Postęp zapisuje się tylko w tej przeglądarce</strong>, osobno dla każdego domownika. Gdy domowników jest kilku, strona po otwarciu pyta, kto się uczy. Kod zapisu całej Akademii (wszystkie kursy, wszyscy domownicy) jest na stronie startowej, w <a href="../#rodzina">Rodzina i kopia</a>. Strona sama przypomina o kopii co kilka misji.</li>' +
        '<li><strong>Imię</strong> nie jest nigdzie w kodzie strony. Domowników dodaje się w <a href="../#rodzina">Rodzina i kopia</a>. Tam jest też <strong>link-zakładka</strong>: otwiera Akademię bez hasła, od razu jako wybrany domownik. Wystarczy otworzyć go na komputerze dziecka i dodać do zakładek.</li>' +
        '<li><strong>Raport dla taty</strong> jest na stronie startowej: kilka linijek o tym, co zaliczone i co w Dzienniku, do wklejenia w wiadomość. Kartę z Niezbędnika można też udostępnić linkiem, który otwiera się bez hasła.</li>' +
        '</ul>'
    },
    {
      title: 'Hasło do strony',
      html: '<p>Wejście jest zamknięte hasłem. Jedna bramka obsługuje stronę startową, Akademię Arkuszy i Akademię AI, więc hasło wpisuje się raz na danym komputerze. W Ustawieniach jest przycisk „Zablokuj stronę”, który każe wpisać je ponownie.</p>' +
        '<p><strong>Dwa hasła, dwie role.</strong> Hasło dziecka otwiera kurs normalnie: misje idą po kolei, a zaliczone misje, odhaczone kroki i Dziennik zapisują się w tej przeglądarce. Drugie hasło, tylko Twoje, włącza podgląd: wszystkie misje i karty Niezbędnika są otwarte od razu, a strona <strong>nic nie zapisuje</strong>. Możesz klikać, zaliczać i cofać — po odświeżeniu postęp dziecka jest dokładnie taki, jak był. W podglądzie na dole ekranu wisi pasek „Tryb podglądu”, a przycisk „Wyjdź” wraca do pytania o hasło.</p>' +
        '<p><strong>Co to hasło robi, a czego nie.</strong> Zasłania stronę przed kimś, kto trafi na adres przypadkiem, i razem z blokadą indeksowania trzyma ją poza wynikami wyszukiwarek. Nie jest zamkiem. Darmowe GitHub Pages działa tylko z publicznego repozytorium, więc treść kursu jest widoczna dla każdego, kto trafi na <a href="https://github.com/milof/akademia" target="_blank" rel="noopener">samo repozytorium</a>. Nie ma tam nic prywatnego: żadnego imienia, żadnych danych dziecka. Postęp i Dziennik zapisują się wyłącznie w przeglądarce na Waszym komputerze.</p>' +
        '<p>Samych haseł nie ma w repozytorium, są tam tylko ich skróty. Oba zmienisz w jednym pliku <code>js/gate.js</code> na górze repozytorium: hasło dziecka w linii <code>HASH_UCZEN</code>, Twoje w <code>HASH_PODGLAD</code>. Nowe hasło dziecka wpisz w polu na dole tej strony, skopiuj wygenerowaną linię i wklej ją w miejsce starej. Zmiana obejmuje oba kursy naraz, bo bramka jest wspólna.</p>'
    },
    {
      title: 'Konto Google dla dziecka',
      html: '<p>Zgodnie z <a href="https://support.google.com/accounts/answer/1350409?hl=pl" target="_blank" rel="noopener">wymaganiami wiekowymi Google</a> własne konto Google można założyć w Polsce od 16 lat. Młodsze dziecko może mieć konto utworzone i zarządzane przez rodzica w <a href="https://families.google/familylink/" target="_blank" rel="noopener">Family Link</a>. Google w informacji o Family Link pisze wprost o dziecku tworzącym dokumenty na Dysku Google, a Arkusze są częścią Dysku. Masz więc dwie drogi:</p>' +
        '<ol>' +
        '<li><strong>Konto dziecka w Family Link.</strong> Dziecko ma własny Dysk, a Ty widzisz i kontrolujesz konto z aplikacji Family Link. Plik „Sklep treningowy” udostępnia Tobie w misji 1, więc masz do niego wgląd. Ta droga jest czystsza: dziecko nie ogląda Twoich plików. <a href="https://support.google.com/families/answer/7103338?hl=pl" target="_blank" rel="noopener">Jak założyć konto dziecka</a>.</li>' +
        '<li><strong>Twoje konto.</strong> Zadziała od razu, ale dziecko widzi wtedy cały Twój Dysk, pocztę w tej samej przeglądarce i historię. Jeśli wybierasz tę drogę, załóż osobny profil w przeglądarce Chrome tylko do Arkuszy, folder „Akademia” na Dysku i bądź w pobliżu.</li>' +
        '</ol>' +
        '<p>Dziecko nie zakłada konta samo. Zrób to z nim przed misją 0, tak samo jak instalację aplikacji Arkusze Google na telefonie przed misją 19.</p>'
    },
    {
      title: 'Region i język: jedna rzecz do ustawienia',
      html: '<p>Kurs zakłada arkusz z <strong>regionem Polska</strong>. Wtedy funkcje mają polskie nazwy (SUMA, JEŻELI, WYSZUKAJ.PIONOWO), części formuły rozdziela <strong>średnik</strong>, a liczby mają przecinek dziesiętny. Wszystkie formuły w Akademii są w tym zapisie. W arkuszu z regionem Stany Zjednoczone te same formuły dadzą błąd, bo tam funkcje są po angielsku, a części rozdziela przecinek.</p>' +
        '<p>Region sprawdza się w każdym pliku osobno: Plik → Ustawienia → Ustawienia regionalne. Dziecko robi to w misji 0, warto zrobić to razem. Nowe pliki dziedziczą region z języka konta Google, więc przy koncie ustawionym na polski zwykle nie trzeba nic zmieniać. <a href="https://support.google.com/docs/answer/58515?hl=pl" target="_blank" rel="noopener">Ustawienia regionalne arkusza</a>.</p>' +
        '<p>Dwie różnice względem Excela, które dziecko może spotkać w poradnikach: największa liczba to w Arkuszach Google <strong>MAX</strong> (w Excelu MAKS), a błąd „nie znaleziono” to <strong>#N/A</strong> (w Excelu #N/D). Karta „Po angielsku” w Niezbędniku tłumaczy polskie nazwy na angielskie, żeby poradniki z YouTube były zrozumiałe.</p>'
    },
    {
      title: 'Sklep jako przykład, Arkusze jako cel',
      html: '<p>To jest kurs Arkuszy, a nie kurs sprzedawania. Sklep jest przykładem, bo daje dziecku powód, żeby każda technika była potrzebna od razu: numery rzeczy to uchwyt wypełniania, „ile zarobiłem” to SUMA.JEŻELI, „za ile wystawić” to MEDIANA z cen podobnych ogłoszeń. Po kursie dziecko ma umieć zbudować i rozwijać taki arkusz samo, pod własne potrzeby.</p>' +
        '<ul>' +
        '<li><strong>Karty pliku</strong>: Magazyn (jedna rzecz w wierszu), Pulpit (najważniejsze liczby i cel oszczędzania), Ceny (ceny z podobnych ogłoszeń), Analiza (tabela przestawna) i Wiedza (rady, także od dorosłych z rodziny).</li>' +
        '<li><strong>Dane przykładowe</strong> to 20 typowych rzeczy z domu: książki, zabawki, gry i elektronika. Na swoich rzeczach dziecko pracuje w misjach 20–22, a w zadaniach „bez ściągi” wcześniej.</li>' +
        '<li><strong>Cel oszczędzania</strong> wpisuje się w misji 18. Jeśli jeszcze go nie ma, wystarczy kwota tymczasowa. Warto wybrać cel razem.</li>' +
        '<li><strong>Konto na platformie</strong>: według <a href="https://www.vinted.com/help/1057" target="_blank" rel="noopener">pomocy Vinted</a> serwis wymaga ukończonych 18 lat, więc ogłoszenia idą z Twojego konta. Kurs w ogóle nie dotyka platform: dziecko tylko ogląda ogłoszenia, żeby zebrać ceny (misja 14), i kopiuje gotowy opis z arkusza (misja 13).</li>' +
        '</ul>'
    },
    {
      title: 'Żeby nauka przydawała się od razu',
      html: '<p>Zdanie „to Ci się przyda w przyszłości” rzadko działa. Dla 10-latka przyszłość jest daleko, a z ust dorosłego brzmi jak obowiązek. Lepiej działają dwie rzeczy: nauka, która przydaje się <strong>już w tym tygodniu</strong>, i związek z dorosłym życiem, który dziecko <strong>odkrywa samo</strong>. Sklep jest tu najmocniejszym narzędziem: rzeczy naprawdę leżą w domu, a pieniądze naprawdę trafią do celu.</p>' +
        '<ul>' +
        '<li><strong>Zlecenia</strong> (strona startowa, <a href="../#zlecenia">Zlecenia</a>). Rodzina może zlecić sprzedaż swojej rzeczy: dziecko dopisuje ją do Magazynu, wycenia z rynku i przygotowuje opis. Ty dopisujesz, <em>co z tego wyszło</em>: „sprzedało się w trzy dni za cenę z Twojej mediany”. To zdanie łączy naukę z prawdziwym skutkiem.</li>' +
        '<li><strong>Misja „Baza wiedzy”</strong> (misja 17). Dziecko pyta dwoje dorosłych, co sprzedawali w internecie i jaką mają radę, i wpisuje to do arkusza. Odpowiedz jako pierwszy. Jeśli używasz arkuszy w pracy, pokaż mu jeden, bez danych firmy, i niech znajdzie w nim rzeczy, które zna z Akademii.</li>' +
        '<li><strong>Ramka „Kto tego używa naprawdę”</strong> w każdej misji, pod „Po co to”. Jedno-dwa zdania o tym, kto w prawdziwej pracy robi to, czego uczy misja. Jeśli znasz kogoś takiego, opowiedz o nim: znajomy człowiek działa mocniej niż przykład z ekranu.</li>' +
        '</ul>' +
        '<p>Czego unikać: punktów i nagród za samo zaliczanie misji. Taka nagroda łatwo staje się celem zamiast ciekawości. Lepsza nagroda to pierwsza prawdziwa sprzedaż, policzona na Pulpicie.</p>'
    },
    {
      title: 'Twoja rola',
      html: '<ul>' +
        '<li><strong>Bądź obok przy misjach z „Pokaż rodzicowi”</strong>, czyli prawie wszystkich. To zwykle dwie minuty na końcu: dziecko pokazuje wynik i zmienia jedną liczbę na Twoich oczach. Misje 2 i 8 może zrobić całkiem samo.</li>' +
        '<li><strong>Nie pisz formuł za dziecko.</strong> Gdy coś nie działa, zapytaj: „Co mówi Arkusz, gdy najedziesz na czerwony trójkącik?” i „Który kawałek formuły robi co?”. Czytanie błędu jest w misjach 4 i 15 i to jedna z najważniejszych umiejętności kursu.</li>' +
        '<li><strong>Pytaj „skąd wiesz, że wynik jest dobry?”</strong> częściej niż „ile wyszło?”. Suma w prawym dolnym rogu, ręczne policzenie dwóch wierszy, porównanie z tabelą przestawną: to są sprawdzenia, które chwalisz.</li>' +
        '<li><strong>Pozwól wklejać tabelki z Akademii</strong> i nie każ przepisywać. Pisanie na klawiaturze nie jest celem tego kursu. Podmienianie wartości na swoje już tak.</li>' +
        '<li><strong>Jedna misja to jedna sesja.</strong> Nie rób dwóch pod rząd, nawet jeśli prosi. Misje są pisane na 15–20 minut, a najgęstsze to 11, 15 i 16. Jeśli misja trwa dłużej niż pół godziny, przerwij i dokończ następnego dnia. Sekcje „Spróbuj też” i „Odkrycie” są dodatkami poza tym czasem.</li>' +
        '<li><strong>Prawdziwe dane działają lepiej niż zmyślone.</strong> Dane przykładowe są po to, żeby kroki i podglądy się zgadzały. W zadaniach „bez ściągi” dziecko dokłada swoje rzeczy, a w misjach 20–22 buduje własny plik. Pomóż mu wybrać, co naprawdę może iść na sprzedaż.</li>' +
        '</ul>'
    },
    {
      title: 'Bezpieczeństwo i udostępnianie',
      html: '<p>Trzy zasady, które dziecko poznaje w misji 0: plik udostępniany tylko rodzicowi; bez haseł, adresów i numerów telefonów w arkuszu, ani swoich, ani kupujących; nic nie ginie na zawsze, bo jest Ctrl + Z i historia zmian. Powtarzaj je od czasu do czasu własnymi słowami.</p>' +
        '<p>Na co zwracać uwagę:</p>' +
        '<ul>' +
        '<li><strong>Link „dla każdej osoby”.</strong> W oknie Udostępnij pole „Dostęp ogólny” ma zostać na „Ograniczony”. Link dla każdej osoby, kto go ma, to publiczny plik. W misji 19 dziecko uczy się tej różnicy, ale to Ty decydujesz, komu i na jakie adresy udostępnia swoje pliki.</li>' +
        '<li><strong>Dane kupujących.</strong> Arkusz sklepu nie potrzebuje imion, nazwisk, adresów ani telefonów kupujących: wysyłkę obsługuje platforma. Jeśli coś takiego trafi do arkusza, usuńcie razem i porozmawiajcie, dlaczego.</li>' +
        '<li><strong>Twoje pliki na Dysku.</strong> Jeśli dziecko pracuje na Twoim koncie, widzi wszystko, co masz na Dysku. Osobny profil w Chrome to minimum. Family Link rozwiązuje to najczyściej.</li>' +
        '<li><strong>Kasowanie przez przypadek.</strong> Zdarza się każdemu. Plik → Historia zmian pozwala wrócić do wersji z dowolnego dnia. Pokaż to dziecku raz, zanim będzie potrzebne.</li>' +
        '<li><strong>Dodatki i skrypty.</strong> Menu Rozszerzenia pozwala instalować dodatki z zewnątrz. Umówcie się, że nic stamtąd nie instaluje bez Ciebie.</li>' +
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
        '<li><strong>Formuła pokazuje #BŁĄD! albo #NAZWA?</strong> W 9 przypadkach na 10 to region arkusza (Plik → Ustawienia → Ustawienia regionalne: Polska) albo przecinek zamiast średnika. Trzeci podejrzany: cudzysłowy skopiowane jako ozdobne „ ” zamiast prostych " ".</li>' +
        '<li><strong>Liczby stoją po lewej stronie komórki.</strong> To tekst, nie liczba, i nie da się go zsumować. Zwykle przez kropkę zamiast przecinka (3.5 zamiast 3,5) albo dopisane „zł”. Wpisz od nowa same cyfry z przecinkiem i ustaw format.</li>' +
        '<li><strong>Data nie jest datą.</strong> Też stoi po lewej. Wpisz w formie 1.09.2026 albo skrótem Ctrl + ; dla dzisiejszej.</li>' +
        '<li><strong>Suma „nie widzi” nowego wiersza.</strong> Zakres kończy się za wcześnie. Powiększyć zakres do F100. Misja 4, krok 3.</li>' +
        '<li><strong>Po sortowaniu ceny nie pasują do rzeczy.</strong> Posortowana została jedna kolumna zamiast całej tabelki. Ctrl + Z natychmiast, potem zaznaczyć całość i sortować jeszcze raz. Kolumna Nr pozwala wrócić do porządku.</li>' +
        '<li><strong>Zniknęły wiersze.</strong> Filtr. Dane → Usuń filtr.</li>' +
        '<li><strong>Uchwyt wypełniania nie łapie.</strong> Najpierw kliknięcie w komórkę, potem najechanie dokładnie na niebieski kwadracik w rogu, aż kursor zmieni się w krzyżyk. Na touchpadzie bywa trudno, mysz pomaga.</li>' +
        '<li><strong>Za dużo czytania.</strong> Przeczytaj sekcję „Po co to” na głos, resztę zrobi sam. Podgląd arkusza można pominąć, kroki nie.</li>' +
        '<li><strong>Sklep go nie wciąga.</strong> Formuły są te same dla każdej listy: kolekcja kart, książki do przeczytania, wyniki z treningów. Wystarczy podmienić kolumny w Magazynie.</li>' +
        '<li><strong>Chce zaliczać bez robienia.</strong> Przycisk zaliczenia jest na końcu strony i można go cofnąć. Zasada domowa: zaliczamy po pokazaniu karty w pliku.</li>' +
        '</ul>'
    },
    {
      title: 'Co dalej po Akademii',
      html: '<ul>' +
        '<li><strong>Jeden żywy plik.</strong> Najlepsze, co może się stać po kursie, to „Mój sklep”, do którego dziecko wraca co tydzień: nowe rzeczy, statusy, daty sprzedaży. Pytaj o niego, nie o kurs: co się sprzedało, co wisi najdłużej, ile do celu.</li>' +
        '<li><strong>Robota na zamówienie.</strong> Sprzedaż czegoś Twojego na zlecenie, lista zakupów z polami wyboru na telefon, budżet urodzin. Dziecko robi, Ty używasz. To lepsza nagroda niż odznaka.</li>' +
        '<li><strong>Następny poziom</strong>, gdy będzie chciało: funkcja QUERY (pytania do tabelki jak w bazie danych), IMPORTRANGE (łączenie plików), Apps Script (małe programy w arkuszu). Każda z nich to materiał na osobną misję.</li>' +
        '<li><strong>Excel.</strong> Wszystko z Akademii działa też w Excelu, z drobnymi różnicami w nazwach (MAKS, #N/D). Plik → Pobierz → Microsoft Excel pokaże, że to ten sam świat.</li>' +
        '<li><strong>Nowe misje.</strong> Strona to zwykłe pliki. Misje są w pliku <code>arkusze/js/content/misje.js</code>, każda to jeden obiekt z polami: tytuł, kroki, formuły. Dane sklepu stoją na górze tego pliku. Możesz dopisać własną albo poprosić o to AI, wklejając jedną istniejącą misję jako wzór.</li>' +
        '</ul>'
    }
  ]
};
