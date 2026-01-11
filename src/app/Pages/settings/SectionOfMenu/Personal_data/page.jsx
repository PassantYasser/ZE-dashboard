import React, { use } from 'react'
import Header from './Header'
import { useTranslation } from 'react-i18next'

function Personal_dataPage() {
  const {t} = useTranslation()
  return (
    <>
    <div className="border border-[#E3E8EF] mb-8">
        <Header/>

        <div className='grid grid-cols-3 gap-3 border border-[#E3E8EF] p-6'>
          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('First Name')}</p>
            <p className='text-[#364152] text-sm font-normal'>حسام</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Last Name')}/{t('Family Name')}</p>
            <p className='text-[#364152] text-sm font-normal'>علاء</p>
          </div>

          

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('National ID number')}</p>
            <p className='text-[#364152] text-sm font-normal'>049731371857</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Gender')}</p>
            <p className='text-[#364152] text-sm font-normal'>ذكر</p>
          </div>

          <div>
            <p className='text-[#697586] text-base font-normal mb-1'>{t('Nationality')}</p>
            <p className='text-[#364152] text-sm font-normal'>مصري</p>
          </div>
        </div>
    </div>

    </>
  )
}

export default Personal_dataPage