import React, { useState } from 'react';
import ArtDisplayCard from '../components/ArtDisplayCard';
import '../styles/TopRatedPage.css';

import topRatedImage1 from '../assets/image1.jpg';
import topRatedImage2 from '../assets/image2.jpg';
import topRatedImage3 from '../assets/image3.jpg';
// --------------------------------------------------

const portraitData = [
  { title: 'Flowers of Garden', image: topRatedImage1 },
  { title: 'Sunrise Serenity', image: topRatedImage2 },
  { title: 'Abstract Minds', image: topRatedImage3 }
];

const landscapeData = [
  { title: 'Blue Ocean Horizon', image: topRatedImage1 },
  { title: 'Mountain Peaks View', image: topRatedImage2 },
  { title: 'City Skyline Dusk', image: topRatedImage3 }
];

const TopRatedPage = () => {
  const [activeFilter, setActiveFilter] = useState('Portrait');

  const currentArtData =
    activeFilter === 'Portrait' ? portraitData : landscapeData;

  const cardsSectionClass =
    activeFilter === 'Landscape'
      ? 'cards-section-container landscape-active'
      : 'cards-section-container';

  return (
    <div className="top-rated-page-wrapper">
      <header className="page-header">
        <h1 className="header-title">Top Rated</h1>

        <div className="header-decoration">
          <div className="line-divider"></div>
          <div className="dot dot-filled"></div>
          <div className="dot dot-bordered"></div>
        </div>

        <div className="header-filters">
          <div
            className={`filter-button ${
              activeFilter === 'Portrait' ? 'filter-active' : 'filter-inactive'
            }`}
            onClick={() => setActiveFilter('Portrait')}
          >
            Portrait
          </div>

          <div
            className={`filter-button ${
              activeFilter === 'Landscape' ? 'filter-active' : 'filter-inactive'
            }`}
            onClick={() => setActiveFilter('Landscape')}
          >
            Landscape
          </div>
        </div>

        <div className="header-view-all">VIEW</div>
      </header>

      <main style={{ padding: '0 84px' }} className={cardsSectionClass}>
        {currentArtData.map((art, index) => (
          <ArtDisplayCard key={index} title={art.title} image={art.image} />
        ))}
      </main>
    </div>
  );
};

export default TopRatedPage;
