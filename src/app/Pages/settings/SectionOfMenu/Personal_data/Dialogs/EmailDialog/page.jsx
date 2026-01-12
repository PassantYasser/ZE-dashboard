"use client"
import { Dialog } from '@mui/material'
import React, { useState } from 'react'

function EmailDialogPage({openEmail , setOpenEmail , setOpenOtpEmail}) {

  
  return (
    <>
      <Dialog
        open={openEmail}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: "ServicePage-dialog" }}
      >
        cccc
      </Dialog>


    </>
  
  )
}

export default EmailDialogPage