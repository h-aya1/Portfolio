import Navbar from '~/components/common/navbar/navbar';
import Hero from '~/components/sections/hero/hero';
import About from '~/components/sections/about/about';
import Projects from '~/components/sections/projects/projects';
import Experience from '~/components/sections/experience/experience';
import Contact from '~/components/sections/contact/contact';
import Footer from '~/components/common/footer/footer';
export function meta() {
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
