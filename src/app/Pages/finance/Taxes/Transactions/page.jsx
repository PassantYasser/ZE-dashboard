import React from 'react'
import TableOfTransactionsPage from './TableOfTransactions/page'
import Pagination from './TableOfTransactions/Pagination'

function TransactionsPage() {
  return (
    <>
      <div className='border border-[#E3E8EF] p-6 rounded-[3px] my-12'>
        <TableOfTransactionsPage/>

        <Pagination/>
      </div>
    </>
  )
}

export default TransactionsPage