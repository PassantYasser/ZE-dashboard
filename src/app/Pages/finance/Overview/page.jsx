"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import CardsPage from './Cards/page'
import Income_analysisPage from './Income_analysis/page'
import TransactionsPage from './Transactions/page'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentsDataThunk, getTransactionsOverviewThunk } from '@/redux/slice/Finance/FinanceSlice'

function OverviewPage() {
  const dispatch = useDispatch();
const { paymentsData,TransactionsData, TransactionsPagination, loading, error } = useSelector((state)=>state.finance);

useEffect(() => {
  dispatch(getPaymentsDataThunk());
  dispatch(getTransactionsOverviewThunk(1))
}, []);

// Handle pagination page change
const handlePageChange = (page) => {
  dispatch(getTransactionsOverviewThunk(page));
};

// console.log('paymentsData' ,paymentsData);

  return (
    <MainLayout>

      <CardsPage paymentsData={paymentsData}/>
      <Income_analysisPage/>
      <TransactionsPage TransactionsData={TransactionsData} loading={loading} pagination={TransactionsPagination} onPageChange={handlePageChange}/>
    </MainLayout>
  )
}

export default OverviewPage