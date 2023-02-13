import React from 'react';

const CardContainer = () => {
  const cardContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
  };

  const cardStyles = {
    width: '30%',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '2px 2px 5px #ddd',
    textAlign: 'center',
    padding: '20px',
    marginBottom: '30px',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={cardContainerStyles}>
      <div style={cardStyles}>
        <img src="your-image-source-1" alt="Image 1" style={imageStyles} />
        <p>Image 1 description</p>
      </div>
      <div style={cardStyles}>
        <img src="your-image-source-2" alt="Image 2" style={imageStyles} />
        <p>Image 2 description</p>
      </div>
      {/* Add more cards here */}
    </div>
  );
};

export default CardContainer;
