// src/components/DropdownMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

const DropdownMenu = () => {
  const handleClick = () => {
    // 드롭다운 닫기
    document.getElementById('perfume-section')?.classList.add('hidden');
    document.getElementById('overlay-dark')?.classList.remove('show');
    document.getElementById('main-header')?.classList.remove('menu-open');
  };
  return (
    <section id="perfume-section" className="hidden">
      <div className="perfume-grid">
        <div className="perfume-item">
          <Link to="/perfume" onClick={handleClick}>
            <img
              src="https://web-resource.tamburins.com/catalog/product/12001506/0d9b6071-c0e9-433b-a10e-5c5afe10c3b1/thumbnail_Bottari_50ml_Perfume_2.jpg"
              alt="퍼퓸"
            />
          </Link>
          <p>퍼퓸</p>
        </div>
        <div className="perfume-item">
          <img
            src="https://web-resource.tamburins.com/catalog/product/12001384/dbe38d4d-cf77-40a5-b171-6f7516d88a4a/thumbnail_Evening_50ml_Perfume.jpg"
            alt="퍼퓸 오일"
          />
          <p>퍼퓸 오일</p>
        </div>
        <div className="perfume-item">
          <img
            src="https://web-resource.tamburins.com/catalog/product/1695801508/1e303764-6e88-444e-a7b1-0c72ecd2e542/thumbnail_50ml_Perfume_Pumkini.jpg"
            alt="퍼퓸 밤"
          />
          <p>퍼퓸 밤</p>
        </div>
      </div>
    </section>
  );
};

export default DropdownMenu;
