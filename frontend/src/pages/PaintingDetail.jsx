// src/components/PaintingDetail.jsx
import React from 'react';
import '../styles/PaintingDetail.css';

// Placeholder components (using functional components for simplicity)
const Navbar = () => (
  <div className="navbar-frame-14">
    <div className="logo-cultured-kid">Logo</div>
    <div className="nav-links">
      <div className="nav-stacked-group">
        <span className="nav-item">Paintings</span>
        <span className="nav-item">Drawings</span>
        <span className="nav-item">Sculpture</span>
        <span className="nav-item">Artists</span>
      </div>
      <div className="nav-icons-frame">
        {/* Search Icon Placeholder */}
        <div className="icon-search">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0527 3.4692C13.741 3.46921 16.7305 6.45864 16.7305 10.1469C16.7305 11.8624 16.0834 13.4262 15.0205 14.6088L19.7607 19.3501L19.3193 19.7924L18.877 20.2338L14.0996 15.4575C12.9766 16.3145 11.5746 16.8247 10.0527 16.8247C6.36444 16.8247 3.37501 13.8352 3.375 10.1469C3.375 6.45863 6.36443 3.4692 10.0527 3.4692ZM10.0527 4.7192C7.05479 4.7192 4.625 7.14899 4.625 10.1469C4.62501 13.1449 7.05479 15.5747 10.0527 15.5747C13.0507 15.5747 15.4805 13.1449 15.4805 10.1469C15.4805 7.14899 13.0507 4.71921 10.0527 4.7192Z"
              fill="#161412"
            />
          </svg>
        </div>
        {/* Cart Icon Placeholder */}
        <div className="icon-cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.42773 15.9463C9.7195 15.9463 10.7673 16.9935 10.7676 18.2852C10.7676 19.5771 9.71969 20.625 8.42773 20.625C7.13616 20.6246 6.08887 19.5768 6.08887 18.2852C6.08917 16.9937 7.13635 15.9467 8.42773 15.9463ZM16.4277 15.9463C17.7195 15.9463 18.7673 16.9935 18.7676 18.2852C18.7676 19.5771 17.7197 20.625 16.4277 20.625C15.1362 20.6246 14.0889 19.5768 14.0889 18.2852C14.0892 16.9937 15.1363 15.9467 16.4277 15.9463ZM8.42773 17.1963C7.82671 17.1967 7.33917 17.6841 7.33887 18.2852C7.33887 18.8865 7.82652 19.3746 8.42773 19.375C9.02933 19.375 9.51758 18.8868 9.51758 18.2852C9.51728 17.6838 9.02914 17.1963 8.42773 17.1963ZM16.4277 17.1963C15.8267 17.1967 15.3392 17.6841 15.3389 18.2852C15.3389 18.8865 15.8265 19.3746 16.4277 19.375C17.0293 19.375 17.5176 18.8868 17.5176 18.2852C17.5173 17.6838 17.0291 17.1963 16.4277 17.1963ZM4.3125 3.83105L7.125 13.8232H17.5527L19.6621 6.92383H6.65137V5.67383H21.3516L21.1045 6.48242L18.6123 14.6309L18.4766 15.0732H6.17773L6.0498 14.6172L3.2373 4.625H1V3.375H4.18359L4.3125 3.83105Z"
              fill="#161412"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const PreviewThumbnail = ({ isActive, type = 'painting' }) => {
  // Logic to handle different states/types (painting, wall, etc.)
  return (
    <div
      className={`preview-thumbnail ${
        isActive ? 'active' : ''
      } thumbnail-${type}`}
    >
      {/* Visual content placeholder */}
      {type === 'wall' ? (
        <div className="preview-wall-image"></div>
      ) : (
        <div className="preview-painting-image"></div>
      )}
    </div>
  );
};

const ImageDisplay = () => (
  <div className="image-display-section ">
    <div className="rectangle-background"></div>

    {/* Previews Stack */}
    <div className="previews-stack">
      {/* Top Preview (Active Painting) */}
      <PreviewThumbnail isActive={true} type="painting" />
      {/* Middle Preview (Inactive Painting) */}
      <PreviewThumbnail isActive={false} type="painting-alt" />
      {/* Bottom Preview (Wall View) */}
      <PreviewThumbnail isActive={false} type="wall" />
    </div>

    {/* Main Painting with Shadow */}
    <div className="main-painting-group">
      <div className="painting-shadow"></div>
      <div className="main-painting-image"></div>
    </div>
  </div>
);

const PaintingDetails = () => (
  <div className="details-frame-5 ">
    <div className="back-link">
      <div className="icon-arrow-left">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.32227 2.22263L8.8125 2.77341L4.80469 7.08884H13.624V8.58884H4.8457L9.11914 12.8906L9.64746 13.4228L8.58301 14.4795L8.05469 13.9463L2.5332 8.38766L2.02637 7.87692L2.51562 7.3486L7.71289 1.7529L8.22363 1.20309L9.32227 2.22263Z"
            fill="#161412"
          />
        </svg>
      </div>
      Back
    </div>

    <div className="title-artist-frame">
      <h2 className="painting-title">Wallowing Breeze</h2>
      <p className="artist-name">Hettie Richards</p>
    </div>

    <div className="size-description-frame">
      <p className="painting-size">
        {/* size text */}
        **Size**: 48 x 64 inches (Oil on Canvas). Unframed. Ready to hang.
        Hand-signed by the artist.
      </p>
      <p className="painting-description">
        {/* description text */}
        This piece captures the fleeting motion of air through a marshland at
        dusk. The palette is muted and earthy, conveying a sense of quiet
        contemplation and organic movement.
      </p>
    </div>

    {/* Separator Line */}
    <div className="separator-line"></div>

    {/* Price & Shipping */}
    <div className="price-shipping-frame">
      <div className="painting-price">₹ 2000</div>

      <div className="shipping-info-group">
        <div className="shipping-location">
          <div className="icon-location">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="8"
                cy="8.24793"
                rx="4"
                ry="5.58125"
                stroke="#65635F"
              />
              <circle cx="8" cy="6.33331" r="1" stroke="#65635F" />
            </svg>
          </div>
          <p>Ships from Dehradun, India.</p>
        </div>
        <div className="shipping-estimated">
          <div className="icon-estimated">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.95508"
                y="5.8222"
                width="8.71111"
                height="6.84444"
                stroke="#65635F"
              />
              <path
                d="M7 7.68887L9.66667 7.66664"
                stroke="#65635F"
                stroke-linecap="square"
              />
              <rect
                x="3.33301"
                y="3.33331"
                width="9.95556"
                height="2.48889"
                stroke="#65635F"
              />
            </svg>
          </div>
          <p>Estimated to ship in 5-7 business days.</p>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="actions-frame">
      <button className="button-add-to-cart">
        <div className="add-to-cart-content">
          <div className="icon-cart-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.42773 15.9463C9.7195 15.9463 10.7673 16.9935 10.7676 18.2852C10.7676 19.5771 9.71969 20.625 8.42773 20.625C7.13616 20.6246 6.08887 19.5768 6.08887 18.2852C6.08917 16.9937 7.13635 15.9467 8.42773 15.9463ZM16.4277 15.9463C17.7195 15.9463 18.7673 16.9935 18.7676 18.2852C18.7676 19.5771 17.7197 20.625 16.4277 20.625C15.1362 20.6246 14.0889 19.5768 14.0889 18.2852C14.0892 16.9937 15.1363 15.9467 16.4277 15.9463ZM8.42773 17.1963C7.82671 17.1967 7.33917 17.6841 7.33887 18.2852C7.33887 18.8865 7.82652 19.3746 8.42773 19.375C9.02933 19.375 9.51758 18.8868 9.51758 18.2852C9.51728 17.6838 9.02914 17.1963 8.42773 17.1963ZM16.4277 17.1963C15.8267 17.1967 15.3392 17.6841 15.3389 18.2852C15.3389 18.8865 15.8265 19.3746 16.4277 19.375C17.0293 19.375 17.5176 18.8868 17.5176 18.2852C17.5173 17.6838 17.0291 17.1963 16.4277 17.1963ZM4.3125 3.83105L7.125 13.8232H17.5527L19.6621 6.92383H6.65137V5.67383H21.3516L21.1045 6.48242L18.6123 14.6309L18.4766 15.0732H6.17773L6.0498 14.6172L3.2373 4.625H1V3.375H4.18359L4.3125 3.83105Z"
                fill="white"
              />
            </svg>
          </div>
          Add to cart
        </div>
      </button>
      <p className="taxes-shipping-footer">
        Taxes and shipping calculated at checkout.
      </p>
    </div>
  </div>
);

const PaintingDetail = () => {
  return (
    <div className="painting-detail-page-wrapper">
      <Navbar />
      <div className="painting-detail-page-wrapper-content ">
        <ImageDisplay />
        <PaintingDetails />
      </div>
    </div>
  );
};

export default PaintingDetail;
