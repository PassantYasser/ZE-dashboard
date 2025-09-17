"use client";
import LoginBtn from '@/app/Components/Buttons/LoginBtn'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

function ConfirmationDonePage() {
  const {t} = useTranslation()
  return (
    <>
    <div className='flex justify-center mt-8'>
      <img src="/images/confirmationSignup.svg" alt="" />
    </div>

    <div className='mt-6 flex flex-col items-center gap-4'>
      <p className='text-[#202939] text-xl font-semibold'>{t('Your request has been sent successfully!')}</p>
      <p className='text-[#656565] text-lg font-normal w-[480px] text-center'>{t('The application will be reviewed and the account activation notification will be sent via email as soon as possible.')}</p>
    </div>

    <div className='mt-12'>
      <Link href='/Auth/Login'>
        <button  
          className='w-full h-15 bg-[#DDA918] text-white text-base font-medium rounded-[3px] '>
            {t('Log in')}
        </button>
      </Link>    
    </div>

    </>
  )
}

export default ConfirmationDonePage