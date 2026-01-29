"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

function CompanyPage({ open, setOpen }) {
  const {t} = useTranslation();
  return (
  <>
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "COMPANY-dialog" }}
    >
      <section className="px-6 mt-6">
        <button
          onClick={() => setOpen(false)}
          className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
    
      </section>
      <section className="pt-6  flex justify-center flex-col gap-4 items-center">
        <p className="text-[#364152] font-normal text-2xl">{t('Simple steps to complete your account')}</p>
        <p className="text-[var(--color-primary)] font-semibold text-xl">{t('Enter your personal details')}</p>
      </section>
      <section className="py-11 px-12.5">
        <div className=' border border-[#CDD5DF] p-10'>
          {/* Form */}
        {/* Company Name */}
          <div className='flex flex-col gap-3'>
            <p className='text-[#364152] text-base font-normal'>{t('Company Name')}</p>
            <input 
              type="text"
              placeholder={t('Enter company name')}
              className='border border-[#C8C8C8] p-3 rounded-[3px] outline-none'
            />
          </div>

          {/* Email */}
          <div className='flex flex-col gap-3 mt-6'>
            <p className='text-[#364152] text-base font-normal'>{t('Email')}</p>
            <input 
              type="text"
              placeholder={t('Enter your email address')}
              className='border border-[#C8C8C8] p-3 rounded-[3px] outline-none'
            />
          </div>

          {/* Number of employees */}
          <div className='flex flex-col gap-3 mt-6'>
            <p className='text-[#364152] text-base font-normal'>{t('Number of employees')}</p>
            <input 
              type="text"
              placeholder={t('Enter the number of employees')}
              className='border border-[#C8C8C8] p-3 rounded-[3px] outline-none'
            />
          </div>

          <div className='flex flex-col gap-3 mt-6'>
            <p className='text-[#364152] text-base font-normal'>{t('Years of experience')}</p>
            <input 
              type="text"
              placeholder={t('Enter the number of years of experience')}
              className='border border-[#C8C8C8] p-3 rounded-[3px] outline-none'
            />
          </div>


          {/* Company address */}
          <div className="flex flex-col gap-3 mt-6">
            <p className="text-[#364152] text-base font-normal">
              {t("Company address")}
            </p>

            <div className="relative">
              {/* icon */}
              <span className="absolute left-3 top-4 ">
                <img src="/images/icons/LocationBlack.svg" alt="location" className='w-6 h-6' />
              </span>
              
              <textarea
                readOnly
                className="border border-[#C8C8C8] h-13  rounded-[3px] outline-none w-full"
              />
            </div>
          </div>



          <div className=' mt-10'>
            <button 
              className='bg-[var(--color-primary)] text-white w-full h-14 cursor-pointer rounded-[3px] '
            >
              {t('the next')}
            </button>
          </div>





        </div>
      </section>
    </Dialog>
  
  </>
  )
}

export default CompanyPage