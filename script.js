// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Fade effect for sections
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  // Add scroll-reveal class to elements
  const elements = document.querySelectorAll(
    "section, .project-card, .education-item"
  );
  elements.forEach((el) => el.classList.add("scroll-reveal"));

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  // Observe all elements with scroll-reveal class
  document
    .querySelectorAll(".scroll-reveal")
    .forEach((el) => observer.observe(el));

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Get the video element
  const volumifyVideo = document.getElementById("volumifyVideo");
  const volumifyCard = volumifyVideo.closest(".project-card");

  // Function to handle mouse enter
  volumifyCard.addEventListener("mouseenter", () => {
    volumifyCard.classList.add("hover");
  });

  // Function to handle mouse leave
  volumifyCard.addEventListener("mouseleave", () => {
    if (!volumifyVideo.paused) {
      volumifyCard.classList.add("hover"); // Keep card open if video is playing
    } else {
      volumifyCard.classList.remove("hover"); // Close card if video is not playing
    }
  });

  // Function to handle video play
  volumifyVideo.addEventListener("play", () => {
    volumifyCard.classList.add("hover"); // Keep card open when video plays
  });

  // Function to handle video pause
  volumifyVideo.addEventListener("pause", () => {
    volumifyCard.classList.remove("hover"); // Close card when video pauses
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in-section class to all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade-in-section");
    observer.observe(section);
  });
});
