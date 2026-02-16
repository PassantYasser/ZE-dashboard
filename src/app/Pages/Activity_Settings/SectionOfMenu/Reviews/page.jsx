import React from 'react'
import Header from './Header'
import NoReviewsPage from './NoReviews/page'
import HaveReviewsPage from './HaveReviews/page'

function ReviewsPage() {
  const data = true 
  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      {/* > */}
      
      {
        data? (
          <HaveReviewsPage/>
        ):(
          <NoReviewsPage/>
        )
      }
    </div>

    </>
  )
}

export default ReviewsPage