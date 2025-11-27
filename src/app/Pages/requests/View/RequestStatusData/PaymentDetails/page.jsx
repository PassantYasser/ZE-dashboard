"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function PaymentDetailsPage() {
  const { t } = useTranslation();

  const invoice_url ='http//'; //link to invoice file empty or not
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

          {/* Final Price */}
          <div className='flex justify-between mt-4'>
            <p className='text-[#0F022E] text-base font-medium'>{t('Final price')}</p>
            <p className='text-[var(--color-primary)] text-lg font-semibold'>100 ج.م</p>
          </div>

        </div>

        {/* Invoice download */}
        {invoice_url ===null ? (
          <button className='flex justify-center items-center gap-2 bg-[#E3E8EF] text-[#9AA4B2] w-full h-13.5 mt-6 px-4 py-2.5 rounded-[3px] cursor-not-allowed'>
            <span className='text-base font-medium'>{t('invoice')}</span>
          </button>
        ):(
          <>
            <div className='bg-[#ECFDF3] w-full flex justify-between items-center h-12.5 mt-4 p-2 rounded-[3px]'> 
              <p className='text-[#079455] text-sm font-normal '>{t('Cash paid')}</p>
              <img src="/images/icons/true_circle.svg" alt="" className='w-6 h-6' />
            </div>
            
            <button className='flex justify-center items-center  gap-2 bg-[var(--color-primary)] text-[#fff] w-full h-13.5  mt-4 px-4 py-2.5 rounded-[3px] cursor-pointer'>
              <span className='text-base font-medium'>{t('invoice')}</span>  
              <img src="/images/icons/download.svg" alt="" className='w-6 h-6'  />
            </button>
          </>
          
          
        )}
      </section>

    </>
  )
}

export default PaymentDetailsPage