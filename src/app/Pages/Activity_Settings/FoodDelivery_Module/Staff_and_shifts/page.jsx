import React, { useState } from 'react'
import Header from './Header'
import Boxes from './Boxes'
import Overtime from './Overtime'
import AtWork from './AtWork'
import DetailsPage from './Details/page'

function Staff_and_shiftsPage() {
  const [openDetails , setOpenDetails] = useState(false)
  return (
    <>
      
      <div className='border border-[#E3E8EF] rounded-[3px] mb-4'>
        <div>
          <Header/>
        </div>
  
        <div className='p-6 flex flex-col gap-4'>
          <Boxes/>
          <AtWork setOpenDetails={setOpenDetails}/>
          <Overtime setOpenDetails={setOpenDetails}/>
          
        </div>
  
        
        
      </div>

      <DetailsPage
        open={openDetails}
        setOpen={setOpenDetails}
      
      />
    </>
  )
}

export default Staff_and_shiftsPage