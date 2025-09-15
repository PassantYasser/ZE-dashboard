"use client"
import React from 'react'
import MainLayout from '../Components/MainLayout/MainLayout'
import { useTranslation } from 'react-i18next'
import SearchForm from '../Components/Forms/SearchForm'
import FilterBtn from '../Components/Buttons/FilterBtn'
import AddBtn from '../Components/Buttons/AddBtn'

function ServicesPage({href , label}) {
  const {t}= useTranslation()
  return (
    <MainLayout>
        <section className='flex justify-between'>
        
          <SearchForm />
          <div className='flex gap-5 '>
            <FilterBtn href='/services/Filters'/>
            <AddBtn href='/services/Add' label="Add a sub-service"/>
          </div>
          
        </section>
    </MainLayout>
  )
}

export default ServicesPage