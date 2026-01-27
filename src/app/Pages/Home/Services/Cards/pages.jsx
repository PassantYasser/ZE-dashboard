import React from 'react'
import NewOrdersPage from './NewOrders/page'
import CurrentOrdersPage from './CurrentOrders/page'

function CardsPages() {
  return (
    <>
      <div className={`grid grid-cols-2 gap-6`}>
      <NewOrdersPage />
      <CurrentOrdersPage />
      </div>
    </>
  )
}

export default CardsPages