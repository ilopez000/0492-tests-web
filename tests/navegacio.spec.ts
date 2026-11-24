import { expect, test } from "@playwright/test";

// Tests de navegació: enllaços, menú, pàgina d'inici i errors

test("tots els enllaços de la web funcionen", async ({ page }) => {
  for (const pagina of ["/", "/reserves"]) {
    await page.goto(pagina);
    const enllacos = await page.locator("a").evaluateAll((as) =>
      as.map((a) => a.getAttribute("href") ?? ""),
    );
    for (const href of enllacos) {
      await page.goto(href);
      await expect(page.getByText("Pàgina no trobada"), `Enllaç trencat: ${href}`).not.toBeVisible();
    }
  }
});

test("el menú porta a cada pàgina", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Reserves", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Reserves" })).toBeVisible();

  await page.getByRole("link", { name: "Inici" }).click();
  await expect(page.getByRole("heading", { name: "Benvinguda" })).toBeVisible();
});

test("la pàgina d'inici mostra els 3 usuaris", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("laia@exemple.cat")).toBeVisible();
  await expect(page.getByText("marc@exemple.cat")).toBeVisible();
  await expect(page.getByText("nora@exemple.cat")).toBeVisible();
});

test("una adreça que no existeix mostra «Pàgina no trobada»", async ({ page }) => {
  await page.goto("/no-existeix");
  await expect(page.getByRole("heading", { name: "Pàgina no trobada" })).toBeVisible();
});

test("una ruta de l'API que no existeix torna 404", async ({ request }) => {
  const resposta = await request.get("/api/no-existeix");
  expect(resposta.status()).toBe(404);
});
