"use client"
import React from 'react'
import MainLayout from '../Components/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import SearchForm from '../Components/Forms/SearchForm'
import FilterBtn from '../Components/Buttons/FilterBtn'
import AddBtn from '../Components/Buttons/AddBtn'
import ServiceCard from '../Components/Cards/ServiceCard'

function ServicesPage() {
  const {t}= useTranslation()
  return (
    <MainLayout>
        <section >
          {/*  📱 Tablet only  */}
          <div className='lg1:hidden flex justify-between mb-8 '>
            <p className='text-[#000] text-2xl font-medium flex items-center'>{t('Services')}</p>
              <AddBtn
                href="/services/Add"
                label="Add a sub-service"
              />
          </div>

          <div className="flex justify-between">
              <SearchForm />
            <div className="lg1:flex lg1:gap-4 gap-6">
              <FilterBtn href="/services/Filters" />
              <AddBtn
                href="/services/Add"
                label="Add a sub-service"
                className="hidden lg1:flex"
              />
            </div>
          </div>
        </section>

        <section className='mt-10 grid grid-cols-2 gap-4 lg1:grid-cols-3 lg1:gap-6'>
          <ServiceCard/>
            <ServiceCard/>
              <ServiceCard/>
                <ServiceCard/>
        </section>
    </MainLayout>
  )
}


export default ServicesPage