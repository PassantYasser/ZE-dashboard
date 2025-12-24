"use client"
import React from 'react'
import TableOfTransactionsPage from './TableOfTransactions/page'

function TransactionsPage({WalletTransactionsData ,loading ,error }) {
    return (
    <>
      <div className='border border-[#E3E8EF] p-6 rounded-[3px] my-12'>
        <TableOfTransactionsPage WalletTransactionsData={WalletTransactionsData} loading={loading} error={error} />
      </div>
      
    </>
  )
}

export default TransactionsPage