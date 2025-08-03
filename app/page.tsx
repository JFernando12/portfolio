import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="font-poppins bg-white dark:bg-slate-900 min-h-screen">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <SocialMedia />
        <Contact />
      </main>
    </div>
  );
}
