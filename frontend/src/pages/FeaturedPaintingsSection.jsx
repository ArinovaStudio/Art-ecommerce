// src/components/FeaturedPaintingsSection.jsx
import React from 'react';
import '../styles/FeaturedSections.css';

import painting1 from '../assets/painting1.png';
import painting2 from '../assets/painting2.png';
import painting3 from '../assets/painting3.png';
import painting4 from '../assets/painting4.png';
import painting5 from '../assets/painting5.png';

const PAINTING_DATA = [
  {
    image: painting1,
    title: 'Innocence',
    artist: 'Ria Arante',
    medium: 'Acrylic on canvas, 2'
  },
  {
    image: painting2,
    title: 'Wallowing Breeze',
    artist: 'Hettie Richards',
    medium: 'Oil on canvas, 2008'
  },
  {
    image: painting3,
    title: 'J Resistance',
    artist: 'Ria Arante',
    medium: 'Gouache on paper, 20'
  },
  {
    image: painting4,
    title: 'Warm Basket',
    artist: 'Flora Powers',
    medium: 'Acrylic on wood, 201'
  },
  {
    image: painting5,
    title: 'The Vonnegut',
    artist: 'Ria Arante',
    medium: 'Oil on canvas, 2018'
  }
];

import artistImage from '../assets/profile.png';

const ARTIST_DATA = [
  {
    profileImage: artistImage,
    name: 'MIKE LAMBERT',
    location: 'Painter, Texas'
  },
  {
    profileImage: artistImage,
    name: 'JANE DOE',
    location: 'Sculptor, New York'
  },
  {
    profileImage: artistImage,
    name: 'SARA LEE',
    location: 'Digital Artist, London'
  }
];

const ArtistCard = ({ profileImage, name, location }) => (
  <div className="card-artist-container">
    <div
      className="artist-profile-image"
      style={{ backgroundImage: `url(${profileImage})` }}
    ></div>

    <div className="artist-details">
      <div className="artist-name">{name}</div>
      <div className="artist-location">{location}</div>
    </div>
  </div>
);

const PaintingCard = ({ image, title, artist, medium, style }) => (
  <div className={`painting-card painting-${style}`}>
    <div
      className="painting-image"
      style={{ backgroundImage: `url(${image})` }}
    ></div>

    <div className="painting-details">
      <div className="painting-title">{title}</div>
      <div className="painting-artist">{artist}</div>
      <div className="painting-medium">{medium}</div>
    </div>
  </div>
);

const FeaturedPaintingsSection = () => {
  return (
    <div className="featured-paintings-section-wrapper">
      <header className="featured-paintings-header">
        {/* Featured Paintings: Optima LT Std, 52px */}
        <h2 className="featured-paintings-title">Featured Paintings</h2>

        {/* 0: Icons / navigation / arrow-right / black (with 'VIEW ALL' text) */}
        <div className="featured-paintings-view-all">
          VIEW ALL
          <svg
            width="44"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arrow Path 1 */}
            <path
              d="M12.9167 3.5L20.4167 11.8333L12.9167 20.1667"
              stroke="#161412"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Arrow Path 2 (Line 5) */}
            <path
              d="M20.1451 11.8333H3.5"
              stroke="#161412"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </header>

      <div className="painting-stack-container">
        {PAINTING_DATA.map((painting, index) => (
          <PaintingCard
            key={index}
            {...painting}
            style={index + 1} // Used for applying specific height/gap CSS
          />
        ))}
      </div>

      <div className="featured-artists-section-wrapper">
        {/* Frame 13: Content Wrapper (gap: 50px) */}
        <div className="artists-content-wrapper">
          {/* Paintings Title: Karla, 26px, uppercase */}
          <h3 className="artists-section-title">PAINTINGS</h3>

          {/* Frame 5: List of Artist Cards (gap: 24px) */}
          <div className="artist-cards-list">
            {ARTIST_DATA.map((artist, index) => (
              <ArtistCard key={index} {...artist} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPaintingsSection;
