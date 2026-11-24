-- Migració 0001: crea la taula d'usuaris i hi posa tres usuaris d'exemple
CREATE TABLE IF NOT EXISTS usuaris (
  id     INTEGER PRIMARY KEY AUTOINCREMENT,
  nom    TEXT    NOT NULL,
  email  TEXT    NOT NULL UNIQUE,
  creat  TEXT    NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO usuaris (nom, email) VALUES
  ('Laia Puig', 'laia@exemple.cat'),
  ('Marc Soler', 'marc@exemple.cat'),
  ('Nora Vidal', 'nora@exemple.cat');
