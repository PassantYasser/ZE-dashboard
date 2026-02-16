import React from 'react'
import Header from './Header'
import TextState from './TextState'
import Files from './Files'

function LegalDocumentsPage() {
  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
      <Header/>
      <TextState />
      
      <Files />
      
    </div>

    </>
  )
}

export default LegalDocumentsPage