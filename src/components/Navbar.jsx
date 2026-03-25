export default function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header>
      <nav>
        <ul>
          {["home", "about", "education", "projects"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={(e) => handleClick(e, `#${item}`)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
