import { useState } from 'react';

const ProjectMedia = ({ images, title, technologies, accent }) => {
  const [current, setCurrent] = useState(0);

  if (images && images.length > 0) {
    const prev = () => setCurrent(i => (i - 1 + images.length) % images.length);
    const next = () => setCurrent(i => (i + 1) % images.length);

    return (
      <div className="project-media">
        <img
          src={images[current]}
          alt={`${title} — screen ${current + 1}`}
          className="project-media-img"
        />
        {images.length > 1 && (
          <>
            <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">&#8249;</button>
            <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">&#8250;</button>
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to screen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className={`project-media project-media-placeholder project-placeholder-${accent}`}>
      <span className="placeholder-initial">{title[0]}</span>
      <div className="placeholder-tags">
        {technologies.slice(0, 3).map(t => (
          <span key={t} className="placeholder-tag">{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectMedia;
