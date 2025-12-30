import React from 'react'
import TitleOfIncome_analysisPage from './TitleOfIncome_analysis/page'
import ChartPage from './Chart/page'

function Income_analysisPage() {
  return (
    <>
    <div className='border border-[#E3E8EF] rounded-[3px] mb-12'>
      <TitleOfIncome_analysisPage/>
      <hr className='border border-[#E3E8EF] w-full mt-4'></hr>
      <ChartPage chartData={chartData}/>
      
    </div>
  
    </>
  )
}

export default Income_analysisPage