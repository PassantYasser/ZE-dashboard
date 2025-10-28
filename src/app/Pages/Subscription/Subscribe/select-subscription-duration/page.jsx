"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import { useTranslation } from 'react-i18next';

function SelectSubscriptionDurationPage() {
  const {t} = useTranslation();
  return (
    <MainLayout>
      <section>
        <p>{t('Choose your subscription period')}</p>
        <p></p>
      </section>
    </MainLayout>
  )
}

export default SelectSubscriptionDurationPage