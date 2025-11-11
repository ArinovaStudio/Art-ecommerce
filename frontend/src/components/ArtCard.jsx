// ArtCard.jsx
import React from 'react';

const ArtCard = ({ author, title, style, image, description, artBorder }) => {
  const isFeatured = style === 'featured';

  let cardClass = 'art-card-standard';
  if (isFeatured) cardClass = 'art-card-featured';

  let textAreaStyle = {};
  if (isFeatured) {
    textAreaStyle = { backgroundColor: '#FFA4A5' };
  } else {
    textAreaStyle = { backgroundColor: '#FFFFFF' };
  }

  return (
    <div className={`art-card-group ${cardClass}`}>
      {/* Background/Text Box (Rectangle 13/15) */}
      <div
        className={`art-card-text-box ${isFeatured ? 'featured' : ''}`}
        style={textAreaStyle}
      >
        {isFeatured ? (
          <>
            <div className="art-card-author-featured">{author}</div>
            <div className="art-card-description-featured">{description}</div>
          </>
        ) : (
          <>
            <div className="art-card-author">{author}</div>
            <div className="art-card-title">{title}</div>
          </>
        )}
      </div>

      {/* Image Container (Wrapper for positioning) */}
      <div className="art-card-image-wrapper ">
        {/* Border container wraps the actual image container */}
        <div
          className="art-frame-border"
          style={{ backgroundImage: `url(${artBorder})` }}
        >
          <div
            className="art-card-image"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* The art image is inside the border container */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
