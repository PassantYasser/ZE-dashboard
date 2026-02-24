"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import RequestStatusDataPage from './RequestStatusData/page';

// Force dynamic rendering - this page should not be statically generated
export const dynamic = 'force-dynamic';

function ViewHome_Car_ModulePage({ open, handleClose, bookingId }) {
  const { t } = useTranslation();
   console.log(bookingId);
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



        {/* تفاصيل الطلب */}
        <RequestStatusDataPage />

      </Dialog>
    </>
  )
}

export default ViewHome_Car_ModulePage