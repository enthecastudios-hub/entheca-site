import { SiInstagram, SiX, SiReddit, SiTiktok, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/#top" className="logo-mark">
          <span className="logo-name">ENTHECA</span>
          <span className="logo-divider"></span>
          <span className="logo-studio font-mono">studios</span>
        </a>
        <div className="footer-links">
          <a href="/#feature">Work</a>
          <a href="/#shop">Shop</a>
          <a href="/#donate">Donate</a>
          <a href="/#studio">Studio</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://instagram.com/enthecastudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SiInstagram /></a>
          <a href="https://x.com/ENTHECAstudios" target="_blank" rel="noopener noreferrer" aria-label="X"><SiX /></a>
          <a href="https://reddit.com/u/ENTHECAstudios" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><SiReddit /></a>
          <a href="https://tiktok.com/@enthecastudios" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><SiTiktok /></a>
          <a href="https://youtube.com/@ENTHECAstudios" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><SiYoutube /></a>
        </div>

        <div className="footer-copy">© 2026 ENTHECA Studios. All rights reserved.</div>
      </div>
    </footer>
  );
}