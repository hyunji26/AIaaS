import React, { useEffect, useRef } from 'react';
import '../styles/SearchOverlay.css';

const SearchOverlay = () => {
  const slideRef = useRef(null);
  const currentSlide = useRef(0);

  const closeSearch = () => {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('suggestions').style.display = 'block';
  };

  const changeSlide = (direction) => {
    const slides = slideRef.current.querySelectorAll(".slide");
    const slider = slideRef.current;
    const totalSlides = slides.length;

    currentSlide.current = (currentSlide.current + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentSlide.current * 100}%)`;
  };

  //자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="searchOverlay" className="search-overlay">
      <div className="search-container">
        <div className="search-header">
          <div className="input-wrapper">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              id="searchInput"
              placeholder="‘보타리’를 검색해 보세요"
            />
          </div>
          <span className="close-btn" onClick={closeSearch}>✕</span>
        </div>

        <div className="search-content">
          <h4>제안</h4>
          <div id="suggestions">
            <ul>
              <li><a href="/perfume">퍼퓸 보타리</a></li>
              <li>퍼퓸 밤 보타리</li>
              <li>퍼퓸 오일 보타리</li>
              <li>레더 웨어 퍼퓸 오일</li>
            </ul>
          </div>

          <h4>특별한 혜택</h4>
          <div className="slider-container">
            <div className="slider" ref={slideRef}>
              <div className="slide active">
                <img src="https://web-resource.tamburins.com/promotionbanner/7c1a181a-09c9-400e-97d2-226374e5cd7f/gift_recommend_bottari_pouch.jpg" alt="이벤트1" />
                <p className="date">4/28 - 5/26</p>
                <p className="desc">퍼퓸 11mL, 퍼퓸 50mL 구매 시 ‘보타리 퍼퓸 2mL’ 증정</p>
              </div>
              <div className="slide">
                <img src="https://web-resource.tamburins.com/promotionbanner/149f60d0-4b16-4168-9a04-af9e67e48b2b/gift_%ED%8D%BC%ED%93%B8%EC%98%A4%EB%B8%8C%EC%A0%9C.jpg" alt="이벤트2" />
                <p className="date">4/28 - 5/19</p>
                <p className="desc">퍼퓸 밤, 에그 퍼퓸 구매 시 보타리 향 ‘퍼퓸 오브제’ 증정</p>
              </div>
              <div className="slide">
                <img src="https://web-resource.tamburins.com/promotionbanner/9b9ea49e-d42a-4a30-aa52-7255027c28c4/gift_recommen_CPL_TRIO_JP.jpg" alt="이벤트3" />
                <p className="date">4/28 - 5/26</p>
                <p className="desc">7만원 이상 구매 시 '퍼퓸 미니 디스커버리 세트' 증정</p>
              </div>
            </div>
            <button className="prev-btn" onClick={() => changeSlide(-1)}>←</button>
            <button className="next-btn" onClick={() => changeSlide(1)}>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
