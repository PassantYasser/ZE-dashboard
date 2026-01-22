"use client"
import Module_key from '@/app/Pages/dashboard/Main/Module_key'
import { Dialog } from '@mui/material'
import React from 'react'

function ServiceToggle({openServiceToggle ,setOpenServiceToggle}) {
  return (
    <>
    <Dialog
      open={openServiceToggle}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >  
      <div className='pt-6 px-6 '>
        <button 
          onClick={()=>setOpenServiceToggle(false)} 
          className='border border-[rgba(102,107,109,0.20)] w-12 h-12  rounded-[58.182px] flex justify-center items-center cursor-pointer'
        >
          <img src="/images/icons/xx.svg" alt="" />
        </button>
      </div>
      <div className='p-6'>
      
        <div >
          <Module_key />
        </div>
      </div>
    </Dialog>

    </>
  )
}

export default ServiceToggle