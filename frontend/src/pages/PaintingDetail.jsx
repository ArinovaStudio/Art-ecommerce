// src/components/PaintingDetail.jsx
import React from 'react';
import '../styles/PaintingDetail.css';
import wallmockbare from '../assets/wall-mock-bare.jpg';
import paintingImg from '../assets/painting2.png';
import art1 from '../assets/image1.jpg';
import art2 from '../assets/image2.jpg';
import art3 from '../assets/image3.jpg';
import artistPhoto from '../assets/artist.jpg';
import thankyoucard from '../assets/thankyoucard.jpg';

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

    <div className="main-painting-group">
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
      <div className="main-painting-grou">
        <div className="painting-shadow"></div>
        <div
          className="main-painting-image"
          style={{ backgroundImage: `url(${paintingImg})` }}
        ></div>
      </div>
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

// Simplified HTML/JSX structure to match the CSS above

const FeatureIcon = ({ iconType, SvgIcon, text, bgColor, ellipseColor }) => (
  <div className={`feature-frame ${iconType}`} style={{ background: bgColor }}>
    {/* Ellipse 8 */}
    <div className="ellipse-8" style={{ background: ellipseColor }}></div>

    {/* Icon Container */}
    <div className="feature-icon-container">
      {/* Vector / Icon Graphic Placeholder */}
      <SvgIcon />
    </div>

    {/* Text */}
    <p className={`feature-text ${text.toLowerCase().replace(/\s/g, '-')}`}>
      {text}
    </p>
  </div>
);

const PaintingDetailFeatures = () => {
  return (
    <div className="painting-detail-page-wrapper2 ">
      {/* Frame 22: The main flex container for the features */}
      <div className="frame-22"></div>
      <div className="frame-22 ml-80">
        {/* Frame 24: SECURE PAYMENT */}
        <FeatureIcon
          iconType="frame-24"
          text="SECURE PAYMENT"
          bgColor="#FFEBD5"
          ellipseColor="#FFC583"
          SvgIcon={() => {
            return (
              <svg
                width="28"
                height="31"
                viewBox="0 0 28 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 13.75V8.08333C6.66667 6.20472 7.41294 4.40304 8.74133 3.07466C10.0697 1.74628 11.8714 1 13.75 1C15.6286 1 17.4303 1.74628 18.7587 3.07466C20.0871 4.40304 20.8333 6.20472 20.8333 8.08333V13.75M3.83333 13.75H23.6667C25.2315 13.75 26.5 15.0185 26.5 16.5833V26.5C26.5 28.0648 25.2315 29.3333 23.6667 29.3333H3.83333C2.26853 29.3333 1 28.0648 1 26.5V16.5833C1 15.0185 2.26853 13.75 3.83333 13.75Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          }}
        />

        {/* Frame 25: FAST DELIVERY */}
        <FeatureIcon
          iconType="frame-25"
          text="FAST DELIVERY"
          bgColor="#D5DEFF"
          ellipseColor="#807EFF"
          SvgIcon={() => {
            return (
              <svg
                width="31"
                height="29"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5832 20.8333C17.4041 20.8323 18.2077 21.0689 18.897 21.5148C19.5863 21.9606 20.1317 22.5966 20.4673 23.3457C20.8029 24.0949 20.9144 24.9252 20.7883 25.7364C20.6621 26.5475 20.3038 27.3048 19.7565 27.9167M23.6665 15.1667H23.6807M23.6665 27.9167H12.3332C10.8303 27.9167 9.38895 27.3196 8.32625 26.2569C7.26354 25.1942 6.66652 23.7529 6.66652 22.25C6.66652 19.6199 7.71131 17.0976 9.57104 15.2379C11.4308 13.3781 13.9531 12.3333 16.5832 12.3333H16.8665L11.7665 7.23333C11.5061 6.97288 11.2995 6.66367 11.1585 6.32337C11.0175 5.98307 10.945 5.61834 10.945 5.25C10.945 4.50611 11.2405 3.79268 11.7665 3.26667C12.2925 2.74065 13.006 2.44514 13.7499 2.44514C14.1182 2.44514 14.4829 2.51769 14.8232 2.65865C15.1635 2.79961 15.4727 3.00621 15.7332 3.26667L20.5499 8.08333H20.8332M20.8332 8.08333C25.5082 8.08333 29.3332 11.9083 29.3332 16.5833V18C29.3332 18.7514 29.0347 19.4721 28.5033 20.0035C27.972 20.5348 27.2513 20.8333 26.4999 20.8333H25.0832C23.956 20.8333 22.875 21.2811 22.078 22.0781C21.281 22.8752 20.8332 23.9562 20.8332 25.0833M20.8332 8.08333L20.8332 3.83333C20.8332 3.08189 21.1317 2.36122 21.6631 1.82986C22.1944 1.29851 22.9151 1 23.6665 1C24.418 1 25.1386 1.29851 25.67 1.82986C26.2013 2.36122 26.4999 3.08189 26.4999 3.83333V10.265M8.95019 15.909C8.55183 15.204 7.96034 14.6274 7.24536 14.2473C6.53038 13.8671 5.72166 13.6991 4.91441 13.763C4.10715 13.8269 3.33497 14.1202 2.68876 14.6082C2.04255 15.0962 1.54921 15.7587 1.26681 16.5176C0.984411 17.2766 0.924713 18.1004 1.09474 18.8921C1.26477 19.6838 1.65746 20.4105 2.22656 20.9866C2.79566 21.5627 3.5175 21.9642 4.3071 22.1438C5.0967 22.3235 5.92119 22.2738 6.68352 22.0007"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          }}
        />

        {/* Frame 26: CUSTOMER SUPPORT */}
        <FeatureIcon
          iconType="frame-26"
          text="CUSTOMER SUPPORT"
          bgColor="#C3FFC5"
          ellipseColor="#07DB00"
          SvgIcon={() => {
            return (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16.5833H5.25C6.00145 16.5833 6.72212 16.8818 7.25347 17.4132C7.78482 17.9446 8.08333 18.6652 8.08333 19.4167V23.6667C8.08333 24.4181 7.78482 25.1388 7.25347 25.6701C6.72212 26.2015 6.00145 26.5 5.25 26.5H3.83333C3.08189 26.5 2.36122 26.2015 1.82986 25.6701C1.29851 25.1388 1 24.4181 1 23.6667V13.75C1 10.3685 2.3433 7.12548 4.73439 4.73439C7.12548 2.3433 10.3685 1 13.75 1C17.1315 1 20.3745 2.3433 22.7656 4.73439C25.1567 7.12548 26.5 10.3685 26.5 13.75V23.6667C26.5 24.4181 26.2015 25.1388 25.6701 25.6701C25.1388 26.2015 24.4181 26.5 23.6667 26.5H22.25C21.4986 26.5 20.7779 26.2015 20.2465 25.6701C19.7152 25.1388 19.4167 24.4181 19.4167 23.6667V19.4167C19.4167 18.6652 19.7152 17.9446 20.2465 17.4132C20.7779 16.8818 21.4986 16.5833 22.25 16.5833H26.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            );
          }}
        />
      </div>
    </div>
  );
};

const ViewInARoom = () => {
  return (
    <div className="room-mockup-container">
      {/* Background Image: using roomMockupSrc (e.g., wall-mock-bare.jpg) */}
      <div className="room-background">
        <img src={wallmockbare} alt="Room Mockup Background" />
      </div>

      {/* Artwork and Shadow */}
      <div className="artwork-display">
        <div className="artwork-shadow"></div>
        <div className="artwork-image">
          {/* Artwork Image: using artworkSrc (e.g., Image.png) */}
          <img
            src={paintingImg}
            alt="Displayed Artwork"
            className="w-70 h-80"
          />
        </div>
      </div>

      {/* Measurement Overlay */}
      <div className="measurement-overlay">
        <div className="measurement-text">6 ft</div>
        <div className="measure-line-horizontal"></div>
        <div className="measure-line-vertical-left"></div>
        <div className="measure-line-vertical-right"></div>
      </div>
    </div>
  );
};

const StoryBehindTheArt = () => (
  <div class="storybehindtheart">
    <h2 class="story-title  flex gap-3 items-center justify-center ">
      STORY<p className=" text-black "> BEHIND THE ART</p>
    </h2>
    <p class="story-content">
      Lorem ipsum dolor sit amet consectetur. Nisi ullamcorper aliquet ac mauris
      ipsum sapien morbi. Quis pellentesque risus morbi vulputate purus vel
      pretium. Purus quam sagittis pulvinar massa vel faucibus lectus etiam
      neque. Et egestas nibh lectus et arcu cursus non. Tortor mit. velit velit
      ultricies. Enim eget dignissim lacus mi orci nibh pellentesque orci
      ultrices. Adipiscing convallis venenatis faucibus sed at ac. Ultrices vel
      praesent pharetra vestibulum sit facilisis lacinia viverra. Molestie
      elementum odio euismod imperdiet consectetur morbi. Mus et nec adipiscing
      purus malesuada pellentesque massa lacus ultrices. Viverra facilisis in
      aenean neque. Aliquet nisl feugiat pulvinar sagittis tellus vitae
      elementum massa. Orci.
    </p>
  </div>
);

const ArtworkCard = ({ index, title, imageSrc }) => (
  <div className={`artwork-card card-${index}`}>
    <div className="image-wrapper">
      <img
        className=" w-full h-full object-cover "
        src={imageSrc}
        alt={title}
      />
    </div>
    <div className="artwork-card-content">
      <h3 className="artwork-title">{title}</h3>
      <a href="#" className="view-link">
        V I E W
      </a>
    </div>
  </div>
);

const SimilarArtworksSection = () => {
  return (
    <div className="similar-artworks-section">
      <h2 className="section-title">SIMILAR ART WORKS</h2>

      <div className="similar-artworks-carousel">
        {/* Card 1 */}
        <ArtworkCard
          index={1}
          title="Flowers of garden"
          imageSrc={art1} /* Use your actual path here */
        />

        {/* Card 2 */}
        <ArtworkCard
          index={2}
          title="A beautiful landscape"
          imageSrc={art2} /* Use your actual path here */
        />

        {/* Card 3 */}
        <ArtworkCard
          index={3}
          title="Abstract composition"
          imageSrc={art3} /* Use your actual path here */
        />
        <ArtworkCard
          index={2}
          title="A beautiful landscape"
          imageSrc={art2} /* Use your actual path here */
        />
      </div>
    </div>
  );
};

const AboutTheArtist = () => (
  <div class="about-artist-section">
    <h2 class="artist-title flex gap-3 items-center justify-center ">
      ABOUT THE <p style={{ color: '#ffa4a5' }}>ARTIST</p>
    </h2>

    <div class="artist-image-wrapper">
      <img
        className="w-full h-full object-center object-cover "
        src={artistPhoto}
        alt="Photo of the Artist"
      />
    </div>

    <div class="bio-text-grid ">
      <p>
        Lorem ipsum dolor sit amet consectetur. Nisi ullamcorper aliquet ac
        mauris ipsum sapien morbi. Quis pellentesque risus morbi vulputate purus
        vel pretium. Purus quam sagittis pulvinar massa vel faucibus lectus
        etiam neque. Et egestas nibh lectus et arcu cursus non. Tortor mit.
        velit velit ultricies. Enim eget dignissim lacus mi orci nibh
        pellentesque orci ultrices.
      </p>

      <p>
        Adipiscing convallis venenatis faucibus sed at ac. Ultrices vel praesent
        pharetra vestibulum sit facilisis lacinia viverra. Molestie elementum
        odio euismod imperdiet consectetur morbi. Mus et nec adipiscing purus
        malesuada pellentesque massa lacus ultrices. Viverra facilisis in aenean
        neque. Aliquet nisl feugiat pulvinar sagittis tellus vitae elementum
        massa. Orci.
      </p>
    </div>
  </div>
);

// Helper function to determine the image height class
const getPaintingImageClass = (height) => {
  switch (height) {
    case '200px':
      return 'artworkbyartiest-painting-card__image--200';
    case '248px':
      return 'artworkbyartiest-painting-card__image--248';
    case '264px':
    default:
      return 'artworkbyartiest-painting-card__image--264';
  }
};

const PaintingCard = ({ title, artist, mediumYear, imageHeight }) => (
  // Updated class name
  <div className="artworkbyartiest-painting-card">
    {/* Painting Image Placeholder - Updated class name structure */}
    <img
      src={paintingImg}
      alt={title}
      className={`artworkbyartiest-painting-card__image ${getPaintingImageClass(
        imageHeight
      )}`}
    />

    {/* Painting Info (Frame 5) - Updated class name structure */}
    <div className="artworkbyartiest-painting-card__info">
      <div className="artworkbyartiest-painting-card__title">{title}</div>
      <div className="artworkbyartiest-painting-card__artist">{artist}</div>
      <div className="artworkbyartiest-painting-card__medium-year">
        {mediumYear}
      </div>
    </div>
  </div>
);

const ArtworkByArtiest = () => (
  // Updated class name
  <div className="artworkbyartiest-home-screen">
    {/* Frame 15 - Header - Updated class name */}
    <div className="artworkbyartiest-header">
      <div className="artworkbyartiest-header__text">Featured Paintings</div>
      {/* Arrow Icon - Updated class name */}
      <div className="artworkbyartiest-header__icon">&rarr;</div>
    </div>

    {/* painting stack - Updated class name */}
    <div className="artworkbyartiest-painting-stack">
      {/* painting 2 */}
      <PaintingCard
        title="Wallowing Breeze"
        artist="Hettie Richards"
        mediumYear="Oil on canvas, 2008"
        imageHeight="264px"
      />

      {/* painting 3 */}
      <PaintingCard
        title="J Resistance"
        artist="Ria Arante"
        mediumYear="Gouache on paper, 20"
        imageHeight="200px"
      />

      {/* painting 4 */}
      <PaintingCard
        title="Warm Basket"
        artist="Flora Powers"
        mediumYear="Acrylic on wood, 201"
        imageHeight="264px"
      />

      {/* painting 5 */}
      <PaintingCard
        title="The Vonnegut"
        artist="Ria Arante"
        mediumYear="Oil on canvas, 2018"
        imageHeight="248px"
      />
    </div>
  </div>
);

const AdditionalInforamtion = () => {
  const data = [
    { key: 'SKU', value: '19-001-4102' },
    { key: 'Technique', value: 'Mixed' },
    { key: 'Width', value: '76 cm' },
    { key: 'Height', value: '56 cm' },
    { key: 'Artwork Orientation', value: 'Portrait' },
    { key: 'Signature Location', value: 'Bottom-right' },
    { key: 'Edition', value: 'One of a Kind' },
    { key: 'Support', value: 'Paper' },
    { key: 'Canvas Thickness', value: '2mm' },
    { key: 'Colour Type', value: 'Oil-Pastel' },
    { key: 'Framing', value: 'Unframed' },
    { key: 'Year', value: '2024' }
  ];

  const rows = [];
  for (let i = 0; i < data.length; i += 2) {
    rows.push(data.slice(i, i + 2));
  }

  // now group rows into 2 rows per column
  const columns = [];
  for (let i = 0; i < rows.length; i += 2) {
    columns.push(rows.slice(i, i + 2));
  }
  return (
    // Updated class name
    <div className="addtional-information-section ">
      <h2 className="addtional-information-section__title title">
        Additional Information
      </h2>

      <div className="addtional-information-section__content">
        {columns.map((col, colIndex) => (
          <div className="section_col" key={colIndex}>
            {col.map((row, rowIndex) => (
              <div className="info_row" key={rowIndex}>
                {row.map((item, itemIndex) => (
                  <div className="info_col" key={itemIndex}>
                    <p className="info_key">{item.key}</p>
                    <p className="info_value">{item.value}</p>
                  </div>
                ))}
              </div>
            ))}

            {/* render h_line except for first column */}
            {colIndex !== 0 && <div className="h_line"></div>}
          </div>
        ))}

        <div className="v_line"></div>
      </div>
    </div>
  );
};
const InsideTheBox = () => {
  return (
    <div className="inside-the-box-container">
      <div className="inside-the-box-title ">Inside The Box</div>

      <div className="inside-the-box-cards">
        <div className="inside-the-box-card ">
          <img
            className="w-74 h-96 object-cover shadow-xl mb-5"
            src={paintingImg}
            alt=""
          />
          <p>Painting</p>
        </div>
        <div className="inside-the-box-card">
          <img
            className="w-[500px] h-[350px] object-cover shadow-xl mb-5"
            src={thankyoucard}
            alt=""
          />
          <p>Thank You Note</p>
        </div>
      </div>
    </div>
  );
};

const PaintingDetail = () => {
  return (
    <div className="painting-detail-page-wrapper">
      <Navbar />
      <div className="painting-detail-page-wrapper-content ">
        <ImageDisplay />
        <PaintingDetails />
      </div>
      <PaintingDetailFeatures />
      <ViewInARoom />
      <StoryBehindTheArt />
      <SimilarArtworksSection />
      <AboutTheArtist />
      <ArtworkByArtiest />
      <AdditionalInforamtion />
      <InsideTheBox />
    </div>
  );
};

export default PaintingDetail;
