"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PhoneNumber({openPhoneNumber , setOpenPhoneNumber}) {
  const {t}= useTranslation();

  return (
    <>
    

    <Dialog 
      open={openPhoneNumber} 
      onClose={() => setOpenPhoneNumber(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
    <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenPhoneNumber(false)}>
      <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
        <img src="/images/icons/xx.svg" alt="" />
      </p>
    </button>
      
      <div className='flex flex-col gap-5 items-center justify-center mb-8'>
        {/* icon */}
        <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
          <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
            <img src="/images/icons/call-received.svg" className="w-7.5 h-7.5"  />
          </div>
        </div>

        {/* title */}
        <p className='text-[var(--color-primary)] text-xl font-bold'>{t('Change mobile number')}</p>

      </div>

      <form action="" className=' px-6 '>
        {/* Mobile number */}
        <div className="flex flex-col ">
          <label className="text-[#364152] text-base font-normal mb-3 block">
            {t("Mobile number")}
          </label>

          <div className="relative">
            <PhoneInput
              country={"sa"}
              placeholder="000000000"
              containerClass="!w-full"
              inputClass="!w-full !h-[60px] !border !border-[#9AA4B2] !rounded-[3px] !pl-24 !text-left !shadow-sm !text-[#364152] placeholder-[#9A9A9A] focus:border-[#C69815] outline-none"
              buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-r-0"
              dropdownClass="!absolute !left-0 !top-full !mt-1 !z-50  !border !border-[#C8C8C8] !rounded-md !shadow-sm"
          
            />

            
          </div>
        </div>

        <div className='my-6 flex gap-3'>
          <button className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center '>
            {t('save')}
          </button>
          <button className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
            {t('cancel')}
          </button>
        </div>
      </form>

      
    
    </Dialog>

    </>
  )
}

export default PhoneNumber