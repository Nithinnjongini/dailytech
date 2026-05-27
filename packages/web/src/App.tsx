import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Mission from './pages/Mission.tsx';
import Contact from './pages/Contact.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        {/* Glow ambient spots */}
        <div className="glow-background glow-violet-bg"></div>
        <div className="glow-background glow-cyan-bg"></div>

        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
