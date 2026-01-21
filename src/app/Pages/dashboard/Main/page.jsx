"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const {t} = useTranslation()

  return (
    <MainLayout>
      <div className='border border-[#E7E7E7] p-10 '>
        <div className='flex flex-col items-center mb-12'>
          <p className='text-[#232323] text-2xl font-medium mb-4'>{t('Service selection')}</p>
          <p className='text-[#656565] text-xl font-normal'>{t('Choose the service that best suits your needs')}</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Road services.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Road services')}</p>
          </button>

          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Delivery services.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Delivery services')}</p>
          </button>

          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Home services.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Home services')}</p>
          </button>

          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Car services.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Car services')}</p>
          </button>

          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Restaurant reservations.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Restaurant reservations')}</p>
          </button>

          <button className='border border-[#E3E8EF] py-6 px-4 flex flex-col items-center'>
            <img src="/images/Renting houses.svg" alt="" />
            <p className='text-[#364152] text-base mt-4'>{t('Renting houses')}</p>
          </button>

        </div>

      </div>
      
    </MainLayout>
  )
}

export default MainPage