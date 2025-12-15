

"use client"
import { Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import TimeRangePicker from './TimeRangePicker';

function WorkingHours({openWorkingHours , setOpenWorkingHours ,worker}) {
    const {t}= useTranslation();

    // Working hours
    const [workingHours, setWorkingHours] = useState({
      start: '00:00',
  end: '00:00',
    });


    const convertArabicTimeTo24 = (timeStr) => {
  // timeStr = "11:37 ص"
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "م") { // مساءً
    if (hours < 12) hours += 12;
  } else if (period === "ص" && hours === 12) { // منتصف الليل
    hours = 0;
  }

  // رجع بصيغة HH:mm
  return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}`;
};

  useEffect(() => {
  if(worker?.working_time){
    const [startRaw, endRaw] = worker.working_time.split(" - ");
    setWorkingHours({
      start: convertArabicTimeTo24(startRaw),
      end: convertArabicTimeTo24(endRaw),
    });
  }
}, [worker, openWorkingHours]);


  return (
    <>
      <Dialog 
          open={openWorkingHours} 
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
        
          <div className=' px-6 '>
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
              <button onClick={()=>setOpenWorkingHours(false)} className='w-full h-15 border border-[var(--color-primary)] text-[var(--color-primary)] cursor-pointer rounded-[3px] flex justify-center items-center '>
                {t('cancel')}
              </button>
            </div>
          </div>
        
        </Dialog>

    </>
  )
}

export default WorkingHours
