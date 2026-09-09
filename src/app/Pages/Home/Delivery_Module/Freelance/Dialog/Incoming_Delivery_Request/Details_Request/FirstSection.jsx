import { Divider } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

function FirstSection() {
  const { t } = useTranslation()

  const stataus = 'scheduled'  //instant , scheduled 
  return (
    <>
    <div className='border border-[#F5DFA3] bg-[#FDF7E8] p-3'>
      {/*  */}
      <div className='flex justify-between items-center'>
        <div className='felx flex-col gap-1'>
          <p className='text-[#697586] text-base font-normal'>مجدول</p>
          <p className='text-[#364152] text-base font-normal'>توقف واحد</p>
        </div>

        <div className='felx flex-col gap-1'>
          <p className='text-[#3B3B3B] text-base font-normal'>{t('Proposed fee for the system')}</p>
          <p className='text-primary text-xl font-semibold'>20.99 {t('pound')} </p>
        </div>
      </div>

      {/*  */}
      {stataus === 'scheduled' ? (
        <>
          <div className="my-3 border-t border-[#E3E8EF]" />
          <div className='flex justify-between items-center'>
            <div className='felx flex-col gap-1'>
              <p className='text-[#A1A1A1] text-base font-normal'>{t('Delivery time')}</p>
              <p className='text-[#191919] text-base font-normal'>01:25م </p>
            </div>

            <div className='felx flex-col gap-1'>
              <p className='text-[#A1A1A1] text-base font-normal'>{t('Date of receipt')}</p>
              <p className='text-[#191919] text-base font-normal'>20.99 {t('pound')} </p>
            </div>
          </div>
        </>
        

      ):null}
      

    </div>
      
    </>
  )
}

export default FirstSection