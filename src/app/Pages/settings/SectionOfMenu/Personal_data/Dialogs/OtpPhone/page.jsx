"use client"
import { Dialog } from '@mui/material'
import React from 'react'

function OtpPhonePage() {
  return (
  <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    ></Dialog>
  )
}

export default OtpPhonePage