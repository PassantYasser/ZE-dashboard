'use client'
import AddBtn from '@/app/Components/Buttons/AddBtn'
import FilterBtn from '@/app/Components/Buttons/FilterBtn'
import SearchForm from '@/app/Components/Forms/SearchForm'
import React from 'react'
import { useTranslation } from 'react-i18next'

function NavWorker() {
  const {t} = useTranslation()
  return (
    <>
    <section className=' flex justify-between mb-10'>
        <div>
          <p className='text-[#364152] text-2xl font-medium mb-3'>{t('List of workers')}</p>
          <p className='text-[#697586] text-base font-normal'>{t('Manage your workers easily — review all workers and track their performance.')}</p>
        </div>
      <AddBtn
          href="/Pages/workers/Add"
          label="Adding a worker"
          className="hidden lg1:flex"
        />
      </section>

      <section className='flex gap-6'>
        <SearchForm placeholderKey="Search by order number"/>
        <FilterBtn/>
      </section>

    </>
  )
}

export default NavWorker