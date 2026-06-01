"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import ImageUpload from './ImageUpload'
import Form from './Form'
import { useTranslation } from 'react-i18next'

function AddPage() {
  const {t} = useTranslation();
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 border border-[#CDD5DF] rounded-[3px] py-8 px-6">
        <ImageUpload/>
        <Form/>
      </div>

      <button className='bg-[var(--color-primary)] text-white w-[20%] text-base font-medium py-3 px-6 rounded-[3px] my-6 cursor-pointer'>
        {t('save')}
      </button>
      
    </MainLayout>
  )
}

export default AddPage