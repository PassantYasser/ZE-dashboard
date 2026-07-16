"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Filter from './Filter'
import Cards from './Cards'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersThunk } from '@/redux/slice/Requests/RequestsSlice'

function FoodDelivery_ModulePage() {

  const {t} = useTranslation()

  //api
  const dispatch = useDispatch()
  const {getOrders} = useSelector((state)=>state.requests)
  useEffect(()=>{
    dispatch(getOrdersThunk())
  },[dispatch])
  
  console.log('getOrders' , getOrders);

  return (
    <MainLayout>
      
      <Header/>

      <Filter/>

      <div className='grid grid-cols-2 gap-6 my-8'>
        <Cards getOrders={getOrders?.data}/>
      </div>
      <Pagination/>
      
    </MainLayout>
  )
}

export default FoodDelivery_ModulePage