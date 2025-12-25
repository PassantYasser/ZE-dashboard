"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'
import { useDispatch, useSelector } from 'react-redux'
import { getTaxesDataThunk, getTransactionsWalletThunk } from '@/redux/slice/Finance/FinanceSlice'

function walletPage() {
  const dispatch = useDispatch()
  const {TaxesData , WalletTransactionsData , WalletPagination ,loading ,error} = useSelector((state)=>state.finance)
  
  useEffect(()=>{
    dispatch(getTaxesDataThunk())
    dispatch(getTransactionsWalletThunk(1))
  } , [dispatch])

  const handlePageChange = (page) => {
    dispatch(getTransactionsWalletThunk(page))
  }

  return (
    <MainLayout>
      <CardsPage TaxesData={TaxesData}/>

      <TransactionsPage 
        WalletTransactionsData={WalletTransactionsData} 
        loading={loading} 
        error={error}
        currentPage={WalletPagination?.current_page || 1}
        totalPages={WalletPagination?.last_page || 1}
        handlePageChange={handlePageChange}
      />
    </MainLayout>
  )
}

export default walletPage