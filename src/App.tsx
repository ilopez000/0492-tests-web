import Capcalera from "./components/Capcalera";
import Inici from "./pages/Inici";
import Reserves from "./pages/Reserves";

// Enrutament mínim: cada adreça mostra una pantalla.
// Cloudflare torna index.html per a qualsevol ruta que no sigui /api/.
const pantalles: Record<string, () => React.JSX.Element> = {
  "/": Inici,
  "/reserves": Reserves,
};

export default function App() {
  const ruta = window.location.pathname;
  const Pantalla = pantalles[ruta] ?? Inici;

  return (
    <>
      <Capcalera ruta={ruta} />
      <main>
        <Pantalla />
      </main>
      <footer>Reserves PratFP · projecte de demostració del MP0492</footer>
    </>
  );
}
