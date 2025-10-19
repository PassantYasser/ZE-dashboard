"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

function CompleteSignupDataPage() {
  const {t} = useTranslation();

  return (
    <>
      <div>
        <section className='flex justify-center mb-[11.11vh]'>
          <button className='bg-[var(--color-primary)] rounded-[50px] flex gap-4 py-4 px-6'>
            <div className=' flex items-center'>
              <img src="/images/stars.svg" alt="" className='w-12 h-12 ' />
            </div>

            <div className='flex flex-col items-start text-[#fff]'>
              <span className=' font-bold text-xl'>{t('Complete your profile')}</span>
              <span className='font-normal text-base'>{t('To add your service, please complete your profile first.')}</span>
            </div>
            <div className='flex items-center '>
              <img src="/images/icons/arrow-right-go.svg" alt="" />
            </div>
          
          </button>
        </section>


        <section className='flex justify-center'> 
          <img src="/images/CompleteSignupData.svg" alt="" />
        </section>
        <section className='flex flex-col gap-5 items-center'>
          <p className='text-[#575757] text-2xl font-semibold '>{t('Your account is not activated yet!')}</p>
          <p className='text-[#656565] text-xl font-normal'>{t('Please complete your profile and wait for notification of account activation.')}</p>
        </section>
      </div>

    </>
  )
}

export default CompleteSignupDataPage