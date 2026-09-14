/* Spis kursów Akademii. Dopisanie kolejnego kursu to jeden obiekt w tej tablicy
   plus katalog z kursem — strona startowa sama dołoży kafelek i pasek kompletności.

   nazwa    – podpis pod ikoną
   opis     – jedno zdanie na karcie kompletności
   sciezka  – katalog kursu względem strony startowej, ze slashem na końcu
   klucz    – przedrostek kluczy w localStorage: <klucz>:v1 i <klucz>:podsumowanie
   misje    – ile misji ma kurs (używane, zanim uczeń pierwszy raz go otworzy)
   kolor    – kolor zaliczonej misji na pasku
   kolorNast– kolor misji, która jest następna w kolejce
   ikona    – ikona aplikacji, kwadrat 88 × 88 (id gradientów muszą być unikalne) */
window.KURSY = [
  {
    id: 'ai',
    nazwa: 'Akademia AI',
    opis: 'Sprawne używanie AI w codziennych sprawach',
    sciezka: 'ai/',
    klucz: 'akademia-ai',
    misje: 13,
    kolor: '#F2620F',
    kolorNast: '#FFD3B0',
    ikona:
      '<svg viewBox="0 0 88 88" aria-hidden="true">' +
        '<defs><linearGradient id="ik-ai" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#FF8A3D"/><stop offset="1" stop-color="#E2560B"/>' +
        '</linearGradient></defs>' +
        '<rect width="88" height="88" rx="20" fill="url(#ik-ai)"/>' +
        '<rect x="20" y="62" width="48" height="5" rx="1.5" fill="#16202A" opacity=".45"/>' +
        '<rect x="24" y="50" width="40" height="9" rx="2" fill="#FFFFFF" opacity=".95"/>' +
        '<rect x="28" y="38" width="32" height="9" rx="2" fill="#FFFFFF" opacity=".78"/>' +
        '<rect x="32" y="26" width="24" height="9" rx="2" fill="#FFFFFF" opacity=".58"/>' +
      '</svg>'
  },
  {
    id: 'arkusze',
    nazwa: 'Akademia Arkuszy',
    opis: 'Arkusze Google od siatki do tabeli przestawnej',
    sciezka: 'arkusze/',
    klucz: 'akademia-arkusze',
    misje: 15,
    kolor: '#34A853',
    kolorNast: '#B7E1C2',
    ikona:
      '<svg viewBox="0 0 88 88" aria-hidden="true">' +
        '<rect width="88" height="88" rx="20" fill="#FFFFFF"/>' +
        '<rect x="1" y="1" width="86" height="86" rx="19" fill="none" stroke="#D9DFE5" stroke-width="2"/>' +
        '<rect x="14" y="18" width="60" height="12" rx="3" fill="#34A853"/>' +
        '<rect x="14" y="34" width="60" height="36" rx="3" fill="#F1F4F7"/>' +
        '<rect x="34" y="34" width="2" height="36" fill="#FFFFFF"/>' +
        '<rect x="54" y="34" width="2" height="36" fill="#FFFFFF"/>' +
        '<rect x="14" y="46" width="60" height="2" fill="#FFFFFF"/>' +
        '<rect x="14" y="58" width="60" height="2" fill="#FFFFFF"/>' +
        '<rect x="36" y="48" width="18" height="10" fill="#E8F0FE" stroke="#1A73E8" stroke-width="2"/>' +
      '</svg>'
  }
];
