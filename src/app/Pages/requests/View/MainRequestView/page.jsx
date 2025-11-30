"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';
import WorkersDataPage from '../RequestStatusData/WorkersData/page';
import CustomerPage from '../RequestStatusData/Customer/page';
import DescriptionPage from '../RequestStatusData/Description/page';
import ImagesPage from '../RequestStatusData/Images/page';
import AddressPage from '../RequestStatusData/Address/page';
import CarDetailsPage from '../RequestStatusData/CarDetails/page';
import PaymentDetailsPage from '../RequestStatusData/PaymentDetails/page';

function MainRequestViewPage({StatusRender,status,assigned_handymen ,setActiveSection}) {
  const { t } = useTranslation();
  return (
    <>
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

            <section className='px-6 mb-6'>
              {/* request Data card */}
              <div className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4 '>
                <div className='flex justify-between'>
                  <p className='text-[#697586] text-sm font-normal flex items-center'>
                    <span>{t('request')}/</span>
                    <span>56525</span>
                  </p>

                  <div>
                      {StatusRender(status)}
                  </div>
                </div>

                <hr className="border-[0.5px] border-[#E3E8EF] my-4 " />

                <div>
                  <p className='text-[#121926] text-base font-medium'>تصليح إطار سيارة</p>
                </div>

                <hr className="border-[0.5px] border-[#E3E8EF] my-4 " />

                <div className='flex justify-between  w-full'>
                  <div className='flex  gap-1.5 w-full'>
                    <img src="/images/icons/date.svg" alt="" className='w-6 h-6' />
                    <p className='text-[#575757] text-sm font-normal flex justify-center items-center'>الاحد 24 أغسطس</p>
                  </div>
                  <div className='flex justify-end gap-1.5  w-full'>
                    <img src="/images/icons/time.svg" alt=""  className='w-6 h-6'/>
                    <p className='text-[#575757] text-sm font-normal flex justify-center items-center'> 02:10 م </p>
                  </div>

                </div>
              </div>
              
              <WorkersDataPage status={status} assigned_handymen={assigned_handymen}/>  {/* Workers data */}
              <CustomerPage/>  {/* Customer Info */}
              <DescriptionPage/>  {/* Description message and voice */}
              <ImagesPage/>  {/* Images */}
              <AddressPage/>     {/* Address */}        
              <CarDetailsPage/>  {/* Car Details */}
              <PaymentDetailsPage/> {/* Payment Details */}

            </section>



            {/* //Btns */}
    {status === 'pending_approval' &&(
      <>
        <span className="border-[0.5px] border-[#E3E8EF] mb-6" />
        <div className='px-6 pb-6 flex gap-3'>
          <button className=' w-50 h-13.5 bg-[var(--color-primary)] text-[#fff] text-base font-medium rounded-[3px] cursor-pointer '>
            {t('approval')}
          </button>
          <button className=' w-37.5 h-13.5 border border-[#B42318] text-[#B42318] text-base font-medium rounded-[3px] cursor-pointer '>
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
  )
}

export default MainRequestViewPage