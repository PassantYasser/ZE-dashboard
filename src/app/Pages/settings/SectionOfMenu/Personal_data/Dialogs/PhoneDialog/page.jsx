"use client"
import { Dialog } from '@mui/material'
import React, { useState } from 'react'

function PhoneDialogPage({openPhone, setOpenPhone ,setOpenOtpPhone}) {


  return (
    <>
    <Dialog
      open={openPhone}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
        <div className='pt-6 px-6 '>
          <button 
            onClick={()=>setOpenPhone(false)} 
            className='border border-[rgba(102,107,109,0.20)] w-12 h-12  rounded-[58.182px] flex justify-center items-center cursor-pointer'
          >
            <img src="/images/icons/xx.svg" alt="" />
          </button>
        </div>

    </Dialog>


    </>
    
  )
}

export default PhoneDialogPage