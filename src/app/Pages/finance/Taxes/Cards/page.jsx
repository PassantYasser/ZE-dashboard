"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function CardsPage() {

    const{t}= useTranslation()
    const percentage = 8
  return (
    <>
        <div className='grid grid-cols-3 gap-4 mb-12 mt-5'>

        {/* Gross Profit */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#F4EAD0] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/Gross Profit.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Gross Profit')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>87,972 جنية</p>
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

        {/* Net Profit */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#EDE7FD] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/cash.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Net Profit')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>87,972 جنية</p>
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

        {/* tax due */}
        <section className='border border-[#CDD5DF] rounded-[3px] p-4'>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className='w-10 h-10 bg-[#EEF2F6] flex items-center justify-center rounded-[3px]'>
              <img src="/images/icons/tax due.svg" alt="" />
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('tax due')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-lg font-medium'>87,972 جنية</p>
          </div>

          <div className='flex gap-1'>
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