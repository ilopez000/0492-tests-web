// Tipus compartits pel frontend
export interface Usuari {
  id: number;
  nom: string;
  email: string;
  creat: string;
}

export interface Reserva {
  id: number;
  recurs: string;
  data: string; // 2026-11-12
  hora_inici: string; // 09:00
  hora_fi: string;
  nom_usuari: string;
}
