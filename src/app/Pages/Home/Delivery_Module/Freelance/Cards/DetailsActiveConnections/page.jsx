'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import TitleOfDetails from './TitleOfDetails'
import TrackingStatus from './TrackingStatus'
import DeliveryPoints from './DeliveryPoints'
import DriverDetails from './DriverDetails'

function DetailsActiveConnectionsContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  return (
    <MainLayout>
      
      {/* DetailsActiveConnectionsPage {id ? `(ID: ${id})` : ''} */}
    
      <TitleOfDetails/>
      <div className='grid grid-cols-2 gap-6 mt-10'>
        <TrackingStatus/>
        <DeliveryPoints/>
      </div>
      
      <DriverDetails/>
      

    </MainLayout>
  )
}

function DetailsActiveConnectionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsActiveConnectionsContent />
    </Suspense>
  )
}

export default DetailsActiveConnectionsPage