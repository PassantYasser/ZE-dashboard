'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

function DayAndTime() {
  const { t } = useTranslation()

  // Day
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

  // Time 
  const [currentPeriod, setCurrentPeriod] = useState({ from: null, to: null })
  const [allTime, setAllTime] = useState(false)
  const handleAllTimeChange = (e) => {
    const checked = e.target.checked
    setAllTime(checked)
    if (checked) {
      const startTime = dayjs().hour(0).minute(0).second(0)
      const endTime = dayjs().hour(23).minute(59).second(0)
      setCurrentPeriod({ from: startTime, to: endTime })
    } else {
      setCurrentPeriod({ from: null, to: null })
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
              className="w-6 h-6 border border-[#CDD5DF] cursor-pointer" 
              checked={allTime}
              onChange={handleAllTimeChange}
            />
            <p className="text-[#4B5565] text-base font-normal">
              {t("All the time")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* From Time */}
          <div className="flex flex-col">
            <div className="flex gap-6">
              <label className="flex items-center text-[#4B5565] text-xl font-normal whitespace-nowrap">
                {t("From")}
              </label>
              <div className="p-4 w-full">
                <LocalizationProvider
                  localeText={{
                    timePickerToolbarTitle: t('Select Time'),
                  }}
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ar"
                >
                  <MobileTimePicker
                    value={currentPeriod.from}
                    onChange={(newValue) => setCurrentPeriod({ ...currentPeriod, from: newValue })}
                    ampm={true}
                    views={["hours", "minutes"]}
                    closeOnSelect={true}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputProps: {
                          sx: {
                            direction: "rtl",
                            justifyContent: "space-between",
                            "& input": {
                              textAlign: "left",
                              paddingRight: "8px",
                            },
                            "& .MuiInputAdornment-root": {
                              order: -1,
                              marginLeft: "12px",
                            },
                          },
                        },
                      },
                      mobilePaper: {
                        sx: {
                          direction: "ltr",
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>

          {/* To Time */}
          <div className="flex flex-col">
            <div className="flex gap-6">
              <label className="flex items-center text-[#4B5565] text-xl font-normal whitespace-nowrap">
                {t("To")}
              </label>
              <div className="p-4 w-full">
                <LocalizationProvider
                  localeText={{
                    timePickerToolbarTitle: t('Select Time'),
                  }}
                  dateAdapter={AdapterDayjs}
                  adapterLocale="ar"
                >
                  <MobileTimePicker
                    value={currentPeriod.to}
                    onChange={(newValue) => setCurrentPeriod({ ...currentPeriod, to: newValue })}
                    ampm={true}
                    views={["hours", "minutes"]}
                    closeOnSelect
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        InputProps: {
                          sx: {
                            direction: "rtl",
                            justifyContent: "space-between",
                            "& input": {
                              textAlign: "left",
                              paddingRight: "8px",
                            },
                            "& .MuiInputAdornment-root": {
                              order: -1,
                              marginLeft: "12px",
                            },
                          },
                        },
                      },
                      mobilePaper: {
                        sx: {
                          direction: "ltr",
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      



      {/* btn */}
      <button className='bg-[var(--color-primary)] text-white w-[30%] h-14 rounded-[3px] cursor-pointer'>
        {t('save')}
      </button>
    </div>
  )
}

export default DayAndTime
