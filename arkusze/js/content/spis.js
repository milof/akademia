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
    missions: ['rozruch', 'tabela', 'przeciagnij', 'pierwsza-formula', 'suma', 'pinezka', 'sortuj']
  },
  {
    id: 'decyzje',
    title: 'Status i decyzje',
    missions: ['menu', 'kolory', 'jezeli', 'daty', 'licz-jezeli', 'wykres', 'sklejanie']
  },
  {
    id: 'analizy',
    title: 'Centrum analiz',
    missions: ['ceny', 'karty', 'przestawna', 'wiedza', 'pulpit', 'ochrona']
  },
  {
    id: 'twoj-sklep',
    title: 'Twój sklep',
    missions: ['twoj-arkusz-1', 'twoj-arkusz-2', 'twoj-arkusz-3']
  }
];
