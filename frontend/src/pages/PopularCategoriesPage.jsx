import React, { useState } from 'react';
import '../styles/PopularCategoriesPage.css';

import popularCatMain from '../assets/category_large.jpg';
import popularCatBottomLeft from '../assets/category_medium1.jpg';
import popularCatBottomMid from '../assets/category_medium2.jpg';
import popularCatRight from '../assets/category_tall.jpg';
// --------------------------------------------------

const CATEGORIES = [
  'Pencil Sketch',
  'Oil & Acrylic',
  'Water Colour',
  'Resin Art'
];

const PopularCategoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  return (
    <div className="popular-categories-page-wrapper">
      <header className="page-header-categories">
        {/* Popular Categories Title */}
        <h1 className="header-title-categories">Popular Categories</h1>

        {/* Decorative Lines and Dots */}
        <div className="header-decoration-categories">
          <div className="line-divider-categories short-line"></div>
          <div className="dot dot-black"></div>
          <div className="dot dot-bordered-pink"></div>
          <div className="dot dot-black"></div>
          <div className="line-divider-categories long-line"></div>
        </div>

        {/* Category Filter Buttons */}
        <div className="header-filters-categories">
          {CATEGORIES.map((category) => (
            <div
              key={category}
              className={`filter-category-button ${
                activeCategory === category
                  ? 'filter-category-active'
                  : 'filter-category-inactive'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </header>

      {/* Main Image Grid Section */}
      <main className="popular-categories-grid">
        {/* The large central image */}
        <div
          className="grid-item main-image"
          style={{ backgroundImage: `url(${popularCatMain})` }}
        ></div>

        {/* The small image at the bottom left */}
        <div
          className="grid-item bottom-left-image"
          style={{ backgroundImage: `url(${popularCatBottomLeft})` }}
        ></div>

        {/* The small image at the bottom middle */}
        <div
          className="grid-item bottom-mid-image"
          style={{ backgroundImage: `url(${popularCatBottomMid})` }}
        ></div>

        {/* The large image on the right */}
        <div
          className="grid-item right-image"
          style={{ backgroundImage: `url(${popularCatRight})` }}
        ></div>
      </main>
    </div>
  );
};

export default PopularCategoriesPage;
