"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function PaymentDetailsPage() {
  const { t } = useTranslation();
  return (
    <>
      <section className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4 mt-6'>
        <div>
          <p className='text-[#0F022E] text-base font-medium mb-4'>{t('Payment details')}</p>

          {/* Price */}
          <div className='flex justify-between'>
            <p className='text-[#575757] text-sm font-normal'>{t('the price')}</p>
            <p className='text-[#575757] text-base font-normal'>120 ج.م</p>
          </div>

          {/* Discount */}
          <div className='flex justify-between mt-4'>
            <p className='text-[#575757] text-sm font-normal'>{t('Discount value')}</p>
            <p className='text-[#F04438] text-base font-normal '>20 ج.م</p>
          </div>
          <hr className="border-[0.5px] border-dashed border-[#E3E8EF] my-4  " />

          <div className='flex justify-between mt-4'>
            <p className='text-[#0F022E] text-base font-medium'>{t('Final price')}</p>
            <p className='text-[var(--color-primary)] text-lg font-semibold'>100 ج.م</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default PaymentDetailsPage