"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import HeaderOfTaxesPage from './HeaderOfTaxes/page'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'
import { useDispatch, useSelector } from 'react-redux'
import { getTaxesDataThunk, getTransactionsTaxesThunk } from '@/redux/slice/Finance/FinanceSlice'

function TaxesPage() {
  const dispatch = useDispatch()
  const {TaxesData ,TaxesTransactionsData, loading , error} = useSelector((state)=>state.finance)

  useEffect(()=>{
    dispatch(getTaxesDataThunk())
    dispatch(getTransactionsTaxesThunk())
  },[dispatch])

  console.log('TaxesTransactionsData' , TaxesTransactionsData);
  return (
    <MainLayout>

    <HeaderOfTaxesPage/>

    <CardsPage TaxesData={TaxesData}/>
    <TransactionsPage TaxesTransactionsData={TaxesTransactionsData} loading={loading} />

    </MainLayout>
  )
}

export default TaxesPage