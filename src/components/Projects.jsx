import { useRef, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ProjectCard({ title, description, videoSrc, videoId }) {
  const ref = useScrollReveal();
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !cardRef.current) return;

    const card = cardRef.current;
    const video = videoRef.current;

    const onEnter = () => card.classList.add("hover");
    const onLeave = () => {
      if (video.paused) card.classList.remove("hover");
    };
    const onPlay = () => card.classList.add("hover");
    const onPause = () => card.classList.remove("hover");

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <div className="project-card" ref={(el) => { ref.current = el; cardRef.current = el; }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {videoSrc && (
        <div className="video-container">
          <video id={videoId} src={videoSrc} controls loop ref={videoRef} />
          <div className="tab-line-icon">—</div>
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Task Management Full Stack",
    description:
      "A responsive web application built with React and Flask, featuring user authentication and real-time task management.",
    videoSrc: "/0226(1).mp4",
    videoId: "taskManagementVideo",
  },
  {
    title: "Volumify",
    description:
      "Chrome extension for volume control using Web Audio API, enabling audio amplification up to 500% on YouTube.",
    videoSrc: "/0226.mp4",
    videoId: "volumifyVideo",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
