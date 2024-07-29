import React from 'react';
import StarRatings from 'react-star-ratings';

const FixedStarRating = () => {
  const fixedRating = 5; // Set your fixed rating here

  return (
    <div className='sub-rating'>

      <StarRatings 
        rating={fixedRating}
        starRatedColor="white"
        starHoverColor="gray"
        numberOfStars={5}
        name='fixed-rating'
        starDimension="29px"
        starSpacing="1px"
        isSelectable={false} // This ensures the stars are not selectable
      />
     
    </div>
  );
};

export default FixedStarRating;