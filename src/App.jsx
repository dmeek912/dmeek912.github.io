import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Anura from './pages/Anura';
import Babylon from './pages/Babylon';
import SgtSausage from './pages/SgtSausage';
import Contact from './pages/Contact';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="site-name">drexel<span className="meek-highlight">meek</span>.com</Link>
      </div>
      <nav className="header-right">
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

function App() {
  return (
    <Router>
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
