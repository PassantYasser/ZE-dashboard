import React, { useEffect } from 'react'
import TitleOfIncome_analysisPage from './TitleOfIncome_analysis/page'
import ChartPage from './Chart/page'
import { useDispatch, useSelector } from 'react-redux'
import { getRevenueChartDataThunk } from '@/redux/slice/Finance/FinanceSlice'

function Income_analysisPage() {

  const dispatch = useDispatch();
  // Fetch revenueChartData from Redux store
  const { revenueChartData } = useSelector((state) => state.finance);
  const [filter, setFilter] = useState('all');
  const currentYear = new Date().getFullYear();

  console.log('chartData',chartData);

  return (
    <>
    <div className='border border-[#E3E8EF] rounded-[3px] mb-12'>
      <TitleOfIncome_analysisPage/>
      <hr className='border border-[#E3E8EF] w-full mt-4'></hr>
      <ChartPage chartData={revenueChartData}/>
      
    </div>
  
    </>
  )
}

export default Income_analysisPage