import { useEffect, useState } from "react";
import TargetaReserva from "../components/TargetaReserva";
import type { Reserva } from "../types";

// Pantalla de reserves (història #14): llista llegida de GET /api/reserves
export default function Reserves() {
  const [reserves, setReserves] = useState<Reserva[]>([]);
  const [carregant, setCarregant] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/reserves")
      .then((resposta) => {
        if (!resposta.ok) throw new Error("No s'han pogut carregar les reserves");
        return resposta.json();
      })
      .then(setReserves)
      .catch((e: Error) => setError(e.message))
      .finally(() => setCarregant(false));
  }, []);

  return (
    <section>
      <h1>Reserves</h1>
      {carregant && <p className="subtitol">Carregant...</p>}
      {error && <p className="error">{error}</p>}
      {!carregant && !error && reserves.length === 0 && (
        <p className="pendent">Encara no hi ha reserves</p>
      )}
      <ul className="llista">
        {reserves.map((r) => (
          <TargetaReserva key={r.id} reserva={r} />
        ))}
      </ul>
    </section>
  );
}
