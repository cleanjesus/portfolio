import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref}>
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I&apos;m a Computer Science student with experience in full-stack
          development, video editing, and a passion for creating innovative
          solutions. I specialize in web development and have expertise in
          various programming languages and tools.
        </p>
      </div>
    </section>
  );
}
