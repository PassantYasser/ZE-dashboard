"use client"
import React from 'react'
import MainLayout from '../Components/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'

function ServicesPage() {
  const {t}= useTranslation()
  return (
    <MainLayout>
        <section className='flex justify-between'>
          <div className="relative w-[556px] ">
            <img
              src="/images/icons/search.svg"
              alt="search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              type="text"
              placeholder={t("Search by worker name, job title, or phone number")}
              className="w-full h-14  pr-10 border border-[#C8C8C8] rounded-[3px] text-[#364152] placeholder-[#9AA4B2] focus:outline-none"
            />
          </div>
          <div className='flex gap-5 '>

            <button className='flex gap-2 justify-center items-center border h-14 w-37.5 border-[#C69815] rounded-[3px]'>
              <img src="/images/icons/FlterIcon.svg" alt=""  className='w-6 h-6'/>
              <span className='text-[#C69815] text-base font-medium'>{t('filter')} </span>
            </button>

            <button className='flex gap-2 justify-center items-center bg-[#C69815] w-[210px] h-14 rounded-[3px] '>
              <img src="/images/icons/AddIcon.svg" alt="" className='w-6 h-6'/>
              <span className='text-[#fff] text-base font-medium'>{t('Add a sub-service')} </span>
            </button>

          </div>
          
        </section>
    </MainLayout>
  )
}

export default ServicesPage