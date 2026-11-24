// API de Reserves PratFP. Totes les rutes comencen per /api/.
// La resta d'adreces (/, /reserves...) les serveix Cloudflare
// directament amb els fitxers de React.

interface Usuari {
  id: number;
  nom: string;
  email: string;
  creat: string;
}

interface Reserva {
  id: number;
  recurs: string;
  data: string;
  hora_inici: string;
  hora_fi: string;
  nom_usuari: string;
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const metode = request.method;

    // GET /api/usuaris -> llista d'usuaris
    if (url.pathname === "/api/usuaris" && metode === "GET") {
      const { results } = await env.DB
        .prepare("SELECT * FROM usuaris ORDER BY nom")
        .all<Usuari>();
      return Response.json(results);
    }

    // GET /api/reserves -> reserves amb el nom de l'usuari, per data i hora
    if (url.pathname === "/api/reserves" && metode === "GET") {
      const { results } = await env.DB
        .prepare(
          `SELECT r.id, r.recurs, r.data, r.hora_inici, r.hora_fi, u.nom AS nom_usuari
           FROM reserves r JOIN usuaris u ON u.id = r.usuari_id
           ORDER BY r.data, r.hora_inici`,
        )
        .all<Reserva>();
      return Response.json(results);
    }

    return Response.json({ error: "Ruta no trobada" }, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
