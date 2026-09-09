import React from 'react'
import { useTranslation } from 'react-i18next'

function SecondSection() {
  const {t} = useTranslation()
  return (
    <>
    <div className='shadow-[0_0_4px_0_rgba(0,0,0,0.30)] rounded-3px p-3'>

      <div  className="">
        {/* Pickup */}
        <div className="flex items-start gap-3">
          {/* Icon + line */}
          <div className="relative flex w-8 shrink-0 flex-col items-center">
            <div className="z-10 flex h-6 w-6 items-center justify-center rounded-lg bg-[#F4EAD0] text-[#D5A900]">
              <img src="/images/icons/map-pinpoint_yellow.svg" className="w-4 h-4" />
            </div>

            {/* Dotted line */}
            <div className="h-14 border-r-2 border-dotted border-[#D5A900]" />
          </div>

          {/* Content */}
          <div className="flex-1 flex-col gap-px">
            <p className="text-xs text-[#697586] font-normal">
              {t('Receipt')}
            </p>

            <p className=" text-sm font-medium text-[#364152]">
              وسط المدينة، 123 شارع غلين
            </p>

          
            <ul className="flex items-center gap-3 text-xs text-[#697586]">
              <li>وثائق</li>
              <li className="relative before:content-['•'] before:ml-1">
                صندوق متوسط
              </li>
              <li className="relative before:content-['•'] before:ml-1">
                2.5 كجم
              </li>
            </ul>

          </div>
        </div>

        {/* Delivery */}
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex w-8 shrink-0 justify-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F4EAD0] text-[#D5A900]">
              <img src="/images/icons/Connections_yellow.svg" className="w-4 h-4" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex-col gap-px">
            <p className="text-xs text-[#697586] font-normal ">
            {t('Delivery')}   
            </p>

            <p className="text-sm font-medium text-[#364152]">
              321 شارع يان، جناح 200
            </p>

              <p className='text-[#697586] text-xs font-light'>
              <span>{t('recipient')} :</span>
              <span>أمير هارون</span>
            </p>

          </div>
        </div>
      </div>

      <div className='flex gap-3 w-full  bg-[#F5F5F5] p-2 mt-3 rounded-3px'> 
        <p className='flex flex-col gap-1 items-center border-l border-[#E2E2E2] w-full'>
          <span className='text-[#191919] text-sm font-normal'>نقدي</span>
          <span className='text-[#A1A1A1] text-sm font-normal'>{t('Payment')}</span>
        </p>

        <p className='flex flex-col gap-1 items-center border-l border-[#E2E2E2] w-full'>
          <span className='text-[#191919] text-sm font-normal'>3 {t('minute')}</span>
          <span className='text-[#A1A1A1] text-sm font-normal'>{t('the time')}</span>
        </p>

        <p className='flex flex-col gap-1 items-center w-full'>
          <span className='text-[#191919] text-sm font-normal'>75 كم</span>
          <span className='text-[#A1A1A1] text-sm font-normal'>{t('Distance')}</span>
        </p>

      </div>

    </div>

      
    </>
  )
}

export default SecondSection