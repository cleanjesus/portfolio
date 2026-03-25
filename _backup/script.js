document.addEventListener("DOMContentLoaded", () => {
  // Add scroll-reveal class and observe
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll("section, .project-card, .education-item")
    .forEach((el) => {
      el.classList.add("scroll-reveal");
      observer.observe(el);
    });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Video hover interaction on Volumify card
  const volumifyVideo = document.getElementById("volumifyVideo");
  if (volumifyVideo) {
    const card = volumifyVideo.closest(".project-card");

    card.addEventListener("mouseenter", () => card.classList.add("hover"));
    card.addEventListener("mouseleave", () => {
      if (volumifyVideo.paused) card.classList.remove("hover");
    });

    volumifyVideo.addEventListener("play", () => card.classList.add("hover"));
    volumifyVideo.addEventListener("pause", () =>
      card.classList.remove("hover")
    );
  }
});
