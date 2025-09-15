"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function ServiceCard() {
  const {t}= useTranslation()
  return (
    <>
      <section className='bg-[#fff] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] px-2 py-3 rounded-md'>
        <img src="/images/Service Photo.svg" alt="" className='w-full mb-5 rounded-[3px] ' />
        <p className='text-[#364152] text-base font-medium '>خدمة صيانة سخانات المياه</p>
        <div className='mt-4'>
          {/* price */}
          <div className='flex gap-1.5'>
            <img src="/images/icons/price.svg" alt=""  />
            <p className='text-[#C69815] text-lg font-medium'>40 {t('Pound')}</p>
          </div>

          <div className='flex justify-between my-4 '>

            <section>
              <div className='flex gap-1.5 mb-4 '>
                <img src="/images/icons/Revenues.svg" alt=""/>
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Revenues')}</span>  
                  <span className='text-[#C69815]'>50 {t('Pound')}</span>
                </p>
              </div>
              
              <div className='flex gap-1.5 '>
                <img src="/images/icons/Available areas.svg" alt=""/>
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Available areas')}</span>  
                  <span className='text-[#C69815]'>(8+)</span>
                </p>
              </div>
              
            </section>

            <section className='mx-2' >
              <div className='flex gap-1.5 mb-4 '>
                <img src="/images/icons/RequestsNumber.svg" alt=""/>
                <p className='text-[#697586] text-sm font-normal'>{t('Requests')} 50</p>
              </div>
            
              <div className='flex gap-1.5 '>
                <img src="/images/icons/view.svg" alt="" className='text-[#8B8B8B]'/>
                <p className='text-[#697586] text-sm font-normal'>0 {t('View')}</p>
              </div>
          
            </section>

          </div>
        </div>
      </section>

    </>
  )
}

export default ServiceCard