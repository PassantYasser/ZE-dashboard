"use client"
import React, { useState } from 'react'
import MainLayout from '../../Components/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import Header from './Header';
import Box from './Box';
import Filter from './Filter';
import Cards from './Cards';

function Pending_ListPage() {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState('coming');

  return (
    <MainLayout>
      <Header/>

      <Box />

      <div className='border border-[#E3E8EF] rounded-[3px] p-6 mb-6'>
        <Filter activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Cards activeTab={activeTab}/>
      </div>
      
    </MainLayout>
  )
}

export default Pending_ListPage