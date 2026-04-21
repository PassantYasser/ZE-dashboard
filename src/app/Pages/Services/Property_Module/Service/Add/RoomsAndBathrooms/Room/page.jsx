"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function RoomPage() {
  const {t} = useTranslation()
  return (
    <>
    <div className='mt-10'>
      <p className='flex gap-1'>
        <img src="/images/icons/bed-single-blue.svg" alt="" />
        <span className='text-[#364152] text-base font-medium'>{t('Room Information')}</span>
      </p>
      <p className='text-[#4B5565] text-sm font-normal mt-1'>{t('Add details of each room and the beds in it.')}</p>
    
      <button className='flex justify-center items-center gap-1 w-full h-14 py-2.5 px-4 border border-dashed border-[#CDD5DF] mt-6 cursor-pointer'>
        <p className='text-[#697586] text-base font-medium '>{t('Add a room')}</p>
        <img src="/images/icons/AddGrayIcon.svg" className="w-5 h-5" />
      </button>
    </div>


    </>
  )
}

export default RoomPage