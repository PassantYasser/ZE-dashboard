import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import CardsPage from './Cards/page'
import TransactionsPage from './Transactions/page'

function walletPage() {
  return (
    <MainLayout>
      <CardsPage />

      <TransactionsPage/>
    </MainLayout>
  )
}

export default walletPage