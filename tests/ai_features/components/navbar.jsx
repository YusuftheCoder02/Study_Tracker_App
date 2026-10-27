function Navbar() {
  const [open, setOpen] = React.useState(false);
  const links = ["Dashboard", "Subjects", "Stats"];

  return (
    <nav className="navbar">
      <span className="navbar-brand">Study Tracker</span>
      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <ul className={open ? "navbar-links open" : "navbar-links"}>
        {links.map((name) => (
          <li key={name}>
            <a href={"#" + name.toLowerCase()}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
