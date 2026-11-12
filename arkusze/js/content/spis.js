/* Spis treści Akademii Arkuszy: rozdziały i kolejność misji. To jedyne miejsce, które ustala kolejność.
   Numer misji na stronie liczy się sam z pozycji w tym spisie, od zera.

   Nowa misja: dopisz jej obiekt w pliku misje.js (z nową, stałą nazwą w `id`), a nazwę wstaw
   tutaj w odpowiednie miejsce. Misja, której nie ma w spisie, nie pokazuje się na stronie.
   Nowy rozdział: dopisz obiekt na końcu listy. Zaliczone misje zostają zaliczone. */
window.ARKUSZE = window.ARKUSZE || {};
window.ARKUSZE.chapters = [
  {
    id: 'magazyn',
    title: 'Magazyn',
    missions: ['rozruch', 'pierwsza-formula', 'suma', 'menu']
  },
  {
    id: 'analizy',
    title: 'Centrum analiz',
    missions: ['jezeli', 'licz-jezeli', 'ceny', 'przestawna', 'wiedza', 'pulpit']
  },
  {
    id: 'twoj-sklep',
    title: 'Twój sklep',
    missions: ['twoj-arkusz-1', 'twoj-arkusz-2']
  }
];
