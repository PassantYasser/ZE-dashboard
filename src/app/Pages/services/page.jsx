"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import FiltersPage from './Filters/page'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import AddBtn from '@/app/Components/Buttons/AddBtn'
import SearchForm from '@/app/Components/Forms/SearchForm'
import FilterBtn from '@/app/Components/Buttons/FilterBtn'
import ServiceCard from '@/app/Components/Cards/ServiceCard'


function ServicesPage() {
  const {t}= useTranslation()

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainLayout>
        <section >
          {/*  📱 Tablet only  */}
          <div className='lg1:hidden flex justify-between mb-8 '>
            <p className='text-[#000] text-2xl font-medium flex items-center'>{t('Services')}</p>
              <AddBtn
                href="/Pages/services/Add"
                label="Add a sub-service"
              />
          </div>

          <div className="flex justify-between">
              <SearchForm placeholderKey="Search by worker name, job title, or phone number"/>
            <div className="lg1:flex lg1:gap-4 gap-6">
              <FilterBtn onClick={handleClickOpen} />
              <AddBtn
                href="/Pages/services/Add"
                label="Add a sub-service"
                className="hidden lg1:flex"
              />
            </div>
          </div>
        </section>


        <section className='mt-10 mb-5 grid grid-cols-2 gap-4 lg1:grid-cols-3 lg1:gap-6'>
          <ServiceCard/>
            <ServiceCard/>
              <ServiceCard/>
                <ServiceCard/>
        </section>

    <FiltersPage open={open} handleClose={handleClose} />

    </MainLayout>
  )
}


export default ServicesPage