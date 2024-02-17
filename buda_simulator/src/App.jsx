import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NavBar from './components/NavBar';
import styles from './style';
import FooterSection from './components/FooterSection';

const App = () => {
  return(
    <Router>
    <div className={`bg-[#032647] w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-[#053B6D] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
        </Routes>
        <FooterSection/>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;