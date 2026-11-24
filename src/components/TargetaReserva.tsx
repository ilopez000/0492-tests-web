import type { Reserva } from "../types";

// Una reserva: data i hora a l'esquerra, recurs i persona a la dreta
interface Props {
  reserva: Reserva;
}

// "2026-11-12" -> "12/11/2026"
function formataData(iso: string) {
  const [any, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${any}`;
}

export default function TargetaReserva({ reserva }: Props) {
  return (
    <li className="reserva">
      <div className="quan">
        <strong>{formataData(reserva.data)}</strong>
        <span>
          {reserva.hora_inici} – {reserva.hora_fi}
        </span>
      </div>
      <div className="que">
        <strong>{reserva.recurs}</strong>
        <span>{reserva.nom_usuari}</span>
      </div>
    </li>
  );
}
