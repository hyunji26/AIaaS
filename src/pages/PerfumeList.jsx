// PerfumeList.jsx (React 컴포넌트)
import React from 'react';
import styles from '../styles/PerfumeList.module.css';
import { Link } from 'react-router-dom';

const perfumeItems = [
  {
    link: '/perfume/bottari',
    img: 'https://web-resource.tamburins.com/catalog/product/12001506/0d9b6071-c0e9-433b-a10e-5c5afe10c3b1/thumbnail_Bottari_50ml_Perfume_2.jpg',
    name: '퍼퓸 보타리 블랙',
    desc: '시원한 아끼갈라우드 | 부드러운 이끼와 버섯 | 앰버 머스크',
    price: '₩ 78,000',
  },
  {
    img: 'https://web-resource.tamburins.com/catalog/product/12001506/0d9b6071-c0e9-433b-a10e-5c5afe10c3b1/thumbnail_Bottari_50ml_Perfume_2.jpg',
    name: '퍼퓸 보타리 화이트',
    desc: '시원한 아끼갈라우드 | 부드러운 이끼와 버섯 | 앰버 머스크',
    price: '₩ 78,000',
  },
  {
    img: 'https://web-resource.tamburins.com/catalog/product/12001384/dbe38d4d-cf77-40a5-b171-6f7516d88a4a/thumbnail_Evening_50ml_Perfume.jpg',
    name: '퍼퓸 이브닝글로우',
    desc: '노을에 물든 장미 | 라즈베리 | 머스크',
    price: '₩ 42,000',
  },
  {
    img: 'https://web-resource.tamburins.com/catalog/product/1695801508/1e303764-6e88-444e-a7b1-0c72ecd2e542/thumbnail_50ml_Perfume_Pumkini.jpg',
    name: '퍼퓸 펌키니',
    desc: '달콤한 호박 | 차조기잎 | 코코넛밀크',
    price: '₩ 149,000',
  },
  {
    img: 'https://web-resource.tamburins.com/catalog/product/12001509/53840eed-d227-4f0b-be29-11eb78d1bfc9/thumbnail_Bottari_11ml_Purfume(Black)_2.jpg',
    name: '퍼퓸 카모',
    desc: '풀잎의 생기 | 부드러운 우드 | 샌달우드',
    price: '₩ 129,000',
  },
  {
    img: 'https://web-resource.tamburins.com/catalog/product/12001566/7cca8234-efd5-49ed-a8d7-da090b0e64d6/thumbnail_Bottari_11ml_Purfume(White).jpg',
    name: '퍼퓸 레이트어텀',
    desc: '가을의 공기 | 붉은 나무잎 | 부드러운 스파이스',
    price: '₩ 139,000',
  },
];

const PerfumeList = () => {
  return (
      <main>
        <nav className="submenu">
          <div className="active">퍼퓸</div>
          <div>퍼퓸 오일</div>
          <div>퍼퓸 밤</div>
        </nav>
        <section className={styles.PerfumeList}>
          {perfumeItems.map((item, index) => (
           <article className={styles.perfumeItem} key={index}>
              {item.link ? (
                <Link to={item.link}>
                  <img src={item.img} alt={item.name} />
                </Link>
              ) : (
                <img src={item.img} alt={item.name} />
              )}
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </section>
      </main>
  );
};

export default PerfumeList;
