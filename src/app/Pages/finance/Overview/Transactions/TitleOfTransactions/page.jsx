'use client'
import FilterBtn from '@/app/Components/Buttons/FilterBtn'
import React from 'react'
import { useTranslation } from 'react-i18next'

function TitleOfTransactionsPage() {
    const {t} = useTranslation()
  
  return (
    <>
  <div className='flex justify-between mb-8'>
    <div className='flex items-center gap-2 '>
      <p className='w-12 h-12 flex justify-center items-center bg-[#EDE7FD] rounded-[3px]'>
        <img src="/images/icons/Transactions.svg" alt="" className='w-6 h-6' />
      </p>
      <div>
        <p className='text-[#364152] text-xl font-medium'>{t('Transactions')}</p>
        <p className='text-[#697586] text-base font-light'>{t('Track your financial transactions accurately and easily from one organized place.')}</p>
      </div>
      
    </div>

    <div>
      <FilterBtn/> 
    </div>
  </div>
    </>
  )
}

export default TitleOfTransactionsPage