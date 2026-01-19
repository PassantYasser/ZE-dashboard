import SecondSection from '@/app/Components/login/SecondSection'
import React from 'react'

function CompanyPage() {
  return (
    <>
      <div className="p-8 lg1:flex justify-between gap-8 ">
        <section className="w-full mt-12.5 lg1:mt-28.5 ">
          CompanyPage
        </section>

        {/* second section */}
        <SecondSection />
      </div>

    </>
  )
}

export default CompanyPage