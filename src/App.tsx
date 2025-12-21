import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import Footer from './widgets/Footer/Footer';
import Navbar from './widgets/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import { ModalProvider } from './context/ModalContext';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <Router>
        <div className={`${styles.layoutContainer}`}>
          <div className={styles.pageWrapper}>
            <div className={styles.contentContainer}>
              <Navbar />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
              </Routes>

              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ModalProvider>
  );
};

export default App;
