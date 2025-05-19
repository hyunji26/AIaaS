// src/pages/Home.jsx
import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroText}>
        <h1>PERFUME COLLECTION</h1>
        <p>향과 오브제의 경계를 허무는 감각적인 여정</p>
      </div>
    </main>
  );
};

export default Home;
