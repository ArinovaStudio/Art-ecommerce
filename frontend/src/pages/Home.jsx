// HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import ArtCard from '../components/ArtCard';
import '../styles/HomePage.css';

import mainBackground from '../assets/home-bg.jpg';
import heroFeatureImage from '../assets/art1.jpg';
import artBorder from '../assets/art-border.png';

import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art1.jpg';
// ------------------------------------------------------------------

const HomePage = () => {
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
      image: art2,
      artBorder: artBorder
    },
    {
      style: 'standard',
      author: 'Priti Sharma',
      title: 'Silence of old Days',
      image: art3,
      artBorder: artBorder
    },
    {
      style: 'standard',
      author: 'Mohd. Gulzar',
      title: 'Use of minds',
      image: art4,
      artBorder: artBorder
    }
  ];

  return (
    <div
      className="home-page-wrapper"
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <Navbar />

      <main className="home-page-content">
        <section className="hero-section">
          <h1 className="hero-text">
            Transform Your Spaces With Artistic Brushes
          </h1>

          <div className="hero-feature-image-wrapper border-frame">
            <div
              className="hero-feature-image-content"
              style={{ backgroundImage: `url(${heroFeatureImage})` }}
            ></div>
          </div>
        </section>

        <section className="art-cards-section">
          <div className="art-cards-list ">
            {artData.map((art, index) => (
              <ArtCard key={index} {...art} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
