/* Spis treści Akademii Arkuszy: rozdziały i kolejność misji. To jedyne miejsce, które ustala kolejność.
   Numer misji na stronie liczy się sam z pozycji w tym spisie, od zera.

   Nowa misja: dopisz jej obiekt w pliku misje-*.js (z nową, stałą nazwą w `id`), a nazwę wstaw
   tutaj w odpowiednie miejsce. Misja, której nie ma w spisie, nie pokazuje się na stronie.
   Nowy rozdział: dopisz obiekt na końcu listy. Zaliczone misje zostają zaliczone. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.chapters = [
  {
    id: 'podstawy',
    title: 'Podstawy',
    missions: ['rozruch', 'tabela', 'przeciagnij', 'pierwsza-formula', 'suma', 'pinezka', 'sortuj', 'wykres']
  },
  {
    id: 'sredni',
    title: 'Poziom średni',
    missions: ['kolory', 'jezeli', 'daty', 'karty', 'przestawna']
  },
  {
    id: 'twoj-arkusz',
    title: 'Twój arkusz',
    missions: ['twoj-arkusz-1', 'twoj-arkusz-2']
  }
];
