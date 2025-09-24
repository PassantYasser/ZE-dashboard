"use client"
import ViewPage from '@/app/services/View/page';
import Link from 'next/link';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ServiceCard() {
  const {t}= useTranslation();

  const [status , setStatus] = useState('stopped');

  const StatusRender = () => {
    switch (status) {
      case "active":
        return (
          <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647]  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('active')}</span>
            </div>
          </div>
        );

      case "inactive":
        return (
          <div className=' bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB]  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/inactive Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('inactive')}</span>
            </div>
          </div>
        );

        case "pending":
        return (
          <div className=' bg-[#FFFAEB] border border-[#F79009] text-[#DC6803]  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/pending Status.svg" alt=""className=' mt-1' />
              <span className=''>{t('pending')}</span>
            </div>
          </div>
        );

        case "stopped":
        return (
          <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20]  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/stopped Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('stopped')}</span>
            </div>
          </div>
        );

        case "refused":
        return (
          <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20]  h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
              <span className=''>{t('refused')}</span>
            </div>
          </div>
        );
    
    }
  };


  //view details

   const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>

      <section className='bg-[#fff] shadow-[0_0_4px_0_rgba(0,0,0,0.3)] px-2 py-3 rounded-md'>
        <div className="relative mb-5">
          <img
            src="/images/Service Photo.svg"
            alt=""
            className="w-full rounded-[3px]"
          />
          <div className="absolute top-2.5 left-3.5  px-3 py-1 ">
            {StatusRender(status)}
          </div>
        </div>

        
        <button onClick={handleClickOpen}  className='text-[#364152] text-base font-medium '>خدمة صيانة سخانات المياه</button>
        <div className='mt-4'>
          {/* price */}
          <div className='flex gap-1.5'>
            <img src="/images/icons/price.svg" alt=""  />
            <p className='text-[#C69815] text-lg font-medium'>40 {t('Pound')}</p>
          </div>

          <div className='flex justify-between my-4 '>

            <section>
              <div className='flex gap-1.5 mb-4 '>
                <img src="/images/icons/Revenues.svg" alt=""/>
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Revenues')}</span>  
                  <span className='text-[#C69815]'>50 {t('Pound')}</span>
                </p>
              </div>
              
              <div className='flex gap-1.5 '>
                <img src="/images/icons/Available areas.svg" alt=""/>
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Available areas')}</span>  
                  <span className='text-[#C69815]'>(8+)</span>
                </p>
              </div>
              
            </section>

            <section className='mx-2' >
              <div className='flex gap-1.5 mb-4 '>
                <img src="/images/icons/RequestsNumber.svg" alt=""/>
                <p className='text-[#697586] text-sm font-normal'>{t('Requests')} 50</p>
              </div>
            
              <div className='flex gap-1.5 '>
                <img src="/images/icons/view.svg" alt="" className='text-[#8B8B8B]'/>
                <p className='text-[#697586] text-sm font-normal'>0 {t('View')}</p>
              </div>
          
            </section>

          </div>
        </div>
      </section>

      <ViewPage open={open} handleClose={handleClose} />

    </>
  )
}

export default ServiceCard