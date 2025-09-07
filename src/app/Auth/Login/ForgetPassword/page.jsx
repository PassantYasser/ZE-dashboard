"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';

function ForgetPasswordpage() {
    const { t } = useTranslation();
  
  return (
  <>

      <div className='p-8 flex justify-between gap-8 h-screen '>
        <section className='w-full mt-50.5'>
          <div className='flex flex-col items-center'>
            <p className='mb-6'>{t('Forgot your password?')}</p>
            <p>{t('Enter the phone number or email address of the account for which you want to change the password.')}</p>
            <img className='my-17.5' src="/images/lockLogIcon.svg" alt="" />
          </div>
          <form className='w-full flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-[#364152] text-base font-normal' htmlFor="email">{t('Email')}/{t('phone number')}</label>
              <input className='w-full h-15 px-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm' type="email" name="email" id="email" placeholder={t('Email')} />  
            </div>
            <button className='w-full h-14 bg-[#DDA918] text-white text-lg font-semibold rounded-lg mt-4 mb-12'>
              {t('send')}
            </button>
              <p className='flex justify-center gap-1.5'>
              <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
              <span className='text-[#9E7A11] text-lg font-medium'>{t('Create an account')}</span>
            </p>
          </form>
        </section>
      

  
        
        <section className='w-full  rounded-[10px]'
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

    </>  )
}

export default ForgetPasswordpage