"use client";
import { useTranslation } from 'react-i18next'
import MainLayout from '../../Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import BasicInformationPage from './BasicInformation/page';
import SchedulePage from './Schedule/page';
import PricingPage from './Pricing/page';

function AddPage() {
  const {t}=useTranslation()
  const [openId, setOpenId] = useState('basic');

  const tabs = [
    { id: "basic", label:t('Basic information'), Component: BasicInformationPage },
    { id: "days", label:t('Available days and times'), Component: SchedulePage },
    { id: "pricing", label:t('Pricing'), Component: PricingPage },
  ];
  return (
    <MainLayout>
      <section className='mb-4'>
        <p className='text-[#364152] text-2xl font-medium mb-5'>{t('Add a new service')}</p>
        <p className='text-[#4B5565] text-base font-normal '>{t('Enter the new service details to begin offering it to your customers.')}</p>
      </section>

    <div className="w-full mt-8">
      <div className="flex justify-around border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setOpenId(openId === tab.id ? null : tab.id)}
            className={`px-4 py-6  w-full text-base 
              ${openId === tab.id ? "text-[#C69815] border-b-2 border-[#C69815] font-medium " : "text-[#697586] font-normal"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوى التاب المختار */}
      <div className="mt-6">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {openId === tab.id && <tab.Component />}
          </div>
        ))}
      </div>
    </div>
    </MainLayout>
  )
}

export default AddPage