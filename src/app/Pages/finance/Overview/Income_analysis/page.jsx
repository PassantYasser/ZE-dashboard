import React from 'react'
import TitleOfIncome_analysisPage from './TitleOfIncome_analysis/page'
import ChartPage from './Chart/page'

function Income_analysisPage() {
  return (
    <>
    <div className='border border-[#E3E8EF] py-4 px-6 rounded-[3px] mb-12'>
      <TitleOfIncome_analysisPage/>
      <ChartPage/>
      
    </div>
  
    </>
  )
}

export default Income_analysisPage