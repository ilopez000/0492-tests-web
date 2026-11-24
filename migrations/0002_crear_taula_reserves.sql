-- Migració 0002: crea la taula de reserves i hi posa quatre reserves d'exemple
CREATE TABLE IF NOT EXISTS reserves (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  usuari_id   INTEGER NOT NULL REFERENCES usuaris(id),
  recurs      TEXT    NOT NULL,              -- sala o material
  data        TEXT    NOT NULL,              -- format ISO: 2026-11-12
  hora_inici  TEXT    NOT NULL,              -- format HH:MM
  hora_fi     TEXT    NOT NULL
);

INSERT INTO reserves (usuari_id, recurs, data, hora_inici, hora_fi) VALUES
  (1, 'Aula 2.3', '2026-11-12', '09:00', '11:00'),
  (2, 'Carro de portàtils', '2026-11-12', '15:00', '17:00'),
  (3, 'Sala d''actes', '2026-11-13', '10:30', '12:00'),
  (1, 'Projector portàtil', '2026-11-14', '16:00', '18:00');
