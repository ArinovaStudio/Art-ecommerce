import React from 'react';

const ArtDisplayCard = ({ title, image }) => {
  return (
    <div className="art-display-card">
      {/* Card Image Container (Rectangle 5) */}
      <div
        className="card-image-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Image is set via the dynamic background URL */}
      </div>

      <div className="card-footer">
        {/* Title (Flowers of garden) */}
        <div className="card-title">{title}</div>

        {/* View Link (V I E W) */}
        <div className="card-view-link">V I E W</div>
      </div>
    </div>
  );
};

export default ArtDisplayCard;
