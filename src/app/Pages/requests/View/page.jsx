"use client"
import { Dialog } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import RequestStatusDataPage from './RequestStatusData/page';

function ViewPage({ open, handleClose}) {
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
        
        {/* Title */}
        <section className="my-4 px-6 flex  justify-between  ">

          <div className=' '>
            <p className="text-[#364152] text-xl font-medium mb-5">
              {t("Order details")}
            </p>
            <p className="text-[#4B5565] text-sm font-normal ">
              {t("Full details explaining the status and contents of the order")}
            </p>
          </div>

          <div className=' flex items-center '>
            <button className='flex gap-2 border border-[var(--color-primary)] rounded-[3px]  px-4 py-2.5 cursor-pointer'>
              <img src="/images/icons/Activity log.svg" className="w-6 h-6" />
              <p className='text-[var(--color-primary)] text-base font-normal'>{t('Activity log')}</p>
            </button>
          </div>
          
          
        </section>

        <span className="border-[0.5px] border-[#E3E8EF] mb-6" />

        <RequestStatusDataPage />
          
        </Dialog>
    </>
  )
}

export default ViewPage