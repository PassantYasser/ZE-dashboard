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
    ></Dialog>


    </>
    
  )
}

export default PhoneDialogPage