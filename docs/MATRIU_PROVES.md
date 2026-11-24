# Matriu de proves · Reserves PratFP

| Id | Criteri (Donat / Quan / Aleshores) | Cas | Test | Estat |
|---|---|---|---|---|
| P1 | Quan demano `GET /api/reserves`, aleshores torna 200 i 4 reserves | Èxit | l'API torna les 4 reserves | ✔ |
| P2 | Donat que hi ha reserves, quan obro /reserves, aleshores veig data, recurs i nom | Èxit | es veuen les reserves amb data, recurs i nom | ✔ |
| P3 | Donat que no hi ha reserves, quan obro /reserves, aleshores surt «Encara no hi ha reserves» | Límit | si no hi ha reserves surt un missatge | ✔ |
| P4 | Donat que l'API falla, quan obro /reserves, aleshores surt un missatge d'error | Error | si l'API falla surt un missatge d'error | ✔ |
| P5 | Quan visito cada enllaç de la web, aleshores cap porta a «Pàgina no trobada» | Èxit | tots els enllaços de la web funcionen | ✔ |
| P6 | Donat que soc a Inici, quan clico el menú, aleshores arribo a cada pàgina | Èxit | el menú porta a cada pàgina | ✔ |
| P7 | Quan obro Inici, aleshores veig els 3 usuaris | Èxit | la pàgina d'inici mostra els 3 usuaris | ✔ |
| P8 | Quan obro una adreça que no existeix, aleshores surt «Pàgina no trobada» | Error | una adreça que no existeix mostra «Pàgina no trobada» | ✔ |
| P9 | Quan demano una ruta de l'API que no existeix, aleshores torna 404 | Error | una ruta de l'API que no existeix torna 404 | ✔ |

Tests: `tests/reserves.spec.ts` (P1-P4) i `tests/navegacio.spec.ts` (P5-P9).
