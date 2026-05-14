"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Content from './Content'
import Header from './Header'
import NoTerms_PoliciesPage from './NoTerms_Policies'
import AddContent from './Add/AddContent'
import EditContent from './Edit/EditContent'

function Terms_PoliciesPage() {
  const {t} = useTranslation()
  const data = []  
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState(null)

  return (
    <>
      <div className='border border-[#E3E8EF] '>
        <Header/>
        <div className='px-6 py-4'>
          {isAdding ? (
            <AddContent onCancel={() => setIsAdding(false)} />
          ) : editingId !== null ? (
            <EditContent onCancel={() => setEditingId(null)} />
          ) : data?.length > 0 ? (
            <Content onEdit={(id) => setEditingId(id)} />
          ) : (
            <NoTerms_PoliciesPage onAdd={() => setIsAdding(true)} />
          )}
          
          {!isAdding && editingId === null && (
            <button className='h-14 w-[20%] mt-12 bg-[var(--color-primary)] text-white rounded-[3px] cursor-pointer'>
              {t('Save changes')}
            </button>
          )}
        </div>
      </div>

    </>
  )
}

export default Terms_PoliciesPage