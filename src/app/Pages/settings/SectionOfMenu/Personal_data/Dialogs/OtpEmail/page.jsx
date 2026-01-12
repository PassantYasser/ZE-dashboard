"use client"
import { Dialog } from '@mui/material'
import React from 'react'

function OtpEmailPage({openOtpEmail ,setOpenOtpEmail }) {
  return (
    <Dialog
      open={openOtpEmail}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    ></Dialog>
  )
}

export default OtpEmailPage