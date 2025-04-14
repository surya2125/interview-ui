import { IRatingReviewProps, IRatings } from '@Interfaces';
import React, { useState, useMemo } from 'react';
import { goldStarIcon, grayStartIcon } from '@assets';



const RatingReview: React.FC<IRatingReviewProps> = ({
  rating,
  setRating,
  starSize = 'w-[13px] h-[13px]',
  editable,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const starArray = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div className={`flex ${!editable ? 'pointer-events-none' : ''} items-center space-x-2`} id="rating-review-container">
      {starArray.map((star) => (
        <span
          key={star}
          id={`star-${star}`}
          className="flex items-center cursor-pointer"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
        >
          <img
            src={
              rating! >= star || hoveredStar >= star
                ? goldStarIcon
                : grayStartIcon}
            alt="Star Icon"
            className={`${starSize}`}
          />
        </span>
      ))}
    </div>
  );
};

const Ratings: React.FC<IRatings> = ({ id, rating, company }) => {
  return (
    <div id={`${id}-rating`}>
      <div className="flex text-yellow-400 mb-2" id={`${id}-rating-stars`}>
        <RatingReview editable rating={rating} setRating={() => { }} />
      </div>
      <p className="font-medium text-[18px] text-[#191A15]" id={`${id}-rating-value`}>
        <b>{rating} </b>/ 5 rating
      </p>
      <p className="text-[14px] text-[#A6A6A6]" id={`${id}-rating-company`}>
        {company}
      </p>
    </div>
  );
};

export default Ratings;
