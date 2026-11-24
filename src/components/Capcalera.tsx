// Capçalera amb el nom de l'app i el menú de navegació
interface Props {
  ruta: string;
}

const enllacos = [
  { href: "/", text: "Inici" },
  { href: "/reserves", text: "Reserves" },
];

export default function Capcalera({ ruta }: Props) {
  return (
    <header className="capcalera">
      <a href="/" className="marca">
        Reserves <span>PratFP</span>
      </a>
      <nav>
        {enllacos.map((e) => (
          <a key={e.href} href={e.href} className={ruta === e.href ? "actiu" : ""}>
            {e.text}
          </a>
        ))}
      </nav>
    </header>
  );
}
