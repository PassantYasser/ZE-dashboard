"use client"
import React from 'react'
import TableOfTransactionsPage from './TableOfTransactions/page'

function TransactionsPage({WalletTransactionsData ,loading ,error, pagination, onPageChange }) {
  return (
    <>
      <div className='border border-[#E3E8EF] p-6 rounded-[3px] my-12'>
        <TableOfTransactionsPage 
          WalletTransactionsData={WalletTransactionsData} 
          loading={loading} 
          error={error}
          pagination={pagination}
          onPageChange={onPageChange}
        />
      </div>
      
    </>
  )
}

export default TransactionsPage