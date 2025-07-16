import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Anura from './pages/Anura';
import Babylon from './pages/Babylon';
import SgtSausage from './pages/SgtSausage';
import Work from './pages/Work';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="site-name">drexelmeek.com</Link>
      </div>
      <nav className="header-right">
        <Link to="/about">About Me</Link>
        <Link to="/anura">Anura</Link>
        <Link to="/babylon">Babylon Consulting</Link>
        <Link to="/sgt-sausage">Sgt Sausage</Link>
        <Link to="/work">Work</Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div className="container"><main><About /></main></div>} />
        <Route path="/anura" element={<div className="container"><main><Anura /></main></div>} />
        <Route path="/babylon" element={<div className="container"><main><Babylon /></main></div>} />
        <Route path="/sgt-sausage" element={<div className="container"><main><SgtSausage /></main></div>} />
        <Route path="/work" element={<div className="container"><main><Work /></main></div>} />
      </Routes>
    </Router>
  );
}

export default App;
