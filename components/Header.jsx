import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 헤더에 menu-open 클래스를 붙일 조건:
  const isNotHome = location.pathname !== '/';
  const isMenuOpen = isDropdownOpen || isNotHome;

  const handlePerfumeClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('perfume-section');
    const overlay = document.getElementById('overlay-dark');
    const isOpen = section.classList.toggle('hidden');
    overlay.classList.toggle('show', !isOpen);
    setIsDropdownOpen(!isOpen);
  };

  const handleSearchClick = () => {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.add('active');
    document.querySelector('#searchOverlay input')?.focus();
  };

  return (
    <header id="main-header" className={isMenuOpen ? 'menu-open' : ''}>
      <Link to="/" className="logo">TAMBURINS</Link>
      <nav className="nav-left">
        <Link to="#">BOTTARI</Link>
        <Link to="/perfume" id="perfume-link" onClick={handlePerfumeClick}>PERFUME</Link>
        <Link to="#">HAND&LIP</Link>
        <Link to="#">BODY</Link>
        <Link to="#">HOME FRAGRANCE</Link>
        <Link to="#">STORE</Link>
      </nav>
      <div className="nav-right">
        <div className="search-box" onClick={handleSearchClick}>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input type="text" placeholder="‘보타리’를 검색해 보세요" readOnly />
        </div>
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
          </svg>
        </span>
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-13z" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
