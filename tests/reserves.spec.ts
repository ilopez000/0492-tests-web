import { expect, test } from "@playwright/test";

// Història #14: «Com a usuari vull veure la llista de reserves»

test("l'API torna les 4 reserves", async ({ request }) => {
  const resposta = await request.get("/api/reserves");
  expect(resposta.status()).toBe(200);
  expect(await resposta.json()).toHaveLength(4);
});

test("es veuen les reserves amb data, recurs i nom", async ({ page }) => {
  await page.goto("/reserves");
  await expect(page.locator(".reserva")).toHaveCount(4);
  await expect(page.getByText("12/11/2026").first()).toBeVisible();
  await expect(page.getByText("Aula 2.3")).toBeVisible();
  await expect(page.getByText("Laia Puig").first()).toBeVisible();
});

test("si no hi ha reserves surt un missatge", async ({ page }) => {
  await page.route("**/api/reserves", (ruta) => ruta.fulfill({ json: [] }));
  await page.goto("/reserves");
  await expect(page.getByText("Encara no hi ha reserves")).toBeVisible();
});

test("si l'API falla surt un missatge d'error", async ({ page }) => {
  await page.route("**/api/reserves", (ruta) => ruta.fulfill({ status: 500 }));
  await page.goto("/reserves");
  await expect(page.getByText("No s'han pogut carregar les reserves")).toBeVisible();
});
