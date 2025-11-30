"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function RejectedCompPage() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className='my-6 bg-[#FEE4E2] px-4 py-3 rounded-[3px]'>
            <p className='text-[#313131] text-sm font-medium mb-2'> {t('the reason')}: الموعد غير متاح   </p>
            <ol className="list-decimal list-inside space-y-2 text-[#D92D20] text-sm font-normal">
              <li> يرجى مراجعة التفاصيل وإعادة المحاولة بموعد آخر.</li>
              <li>  نرجو التحقق من بيانات الحجز والتأكد من توافر الوقت المطلوب.</li>
            </ol>
          </div>
      </section>
    </>
  )
}

export default RejectedCompPage