# Matriu de proves · Reserves PratFP

| Id | Història | Criteri (Donat / Quan / Aleshores) | Cas | Test | Estat |
|---|---|---|---|---|---|
| P1 | #14 | Quan demano `GET /api/reserves`, aleshores torna 200 i 4 reserves | Feliç | l'API torna les 4 reserves | ✔ |
| P2 | #14 | Donat que hi ha reserves, quan obro /reserves, aleshores veig data, recurs i nom | Feliç | es veuen les reserves amb data, recurs i nom | ✔ |
| P3 | #14 | Donat que no hi ha reserves, quan obro /reserves, aleshores surt «Encara no hi ha reserves» | Límit | si no hi ha reserves surt un missatge | ✔ |
| P4 | #14 | Donat que l'API falla, quan obro /reserves, aleshores surt un missatge d'error | Error | si l'API falla surt un missatge d'error | ✔ |

Tots els tests són a `tests/reserves.spec.ts`.
