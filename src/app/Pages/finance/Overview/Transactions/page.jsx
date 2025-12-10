import React from 'react'
import TitleOfTransactionsPage from './TitleOfTransactions/page'
import TableOfTransactionsPage from './TableOfTransactions/page'
import Pagination from './TableOfTransactions/Pagination'

function TransactionsPage() {
  return (
    <>
      <div className='border border-[#E3E8EF] py-4 px-6 rounded-[3px] mb-12'>

        <TitleOfTransactionsPage/>

        <TableOfTransactionsPage/>
            <Pagination/>

      </div>
    </>
  )
}

export default TransactionsPage