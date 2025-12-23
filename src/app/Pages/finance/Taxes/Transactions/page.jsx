import React from 'react'
import TableOfTransactionsPage from './TableOfTransactions/page'
import Pagination from './TableOfTransactions/Pagination'

function TransactionsPage({ TaxesTransactionsData,loading}) {
  return (
    <>
      <div className='border border-[#E3E8EF] p-6 rounded-[3px] my-12'>
        <TableOfTransactionsPage TaxesTransactionsData={TaxesTransactionsData} loading={loading}/>

        <Pagination/>
      </div>
    </>
  )
}

export default TransactionsPage