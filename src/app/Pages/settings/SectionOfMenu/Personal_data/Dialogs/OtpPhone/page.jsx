"use client"
import { Dialog } from '@mui/material'
import React from 'react'

function OtpPhonePage({ openOtpPhone, setOpenOtpPhone}) {
  return (
  <Dialog
      open={openOtpPhone}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
        <div className='pt-6 px-6 '>
          <button 
            onClick={()=>setOpenOtpPhone(false)} 
            className='border border-[rgba(102,107,109,0.20)] w-12 h-12  rounded-[58.182px] flex justify-center items-center cursor-pointer'
          >
            <img src="/images/icons/xx.svg" alt="" />
          </button>
        </div>

    </Dialog>
  )
}

export default OtpPhonePage