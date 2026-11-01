# Akademia

Strona startowa i kursy misji dla młodych ludzi, w jednym repozytorium, pod jednym adresem GitHub Pages. Statyczne strony bez budowania: HTML, CSS i JavaScript.

- **Akademia** (katalog główny, `https://<login>.github.io/<repo>/`): ekran startowy. Każdy kurs jako ikona aplikacji, pod spodem kompletność każdego kursu: pasek podzielony na tyle kratek, ile kurs ma misji, i nazwa następnej misji.
- **Akademia AI** (katalog `ai/`, `https://<login>.github.io/<repo>/ai/`): 13 misji o sprawnym używaniu AI (ChatGPT na koncie rodzica) w codziennym życiu.
- **Akademia Arkuszy** (katalog `arkusze/`, `https://<login>.github.io/<repo>/arkusze/`): 15 misji o Arkuszach Google od zera do poziomu średniego: tabele, formuły, SUMA i spółka, pinezka `$`, sortowanie, wykresy, formatowanie warunkowe, JEŻELI, daty, WYSZUKAJ.PIONOWO, tabela przestawna, własny projekt.

Każdy kurs ma własne style, logikę i treść. Wspólne są bramka z hasłem (`js/gate.js`), spis kursów (`js/kursy.js`), zapis postępu z domownikami (`js/postep.js`) i sposób publikacji. Do tego publiczna strona jednej karty z Niezbędnika (`karta/`), jedyna bez hasła. Poniższe uwagi dotyczą obu kursów; tam, gdzie kursy się różnią, jest to zaznaczone.

## Hasło i dwie role

Jedna bramka zasłania stronę startową i oba kursy. Hasło wpisuje się raz na danej przeglądarce; przycisk „Zablokuj stronę” (w Ustawieniach kursu albo w nagłówku strony startowej) każe zapytać o nie ponownie, wszędzie naraz.

| Wchodzi | Rola | Co robi |
| --- | --- | --- |
| hasło dziecka | uczeń | Misje idą po kolei. Zaliczone misje, odhaczone kroki i Dziennik zapisują się w przeglądarce. |
| hasło rodzica | podgląd | Wszystkie misje i karty Niezbędnika otwarte od razu. **Postęp się nie zapisuje** — po odświeżeniu postęp dziecka jest taki, jak był. Domowników można za to dodawać, zmieniać i usuwać (usuwać tylko w tym trybie). Na dole ekranu wisi pasek „Tryb podglądu” z przyciskiem „Wyjdź”. |

Samych haseł nie ma w tym repozytorium, bo repozytorium jest publiczne. W `js/gate.js` stoją tylko ich skróty (`HASH_UCZEN` i `HASH_PODGLAD`). Trzymaj hasła poza repo, na przykład w menedżerze haseł.

Wielkie litery i spacje nie mają znaczenia. Kto wpisał hasło jeszcze przed połączeniem kursów, nie musi go wpisywać ponownie: stare klucze bramek migrują same przy pierwszym wejściu.

**Link-zakładka** otwiera bramkę bez wpisywania hasła: `?wejscie=<skrót hasła ucznia>&imie=<domownik>`. Robi się go na stronie startowej, w „Rodzina i kopia”, dla wybranego domownika i kursu. Działa jak hasło ucznia: kto ma link, ten wchodzi. Po zmianie hasła stare linki przestają działać.

Zmiana haseł: obie linie są w `js/gate.js` — hasło ucznia w `HASH_UCZEN`, hasło podglądu w `HASH_PODGLAD`. Nowe hasło ucznia wygenerujesz na stronie „Dla rodzica” dowolnego kursu, w sekcji „Zmiana hasła”: wpisz je, skopiuj gotową linię i wklej w miejsce starej. Linia zawiera sam skrót, więc można ją bezpiecznie zacommitować. Po zmianie wszyscy wpisują nowe hasło jeszcze raz, a linki-zakładki trzeba zrobić od nowa.

To jest bramka, nie zamek. Zasłania stronę przed kimś, kto trafi na adres przypadkiem, a `robots.txt` i `noindex` trzymają ją poza wyszukiwarkami. Darmowe GitHub Pages działa tylko z publicznego repozytorium, więc treść kursu jest widoczna dla każdego, kto trafi na to repo. Nie ma tu nic prywatnego: żadnego imienia, żadnych rozmów, żadnych danych dziecka.

## Dopisanie misji albo rozdziału

Każda misja ma stałą nazwę w polu `id` (np. `'karta-startowa'`). Postęp zapisuje się po tych nazwach, nie po numerach, więc misję można wstawić w dowolne miejsce, a zaliczone zostają zaliczone. Numer misji na stronie liczy się sam z kolejności.

1. Dopisz obiekt misji w jednym z plików `js/content/misje-*.js` kursu, z nową nazwą w `id`. Nazwy raz użytej nie zmieniaj ani nie dawaj innej misji: wisi na niej postęp.
2. Wstaw tę nazwę w `js/content/spis.js` kursu, w odpowiednie miejsce odpowiedniego rozdziału. Misja, której nie ma w spisie, nie pokazuje się na stronie (dobre na szkic).
3. Dopisz `added: 'RRRR-MM-DD'` (dzień dodania). Kto zaczął kurs wcześniej, zobaczy przy misji plakietkę „nowa”, a na stronie startowej wpis w „Co nowego”. Plakietka znika po otwarciu misji.
4. Karty Niezbędnika do tej misji dopisz w `js/content/niezbednik.js`: `mission` to nazwa misji, `id` to stały adres karty w linku do udostępnienia.

Nowy rozdział to jeden obiekt na końcu listy w `spis.js` (`id`, `title`, `missions`). Kursy z jednym rozdziałem bez tytułu wyglądają jak dawniej: jedna lista misji.

Kroki misji odhacza się po treści kroku. Wstawienie kroku w środek nie przesuwa ptaszków; poprawka literówki w kroku zdejmuje z niego ptaszka. Krok, który ma przetrwać każdą zmianę treści, może dostać własne `id`.

Odwołania w tekście typu „jak w misji 5” nie zmieniają się same. Po wstawieniu misji w środek przejrzyj je.

Nowy plik z treścią dopisz do listy `tresc` kursu w `js/kursy.js`. Kurs i strona startowa ładują treść stamtąd, więc w `index.html` kursu nie trzeba nic zmieniać.

## Dopisanie kolejnego kursu

1. Zbuduj kurs w nowym katalogu, na wzór `arkusze/`. W `<head>` podepnij wspólną bramkę: `<script src="../js/gate.js"></script>`, a na końcu `<body>` kolejno `../js/kursy.js`, `../js/postep.js` i logikę kursu.
2. Dopisz jeden obiekt do tablicy w `js/kursy.js`: nazwa, opis, ścieżka katalogu, przedrostek kluczy w `localStorage`, nazwa obiektu z treścią (`globalna`), lista plików treści (`tresc`), dwa kolory paska i ikona (kwadrat 88 × 88 w SVG). Pól `v1` i `kodV1` nowy kurs nie potrzebuje.

Ekran startowy sam dołoży kafelek, wiersz kompletności, liczby i raport. Niczego więcej nie trzeba ruszać.

## Po wypchnięciu zmian

GitHub Pages odświeża się w około minutę, ale przeglądarka trzyma stare `style.css` i pliki `.js` jeszcze do dziesięciu minut. Jeśli po `git push` strona wygląda po staremu, to nie znaczy, że zmiana nie weszła. Wciśnij `Ctrl` + `Shift` + `R`, żeby wymusić pobranie od nowa, albo po prostu wróć za dziesięć minut.

## Uruchomienie lokalne

Dowolny serwer plików w katalogu projektu, na przykład:

```bash
python3 -m http.server 8765
```

Potem otwórz `http://localhost:8765` (strona startowa), `http://localhost:8765/ai/` albo `http://localhost:8765/arkusze/`. Otwieranie `index.html` bezpośrednio z dysku też działa, ale przycisk „Kopiuj” w niektórych przeglądarkach wymaga adresu `http://` albo `https://`.

## Publikacja na GitHub Pages

1. Utwórz publiczne repozytorium i wypchnij do niego zawartość tego katalogu (gałąź `main`).
2. W repozytorium: Settings → Pages → Source: „Deploy from a branch”, Branch: `main`, folder `/ (root)`.
3. Po minucie strona jest pod `https://<login>.github.io/<nazwa-repo>/`.

Plik `.nojekyll` wyłącza przetwarzanie Jekyll, dzięki czemu katalogi i pliki są serwowane bez zmian.

## Domownicy

Na jednej przeglądarce może uczyć się kilka osób, każda z własnym postępem we wszystkich kursach. Gdy domowników jest kilku, strona po otwarciu pyta „Kto się uczy?” i pamięta odpowiedź do zamknięcia karty przeglądarki. W nagłówku stoi wtedy przycisk z imieniem, który pozwala się przełączyć. Przy jednym domowniku nikt o nic nie pyta.

Imiona nie są nigdzie w kodzie. Domowników dodaje się w „Rodzina i kopia” na stronie startowej, w okienku „Kto się uczy?” albo linkiem z parametrem `?imie=Imię` (np. w linku-zakładce). Imię z linku wybiera domownika, a gdy go nie ma, dopisuje nowego. Imię zapisuje się w przeglądarce i znika z adresu.

## Postęp

Postęp (zaliczone misje, odhaczone kroki, otwarte nowości, Dziennik) zapisuje się w `localStorage` przeglądarki, osobno dla każdego kursu i domownika: klucz `<klucz kursu>:v2:<id domownika>`, np. `akademia-ai:v2:d…`. Listę domowników trzyma `akademia:domownicy`, a kto siedzi przy komputerze w tej karcie — `akademia:kto` w `sessionStorage`. Rola z bramki siedzi w kluczu `akademia:wejscie`.

**Kod zapisu** jest jeden na całą Akademię: wszystkie kursy, wszyscy domownicy. Jest na stronie startowej, w „Rodzina i kopia”. Wczytanie kodu niczego nie kasuje, tylko dokłada: misja zaliczona tu albo w kodzie zostaje zaliczona. Stare kody z jednego kursu (`AKA1.`, `ARK1.`) też pasują. Po kilku nowych misjach od ostatniej kopii strona startowa i karta zaliczonej misji przypominają o kopii.

**Statystyki** na stronie startowej liczą się z prawdziwej treści kursów, którą `js/postep.js` ładuje z listy w `js/kursy.js`. Dopisana misja od razu zmienia liczby: nic się nie rozjeżdża. Dochodzą czas nauki według planu misji, misje w tym tygodniu i ostatnia aktywność. Raport dla taty (`#raport`) składa to w kilka linijek do wklejenia w wiadomość.

**Przejście ze starego zapisu** dzieje się samo przy pierwszym wejściu. Stary zapis kursu (`akademia-ai:v1`, `akademia-arkusze:v1`) trafia do domownika o swoim imieniu; zapis bez imienia dołącza do jedynego nazwanego domownika. Numery misji zamieniają się na nazwy według list `v1` w `js/kursy.js`, kroki według treści misji. Stare klucze zostają nietknięte jako kopia bezpieczeństwa. Klucze `:podsumowanie` nie są już używane.

## Udostępnianie karty

Każda karta Niezbędnika ma przycisk „Udostępnij kartę”. Kopiuje link do `karta/?k=<kurs>.<id karty>`: publicznej strony z tą jedną kartą, bez hasła i bez postępu. Treść kart i tak jest jawna w repozytorium, więc link niczego nie odsłania.

## Struktura

Wspólne (katalog główny):

- `index.html` – ekran startowy; `#rodzina` to domownicy, linki-zakładki i kod zapisu, `#raport` to raport dla taty
- `css/start.css` – style strony startowej i karty (razem z bramką)
- `js/gate.js` – bramka z hasłem, dwiema rolami i linkiem-zakładką, ładowana w `<head>` każdej strony
- `js/kursy.js` – spis kursów: to jedyne miejsce, które wie, ile jest kursów i z jakich plików się składają
- `js/postep.js` – domownicy, zapis postępu, ładowanie treści, statystyki, kod zapisu, przejście ze starego zapisu
- `js/start.js` – kafelki, kompletność, liczby, nowości, raport, rodzina
- `karta/index.html`, `js/karta.js` – publiczna strona jednej karty z Niezbędnika
- `favicon.svg`, `robots.txt`, `.nojekyll`

Akademia AI (katalog `ai/`):

- `index.html` – szkielet strony
- `css/style.css` – style
- `js/app.js` – routing (`#/misja/karta-startowa`, `#/niezbednik`, `#/dziennik`, `#/rodzic`, `#/ustawienia`), kopiowanie, animacja warstwy
- `js/content/spis.js` – rozdziały i kolejność misji
- `js/content/misje-*.js` – treść misji (każda misja to jeden obiekt ze stałą nazwą w `id`)
- `js/content/niezbednik.js` – karty technik
- `js/content/rodzic.js` – strona dla rodzica

Akademia Arkuszy (katalog `arkusze/`) ma ten sam układ. Różnice: paleta zielona, odznaka postępu to arkusz wypełniany komórka po komórce, a przykład w misji to podgląd arkusza (pole `example.sheets`) zamiast rozmowy z AI. Krok misji ma pole `copy` (formuła albo tabelka do wklejenia; kolumny rozdziela `\t`, wiersze `\n`), a zamiast sekcji „Dopytaj” jest „Spróbuj też” (pole `variants`).

Stare linki prosto do misji Akademii AI (`/#/misja/3`, z czasów gdy kurs mieszkał w katalogu głównym) strona startowa przekierowuje do `/ai/#/misja/3`, a kurs zamienia numer na stałą nazwę misji.
