import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className={`${styles.layoutContainer}`}>
        <div className={styles.pageWrapper}>
          <div className={styles.contentContainer}>
            <Navbar />

            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
