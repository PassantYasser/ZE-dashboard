"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useEffect } from 'react'
import TileOfSevicesPage from './TileOfSevices/page'
import BoxPage from './Box/page'
import Cardspage from './Cards/page'
import { useDispatch, useSelector } from 'react-redux'
import { getPropertiesAnalysisThunk } from '@/redux/slice/Home/HomeSlice'

function ServicesPage() {
  const dispatch = useDispatch()
  const {analysisProperties } = useSelector((state)=>state.Home)
  useEffect(()=>{
    dispatch(getPropertiesAnalysisThunk())
  },[dispatch])
  console.log(analysisProperties);
  return (
    <MainLayout>
      <TileOfSevicesPage/>
      <BoxPage analysisProperties={analysisProperties}/>
      <Cardspage/>
    </MainLayout>
  )
}

export default ServicesPage