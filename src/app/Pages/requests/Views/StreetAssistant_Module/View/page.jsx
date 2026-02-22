"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';



function ViewStreetAssistant_ModulePage({ open, handleClose }) {
  const { t } = useTranslation();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          className: "RequestsViewPage-dialog",
        }}
      >
        {/* Close Button */}
        <section className="px-6 mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
          >
            <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
          </button>
        </section>

streeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet



      </Dialog>
    </>
  )
}

export default ViewStreetAssistant_ModulePage