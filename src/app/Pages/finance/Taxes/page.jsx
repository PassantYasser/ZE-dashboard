import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import HeaderOfTaxesPage from './HeaderOfTaxes/page'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'

function TaxesPage() {
  return (
    <MainLayout>

    <HeaderOfTaxesPage/>

    <CardsPage/>

    <TransactionsPage/>

    </MainLayout>
  )
}

export default TaxesPage