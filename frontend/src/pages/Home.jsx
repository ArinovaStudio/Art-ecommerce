import React, { useState } from 'react';
import homeBg from '../assets/home-bg.jpg';
import art1 from '../assets/art1.jpg'; // Import the image you want to place in the mapped area
import '../styles/HomePage.css';
// Import image assets
import artBorder from '../assets/art-border.png';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art1.jpg';
import ArtCard from '../components/ArtCard';
import Navbar from '../components/Navbar';
// Assuming the original image size is known,
// for responsive scaling let's assume it's 3840px wide and 2160px high (16:9 4K)
const IMAGE_WIDTH = 3840;
const IMAGE_HEIGHT = 2160;

function HomePage() {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const artData = [
    // ... (Your original artData array)
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
  // Original area coordinates: 2575, 424, 3116, 1183
  // These define the top-left (x1, y1) and bottom-right (x2, y2) of the rectangle
  const x1 = 2375;
  const y1 = 514;
  const x2 = 2916;
  const y2 = 1503;

  const RECT_COORDS = {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    width: x2 - x1, // Calculate width from the coordinates
    height: y2 - y1 // Calculate height from the coordinates
  };

  return (
    <div
      style={{
        position: '',
        display: 'inline-block',
        width: '100%',
        height: 'auto',
        overflowX: 'hidden'
      }}
    >
      {/* 1. The Main Background Image */}
      <img
        src={homeBg}
        alt="Interactive background"
        style={{
          display: 'block',
          width: '100%',
          position: 'absolute'
        }}
        className=" object-cover"
      />

      {/* 2. The Overlaid Image */}
      {/* This image is absolutely positioned and sized to cover the area defined by RECT_COORDS */}

      <div
        style={{
          position: 'absolute',
          // Calculate 'left', 'top', 'width', 'height' as percentages for responsiveness
          left: `${(RECT_COORDS.x1 / IMAGE_WIDTH) * 100}%`,
          top: `${(RECT_COORDS.y1 / IMAGE_HEIGHT) * 100}%`,
          width: `${(RECT_COORDS.width / IMAGE_WIDTH) * 100}%`,
          height: `${(RECT_COORDS.height / IMAGE_HEIGHT) * 100}%`,
          objectFit: 'cover', // Ensures the image fills the rectangle area
          pointerEvents: 'none', // IMPORTANT: Allows clicks to pass through to the <area>
          opacity: 1, // Ensure it's always visible
          // Optional: Add a subtle border or box-shadow if you want to define its edges
          border: '2px solid rgba(255, 255, 255, 0.7)'
        }}
      >
        <img
          key={featuredIndex}
          src={artData[featuredIndex].image}
          alt="Overlaid art"
          className="absolute h-full w-full object-cover 
                   transition duration-700 ease-in-out opacity-100"
        />
        <img
          src={artBorder} // The image you want to show
          alt="Overlaid art"
          className="absolute w-full h-full scale-120"
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
}

export default HomePage;
