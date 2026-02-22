"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';

function CustomerPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className='flex justify-between shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4 mt-6'>

        <div className='flex gap-3'>
          {/* image   */}
          <div className='bg-[#E3E8EF] w-10 h-10 flex items-center justify-center rounded-[999px]'>
            <img src="/images/icons/Customer.svg" alt="" />
          </div>

          {/* Name */}
          <div className='text-sm font-normal'>
            <p className='text-[#808080] '>{t('Customer')}</p>
            <p className='text-[#0B2C3E] mt-1 '>هاني سعيد</p>
          </div>
        </div>

        <div className='flex items-center gap-4'>

          {/* chat */}
          <div className='border border-[#946DF1] w-10 h-10 flex justify-center items-center rounded-[999px]'>
            <img src="/images/icons/chatIcon.svg" alt="" />
          </div>

          {/* call */}
          <div className='border border-[#946DF1] w-10 h-10 flex justify-center items-center rounded-[999px]'>
            <img src="/images/icons/call.svg" alt="" />
          </div>

        </div>
      
      </section>

    </>
  )
}

export default CustomerPage