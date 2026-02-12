'use client'
import React, { useState } from 'react'
import HaveTerms_PoliciesPage from './HaveTerms_Policies/page'
import NoTerms_PoliciesPage from './NoTerms_Policies/page'
import Addpage from './Add/page'
import EditPage from './Edit/page'
import Header from './Header'

function Terms_PoliciesPage() {
  const data = true
  const [showAddForm, setShowAddForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)

  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      
      {showEditForm ? (
        <EditPage />
      ) : showAddForm ? (
        <Addpage />
      ) : data ? (
        <HaveTerms_PoliciesPage  onAddClick={() => setShowAddForm(true)} onEditClick={() => setShowEditForm(true)}/>
      ) : (
        <NoTerms_PoliciesPage onAddClick={() => setShowAddForm(true)} />
      )}

    </div>
    </>
  )
}

export default Terms_PoliciesPage