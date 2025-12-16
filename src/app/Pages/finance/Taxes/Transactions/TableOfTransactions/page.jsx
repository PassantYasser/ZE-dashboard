"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function TableOfTransactionsPage() {
    const {t} = useTranslation()
      const [active, setActive] = useState("Collected");
  return (
    <>
      {/* title and filter */}
    <div className='flex justify-between'>
      <div className='flex items-center gap-2 '>
        <p className='w-12 h-12 flex justify-center items-center bg-[#EDE7FD] rounded-[3px]'>
          <img src="/images/icons/tax dueBlue.svg" alt="" className='w-6 h-6' />
        </p>
        <div>
          <p className='text-[#364152] text-xl font-medium'>{t('Estimated taxes on services')}</p>
        </div>

        
        
      </div>

      <div className="flex bg-[#EEF2F6] rounded-[3px] p-1.5 w-[361px] ">
          {/* Collected */}
          <button
            onClick={() => setActive("Collected")}
            className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
              ${
                active === "Collected"
                  ? "bg-[#D1AD44] text-white shadow"
                  : "text-[#364152]"
              }`}
          >
            {t('Collected')}
          </button>

          {/* Non-collected */}
          <button
            onClick={() => setActive("Non-collected")}
            className={`px-2 py-3 rounded-[3px] text-sm font-medium transition w-full cursor-pointer
              ${
                active === "Non-collected"
                  ? "bg-[#D1AD44] text-white shadow"
                  : "text-[#364152]"
              }`}
          >
          {t('Non-collected')}
          </button>
      </div>

    </div>

    </>
  )
}

export default TableOfTransactionsPage