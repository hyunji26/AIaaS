import React from 'react';
import styles from '../styles/PerfumeDetail.module.css';

const PerfumeDetail = () => {
  return (
    <main>
      <nav className={styles.submenu}>
        <a href="/perfume" className={styles.active}>퍼퓸</a>
        <a href="#">퍼퓸 오일</a>
        <a href="#">퍼퓸 밤</a>
      </nav>

      <section className={styles.detailContainer}>
        <img
          src="https://web-resource.tamburins.com/catalog/product/12001506/0d9b6071-c0e9-433b-a10e-5c5afe10c3b1/thumbnail_Bottari_50ml_Perfume_2.jpg"
          alt="보타리 상세"
        />

        <div className={styles.detailText}>
          <h2>퍼퓸 보타리</h2>
          <strong>₩ 178,000</strong>
          <p className={styles.shortDesc}>시원한 아기갈라우드 | 부드러운 이끼와 버섯 | 앰버 머스크</p>
          <p className={styles.fullDesc}>
            보타리는 버섯 포자가 터질 때 느껴지는 폭발적인 생명력을 담아, 깊고 감각적인 향의 퍼퓸으로 주변을 장악합니다.
            단단한 매듭 속에 겹쳐진 것들이 하나씩 모습을 드러내며 호기심을 자아내고,
            시원한 아기갈라우드를 가득 머금은 공기가 스치면 젖은 대지 위 부드러운 이끼와 나뭇결의 내음이 뒤따르며 예기치 못한 향의 편지가 시작됩니다.
            그리고 마침내 넓디넓게 완전히 펼쳐지면, 생소한 물건들이 쏟아져 나오듯이 신비롭고도 앰버그리스와 묵직한 머스크가 만나 폭발하듯 퍼뜨리며
            어두운 하늘에 반짝이는 수천 개의 별처럼 아름다운 상상을 수놓아 공기를 황홀하게 물들입니다.
          </p>

          <div className={styles.thumbnailList}>
            <img src="https://web-resource.tamburins.com/catalog/product/12001506/7c01bd95-a621-487a-8437-f6862eda1258/thumbnail_Bottari_50ml_Perfume_2.jpg" alt="보타리" />
            <img src="https://web-resource.tamburins.com/catalog/product/12001384/e4430943-1420-40ca-ac11-11607049814d/thumbnail_Evening_50ml_Perfume.jpg" alt="이브닝글로우" />
            <img src="https://web-resource.tamburins.com/catalog/product/1695801508/eb726b99-0e79-4de9-85c0-fe83e436ce85/thumbnail_50ml_Perfume_Pumkini.jpg" alt="펌키니" />
            <img src="https://web-resource.tamburins.com/catalog/product/1662462471/1779b4f9-991e-4665-b332-3c28f1cd601f/thumbnail_50ml_Perfume_Chamo.jpg" alt="카모" />
          </div>

          <div className={styles.sizeSelector}>
            <button>11mL</button>
            <button className={styles.active}>50mL</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PerfumeDetail;
