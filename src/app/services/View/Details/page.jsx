"use client"
import { t } from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function DetailsPage({handleClose}) {
  const {t} = useTranslation();
    const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className='px-6'>
        {/* title */}
        <p className='text-[#364152] text-xl font-medium '>
          خدمة صيانة سخانات المياه
        </p>

        {/* Description */}
        <section className='my-6'>
          <span className='text-[#4B5565] text-base font-medium'>{t('Service Description')}</span>
          <p className='text-[#697586] text-base font-normal border border-[#9AA4B2] p-3 mt-1.5 rounded-[3px]'>
            حافظ على منزلك من مشاكل السباكة المزعجة  نقدم حلولاً شاملة لجميع أعمال السباكة باستخدام أحدث المعدات وخبراء معتمدين. نستخدم مواد عالية الجودة
          </p>
        </section>

        {/* status */}
        <section className='flex gap-4 text-[#4B5565] text-base font-medium mb-6 '>
          <div>
            <span>{t('Service status')}</span>
            <span>(نشط)</span>
          </div>
          <div
            onClick={() => setEnabled(!enabled)}
            className={`relative w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
              ${enabled ? "bg-[#9AA4B2]" : "bg-[#17B26A]"}`}
          >
            <div
              className={`bg-white w-4.5 h-4.5 rounded-full shadow-md transform transition-transform duration-300
                ${enabled ? "-translate-x-5" : "translate-x-0"}`}
            />
          </div>
        </section>

        <section>
          {/* price */}
          <div className='flex gap-1.5 '>
            <img src="/images/icons/price.svg" alt=""  />
            <p className='text-[#C69815] text-base font-medium'>40 {t('Pound')}</p>
          </div>

          <div className='flex justify-between my-6'>
            {/* Revenues */}
            <div className='flex gap-1.5'>
              <img src="/images/icons/Revenues.svg" alt=""/>
              <p className='text-base font-normal'>
                <span className='text-[#697586] ml-1'>{t('Revenues')}</span>  
                <span className='text-[#C69815]'>50 {t('Pound')}</span>
              </p>
            </div>
            
            {/* RequestsNumber */}
            <div className='flex gap-1.5 '>
              <img src="/images/icons/RequestsNumber.svg" alt=""/>
              <p className='text-[#697586] text-base font-normal'>{t('Requests')} 50</p>
            </div>

          </div>
          
          {/* view */}
          <div className='flex gap-1.5 mb-6'>
            <img src="/images/icons/view.svg" alt="" className='text-[#8B8B8B]'/>
            <p className='text-[#697586] text-base font-normal'>0 {t('View')}</p>
          </div>

        </section>

        {/* date-time */}
        <section className='mb-4'>
          <div className='flex gap-1.5 mb-4'>
            <img src="/images/icons/date-time.svg" alt="" />
            <p>{t('Available times and days')}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-[#697586] text-sm font-normal'>الثلاثاء </p>
            <p className='text-[#697586] text-sm font-normal'>02:00م - 05:00ص</p>
          </div>
        </section>



        {/* Available areas */}
        <section >
          <div className='flex gap-1.5 mb-4'>
            <img src="/images/icons/Available areas.svg" alt=""/>
              <span className='text-[#697586] text-base font-normal'>{t('Available areas')}</span>  
          </div>
          <div className='bg-[#EDE7FD] border border-[#E2E2E2] h-8.5 w-fit px-3 py-0.5 rounded-[35px] mb-6'>
            <span className='text-[#4B5565] text-sm font-normal'>الشيخ زايد</span>
          </div>
        </section>

  </div>

  <div className="w-full h-px bg-[#CDD5DF] my-6"></div>

  <section className='flex gap-3 mx-6 mb-6'>
    <button className='border bg-[#C69815] text-[#fff] flex justify-center items-center gap-2 h-13.5 w-50 rounded-[3px] '>
      <span className='text-base font-medium'>{t('Modify the service')}</span>
      <img src="/images/icons/edit.svg" alt="" className='w-5 h-5' />
      
      </button>
    <button onClick={handleClose} className='border border-[#C69815] text-[#C69815] h-13.5 w-32.5 rounded-[3px] text-base font-medium'>{t('cancel')}</button>
  </section>

  
      
    </>
  )
}

export default DetailsPage