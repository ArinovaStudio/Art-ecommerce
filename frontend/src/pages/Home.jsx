// HomePage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ArtCard from '../components/ArtCard';
import '../styles/HomePage.css';

import ImageMapper from 'react-image-mapper';
import mainBackground from '../assets/home-bg.jpg';
// import heroFeatureImage from '../assets/art1.jpg';
// import heroFeatureImage from '../assets/art1.jpg';
import artBorder from '../assets/art-border.png';

import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art1.jpg';
// ------------------------------------------------------------------

const HomePage = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const artData = [
    {
      style: 'featured',
      author: 'Adarsh Pandit',
      title: 'Minds of Ocean',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo tristique vel quam fermentum eget nibh. Dignissim velit dictumst gravida ligula eget. Amet amet imperdiet est mattis mi diam nisl venenatis. Ante vehicula eget.',
      image: art1,
      artBorder: artBorder
    },
    {
      style: 'standard',
      author: 'Adarsh Pandit',
      title: 'Smell of Flowers',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo tristique vel quam fermentum eget nibh. Dignissim velit dictumst gravida ligula eget. Amet amet imperdiet est mattis mi diam nisl venenatis. Ante vehicula eget.',

      image: art2,
      artBorder: artBorder
    },
    {
      style: 'standard',
      author: 'Priti Sharma',
      title: 'Silence of old Days',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo tristique vel quam fermentum eget nibh. Dignissim velit dictumst gravida ligula eget. Amet amet imperdiet est mattis mi diam nisl venenatis. Ante vehicula eget.',

      image: art3,
      artBorder: artBorder
    },
    {
      style: 'standard',
      author: 'Mohd. Gulzar',
      title: 'Use of minds',
      description:
        'Lorem ipsum dolor sit amet consectetur. Commodo tristique vel quam fermentum eget nibh. Dignissim velit dictumst gravida ligula eget. Amet amet imperdiet est mattis mi diam nisl venenatis. Ante vehicula eget.',

      image: art4,
      artBorder: artBorder
    }
  ];
  const MAP = {
    name: 'frame-map',
    areas: [
      {
        id: 1,
        name: 'frame',
        shape: 'rect',
        coords: [100, 100, 500, 400],
        fillColor: 'rgba(255,0,0,0.3)',
        strokeColor: 'red'
      }
    ]
  };

  const [bgWidth, setBgWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setBgWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-page-wrapper" style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
          overflow: 'hidden'
        }}
      >
        <ImageMapper
          src={mainBackground}
          map={MAP}
          width={bgWidth}
          responsive={true}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: `${(160 / 1080) * 100}%`,
          right: `${(380 / 1920) * 100}%`,
          width: `${((810 - 500) / 1920) * 100}%`,
          height: `${((600 - 220) / 1080) * 100}%`,
          objectFit: 'cover',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      >
        {/* BORDER / FRAME */}
        <img
          src={artBorder}
          alt="frame"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 3,
            scale: 1.1
          }}
        />

        {/* PAINTING INSIDE FRAME */}
        <img
          key={featuredIndex}
          src={artData[featuredIndex]?.image}
          alt="art"
          className="art-card-image fade-image transition-all  duration-600 ease-in-out"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            right: '10px',
            bottom: '10px',
            width: 'calc(100% - 20px)',
            height: 'calc(100% - 20px)',
            objectFit: 'cover',
            borderRadius: '2px',
            zIndex: -1
          }}
        />
      </div>

      <Navbar />

      <main className="home-page-content w-screen">
        <section className="hero-section">
          <h1 className="hero-text">
            Transform Your Spaces With Artistic Brushes
          </h1>
        </section>

        <section className="art-cards-section">
          <div className="art-cards-list">
            {artData.map((art, index) => (
              <ArtCard
                key={index}
                {...art}
                isFeatured={featuredIndex === index}
                onToggle={() =>
                  setFeaturedIndex(featuredIndex === index ? 0 : index)
                }
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
