export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact</h3>
          <p>Long Beach, CA</p>
          <p>
            <a href="mailto:jesussantiago.edu@gmail.com">
              jesussantiago.edu@gmail.com
            </a>
          </p>
          <p>(562) 326-8776</p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jesussantiago29"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cleanjesus"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Jesus Santiago &bull; Computer Science Student</p>
        </div>
      </div>
    </footer>
  );
}
