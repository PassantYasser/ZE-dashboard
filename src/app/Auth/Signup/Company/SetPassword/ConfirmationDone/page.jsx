import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';

function ConfirmationDonePage({onNext}) {
    const { t } = useTranslation();
  return (
    <>
        
        <div className='flex flex-col items-center gap-4 mt-25'>
          <p className='text-[#0F022E] text-2xl font-bold'>{t('Your account has been created successfully.')}</p>
          <p className='text-[#656565] text-lg font-medium'>{t('You have successfully created your account, log in now and enjoy our services.')}</p>
          <img src="/images/ConfirmationDone.svg" alt="" className='mt-10 mb-12 lg1:(mb-20 ,mt-14)' />
        </div>
        <div className='flex gap-6'>
          <Link href='/Auth/Login' className='w-full '>
            <button  
              className='w-full h-15 bg-[#DDA918] text-white text-base font-medium rounded-[3px] '>
                {t('Log in')}
            </button>
          </Link>
          <button className='w-full h-15 text-[#C69815] text-base font-medium border border-[#C69815] rounded-[3px]'
          onClick={onNext}>
            {t('Complete the profile')}
          </button>
        </div>

    </>
  )
}

export default ConfirmationDonePage