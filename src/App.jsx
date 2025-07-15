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
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anura" element={<Anura />} />
            <Route path="/babylon" element={<Babylon />} />
            <Route path="/sgt-sausage" element={<SgtSausage />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
