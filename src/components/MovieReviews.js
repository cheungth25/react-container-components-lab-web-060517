// Code MovieReviews Here
import React from 'react'

const MovieReview = ({display_title, mpaa_rating, critics_pick, byline, headline, summary_short, publication_date, opening_date, date_updated, link, multimedia}) => {
  return(
    <div className='review'>
      <p> title: {display_title}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
    <div className='review-list'>
      {reviews.map(MovieReview)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
