"use client";
import ViewPage from '@/app/Components/Dialogs/ViewPage'; // ✅ fixed: import client component instead of route page.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGE_BASE_URL } from '../../../../config/imageUrl';

function ServiceCard({service}) {
  const { t } = useTranslation();
  // const [status, setStatus] = useState('stopped');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StatusRender = (status) => {
    switch (status) {
      case "active":
        return (
          <div className='bg-[#DCFAE6] border border-[#067647] text-[#067647] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/Active Status.svg" alt="" className='mt-1' />
              <span>{t('active')}</span>
            </div>
          </div>
        );
      case "inactive":
        return (
          <div className='bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/inactive Status.svg" alt="" className='mt-1' />
              <span>{t('inactive')}</span>
            </div>
          </div>
        );
      case "pending":
        return (
          <div className='bg-[#FFFAEB] border border-[#F79009] text-[#DC6803] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/pending Status.svg" alt="" className='mt-1' />
              <span>{t('pending')}</span>
            </div>
          </div>
        );
      case "stopped":
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/stopped Status.svg" alt="" className='mt-1' />
              <span>{t('stopped')}</span>
            </div>
          </div>
        );
      case "refused":
        return (
          <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className='mt-1' />
              <span>{t('refused')}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <section className='bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.3)] px-2 py-3 rounded-[3px]'>
        <div className="relative mb-5">
          <img
            src={`${IMAGE_BASE_URL}${service?.image}`}
            alt=""
            className="w-full h-43.5 rounded-[3px]"
          />
          <div className="absolute top-2.5 left-3.5 px-3 py-1">
            {/* {StatusRender(status)} */}
            {StatusRender(service?.status)}
          </div>
        </div>

        <button onClick={handleClickOpen} className='text-[#364152] text-base font-medium cursor-pointer'>
            {service?.category?.title}
        </button>

        <div className='mt-4'>
          {/* price */}
          <div className='flex gap-1.5'>
            <img src="/images/icons/price.svg" alt="" />
            <p className='text-[#C69815] text-lg font-medium'>{service?.price}{t('Pound')}</p>
          </div>

          <div className='flex justify-between my-4'>
            <section>
              <div className='flex gap-1.5 mb-4'>
                <img src="/images/icons/Revenues.svg" alt="" />
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Revenues')}</span>
                  <span className='text-[#C69815]'> {service?.bookings_sum_price == null ? '0' : service?.bookings_sum_price} {t('Pound')}</span>
                </p>
              </div>

              <div className='flex gap-1.5'>
                <img src="/images/icons/Available areas.svg" alt="" />
                <p className='text-sm font-normal'>
                  <span className='text-[#697586] ml-1'>{t('Available areas')}</span>
                  <span className='text-[#C69815]'>
                    ({service?.areas?.length || 0}+)

                  </span>
                </p>
              </div>
            </section>

            <section className='mx-2'>
              <div className='flex gap-1.5 mb-4'>
                <img src="/images/icons/RequestsNumber.svg" alt="" />
                <p className='text-[#697586] text-sm font-normal'>{t('Requests')} {service?.bookings_count}</p>
              </div>
              
              <div className='flex gap-1.5'>
                <img src="/images/icons/view.svg" alt="" className='text-[#8B8B8B]' />
                <p className='text-[#697586] text-sm font-normal'>{service?.views_count} {t('View')}</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ✅ Use the client-safe component */}
      <ViewPage open={open} handleClose={handleClose} />
    </>
  );
}

export default ServiceCard;
