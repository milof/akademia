/* Strona dla rodzica. Sekcje mogą mieć `paras` (tablica akapitów) albo `html`. `table: true` wstawia tabelę misji. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.parent = {
  title: 'Dla rodzica',
  intro: [
    'Ta strona jest dla Ciebie. Akademia Arkuszy to 15 misji po 20-30 minut, do przejścia po kolei, jedna lub dwie w tygodniu. Poziom: od zera do środka, czyli od „co to komórka” do JEŻELI, WYSZUKAJ.PIONOWO i tabeli przestawnej. Celem nie jest znajomość menu, tylko sposób myślenia: dane osobno, podsumowanie osobno, formuła zamiast liczenia w głowie, zakres z zapasem, sprawdzenie, czy wynik ma sens.',
    'Wszystkie misje oprócz dwóch ostatnich dziecko robi w jednym pliku „Akademia”, każdą na osobnej karcie. Misje 13 i 14 to własny plik na własny temat. Stan na wrzesień 2026: Google zmienia nazwy w menu częściej, niż byśmy chcieli, więc ścieżki poniżej traktuj jako punkt startu.'
  ],
  sections: [
    {
      title: 'Jak to działa',
      html: '<ul>' +
        '<li><strong>Misje idą po kolei</strong>, bo każda korzysta z poprzedniej. Możesz je odblokować wszystkie naraz przełącznikiem na dole tej strony.</li>' +
        '<li><strong>Każda misja</strong> ma: po co to, podgląd arkusza (jak ma wyglądać wynik), kroki z formułami i tabelkami do skopiowania, listę „po czym poznasz, że wyszło”, warianty do spróbowania, zadanie bez ściągi, odkrycie i wpis do Dziennika.</li>' +
        '<li><strong>Przycisk Kopiuj</strong> wkłada formułę albo całą tabelkę do schowka. Dziecko klika komórkę w Arkuszu i wciska Ctrl + V. Tabelki wklejają się od razu w kilka kolumn, więc wolne pisanie nie blokuje misji. Wartości ma podmieniać na swoje.</li>' +
        '<li><strong>Niezbędnik</strong> to ściąga wszystkich formuł i ścieżek w menu. Karty odblokowują się z misjami. Da się wydrukować.</li>' +
        '<li><strong>Dziennik odkryć</strong> to jedno zdanie po każdej misji. Po kilku tygodniach robi się z tego najlepszy dowód postępu.</li>' +
        '<li><strong>Postęp zapisuje się tylko w tej przeglądarce</strong>, na tym komputerze. W Ustawieniach jest „kod zapisu” do przeniesienia postępu albo zrobienia kopii. Postęp Akademii AI i Akademii Arkuszy są osobne.</li>' +
        '<li><strong>Imię</strong> nie jest nigdzie w kodzie strony. Ustawia się je lokalnie albo linkiem: dopisz do adresu strony <code>?imie=Imię</code>. Po otwarciu imię zapisuje się w przeglądarce i znika z adresu.</li>' +
        '</ul>'
    },
    {
      title: 'Hasło do strony',
      html: '<p>Wejście jest zamknięte hasłem. Jedna bramka obsługuje stronę startową, Akademię Arkuszy i Akademię AI, więc hasło wpisuje się raz na danym komputerze. W Ustawieniach jest przycisk „Zablokuj stronę”, który każe wpisać je ponownie.</p>' +
        '<p><strong>Dwa hasła, dwie role.</strong> <code>nukacola</code> to wejście dla dziecka: misje idą po kolei, a zaliczone misje, odhaczone kroki i Dziennik zapisują się w tej przeglądarce. <code>tatatest</code> to Twój podgląd: wszystkie misje i karty Niezbędnika są otwarte od razu, a strona <strong>nic nie zapisuje</strong>. Możesz klikać, zaliczać i cofać — po odświeżeniu postęp dziecka jest dokładnie taki, jak był. W podglądzie na dole ekranu wisi pasek „Tryb podglądu”, a przycisk „Wyjdź” wraca do pytania o hasło.</p>' +
        '<p><strong>Co to hasło robi, a czego nie.</strong> Zasłania stronę przed kimś, kto trafi na adres przypadkiem, i razem z blokadą indeksowania trzyma ją poza wynikami wyszukiwarek. Nie jest zamkiem. Darmowe GitHub Pages działa tylko z publicznego repozytorium, więc treść kursu jest widoczna dla każdego, kto trafi na <a href="https://github.com/milof/akademia-ai" target="_blank" rel="noopener">samo repozytorium</a>. Nie ma tam nic prywatnego: żadnego imienia, żadnych danych dziecka. Postęp i Dziennik zapisują się wyłącznie w przeglądarce na Waszym komputerze.</p>' +
        '<p>Oba hasła zmienisz w jednym pliku <code>js/gate.js</code> na górze repozytorium: hasło dziecka w linii <code>HASH_UCZEN</code>, Twoje w <code>HASH_PODGLAD</code>. Nowe hasło dziecka wpisz w polu na dole tej strony, skopiuj wygenerowaną linię i wklej ją w miejsce starej. Zmiana obejmuje oba kursy naraz, bo bramka jest wspólna.</p>'
    },
    {
      title: 'Konto Google dla dziecka',
      html: '<p>Zgodnie z <a href="https://support.google.com/accounts/answer/1350409?hl=pl" target="_blank" rel="noopener">wymaganiami wiekowymi Google</a> własne konto Google można założyć w Polsce od 16 lat. Młodsze dziecko może mieć konto utworzone i zarządzane przez rodzica w <a href="https://families.google/familylink/" target="_blank" rel="noopener">Family Link</a>. Google w informacji o Family Link pisze wprost o dziecku tworzącym dokumenty na Dysku Google, a Arkusze są częścią Dysku. Masz więc dwie drogi:</p>' +
        '<ol>' +
        '<li><strong>Konto dziecka w Family Link.</strong> Dziecko ma własny Dysk, a Ty widzisz i kontrolujesz konto z aplikacji Family Link. Plik „Akademia” udostępnia Tobie w misji 1, więc masz do niego wgląd. Ta droga jest czystsza: dziecko nie ogląda Twoich plików. <a href="https://support.google.com/families/answer/7103338?hl=pl" target="_blank" rel="noopener">Jak założyć konto dziecka</a>.</li>' +
        '<li><strong>Twoje konto.</strong> Zadziała od razu, ale dziecko widzi wtedy cały Twój Dysk, pocztę w tej samej przeglądarce i historię. Jeśli wybierasz tę drogę, załóż osobny profil w przeglądarce Chrome tylko do Arkuszy, folder „Akademia” na Dysku i bądź w pobliżu.</li>' +
        '</ol>' +
        '<p>Dziecko nie zakłada konta samo. Zrób to z nim przed misją 0, tak samo jak instalację aplikacji Arkusze Google na telefonie przed misją 14.</p>'
    },
    {
      title: 'Region i język: jedna rzecz do ustawienia',
      html: '<p>Kurs zakłada arkusz z <strong>regionem Polska</strong>. Wtedy funkcje mają polskie nazwy (SUMA, JEŻELI, WYSZUKAJ.PIONOWO), części formuły rozdziela <strong>średnik</strong>, a liczby mają przecinek dziesiętny. Wszystkie formuły w Akademii są w tym zapisie. W arkuszu z regionem Stany Zjednoczone te same formuły dadzą błąd, bo tam funkcje są po angielsku, a części rozdziela przecinek.</p>' +
        '<p>Region sprawdza się w każdym pliku osobno: Plik → Ustawienia → Ustawienia regionalne. Dziecko robi to w misji 0, warto zrobić to razem. Nowe pliki dziedziczą region z języka konta Google, więc przy koncie ustawionym na polski zwykle nie trzeba nic zmieniać. <a href="https://support.google.com/docs/answer/58515?hl=pl" target="_blank" rel="noopener">Ustawienia regionalne arkusza</a>.</p>' +
        '<p>Dwie różnice względem Excela, które dziecko może spotkać w poradnikach: największa liczba to w Arkuszach Google <strong>MAX</strong> (w Excelu MAKS), a błąd „nie znaleziono” to <strong>#N/A</strong> (w Excelu #N/D). Karta „Po angielsku” w Niezbędniku tłumaczy polskie nazwy na angielskie, żeby poradniki z YouTube były zrozumiałe.</p>'
    },
    {
      title: 'Twoja rola',
      html: '<ul>' +
        '<li><strong>Bądź obok przy misjach z „Pokaż rodzicowi”</strong>, czyli prawie wszystkich. To zwykle dwie minuty na końcu: dziecko pokazuje wynik i zmienia jedną liczbę na Twoich oczach. Misje 2 i 10 może zrobić całkiem samo.</li>' +
        '<li><strong>Nie pisz formuł za dziecko.</strong> Gdy coś nie działa, zapytaj: „Co mówi Arkusz, gdy najedziesz na czerwony trójkącik?” i „Który kawałek formuły robi co?”. Czytanie błędu jest w misji 4 i to jedna z najważniejszych umiejętności kursu.</li>' +
        '<li><strong>Pytaj „skąd wiesz, że wynik jest dobry?”</strong> częściej niż „ile wyszło?”. Suma w prawym dolnym rogu, ręczne policzenie dwóch wierszy, porównanie z tabelą przestawną: to są sprawdzenia, które chwalisz.</li>' +
        '<li><strong>Pozwól wklejać tabelki z Akademii</strong> i nie każ przepisywać. Pisanie na klawiaturze nie jest celem tego kursu. Podmienianie wartości na swoje już tak.</li>' +
        '<li><strong>Jedna misja to jedna sesja.</strong> Nie rób dwóch pod rząd, nawet jeśli prosi. Misje 8, 9 i 11 są najgęstsze. Jeśli trwają dłużej niż pół godziny, przerwij i dokończ następnego dnia.</li>' +
        '<li><strong>Prawdziwe dane działają lepiej niż zmyślone.</strong> Kieszonkowe, wyniki z gier z kumplami, słówka od korepetytora. Gdy przykład z Akademii nie pasuje, podmieńcie go razem na coś z Waszego życia. Technika zostaje ta sama.</li>' +
        '</ul>'
    },
    {
      title: 'Bezpieczeństwo i udostępnianie',
      html: '<p>Trzy zasady, które dziecko poznaje w misji 0: konto od rodzica i pliki udostępniane tylko rodzicowi; bez haseł, nazwisk kolegów i adresów w arkuszu; nic nie ginie na zawsze, bo jest Ctrl + Z i historia zmian. Powtarzaj je od czasu do czasu własnymi słowami.</p>' +
        '<p>Na co zwracać uwagę:</p>' +
        '<ul>' +
        '<li><strong>Link „dla każdej osoby”.</strong> W oknie Udostępnij pole „Dostęp ogólny” ma zostać na „Ograniczony”. Link dla każdej osoby, kto go ma, to publiczny plik. W misji 14 dziecko uczy się tej różnicy, ale to Ty decydujesz, czy liga kumpli może być udostępniona kumplom, i na jakie adresy.</li>' +
        '<li><strong>Dane kolegów.</strong> Imiona w lidze są w porządku. Nazwiska, adresy, numery telefonów, zdjęcia: nie. Jeśli coś takiego trafi do arkusza, usuńcie razem i porozmawiajcie, dlaczego.</li>' +
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
        '<li><strong>Suma „nie widzi” nowego wiersza.</strong> Zakres kończy się za wcześnie. Powiększyć zakres do D50 albo D100. Misja 4, krok 6.</li>' +
        '<li><strong>Po sortowaniu imiona nie pasują do punktów.</strong> Posortowana została jedna kolumna zamiast całej tabelki. Ctrl + Z natychmiast, potem zaznaczyć całość i sortować jeszcze raz.</li>' +
        '<li><strong>Zniknęły wiersze.</strong> Filtr. Dane → Usuń filtr.</li>' +
        '<li><strong>Uchwyt wypełniania nie łapie.</strong> Najpierw kliknięcie w komórkę, potem najechanie dokładnie na niebieski kwadracik w rogu, aż kursor zmieni się w krzyżyk. Na touchpadzie bywa trudno, mysz pomaga.</li>' +
        '<li><strong>Za dużo czytania.</strong> Przeczytaj sekcję „Po co to” na głos, resztę zrobi sam. Podgląd arkusza można pominąć, kroki nie.</li>' +
        '<li><strong>Nudny temat.</strong> Każdą tabelkę można podmienić: zamiast kieszonkowego kolekcja, zamiast ligi wyniki z treningów. Formuły zostają te same.</li>' +
        '<li><strong>Chce zaliczać bez robienia.</strong> Przycisk zaliczenia jest na końcu strony i można go cofnąć. Zasada domowa: zaliczamy po pokazaniu karty w pliku.</li>' +
        '</ul>'
    },
    {
      title: 'Co dalej po Akademii',
      html: '<ul>' +
        '<li><strong>Jeden żywy plik.</strong> Najlepsze, co może się stać po kursie, to arkusz, do którego dziecko wraca co tydzień: kieszonkowe, liga, słówka. Pytaj o niego, nie o kurs.</li>' +
        '<li><strong>Robota na zamówienie.</strong> Lista zakupów z polami wyboru na telefon, plan wyjazdu, budżet urodzin. Dziecko robi, Ty używasz. To lepsza nagroda niż odznaka.</li>' +
        '<li><strong>Następny poziom</strong>, gdy będzie chciało: funkcja QUERY (pytania do tabelki jak w bazie danych), IMPORTRANGE (łączenie plików), Apps Script (małe programy w arkuszu). Każda z nich to materiał na osobną misję.</li>' +
        '<li><strong>Excel.</strong> Wszystko z Akademii działa też w Excelu, z drobnymi różnicami w nazwach (MAKS, #N/D). Plik → Pobierz → Microsoft Excel pokaże, że to ten sam świat.</li>' +
        '<li><strong>Nowe misje.</strong> Strona to zwykłe pliki. Misje są w katalogu <code>arkusze/js/content</code>, każda to jeden obiekt z polami: tytuł, kroki, formuły. Możesz dopisać własną albo poprosić o to AI, wklejając jedną istniejącą misję jako wzór.</li>' +
        '</ul>'
    }
  ]
};
