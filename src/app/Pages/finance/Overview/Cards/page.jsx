"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleOfCardsPage from './TitleOfCards/page'

function CardsPage({paymentsData}) {
  const{t}= useTranslation()
  // const percentage = 8
  const cash = paymentsData?.weekly_stats?.cash?.percent_change ?? 0;
  const refunded = paymentsData?.weekly_stats?.refunded?.percent_change ?? 0;
  const booking = paymentsData?.weekly_stats?.booking?.percent_change ?? 0;
  const card = paymentsData?.weekly_stats?.card?.percent_change ?? 0;

  return (
    <>
      <TitleOfCardsPage/>

      <div className='grid grid-cols-2 lg1:grid-cols-4  gap-4 mb-12'>

        {/* cash */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#EDE7FD] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/cash.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('cash')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>{paymentsData?.cash_booking_sum}</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {cash >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{cash}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{cash}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

        {/* recovery */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#FEF0C7] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/recovery.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('recovery')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>{paymentsData?.refunded_sum}</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {refunded >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{refunded}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{refunded}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

        {/* Total profits */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#B4F0CC] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/Total profits.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Total profits')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>{paymentsData?.total_booking_price}</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {booking >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{booking}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{booking}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

        {/* credit card */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#FEF3F2] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/credit card.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('credit card')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>{paymentsData?.card_booking_sum}</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {card >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{card}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{card}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

      </div>
    </>
  )
}

export default CardsPage