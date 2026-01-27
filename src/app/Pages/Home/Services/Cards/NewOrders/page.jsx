import React from 'react'
import { useTranslation } from 'react-i18next'

function NewOrdersPage() {
  const {t} = useTranslation();

  

  return (
    <>
      <div className='border border-[#CDD5DF] rounded-[3px] p-6'>
        <p className='text-[#0F022E] text-xl font-medium'>{t('New orders')}</p>

        <div className='mt-6 border border-[#CDD5DF] bg-white shadow-sm rounded-[3px] p-4  mb-4'>
          <div className='flex gap-2'>
            <img src="/images/icons/renewable-energy.svg" alt="" />
            <p>
              <span className='text-[#364152] text-lg font-medium'>شحن فريون - </span>
              <span className='text-[#4B5565] text-sm font-normal'>هاني سعيد</span>
            </p>
          </div>

          <hr className='border-[#E3E8EF] border my-4'></hr>

          <div className='flex justify-between'>
            <div className='flex gap-1.5'>
              <img src="/images/icons/price.svg" alt="" />
              <p className='text-[var(--color-primary)] text-base font-medium'>40.00 جنية</p>
            </div>
            <div className='flex gap-1.5'>
              <img src="/images/icons/route.svg" alt="" />
              <p className='text-[#364152] text-base font-normal'>مسافة العمل 32 كم</p>
            </div>
          </div>

          <hr className='border-[#E3E8EF] border my-4'></hr>

          <div className='flex gap-2'>
            <img src="/images/icons/location-bluee.svg" alt="" />
            <p className='text-[#364152] text-base font-normal'>شارع رئيسي 123 مدينة نصر</p>
          </div>

          <hr className='border-[#E3E8EF] border my-4'></hr>

          {/* btn */}

          <div className='flex gap-4'>

            <button className='bg-[#079455] text-white text-sm font-semibold w-[70%] h-14 rounded-[3px] cursor-pointer'>
              {t('Application accepted')}
            </button>

            <button className='border border-[#FF3B30] rounded-[3px] text-[#FF3B30] text-sm font-medium w-[30%] h-14 cursor-pointer'>
              {t('to reject')}
            </button>

          </div>
        </div>
      </div>
    
    </>
  )
}

export default NewOrdersPage