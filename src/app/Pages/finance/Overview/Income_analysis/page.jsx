import React from 'react'
import TitleOfIncome_analysisPage from './TitleOfIncome_analysis/page'
import ChartPage from './Chart/page'
import { useDispatch } from 'react-redux';

function Income_analysisPage() {
  const dispatch  = useDispatch();
   
  return (
    <>
    <div className='border border-[#E3E8EF] rounded-[3px] mb-12'>
      <TitleOfIncome_analysisPage/>
      <hr className='border border-[#E3E8EF] w-full mt-4'></hr>
      <ChartPage/>
      
    </div>
  
    </>
  )
}

export default Income_analysisPage