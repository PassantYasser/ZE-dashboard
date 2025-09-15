"use client";
import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';

function AddBtn({label , href}) {
  const {t} = useTranslation()
  return (
    <>
      <Link href={href}>
        <button className='flex gap-2 justify-center items-center bg-[#C69815] w-[210px] h-14 rounded-[3px] '>
          <img src="/images/icons/AddIcon.svg" alt="" className='w-6 h-6'/>
          <span className='text-[#fff] text-base font-medium'>{t(label)}</span>
        </button>
      </Link>

    </>
  )
}

export default AddBtn