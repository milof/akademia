# Akademia

Strona startowa i kursy misji dla młodych ludzi, w jednym repozytorium, pod jednym adresem GitHub Pages. Statyczne strony bez budowania: HTML, CSS i JavaScript.

- **Akademia** (katalog główny, `https://<login>.github.io/<repo>/`): ekran startowy. Każdy kurs jako ikona aplikacji, pod spodem kompletność każdego kursu: pasek podzielony na tyle kratek, ile kurs ma misji, i nazwa następnej misji.
- **Akademia AI** (katalog `ai/`, `https://<login>.github.io/<repo>/ai/`): 13 misji o sprawnym używaniu AI (ChatGPT na koncie rodzica) w codziennym życiu.
- **Akademia Arkuszy** (katalog `arkusze/`, `https://<login>.github.io/<repo>/arkusze/`): 15 misji o Arkuszach Google od zera do poziomu średniego: tabele, formuły, SUMA i spółka, pinezka `$`, sortowanie, wykresy, formatowanie warunkowe, JEŻELI, daty, WYSZUKAJ.PIONOWO, tabela przestawna, własny projekt.

Każdy kurs ma własne style, logikę, treść i własny postęp w przeglądarce. Wspólne są bramka z hasłem (`js/gate.js`), spis kursów (`js/kursy.js`) i sposób publikacji. Poniższe uwagi dotyczą obu kursów; tam, gdzie kursy się różnią, jest to zaznaczone.

## Hasło i dwie role

Jedna bramka zasłania stronę startową i oba kursy. Hasło wpisuje się raz na danej przeglądarce; przycisk „Zablokuj stronę” (w Ustawieniach kursu albo w nagłówku strony startowej) każe zapytać o nie ponownie, wszędzie naraz.

| Hasło | Rola | Co robi |
| --- | --- | --- |
| `nukacola` | uczeń | Misje idą po kolei. Zaliczone misje, odhaczone kroki i Dziennik zapisują się w przeglądarce. |
| `tatatest` | podgląd rodzica | Wszystkie misje i karty Niezbędnika otwarte od razu. **Nic się nie zapisuje** — po odświeżeniu postęp dziecka jest taki, jak był. Na dole ekranu wisi pasek „Tryb podglądu” z przyciskiem „Wyjdź”. |

Wielkie litery i spacje nie mają znaczenia. Kto wpisał hasło jeszcze przed połączeniem kursów, nie musi go wpisywać ponownie: stare klucze bramek migrują same przy pierwszym wejściu.

Zmiana haseł: oba siedzą w `js/gate.js` — hasło ucznia w linii `HASH_UCZEN`, hasło podglądu w `HASH_PODGLAD`. Nowe hasło ucznia wygenerujesz na stronie „Dla rodzica” dowolnego kursu, w sekcji „Zmiana hasła”: wpisz je, skopiuj gotową linię i wklej w miejsce starej. Po zmianie wszyscy wpisują nowe hasło jeszcze raz.

To jest bramka, nie zamek. Zasłania stronę przed kimś, kto trafi na adres przypadkiem, a `robots.txt` i `noindex` trzymają ją poza wyszukiwarkami. Darmowe GitHub Pages działa tylko z publicznego repozytorium, więc treść kursu jest widoczna dla każdego, kto trafi na to repo. Nie ma tu nic prywatnego: żadnego imienia, żadnych rozmów, żadnych danych dziecka.

## Dopisanie kolejnego kursu

1. Zbuduj kurs w nowym katalogu, na wzór `arkusze/`. W `<head>` podepnij wspólną bramkę: `<script src="../js/gate.js"></script>`.
2. Dopisz jeden obiekt do tablicy w `js/kursy.js`: nazwa, opis, ścieżka katalogu, przedrostek kluczy w `localStorage`, liczba misji, dwa kolory paska i ikona (kwadrat 88 × 88 w SVG).

Ekran startowy sam dołoży kafelek i wiersz kompletności. Niczego więcej nie trzeba ruszać.

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

## Imię ucznia

Imię nie jest nigdzie w kodzie. Ustawia się je na stronie kursu albo linkiem z parametrem, na przykład `https://<login>.github.io/<repo>/ai/?imie=Imię` albo `https://<login>.github.io/<repo>/arkusze/?imie=Imię`. Po otwarciu imię zapisuje się w przeglądarce i znika z adresu. Każdy kurs ma własne imię, więc strona startowa nie wita nikogo po imieniu — imię stoi przy swoim kursie.

W trybie podglądu imię się nie zapisuje, także z linku.

## Postęp

Postęp (zaliczone misje, odhaczone kroki, Dziennik) zapisuje się w `localStorage` przeglądarki, osobno dla każdego kursu (klucze `akademia-ai:v1` i `akademia-arkusze:v1`). W Ustawieniach każdego kursu jest „kod zapisu” do przeniesienia postępu na inny komputer albo zrobienia kopii. Kod z jednego kursu nie pasuje do drugiego.

Obok pełnego stanu każdy kurs zapisuje skrót dla strony startowej (`akademia-ai:podsumowanie`, `akademia-arkusze:podsumowanie`): ile misji zaliczonych, ile wszystkich, jaka jest następna i jak ma na imię uczeń. Dzięki temu ekran startowy nie musi ładować treści kursów. Skrót powstaje przy pierwszym wejściu do kursu; zanim to nastąpi, strona startowa liczy misje ze spisu w `js/kursy.js`.

Rola z bramki siedzi w kluczu `akademia:wejscie`.

## Struktura

Wspólne (katalog główny):

- `index.html` – ekran startowy
- `css/start.css` – style strony startowej (razem z bramką)
- `js/gate.js` – bramka z hasłem i dwiema rolami, ładowana w `<head>` każdej strony
- `js/kursy.js` – spis kursów: to jedyne miejsce, które wie, ile jest kursów
- `js/start.js` – kafelki i kompletność
- `favicon.svg`, `robots.txt`, `.nojekyll`

Akademia AI (katalog `ai/`):

- `index.html` – szkielet strony, ładuje treść i logikę
- `css/style.css` – style
- `js/app.js` – routing (`#/misja/3`, `#/niezbednik`, `#/dziennik`, `#/rodzic`, `#/ustawienia`), zapis postępu, kopiowanie, animacja warstwy
- `js/content/misje-*.js` – treść misji (każda misja to jeden obiekt)
- `js/content/niezbednik.js` – karty technik
- `js/content/rodzic.js` – strona dla rodzica

Akademia Arkuszy (katalog `arkusze/`) ma ten sam układ. Różnice: paleta zielona, odznaka postępu to arkusz wypełniany komórka po komórce, a przykład w misji to podgląd arkusza (pole `example.sheets`) zamiast rozmowy z AI. Krok misji ma pole `copy` (formuła albo tabelka do wklejenia; kolumny rozdziela `\t`, wiersze `\n`), a zamiast sekcji „Dopytaj” jest „Spróbuj też” (pole `variants`).

Stare linki prosto do misji Akademii AI (`/#/misja/3`, z czasów gdy kurs mieszkał w katalogu głównym) strona startowa przekierowuje do `/ai/#/misja/3`.
