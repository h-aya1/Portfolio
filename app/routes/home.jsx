import { useEffect, useRef } from 'react';
import Navbar from '~/components/common/navbar/navbar';
import Hero from '~/components/sections/hero/hero';
import Ticker from '~/components/common/ticker/Ticker';
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
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const onMove = (e) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">
      <div className="cursor-glow" ref={cursorRef} aria-hidden="true" />
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
