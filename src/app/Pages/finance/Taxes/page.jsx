import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import HeaderOfTaxesPage from './HeaderOfTaxes/page'
import CardsPage from './Cards/page'

function TaxesPage() {
  return (
    <MainLayout>

    <HeaderOfTaxesPage/>

    <CardsPage/>

    </MainLayout>
  )
}

export default TaxesPage