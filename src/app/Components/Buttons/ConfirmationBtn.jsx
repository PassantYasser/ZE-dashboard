"use client";

import React from 'react'
import { useTranslation } from 'react-i18next';


function ConfirmationBtn({onClick}) {
  const {t}= useTranslation()
  return (
    <>
    <button
      onClick={onClick} 
      className={`
        w-64  h-15 
        px-4 py-2.5 
        bg-[#C69815] text-[#fff] 
        text-base font-medium
        rounded-[3px] 
      `}
      >
        {t("confirmation")}
      </button>

    </>
  )
}

export default ConfirmationBtn