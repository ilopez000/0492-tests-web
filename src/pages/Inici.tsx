import { useEffect, useState } from "react";
import type { Usuari } from "../types";

// Pantalla d'inici: presentació i usuaris donats d'alta (llegits de D1)
export default function Inici() {
  const [usuaris, setUsuaris] = useState<Usuari[]>([]);

  useEffect(() => {
    fetch("/api/usuaris")
      .then((resposta) => resposta.json())
      .then(setUsuaris);
  }, []);

  return (
    <section>
      <h1>Benvinguda</h1>
      <p className="subtitol">Reserva sales i material de l'institut en dos clics.</p>
      <h2>Usuaris</h2>
      <ul className="llista">
        {usuaris.map((u) => (
          <li key={u.id}>
            <strong>{u.nom}</strong>
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
