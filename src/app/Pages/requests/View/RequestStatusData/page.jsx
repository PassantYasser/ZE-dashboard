"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import DescriptionPage from './Description/page';
import ImagesPage from './Images/page';

function RequestStatusDataPage() {
  const { t } = useTranslation();

  const status = 'completed';
  const assigned_handymen =["a"]; 

  const StatusRender = (status) => {
    switch (status) {
      case "accepted": // تم القبول
        switch (assigned_handymen.length) {
          case 0: //assigned_handymen empty 
            return (
              <div className='bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit rounded-3xl'>
                <div className='py-1.5 px-3 flex gap-1'>
                  <img src="/images/icons/Active Status.svg" alt="" className='mt-1' />
                  <span className='text-xs font-normal flex items-center'>{t('accepted')}</span>
                </div>
              </div>
            );
          default:
            return (
              <div className='bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit rounded-3xl'>
                <div className='py-1.5 px-3 flex gap-1'>
                  <img src="/images/icons/Active Status.svg" alt="" className='mt-1' />
                  <span className='text-xs font-normal flex items-center'>{t('A specialist has been appointed')}</span>
                </div>
              </div>
            );
          
        }
      case "completed"://مكتملة
        return (
          <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit   rounded-3xl'>
          <div className='py-1.5 px-3 flex gap-1'>
            <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
            <span className='text-xs font-normal flex items-center'>{t('Complete')}</span>
          </div>
        </div>
        );
      case "pending_approval": //في انتظار الموافقة
        return (
          <div className=' bg-[#FFFAEB] border  border-[#F79009] text-[#DC6803] w-fit  rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/pending Status.svg" alt=""className=' mt-1' />
              <span className='text-xs font-normal flex items-center'>{t('pending')}</span>
            </div>
          </div>
        );
      case "in_progress": //قيد التنفيذ
      return (
        <div className=' bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] w-fit   rounded-3xl'>
        <div className='py-1.5 px-3 flex gap-1'>
          <img src="/images/icons/inactive Status.svg" alt="" className=' mt-1' />
          <span className='text-xs font-normal flex items-center'>{t('in_progress')}</span>
        </div>
      </div>
      );
      case "on_going": //العامل في الطريق
        return (
          <div className=' bg-[#E3E8EF] border border-[#697586] text-[#4B5565] w-fit  rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/on_going Status.svg" alt="" className=' mt-1' />
              <span className='text-xs font-normal flex items-center'>{t('The worker on the road')}</span>
            </div>
          </div>
        );
      case "rejected": // مرفوضة
        return (
          <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit  rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
              <span className='text-xs font-normal flex items-center'>{t('rejected')}</span>
            </div>
          </div>
        );
    }
  };
  
  return (
    <>
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
            <img src="/images/icons/date.svg" alt="" />
            <p className='text-[#575757] text-sm font-normal'>الاحد 24 أغسطس</p>
          </div>
          <div className='flex justify-end gap-1.5  w-full'>
            <img src="/images/icons/time.svg" alt="" />
            <p className='text-[#575757] text-sm font-normal'> 02:10 م </p>
          </div>

        </div>
      </div>
      
      
      {/* Description message and voice */}
      <DescriptionPage/>

      {/* Images */}
      <ImagesPage/>

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
          <button className=' w-43.5 h-13.5 bg-[var(--color-primary)] text-[#fff] text-base font-medium rounded-[3px] cursor-pointer '>
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

export default RequestStatusDataPage