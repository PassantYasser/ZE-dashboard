'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function TitleOfIncome_analysisPage() {
  const {t} = useTranslation()
    const [open, setOpen] = useState(false);
      const [selected, setSelected] = useState("الاجمالي"); // default text

  const handleSelect = (value) => {
    setSelected(value);   // change the text
    setOpen(false);       // close dropdown
  };

  return (
    <>
  <div className='flex justify-between py-4 px-6   '>
    <div className='flex items-center gap-2 '>
      <p className='w-12 h-12 flex justify-center items-center bg-[#EDE7FD] rounded-[3px]'>
        <img src="/images/icons/Income analysis.svg" alt="" className='w-6 h-6' />
      </p>
      <p className='text-[#364152] text-xl font-medium'>{t('Income analysis')}</p>
    </div>

    <div className="relative inline-block text-right">

      <button
        onClick={() => setOpen(!open)}
        className="h-13.5 w-36 px-2 border border-[#CDD5DF] rounded-[3px]  flex justify-between items-center"
      >
        <span className='text-[#364152] text-sm font-normal'>{selected}</span>
        <img
          src="/images/icons/chevron-down.svg"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          width={14}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-2 z-50">
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleSelect(t('Total'))}
              className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
            >
              {t('Total')}
            </li>

            <li
              onClick={() => handleSelect(t("monetary"))}
              className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
            >
              {t("monetary")}
            </li>

            <li
              onClick={() => handleSelect(t('credit card'))}
              className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
            >
              {t('credit card')}
            </li>

            <li
              onClick={() => handleSelect(t('refunded'))}
              className="hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
            >
              {t('refunded')}
            </li>

            
          </ul>
        </div>
      )}
    </div>
  </div>
    </>
  )
}

export default TitleOfIncome_analysisPage