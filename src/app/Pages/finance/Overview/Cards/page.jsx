"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleOfCardsPage from './TitleOfCards/page'

function CardsPage() {
  const{t}= useTranslation()
  const percentage = 8
  return (
    <>
      <TitleOfCardsPage/>

      <div className='grid grid-cols-4 gap-4'>

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
            <p className='text-[#202939] text-lg font-medium'>87,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {percentage >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{percentage}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{percentage}%</span>
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
            <p className='text-[#202939] text-lg font-medium'>87,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {percentage >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{percentage}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{percentage}%</span>
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
            <p className='text-[#202939] text-lg font-medium'>87,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {percentage >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{percentage}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{percentage}%</span>
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
            <p className='text-[#202939] text-lg font-medium'>87,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {percentage >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{percentage}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{percentage}%</span>
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