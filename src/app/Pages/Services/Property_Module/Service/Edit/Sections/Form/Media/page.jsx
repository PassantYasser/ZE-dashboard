"use client"
import React, { Suspense, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useRouter, useSearchParams } from 'next/navigation';
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import TitleOfHeader from '../../TitleOfHeader';
import Loader from '@/app/Components/Loader/Loader';
import FirstNote from './FirstNote';
import UploadImage from './UploadImage';
import UploadVideo from './UploadVideo';

function MediaPageContent() {
  const {t} = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  



  return (
    <MainLayout>
      <TitleOfHeader/>
      <div className='border border-[#E6E6E6] p-8 rounded-[3px] mb-4'>
        <div>
          <p className='text-[#364152] text-xl font-medium mb-3'>
            <span>{t('Step')} 8 :</span>
            <span>{t('Media')}</span>
          </p>
          <p className='text-[#697586] text-base font-normal'>تم تحميل 8 صور</p>
          <div className='border border-[#CDD5DF] my-4'></div>
        </div>
        
        
        <FirstNote/>
        <UploadImage/>
        <UploadVideo/>

        
        
        {/* btn */}
        <div className="flex  mt-6">
          
          <div className='flex gap-2 justify-start w-full '>
            <button
              onClick={()=> router.push(`/Pages/Services/Property_Module/Service/Edit?id=${id}`)}
              className="h-15 w-[15%]  border border-[#697586] text-[#697586] rounded-[3px] cursor-pointer"
            >
              {t('Return')}
            </button>

            <button
              className="h-15 w-[15%] bg-[var(--color-primary)] text-white rounded-[3px] cursor-pointer"
            >
              {t('Save changes')}
            </button>
          </div>
          
        </div>
      </div>
    </MainLayout>
  )
}

export default function MediaPage() {
  return (
    <Suspense fallback={<Loader/>}>
      <MediaPageContent />
    </Suspense>
  )
}