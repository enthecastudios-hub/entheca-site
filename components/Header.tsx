"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <input type="checkbox" id="menu-check" className="menu-check" />

      <nav className="site-nav">
        <a href="/#top" className="logo-mark">
          <span className="logo-name">ENTHECA</span>
          <span className="logo-divider"></span>
          <span className="logo-studio font-mono">studios</span>
        </a>

        <ul className="nav-links">
          <li><a href="/#feature">Work</a></li>
          <li><a href="/#studio">Studio</a></li>
          <li><a href="/#shop">Shop</a></li>
          <li><a href="/#donate">Donate</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <a href="/#contact" className="nav-cta font-mono">Start a project</a>

        <label htmlFor="menu-check" className="menu-toggle">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
        </label>
      </nav>

      <div className="mobile-menu">
        <a href="#contact" className="mobile-cta font-mono">Start a project</a>
        <a href="/#feature">Work</a>
        <a href="/#studio">Studio</a>
        <a href="/#shop">Shop</a>
        <a href="/#donate">Donate</a>
        <a href="/#contact">Contact</a>
      </div>
    </header>
  );
}