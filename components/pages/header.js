"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link href="/">
        <img src="/img/logo.png" alt="logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <div className="right-menu">
        <Link href="#">Blog</Link>
        <Link href="#contact" style={{ color: '#26A5EA', fontWeight: 500 }}>Contact</Link>
      </div>
      <div className="menuIcon" onClick={toggleMenu}>
        <i className='bx bx-menu'></i>
      </div>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li> {/* Directs to the portfolio page */}
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#contact" style={{ fontWeight: 500 }}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
