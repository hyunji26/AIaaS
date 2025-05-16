// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css'; 
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>매장안내</h4>
          <ul>
            <li>대한민국</li>
            <li>일본</li>
            <li>중국</li>
            <li>전시</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>고객서비스</h4>
          <ul>
            <li>비회원 주문 조회</li>
            <li>교환 및 반품</li>
            <li>자주 묻는 질문</li>
            <li>1:1문의하기</li>
            <li>기업 구매</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>법적 고지</h4>
          <ul>
            <li>공지사항</li>
            <li>이용 약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>소셜 미디어</h4>
          <ul>
            <li>인스타그램</li>
            <li>카카오톡</li>
            <li>페이스북</li>
            <li>웨이보</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Tamburins | 대표자: 강민조 | 사업자등록번호: 119-86-38589 | 주소: 서울특별시 마포구 어울마당로5길 41
        </p>
      </div>
    </footer>
  );
};

export default Footer;
