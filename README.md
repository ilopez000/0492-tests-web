# 0492 · Tests de la web amb Playwright

Exemple del MP0492 Projecte intermodular (PratFP): la web **Reserves PratFP** (React + Cloudflare Worker + D1 en local)
amb 9 tests automàtics fets amb [Playwright](https://playwright.dev).

## Posar-ho en marxa

```
git clone https://github.com/ilopez000/0492-tests-web.git
cd 0492-tests-web
npm install
npx playwright install chromium
npm test
```

Han de sortir **9 passed**. Per veure l'informe al navegador: `npm run informe`.

## On és cada cosa

| Fitxer | Què hi ha |
|---|---|
| `tests/reserves.spec.ts` | 4 tests de la història #14 (llista de reserves) |
| `tests/navegacio.spec.ts` | 5 tests de navegació: enllaços, menú, inici i errors |
| `playwright.config.ts` | Configuració: engega la web abans dels tests |
| `docs/MATRIU_PROVES.md` | Matriu de proves: criteri → cas → test |

## Prova que els tests funcionen

A `src/components/TargetaReserva.tsx` esborra la línia `<span>{reserva.nom_usuari}</span>` i torna a fer `npm test`:
un test ha de sortir en vermell. Torna a posar la línia i tot torna a estar en verd.

## Posar en marxa la web (sense tests)

```
npm run db:local
npm run dev
```

Obre http://localhost:5173/reserves. Per aturar-la, Ctrl + C al terminal.
