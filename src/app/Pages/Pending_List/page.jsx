"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './List/Header';
import Box from './List/Box';
import Filter from './List/Filter';
import Cards from './List/Cards';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import No_Guest_Add from './List/No_Guest_Add';
import { useDispatch, useSelector } from 'react-redux';
import { getWaitingListThunk, getwaitlistAnalysisThunk } from '@/redux/slice/Pending_List/Pending_ListSlice';



function Pending_ListPage() {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState('coming');
    const [openAdd , setOpenAdd] = useState(false)

  
  //api
  const dispatch = useDispatch()
  const {getwaitlistAnalysis ,getWaitingList} = useSelector((state)=>state.PendingList)

  useEffect (()=>{
    dispatch(getwaitlistAnalysisThunk())
    dispatch(getWaitingListThunk())
  },[dispatch])

  console.log('getWaitingList',getWaitingList);
  return (
    <MainLayout>
      <Header openAdd={openAdd} setOpenAdd={setOpenAdd}/>

      <Box getwaitlistAnalysis={getwaitlistAnalysis}/>

      <div className='border border-[#E3E8EF] rounded-[3px] p-6 mb-6'>
        
        {!getWaitingList?.data?.length ? (
          <No_Guest_Add setOpenAdd={setOpenAdd}/>
        ):(
          <>
            <Filter activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Cards  activeTab={activeTab} getWaitingList={getWaitingList}/>
          </>
          
        )}
      
      </div>
      
    </MainLayout>
  )
}

export default Pending_ListPage