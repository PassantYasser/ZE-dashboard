import React from 'react'
import { useTranslation } from 'react-i18next'

function PreviousBtn({onClick}) {
    const {t}= useTranslation()
  
  return (
    <>
    <button
        onClick={onClick} 
        className={`
          w-64  h-15 
          px-4 py-2.5 
          bg-[#fff] text-[#C69815]
          border border-[#C69815] 
          text-base font-medium
          rounded-[3px] 
        `}
        >
          {t("the previous")}
        </button>
    </>
  )
}

export default PreviousBtn