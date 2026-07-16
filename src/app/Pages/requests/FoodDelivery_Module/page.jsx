"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'
import Filter from './Filter'
import Cards from './Cards'
import Pagination from './Pagination'

function FoodDelivery_ModulePage() {

  const {t} = useTranslation()

  return (
    <MainLayout>
      
      <Header/>

      <Filter/>

      <div className='grid grid-cols-2 my-8'>
        <Cards/>
      </div>
      <Pagination/>
      
    </MainLayout>
  )
}

export default FoodDelivery_ModulePage