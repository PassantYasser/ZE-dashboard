"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import BoxPage from './Box/page'
import NavRequest from './NavRequest'

function Queue_ModulePage() {
  return (
    <MainLayout>
      <BoxPage/>
      
      <div>
        <NavRequest/>
      </div>
      
    </MainLayout>
  )
}

export default Queue_ModulePage