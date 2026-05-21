"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import BoxPage from './Box/page'
import NavRequest from './NavRequest'
import CardOfRequests from './CardOfRequests'
import { useTranslation } from 'react-i18next'

function Queue_ModulePage() {
  const {t} = useTranslation()
  return (
    <MainLayout>
      <p className='text-[#364152] text-2xl font-medium mb-10'>{t('Reservations')}</p>

      <BoxPage/>
      
      <div>
        <NavRequest/>
        <CardOfRequests/>
      </div>
      
    </MainLayout>
  )
}

export default Queue_ModulePage