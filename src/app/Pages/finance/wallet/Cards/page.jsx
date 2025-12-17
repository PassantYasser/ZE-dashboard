"use client"
import React, { useState } from 'react'
import TitleOfCardsPage from './TitleOfCards/page'
import { useTranslation } from 'react-i18next'
import WithdrawDialogPage from './WithdrawDialog/page'

function CardsPage() {
  const {t} = useTranslation()

  const [open , setOpen] = useState(false)
  
  return (
    <>
      <TitleOfCardsPage/>

      <div className='grid grid-cols-2 gap-8 '>

        {/* first card */}
        <section className='border border-[#CDD5DF] p-6 rounded-[3px]'>
          {/* //title */}
          <div className='flex items-center gap-4 mb-6'>
            <p className='bg-[#FEF0C7] w-14 h-14 flex justify-center items-center rounded-[3px]'>
              <img src="/images/icons/Available balance.svg" alt="" className='w-8 h-8' />
            </p>
            <p className='text-[#4B5565] text-xl lg1:text-2xl font-normal'>{t('Available balance')}</p>
          </div>

          <p className='text-[#202939] text-2xl lg1:text-[32px] font-medium'>20.000 جنية</p>
        </section>

        {/* second card */}
        <section className='border border-[#CDD5DF] p-6 rounded-[3px]'>
          {/* //title */}
          <div className='flex items-center gap-4 mb-6'>
            <p className='bg-[#EDE7FD] w-14 h-14 flex justify-center items-center rounded-[3px]'>
              <img src="/images/icons/Available_withdrawal.svg" alt="" className='w-8 h-8' />
            </p>
            <p className='text-[#4B5565] text-xl lg1:text-2xl font-normal'>{t('Available balance for withdrawal')}</p>
          </div>

          <p className='text-[#202939] text-2xl lg1:text-[32px] font-medium'>10.000 جنية</p>

          <button onClick={()=>setOpen(true)} className='w-full h-14 bg-[var(--color-primary)] text-white rounded-[3px] text-base font-medium cursor-pointer my-6'>
            {t('to withdraw')}
          </button>

        </section>

      </div>

    <WithdrawDialogPage  open={open} setOpen={setOpen} />
    </>
  )
}

export default CardsPage