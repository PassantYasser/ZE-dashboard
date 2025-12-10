import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import CardsPage from './Cards/page'
import Income_analysisPage from './Income_analysis/page'
import TransactionsPage from './Transactions/page'

function OverviewPage() {
  return (
    <MainLayout>

      <CardsPage/>
      <Income_analysisPage/>
      <TransactionsPage/>
    </MainLayout>
  )
}

export default OverviewPage