"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SchedulePage({handleNext , handlePrev}) {
  const { t } = useTranslation()
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const [selectedDay, setSelectedDay] = useState(null); // one day only

  const handleSelectDay = (day) => {
    setSelectedDay((prev) => (prev === day ? null : day));
  };

  return (
  <>
    {/* days */}
    <section className='mb-12'>
      {/* title */}
      <div className="flex justify-between mb-6">
        <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
      </div>
  
      {/* box of days */}
      <div className=" flex  gap-5 ">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleSelectDay(day)}
            className={`w-[141px] h-15 lg1:w-35 lg1:h-17 flex items-center justify-center border rounded-[3px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] transition
              ${
                selectedDay === day
                  ? "bg-[#F9F5E8] border-[var(--color-primary)] text-[var(--color-primary)]"
                  : " border-[#CDD5DF] text-[#9AA4B2]"
              }`}
          >
            {t(day)}
          </button>
        ))}
      </div>
    </section>
  
    {/* All the time */}
    <section>
      {/* title */}
      <div className="flex justify-between mb-6">
        <p className="text-[#4B5565] text-base font-medium">{t("the time")}</p>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-6 h-6 border border-[#CDD5DF]"
          
          />
          <p className="text-[#4B5565] text-base font-normal">{t("All the time")}</p>
        </div>
      </div>

      <div className='flex gap-6 mb-10'>
        <label className='flex items-center text-[#4B5565] text-xl font-normal'>{t('From')}</label>
        <input
          type="time"
          className=
            {`w-123 h-15 p-3 
              border border-[#C8C8C8] 
              rounded-[3px] text-[#364152] 
              text-base focus:outline-none 
              focus:ring-2 focus:ring-[#C69815] 
            `}
        />

        <label className='flex items-center text-[#4B5565] text-xl font-normal'>{t('To')}</label>
        <input
          type="time"
          className=
            {`w-123 h-15 p-3 
              border border-[#C8C8C8] 
              rounded-[3px] text-[#364152] 
              text-base focus:outline-none 
              focus:ring-2 focus:ring-[#C69815] 
            `}
        />        
      </div>
      
    <div className='flex justify-end'>
        <button className='flex items-center justify-center border border-[#C69815] rounded-[3px] w-[197px] h-14'>
          <img src="/images/icons/AddYellowIcon.svg" alt="" className='w-6 h-6' />
          <p className='text-[#C69815] text-base font-medium cursor-pointer'>{t('Add period')}</p>
        </button>
    </div>
      
    </section>


    <div className="my-12 flex gap-3">
      <button 
        onClick={handlePrev} 
        className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[#C69815] text-[#C69815] text-base font-medium cursor-pointer"
      >
        {t('the previous')}
      </button>
      <button
        onClick={handleNext} 
        className="border  w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[#C69815] text-[#fff] text-base font-medium cursor-pointer"
      >
          {t('the next')}
      </button>
    
    </div>


  </>
  )
}

export default SchedulePage
