import React from 'react'
import HaveTerms_PoliciesPage from './HaveTerms_Policies/page'
import NoTerms_PoliciesPage from './NoTerms_Policies/page'
import Header from './Header'

function Terms_PoliciesPage() {
  const data = false
  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      
      {data ? (
        <HaveTerms_PoliciesPage />
      ) : (
        <NoTerms_PoliciesPage />
      )}

    </div>
    </>
  )
}

export default Terms_PoliciesPage