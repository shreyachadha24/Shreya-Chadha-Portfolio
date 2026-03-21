import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import AboutSection from './components/AboutSection';
import AboutMeSection from './components/AboutMeSection';
import ResumeSection from './components/ResumeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import BeyondTheLetter from './pages/BeyondTheLetter';
import EveryGirl from './pages/EveryGirl';
import EchoTouch from './pages/EchoTouch';
import SuroskieBeauty from './pages/SuroskieBeauty';
import WorkPlus from './pages/WorkPlus';
import CreativeAgency from './pages/CreativeAgency';
import Sofy from './pages/Sofy';

function HomePage() {
  useEffect(() => {
    const interactives = document.querySelectorAll('a, button, input, textarea, .interactive');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering-link'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering-link'));
    });
  }, []);

  return (
    <div className="text-gray-900 font-sans antialiased">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <AboutSection />
        <AboutMeSection />
        <ResumeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work/beyond-the-letter" element={<BeyondTheLetter />} />
      <Route path="/work/every-girl-a-bright-future" element={<EveryGirl />} />
      <Route path="/work/echotouch" element={<EchoTouch />} />
      <Route path="/work/suroskie-beauty" element={<SuroskieBeauty />} />
      <Route path="/work/work-plus" element={<WorkPlus />} />
      <Route path="/work/creative-agency" element={<CreativeAgency />} />
      <Route path="/work/sofy" element={<Sofy />} />
    </Routes>
  );
}

export default App;
