"use client";
import React, { useState } from 'react'
import i18n from "../../../language/i18n";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
function LoginPage() {
  
      const { t } = useTranslation();
  

  return (
    <>
    <div className='p-8 flex justify-between gap-8 h-screen '>
      <section className='w-full'>
          <div className=' mt-50.5 mb-25 flex flex-col items-center   rounded-[10px]'>
            <p className='text-[#9E7A11] text-[32px] font-semibold mb-6'>{t('Welcome back!')}</p>
            <p className='text-[#656565] text-2xl font-normal'>{t('Log in to access your account.')} </p>
          </div>
          <form className='w-full flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-[#364152] text-base font-normal' htmlFor="email">{t('Email')}/{t('phone number')}</label>
              <input className='w-full h-15 px-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm' type="email" name="email" id="email" placeholder={t('Email')} />   
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-[#364152] text-base font-normal' htmlFor="password">{t('password')}</label>
              <input className='w-full h-15 px-3 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm' type="password" name="password" id="password" placeholder={t('password')} />
              <Link href='/Auth/Login/ForgetPassword' className='flex justify-end text-[#9E7A11] text-base font-normal'>{t('Forgot your password?')}</Link>
            </div>
            <button className='w-full h-14 bg-[#DDA918] text-white text-lg font-semibold rounded-lg mt-4 mb-12'>
              {t('Log in')}
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


    </>
  )
}

export default LoginPage