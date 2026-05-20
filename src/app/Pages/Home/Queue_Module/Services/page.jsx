"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import BoxPage from './Box/page'
import UpcomingBookingsPage from './UpcomingBookings/page'

function ServicesPage() {
  return (
    <MainLayout>
      <BoxPage/>

      <div className='grid grid-cols-2 gap-4'>
        <UpcomingBookingsPage/>
      </div>

    </MainLayout>
  )
}

export default ServicesPage