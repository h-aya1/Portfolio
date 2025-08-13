import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Experience from '../components/experience/experience';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hayat's Portfolio" },
    { name: "description", content: "Hayat is a web developer and front-end developer specializing in React, JavaScript, and modern web technologies. View portfolio, projects, and experience." },
  ];
}

export default function Home() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
