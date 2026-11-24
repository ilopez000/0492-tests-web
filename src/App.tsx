import Capcalera from "./components/Capcalera";
import Inici from "./pages/Inici";
import Reserves from "./pages/Reserves";

// Pantalla per a les adreces que no existeixen
function NoTrobada() {
  return (
    <section>
      <h1>Pàgina no trobada</h1>
      <p className="subtitol">Aquesta adreça no existeix.</p>
    </section>
  );
}

// Enrutament mínim: cada adreça mostra una pantalla.
// Cloudflare torna index.html per a qualsevol ruta que no sigui /api/.
const pantalles: Record<string, () => React.JSX.Element> = {
  "/": Inici,
  "/reserves": Reserves,
};

export default function App() {
  const ruta = window.location.pathname;
  const Pantalla = pantalles[ruta] ?? NoTrobada;

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
