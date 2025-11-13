import React from 'react';

const ArtCard = ({
  author,
  title,
  image,
  description,
  artBorder,
  isFeatured,
  onToggle
}) => {
  const textAreaStyle = {
    backgroundColor: isFeatured ? '#FFA4A5' : '#FFFFFF',
    transition: 'all 0.3s ease-in-out'
  };

  return (
    <div
      onClick={onToggle}
      className={`art-card-group transition-all duration-300 ease-in-out cursor-pointer ${
        isFeatured ? 'art-card-featured' : 'art-card-standard'
      }`}
      style={{
        transform: isFeatured ? 'scale(1.03)' : 'scale(1)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      {/* TEXT AREA */}
      <div
        className={`art-card-text-box transition-all duration-300 ease-in-out ${
          isFeatured ? 'featured' : ''
        }`}
        style={{
          ...textAreaStyle,
          transform: isFeatured ? 'translateY(-5px)' : 'translateY(0px)'
        }}
      >
        {isFeatured ? (
          <>
            <div
              className="art-card-featured-text"
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              <div className="art-card-author-featured">{author}</div>
              <div className="art-card-description-featured">{description}</div>
            </div>
            <div
              className="art-card-title art-card-title-featured w-66 truncate"
              style={{
                transition: 'all 0.3s ease-in-out',
                opacity: isFeatured ? 1 : 0.7
              }}
            >
              {title}
            </div>
          </>
        ) : (
          <div
            className="art-card-text"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            <div className="art-card-author">{author}</div>
            <div className="art-card-title">{title}</div>
          </div>
        )}
      </div>

      {/* FRAME + PAINTING */}

      <div className="art-card-image-wrapper z-2">
        <div
          className={`
            art-frame-border 
            relative
            transition-all duration-300 ease-in-out
            ${isFeatured ? 'w-[282px]  left-12' : 'w-[181px]'}
          `}
          style={{
            transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
            transform: isFeatured ? ' scale(1.02)' : ' scale(1)'
          }}
        >
          {/* BORDER / FRAME */}
          <img
            src={artBorder}
            alt="frame"
            className="w-full h-full block transition-transform duration-300 ease-in-out"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              zIndex: 3,
              transform: isFeatured ? 'scale(1.12)' : 'scale(1.05)'
            }}
          />

          {/* PAINTING INSIDE FRAME */}
          <img
            src={image}
            alt="art"
            className="art-card-image transition-all duration-300 ease-in-out"
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
              zIndex: -1,
              // transition: 'all 0.35s ease-in-out',
              opacity: isFeatured ? 1 : 0.9
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
