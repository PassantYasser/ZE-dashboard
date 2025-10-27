"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

function SubscriptionPage() {
  const {t} = useTranslation(); 
  return (
    <MainLayout>
          <section className='mb-5 flex justify-center mt-8'>
          <Link href='/Pages/Subscription/Subscribe' className='bg-[var(--color-primary)] rounded-[3px] py-2.5 px-4 w-62.5 h-13.5 cursor-pointer flex items-center justify-center'>
            <span className='text-[#fff] text-base font-medium'>{t('Subscribe now')}</span>
          </Link>
        </section>
    </MainLayout>
  )
}

export default SubscriptionPage