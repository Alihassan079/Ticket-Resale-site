import React from 'react';
import StarRatings from 'react-star-ratings';

const FixedStarRating = () => {
  const fixedRating = 4.5; // Set your fixed rating here

  return (
    <div className='star'>

      <StarRatings 
        rating={fixedRating}
        starRatedColor="white"
        starHoverColor="gray"
        numberOfStars={5}
        name='fixed-rating'
        starDimension="78px"
        starSpacing="5px"
        isSelectable={false} // This ensures the stars are not selectable
      />
     
    </div>
  );
};

export default FixedStarRating;