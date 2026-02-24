"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import WorkersDataPage from '../RequestStatusData/WorkersData/page';
import CustomerPage from '../RequestStatusData/Customer/page';
import DescriptionPage from '../RequestStatusData/Description/page';
import ImagesPage from '../RequestStatusData/Images/page';
import AddressPage from '../RequestStatusData/Address/page';
import CarDetailsPage from '../RequestStatusData/CarDetails/page';
import PaymentDetailsPage from '../RequestStatusData/PaymentDetails/page';
import RejectedCompPage from '../RequestStatusData/RejectedComp/page';
import RejectedDialogPage from './RejectedDialog/page';
import Activity_logPage from './Activity_log/page';

// Force dynamic rendering - this page should not be statically generated
export const dynamic = 'force-dynamic';

function  MainRequestViewPage({ StatusRender, status, assigned_handymen, setActiveSection ,bookingDetails}) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeSubSection, setActiveSubSection] = useState(1);

  // setActiveSection  تعيين مختص
  // setActiveSubSection  سجل النشاط

    console.log("bookingDetails",bookingDetails);

  return (
    <>

      {activeSubSection === 1 && (
        <>
          {/* Title-->  btn  سجل النشاط + title*/}
          <section className="my-4 px-6 flex  justify-between  ">

            <div className='  '>
              <p className="text-[#364152] text-xl font-medium mb-5">
                {t("Order details")}
              </p>
              <p className="text-[#4B5565] text-sm font-normal ">
                {t("Full details explaining the status and contents of the order")}
              </p>
            </div>

            <div className=' flex items-center '>
              <button className='flex gap-2 border border-[var(--color-primary)] rounded-[3px]  px-4 py-2.5 cursor-pointer'
                onClick={() => setActiveSubSection(2)}>
                <img src="/images/icons/Activity log.svg" className="w-6 h-6" />
                <p className='text-[var(--color-primary)] text-base font-normal'>{t('Activity log')}</p>
              </button>
            </div>


          </section>
          <span className="border-[0.5px] border-[#E3E8EF] mb-6" />


          <section className='px-6 mb-6 '>

            {/* request Data card (card1) */}
            <div className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4  '>
              <div className='flex justify-between'>
                <p className='text-[#697586] text-sm font-normal flex items-center'>
                  <span>{t('request')}/</span>
                  <span>{bookingDetails?.id}</span>
                </p>

                <div>
                  {StatusRender && typeof StatusRender === 'function' ? StatusRender(status) : null}
                </div>
              </div>

              <hr className="border-[0.5px] border-[#E3E8EF] my-4 " />

              <div>
                <p className='text-[#121926] text-base font-medium'>{bookingDetails?.service?.category?.title}</p>
              </div>

              <hr className="border-[0.5px] border-[#E3E8EF] my-4 " />

              <div className='flex justify-between  w-full'>
                <div className='flex  gap-1.5 w-full'>
                  <img src="/images/icons/date.svg" alt="" className='w-6 h-6' />
                  <p className='text-[#575757] text-sm font-normal flex justify-center items-center'>{bookingDetails?.visit_date}</p>
                </div>
                <div className='flex justify-end gap-1.5  w-full'>
                  <img src="/images/icons/time.svg" alt="" className='w-6 h-6' />
                  <p className='text-[#575757] text-sm font-normal flex justify-center items-center'>{bookingDetails?.visit_time}</p>
                </div>

              </div>
            </div>

            <WorkersDataPage status={status} assigned_handymen={assigned_handymen} bookingDetails={bookingDetails}/>  {/* Workers data */}
            {status === 'rejected' && (<RejectedCompPage />)}      {/* Rejected Component */}
            <CustomerPage />  {/* Customer Info */}
            <DescriptionPage />  {/* Description message and voice */}
            <ImagesPage />  {/* Images */}
            <AddressPage />     {/* Address */}
            <CarDetailsPage />  {/* Car Details */}
            <PaymentDetailsPage /> {/* Payment Details */}

          </section>




          {/* //Btns */}
          {status === 'pending_approval' && (
            <>
              <span className="border-[0.5px] border-[#E3E8EF] mb-6" />
              <div className='px-6 pb-6 flex gap-3'>
                <button className=' w-50 h-13.5 bg-[var(--color-primary)] text-[#fff] text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('approval')}
                </button>
                <button className=' w-37.5 h-13.5 border border-[#B42318] text-[#B42318] text-base font-medium rounded-[3px] cursor-pointer '
                  onClick={() => (handleClickOpen())}

                >
                  {t('reject')}
                </button>
              </div>
            </>
          )}

          {status === 'accepted' && (assigned_handymen.length === 0 ? (
            <>
              <span className="border-[0.5px] border-[#E3E8EF] mb-6" />
              <div className='px-6 pb-6 flex gap-3'>
                <button className=' w-43.5 h-13.5 bg-[var(--color-primary)] text-[#fff] text-base font-medium rounded-[3px] cursor-pointer '
                  onClick={() => setActiveSection(2)}
                >
                  {t('Appoint a specialist')}
                </button>
                <button className=' w-37.5 h-13.5 border border-[#B42318] text-[#B42318] text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('cancel')}
                </button>
              </div>
            </>
          ) : (
            <>
              <span className="border-[0.5px] border-[#E3E8EF] mb-6" />
              <div className='px-6 pb-6 flex gap-3'>
                <button className=' w-43.5 h-13.5 bg-[var(--color-primary)] text-[#fff] text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('Reset')}
                </button>
                <button className=' w-37.5 h-13.5 border border-[#B42318] text-[#B42318] text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('cancel')}
                </button>
              </div>
            </>
          )
          )}

          {status === 'on_going' && (
            <>
              <span className="border-[0.5px] border-[#E3E8EF] mb-6" />
              <div className='px-6 pb-6  '>
                <button className=' w-full h-13.5 bg-[#E3E8EF] text-[#9AA4B2] text-base font-medium rounded-[3px] cursor-pointer '>
                  {t('Reset')}
                </button>
              </div>
            </>

          )}

        </>
      )}








      {/* سجل النشاط */}
      {activeSubSection === 2 && (
        <>
          <Activity_logPage setActiveSubSection={setActiveSubSection} />

        </>
      )}












      <RejectedDialogPage open={open} handleClose={handleClose} />
    </>
  )
}

export default MainRequestViewPage