'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function Rating() {
  const { t } = useTranslation()
  const { getReport } = useSelector((state) => state.setting)

  const timeDistribution = getReport?.time_distribution

  const timeSlots = timeDistribution 

  return (
    <div className='bg-white shadow-[0_0_2px_rgba(0,0,0,0.2)] rounded-[3px] p-4 flex flex-col gap-4 w-full'>

      {/* Header */}
      <div className='flex items-center gap-2'>
        <img src="/images/icons/clock.svg" className='w-5 h-5' alt="" />
        <p className='text-[#0B0E11] text-base font-medium'>{t('Orders by time')}</p>
      </div>

      {/* Progress bars */}
      <div className='flex flex-col gap-4'>
        {timeSlots?.map((slot, index) => (
          <div key={index} className='flex flex-col gap-2'>
            {/* Labels row */}
            <div className='flex items-center justify-between'>
              
              {/* Time label */}
              <p className='text-[#0B0E11] text-sm font-normal'>{slot.label}</p>
              {/* Indicator */}
              <p className='text-[#4B5565] text-sm font-normal'>
                (%{slot.percentage ?? slot.percent ?? 0}) {slot.count} 
              </p>
            </div>

            {/* Progress track */}
            <div className='bg-[#EBEBEF] h-2 rounded-full overflow-hidden w-full'>
              <div
                className='h-full bg-[var(--color-primary)] rounded-full'
                style={{ width: `${slot.percentage ?? slot.progress ?? 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Rating