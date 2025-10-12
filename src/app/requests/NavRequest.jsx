"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import ExtractBtn from '../Components/Buttons/ExtractBtn'
import SearchForm from '../Components/Forms/SearchForm'
import FilterBtn from '../Components/Buttons/FilterBtn'

function NavRequest() {
  const{t}= useTranslation()
  return (
    <>
      <section className=' flex justify-between mb-10'>
        <div>
          <p className='text-[#364152] text-2xl font-medium mb-3'>{t('Orders and reservations')}</p>
          <p className='text-[#697586] text-base font-normal'>{t('A comprehensive view of all your requests and reservations')}</p>
        </div>
        <ExtractBtn/>

      </section>

      <section className='flex gap-6'>
        <SearchForm placeholderKey="Search by order number"/>
        <FilterBtn/>
      </section>


    </>
  )
}

export default NavRequest