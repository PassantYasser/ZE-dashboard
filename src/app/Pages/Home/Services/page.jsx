"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import BoxPage from './Box/page'
import RatePage from './Rate/page'
import AbbreviationsPage from './Abbreviations/page'
import TileOfSevicesPage from './TileOfSevices/page'
import CardsPage from './Cards/page'

function ServicesPage() {
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
  const current_module_key = userData?.current_module_key
  return (
    <MainLayout>
      <TileOfSevicesPage current_module_key={current_module_key}/>
      <BoxPage current_module_key={current_module_key}/>
      <CardsPage current_module_key={current_module_key}/>
      <RatePage/>
      <AbbreviationsPage/>
    </MainLayout>
  )
}

export default ServicesPage