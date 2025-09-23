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

  const [selectedDays, setSelectedDays] = useState([])
  // toggle one day
  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    )
  }
  // toggle all days
  const toggleAll = (e) => {
    if (e.target.checked) {
      setSelectedDays(days)
    } else {
      setSelectedDays([])
    }
  }
  // check if all selected
  const allSelected = selectedDays.length === days.length

  
  return (
  <>
      <section className='mb-12'>
        {/* title */}
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="w-6 h-6 border border-[#CDD5DF]"
              onChange={toggleAll}
              checked={allSelected}
            />
            <p className="text-[#4B5565] text-base font-normal">{t("All days")}</p>
          </div>
        </div>
    
        {/* box of days */}
        <div className=" flex  gap-5 ">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`w-[141px] h-15 lg1:w-35 lg1:h-17 flex items-center justify-center border rounded-[3px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] transition
                ${
                  selectedDays.includes(day)
                    ? "bg-[#F9F5E8] border-[#C69815] text-[#C69815]"
                    : " border-[#CDD5DF] text-[#9AA4B2]"
                }`}
            >
              {t(day)}
            </button>
          ))}
        </div>
      </section>
    
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
            <p className='text-[#C69815] text-base font-medium '>{t('Add period')}</p>
          </button>
      </div>
        
      </section>


    <div className="my-12 flex gap-3">
      <button 
        onClick={handlePrev} 
        className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[#C69815] text-[#C69815] text-base font-medium"
      >
        {t('the previous')}
      </button>
      <button
        onClick={handleNext} 
        className="border w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[#C69815] text-[#fff] text-base font-medium"
      >
          {t('the next')}
      </button>
    
    </div>


  </>
  )
}

export default SchedulePage
