'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import OrderLimitSettingsPage from './OrderLimitSettings/page'
import PricingAndProfitSettingsPage from './PricingAndProfitSettings/page'
import FleetAndPermissionsSettingsPage from './FleetAndPermissionsSettings/page'

function CompanyPage() {
  const {t} = useTranslation()
  return (
    <>
      <div className='flex flex-col gap-1'>
        <h1 className='text-[#364152] text-2xl font-medium'>{t('Connection unit settings')}</h1>
        <p className='text-[#697586] text-xl font-normal'>{t('Exclusive to a free connector. Managed independently of your account.')}</p>
      </div>

      <div className='border border-[#CDD5DF] rounded-3px p-6 mt-10'>
        <div className='grid grid-cols-2 gap-6'>
          <OrderLimitSettingsPage/>
          <PricingAndProfitSettingsPage/>
        </div>
        <FleetAndPermissionsSettingsPage/>
      </div>
      
    </>
  )
}

export default CompanyPage