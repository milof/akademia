/* Spis treści Akademii AI: rozdziały i kolejność misji. To jedyne miejsce, które ustala kolejność.
   Numer misji na stronie liczy się sam z pozycji w tym spisie, od zera.

   Nowa misja: dopisz jej obiekt w pliku misje-*.js (z nową, stałą nazwą w `id`), a nazwę wstaw
   tutaj w odpowiednie miejsce. Misja, której nie ma w spisie, nie pokazuje się na stronie.
   Nowy rozdział: dopisz obiekt na końcu listy. Zaliczone misje zostają zaliczone. */
window.AKADEMIA = window.AKADEMIA || {};
window.AKADEMIA.chapters = [
  {
    id: 'pierwsze-rozmowy',
    title: 'Pierwsze rozmowy',
    missions: ['rozruch', 'karta-startowa', 'dopytuj']
  },
  {
    id: 'techniki',
    title: 'Techniki do zadań',
    missions: ['trudny-temat', 'porownaj', 'plan-na-kroki', 'kilka-wersji', 'zlap-blad', 'sprawy-domowe', 'jak-jeszcze', 'ja-za-15-lat']
  },
  {
    id: 'final',
    title: 'Finał',
    missions: ['solo', 'zbuduj-1', 'zbuduj-2']
  }
];
