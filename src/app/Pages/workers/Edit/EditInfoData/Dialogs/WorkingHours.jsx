

"use client"
import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import TimeRangePicker from './TimeRangePicker';

function WorkingHours({openWorkingHours , setOpenWorkingHours}) {
    const {t}= useTranslation();

    // Working hours
    const [workingHours, setWorkingHours] = useState({
      start: '09:00',
      end: '17:00',
    });

  return (
    <>
      <Dialog 
          open={openWorkingHours} 
          onClose={() => setOpenWorkingHours(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ className: "ServicePage-dialog" }}
        >
        <button className='pt-8 px-6 pb-2 cursor-pointer' onClick={()=>setOpenWorkingHours(false)}>
          <p className='border border-[#DDD] rounded-[100%] w-10 h-10 flex justify-center items-center  '>
            <img src="/images/icons/xx.svg" alt="" />
          </p>
        </button>


        <div className='flex flex-col gap-5 items-center justify-center mb-8'>
          {/* icon */}
          <div className='bg-[#EEF2F6] w-17.5 h-17.5 rounded-[100%] flex items-center justify-center '>
            <div className='bg-[#CDD5DF] w-12.5 h-12.5 rounded-[100%] flex items-center justify-center'>
              <img src="/images/icons/clock.svg" className="w-7.5 h-7.5"  />
            </div>
          </div>

          {/* title */}
          <p className='text-[var(--color-primary)] text-xl font-bold'>{t('Working hours')}</p>

        </div>
        
          <form action="" className=' px-6 '>
            {/* Working hours */}
            <div className="flex flex-col">
              <TimeRangePicker
                value={workingHours}
                onChange={setWorkingHours}
                label={t('Working hours')}
                language="ar"
              />
            </div>

            <div className='my-6 flex gap-3'>
              <button className='w-full h-15 bg-[var(--color-primary)] text-[#fff] cursor-pointer rounded-[3px] flex justify-center items-center '>
                {t('save')}
              </button>
              <button className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
                {t('cancel')}
              </button>
            </div>
          </form>
        
        </Dialog>

    </>
  )
}

export default WorkingHours
