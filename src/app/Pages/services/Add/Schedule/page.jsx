"use client";
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SchedulePage({handleNext , handlePrev}) {
  const { t } = useTranslation()
  
  const days = [
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },

  ];

  const [selectedDay, setSelectedDay] = useState(days[0]);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
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
      <div className="flex gap-5 ">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => handleSelectDay(day)}
            className={`w-[141px] h-15 flex items-center justify-center border rounded-[3px] shadow-sm transition
              ${
                selectedDay.id === day.id
                  ? "bg-[#F9F5E8] border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-[#CDD5DF] text-[#9AA4B2]"
              }`}
          >
            {t(day.name)}
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
              focus:ring-2 focus:ring-[var(--color-primary)] 
            `}
        />        
      </div>
      
    <div className='flex justify-end'>
        <button className='flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] w-[197px] h-14'>
          <img src="/images/icons/AddYellowIcon.svg" alt="" className='w-6 h-6' />
          <p className='text-[var(--color-primary)] text-base font-medium cursor-pointer'>{t('Add period')}</p>
        </button>
    </div>
      
    </section>



      {/* Display specific data for each day */}
      <div className="mt-5 p-4 border rounded-md bg-gray-50">
        {selectedDay ? (
          <p className="text-gray-700">
            {t("Data for")} <strong>{t(selectedDay.name)}</strong> (ID:{" "}
            {selectedDay.id})
          </p>
        ) : (
          <p className="text-gray-400">{t("Please select a day")}</p>
        )}
      </div>





















    <div className="my-12 flex gap-3">
      <button 
        onClick={handlePrev} 
        className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[var(--color-primary)] text-[var(--color-primary)] text-base font-medium cursor-pointer"
      >
        {t('the previous')}
      </button>
      <button
        onClick={handleNext} 
        className="border  w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[var(--color-primary)] text-[#fff] text-base font-medium cursor-pointer"
      >
          {t('the next')}
      </button>
    
    </div>



    
 
  </>
  )
}

export default SchedulePage
