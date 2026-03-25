import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-content">
        <h1>Jesus Santiago</h1>
        <p>Computer Science Student | Developer | Video Editor</p>
      </div>
    </section>
  );
}
