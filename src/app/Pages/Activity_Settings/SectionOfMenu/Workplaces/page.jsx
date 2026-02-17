import React from 'react'
import Header from './Header';
import HaveWorkplacesPage from './HaveWorkplaces/page';
import NoWorkplacesPage from './NoWorkplaces/page';

function WorkplacesPage() {
    const data = true ;

  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      {
        data? (
          <HaveWorkplacesPage/>
        ):(
          <NoWorkplacesPage/>
        )
      }
    </div>

    </>
  )
}

export default WorkplacesPage