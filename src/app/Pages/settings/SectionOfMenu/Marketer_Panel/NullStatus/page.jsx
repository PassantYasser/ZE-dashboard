"use client"
import React from 'react'
import InformationDataPage from './InformationData/page'
import { useTranslation } from 'react-i18next'

function NullStatusPage({is_marketer}) {
  const {t}=useTranslation()

  return (
    <>
      <div className='border border-[#E3E8EF] p-6'>

        <div className='flex justify-between  px-6 py-4 mb-8 border border-[#CDD5DF] rounded-[3px]'>
          <p className='text-[#4B5565] text-base font-normal '>{t('Activating the marketer dashboard')}</p>
          <p>x</p>
        </div>

        <InformationDataPage/>
        
      </div>

      

    </>
  )
}

export default NullStatusPage