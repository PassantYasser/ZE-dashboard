"use client"
import SearchForm from '@/app/Components/Forms/SearchForm'
import { getAvailableHandymenThunk } from '@/redux/slice/Requests/RequestsSlice';
import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE_BASE_URL } from '../../../../../../../../config/imageUrl';

// Force dynamic rendering - this page should not be statically generated
export const dynamic = 'force-dynamic';

function Appoint_SpecialistPage({ setActiveSection , bookingDetails }) {
  
  const [active, setActive] = useState(false);
  const handleClick = () => {
    if (active) return;
    setActive(true);
  };

  //api
  const booking_id = bookingDetails?.id
  const visit_date = bookingDetails?.visit_date
  const visit_time = bookingDetails?.visit_time

  const dispatch = useDispatch()
  const {availableHandymen , loading, error} = useSelector((state) => state.requests)
  useEffect(()=>{
    const formData = new FormData()
    formData.append('booking_id', booking_id)
    formData.append('visit_date', visit_date)
    formData.append('visit_time', visit_time)
    dispatch(getAvailableHandymenThunk(formData))
  },[dispatch])

  console.log(' availableHandymen', availableHandymen);
  console.log("booking_id", booking_id);
  console.log("visit_date", visit_date);
  console.log("visit_time", visit_time);


  return (
    <>
      <div className='px-6 flex gap-6 mb-5'>
        <div className='flex justify-center items-center cursor-pointer' onClick={() => setActiveSection(1)}>
          <p className='bg-[var(--color-primary)] w-10 h-10 flex justify-center items-center rounded-[3px]'>
            <img src="/images/icons/arrow-left-go.svg" alt="" className='w-8 h-8' />
          </p>
        </div>

        <div className=''>
          <p className='text-[#364152] text-lg font-medium'>{t('Appoint a specialist')}</p>
          <p className='text-[#4B5565] text-sm font-normal'>{t('He was specifically appointed to implement and monitor specialized measures.')}</p>
        </div>

      </div>
      <span className="border-[0.5px] border-[#E3E8EF] " />


      {/* search */}
      <section className='px-6 pt-6 '>
        <SearchForm placeholderKey="Search by employee name" width='full' />
      </section>

      {/* specialists list */}
      <section className='p-6 '>
        {availableHandymen?.map((handyman)=>(
          <div 
            key={handyman?.id}
            className=' shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] p-4'>
            <div className='flex gap-2 mb-4'>
              {/* avatar */}
              <div >
                <img src={`${IMAGE_BASE_URL}${handyman?.image}`} alt="" className='w-15 h-15 rounded-full'/>
              </div>
              {/* name and specialization */}
              <div className='font-normal'>
                <p className='text-[#202939] text-lg mb-2'>{handyman?.firstname} {handyman?.lastname}</p>
                <p className='text-[#697586] text-base'>{handyman?.designation?.name}</p>
              </div>

            </div>

            {/* time */}
            <div className='flex gap-1.5 mb-6'>
              <img src="/images/icons/time.svg" alt="" />
              <p className='text-[#697586]'> {t('Available time')}: {handyman?.working_time}</p>
            </div>

            {/* btn */}
            <button
              onClick={handleClick}
              className={`
          flex items-center justify-center gap-2 px-4 py-2 rounded-md transition w-full h-13.5 cursor-pointer
          ${active ? "bg-[#17B26A] " : "border border-[var(--color-primary)] "}
        `}
            >
              {active ? <img src='/images/icons/checkmark-circle.svg' /> : <img src='/images/icons/add-circle.svg' />}
              <span>
                {!active ? (
                  <span className='text-[var(--color-primary)] text-base font-medium '>{t('to set')}</span>
                ) : (
                  <span className='text-white text-base font-medium'>{t('The factor was identified')}</span>
                )
                }
              </span>
            </button>
          </div>
        ))}
        
      </section>


    </>
  )
}

export default Appoint_SpecialistPage