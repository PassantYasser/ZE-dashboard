'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function DayAndTime() {
  const { t } = useTranslation()
  const [selectedDays, setSelectedDays] = useState([])

  const days = [
    { id: 1, day: 'Sunday' },
    { id: 2, day: 'Monday' },
    { id: 3, day: 'Tuesday' },
    { id: 4, day: 'Wednesday' },
    { id: 5, day: 'Thursday' },
    { id: 6, day: 'Friday' },
    { id: 7, day: 'Saturday' }
  ]

  const toggleDay = (dayId) => {
    setSelectedDays(prev => 
      prev.includes(dayId) 
        ? prev.filter(id => id !== dayId)
        : [...prev, dayId]
    )
  }

  const toggleAllDays = () => {
    if (selectedDays.length === days.length) {
      setSelectedDays([])
    } else {
      setSelectedDays(days.map(day => day.id))
    }
  }

  return (
    <div className='p-6'>

      {/* day *************************** */}
      <section>
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>

          <div className="flex gap-2 items-center">
            <input 
              type="checkbox" 
              className="w-6 h-6 border border-[#CDD5DF] cursor-pointer" 
              checked={selectedDays.length === days.length}
              onChange={toggleAllDays}
            />
            <p className="text-[#4B5565] text-base font-normal">
              {t("All days")}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3'>
          {days.map((item) => (
            <button
              key={item.id}
              onClick={() => toggleDay(item.id)}
              className={`border rounded-[3px] h-12.5 text-sm font-medium cursor-pointer transition-colors ${
                selectedDays.includes(item.id)
                  ? 'border-[var(--color-primary)] bg-[#F9F5E8] text-[var(--color-primary)]'
                  : 'border-[#CDD5DF] text-[#CDD5DF]'
              }`}
            >
              {t(item.day)}
            </button>
          ))}
        </div>
      </section>

      {/* ////////////////////////////////////////////////////// */}

      {/* time *************************** */}
      <section className="mt-8">
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">
            {t("the time")}
          </p>

          <div className="flex gap-2 items-center">
            <input 
              type="checkbox" 
              className="w-6 h-6 border border-[#CDD5DF]" 
            />
            <p className="text-[#4B5565] text-base font-normal">
              {t("All the time")}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DayAndTime
