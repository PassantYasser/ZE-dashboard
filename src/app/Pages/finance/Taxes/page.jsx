"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import HeaderOfTaxesPage from './HeaderOfTaxes/page'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'
import { useDispatch, useSelector } from 'react-redux'
import { getTaxesDataThunk } from '@/redux/slice/Finance/FinanceSlice'

function TaxesPage() {
  const dispatch = useDispatch()
  const {TaxesData , loading , error} = useSelector((state)=>state.finance)

  useEffect(()=>{
    dispatch(getTaxesDataThunk())
  },[dispatch])

  console.log('TaxesData' , TaxesData);
  return (
    <MainLayout>

    <HeaderOfTaxesPage/>

    <CardsPage TaxesData={TaxesData}/>
    <TransactionsPage/>

    </MainLayout>
  )
}

export default TaxesPage