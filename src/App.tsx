import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Differentials } from './components/sections/Differentials';
import { Operations } from './components/sections/Operations';
import { Institutional } from './components/sections/Institutional';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Operations />
      <Institutional />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
