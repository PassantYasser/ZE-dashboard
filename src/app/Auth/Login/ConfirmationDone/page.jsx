
"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
function ConfirmationDonePage() {
  
      const { t } = useTranslation();
  

  return (
    <>
    <div className='p-8 lg1:flex justify-between gap-8 h-screen '>
      <section className='w-full mt-37.5 lg1:mt-31'>
        <div className='flex flex-col items-center justify-center mb-25 lg1:mb-37.5'>
          <div className='flex'>
            <img src="/images/LogoText.svg" alt="" />
            <img src="/images/Logo.svg" alt="" />
          </div>
          <p className='text-[#656565] text-xl font-normal mt-3'>{t('Welcome back, nice to see you!')}</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <p className='text-[#0F022E] text-2xl font-bold'>{t('It was successful!')}🤩</p>
          <p className='text-[#656565] text-lg font-medium'>{t('You can now log in with your new password.')}</p>
          <img src="/images/ConfirmationDone.svg" alt="" className='mt-10 mb-12 lg1:(mb-20 ,mt-14)' />
        </div>
        <div>
          <Link href='/Auth/Login'>
            <button  
              className='w-full h-15 bg-[#DDA918] text-white text-base font-medium rounded-[3px] '>
                {t('Log in')}
            </button>
          </Link>
        </div>


      </section>
      

  
        
        <section className='w-full hidden lg1:block  rounded-[10px]'
          style={{ background: "linear-gradient(180deg, #DDA918 48.1%, #9D7810 99.85%)" }}
        >
          <p className='flex justify-end ml-4'>
            <img src="/images/AuthLogUP.png" alt="" />
          </p>
        
          <div className="mt-4.5 w-[70%] mx-auto flex flex-col gap-4 text-center text-white ">
            <p className="text-3xl font-bold">
              {t("Join the ZETIME Partner Network")}
            </p>
            <p className="text-lg font-normal leading-9">
              {t("Register now and get the tools you need to reach a wider customer base and achieve your goals efficiently.")}
            </p>
            <p className='mt-20'>
              <img src="/images/AuthLogMiddle.svg" alt="" />
            </p>
          </div>
  
          <p className='fixed bottom-8 mr-4 '>
            <img src="/images/AuthLogDown.svg" alt="" />
          </p>
    
        </section>
  
      </div>


    </>
  )
}

export default ConfirmationDonePage