"use client";
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next'

function FilterBtn({href}) {
  const {t}= useTranslation();
  return (
    <>
    <Link href={href}>
      <button className='flex gap-2 justify-center items-center border h-14 w-37.5 border-[#C69815] rounded-[3px]'>
        <img src="/images/icons/FlterIcon.svg" alt=""  className='w-6 h-6'/>
        <span className='text-[#C69815] text-base font-medium'>{t('filter')} </span>
      </button>
    </Link>

    </>
  )
}

export default FilterBtn