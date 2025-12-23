import React from 'react'
import TitleOfTransactionsPage from './TitleOfTransactions/page'
import TableOfTransactionsPage from './TableOfTransactions/page'
import Pagination from './TableOfTransactions/Pagination'

function TransactionsPage({TransactionsData ,loading}) {

  return (
    <>
      <div className='border border-[#E3E8EF] py-4 px-6 rounded-[3px] mb-12'>

        <TitleOfTransactionsPage/>

        <TableOfTransactionsPage TransactionsData={TransactionsData} loading={loading}/>
        <Pagination/>

      </div>
    </>
  )
}

export default TransactionsPage