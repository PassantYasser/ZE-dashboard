"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'
import { useDispatch, useSelector } from 'react-redux'
import { getTaxesDataThunk } from '@/redux/slice/Finance/FinanceSlice'

function walletPage() {
  const dispatch = useDispatch()
  const {TaxesData} = useSelector((state)=>state.finance)
  useEffect(()=>{
    dispatch(getTaxesDataThunk())
  } , [dispatch])
  return (
    <MainLayout>
      <CardsPage TaxesData={TaxesData}/>

      <TransactionsPage/>
    </MainLayout>
  )
}

export default walletPage