import React, { useEffect } from 'react'
import TitleOfIncome_analysisPage from './TitleOfIncome_analysis/page'
import ChartPage from './Chart/page'
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeAnalysisDataThunk } from '@/redux/slice/Finance/FinanceSlice';

function Income_analysisPage() {

  const dispatch = useDispatch();
  const{chartData, loading , error} = useSelector((state) => state.finance);
  useEffect(()=>{
    dispatch(getIncomeAnalysisDataThunk())
  },[dispatch])

  console.log('chartData',chartData);

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