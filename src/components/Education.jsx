import { useScrollReveal } from "../hooks/useScrollReveal";

const schools = [
  {
    name: "California State University, Long Beach",
    degree: "Bachelor of Science in Computer Science",
    graduation: "June 2027",
  },
  {
    name: "California Academy of Mathematics and Science",
    degree: "High School Diploma",
    graduation: "June 2023",
  },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref}>
      <h2>Education</h2>
      <div className="education-content">
        {schools.map((school) => (
          <div className="education-item" key={school.name}>
            <h3>{school.name}</h3>
            <p>{school.degree}</p>
            <p>Graduation: {school.graduation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
