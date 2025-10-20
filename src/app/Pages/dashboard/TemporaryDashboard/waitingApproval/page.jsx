"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function WaitingApprovalPage() {
    const {t} = useTranslation();
  
  return (
    <>
        <>
      <div>
        <section className='flex justify-center mb-[11.11vh]'>
          <button className='bg-[var(--color-primary)] rounded-[50px] flex gap-4 py-4 px-5'>
            <div className='w-12 h-12 '>
              <img src="/images/hourglass.svg" alt="" className='' />
            </div>

            <div className=' flex items-center text-[#fff]'>
              <span className=' font-medium text-2xl'>{t('Application file under review')}</span>
            </div>
          
          
          </button>
        </section>


        <section className='flex justify-center'> 
          <img src="/images/WaitingApproval.svg" alt="" />
        </section>
        <section className='flex justify-center my-8'>
          <p className='text-[#575757] text-2xl font-medium '>{t('You will be notified of the status of your application via email.')}</p>
        </section>
      </div>

    </>
    
    </>
  )
}

export default WaitingApprovalPage