import './ticker.css';

const ITEMS = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS',
  'Redux', 'Vite', 'JavaScript', 'Express', 'Sass', 'CSS3', 'REST APIs', 'Git',
];

const Ticker = () => (
  <div className="ticker" aria-hidden="true">
    <div className="ticker-track">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="ticker-item">
          {item}
          <span className="ticker-sep">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default Ticker;
