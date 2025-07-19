import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Anura from './pages/Anura';
import Babylon from './pages/Babylon';
import SgtSausage from './pages/SgtSausage';
import Contact from './pages/Contact';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Close menu on route change
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); }, [location]);
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="site-name">drexel<span className="meek-highlight">meek</span>.com</Link>
      </div>
      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen(m => !m)}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <nav className={`header-right${menuOpen ? ' open' : ''}`}>
        <Link to="/about">About Me</Link>
        <Link to="/anura">Anura</Link>
        <Link to="/babylon">Babylon Consulting</Link>
        <Link to="/sgt-sausage">Sgt Sausage</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-divider"></div>
        <p className="footer-text">Copyright © 2025 drexelmeek.com</p>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div><main><About /></main></div>} />
            <Route path="/anura" element={<div><main><Anura /></main></div>} />
            <Route path="/babylon" element={<div><main><Babylon /></main></div>} />
            <Route path="/sgt-sausage" element={<div><main><SgtSausage /></main></div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
