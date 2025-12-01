"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Activity_logPage({setActiveSubSection}) {
  const { t } = useTranslation();
  return (
    <>
    <div className='px-6 flex gap-6 mb-5'>
      <div className='flex justify-center items-center cursor-pointer' onClick={()=>setActiveSubSection(1)}>
        <p className='bg-[var(--color-primary)] w-10 h-10 flex justify-center items-center rounded-[3px]'>
          <img src="/images/icons/arrow-left-go.svg" alt="" className='w-8 h-8'/>
        </p>
      </div>
      
      <div className=''>
        <p className='text-[#364152] text-lg font-medium'>{t('Appoint a specialist')}</p>
        <p className='text-[#4B5565] text-sm font-normal'>{t('He was specifically appointed to implement and monitor specialized measures.')}</p>
      </div>
    
    </div>
    <span className="border-[0.5px] border-[#E3E8EF] " />
    </>
  )
}

export default Activity_logPage