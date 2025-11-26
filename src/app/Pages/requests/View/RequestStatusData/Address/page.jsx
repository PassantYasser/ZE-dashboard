"use client";
import { t } from 'i18next';
import React, { useState } from 'react'

function AddressPage() {
  const [open, setOpen] = useState(false);

  // 🔥 Dynamic Data Here (edit as you need)

  return (
    <>
  <div className="w-full p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] overflow-hidden bg-white select-none mt-6">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between   text-right"
      >
        <span className="text-[#0F022E] text-base font-normal flex items-center gap-2">
          <img src="/images/icons/location2.svg" alt="" />
          تفاصيل العنوان
        </span>

        <div
          className={`transition-transform duration-300 cursor-pointer ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <img src="/images/icons/ArrowUp.svg" alt="" />
        </div>
      </button>

      {/* Content */}
      {open && (
        <div className="px-3 mt-3  text-right ">

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] pt-2 pb-4">
            <span className="text-[#575757] text-sm font-normal flex gap-2"> 
              <img src='/images/icons/google-map-icon.svg'/>
              <span>{t('the address')} :</span>
            </span>
            <span className="text-[#0F022E] text-sm font-medium">37 جمال الدين الماظة</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Apartment number')}:</span>
            <span className="text-[#0F022E]  font-medium">3</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('The role')} :</span>
            <span className="text-[#0F022E]  font-medium">5</span>
          </div>

          <div className="flex gap-0.5 text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Building name')} :</span>
            <span className="text-[#0F022E]  font-medium">عمارة المرور</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Street name')} :</span>
            <span className="text-[#0F022E]  font-medium">صلاح</span>
          </div>


          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('P.O. Box number')} : </span>
            <span className="text-[#0F022E]  font-medium">صلاح</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Nearest landmark')} :</span>
            <span className="text-[#0F022E]  font-medium">جنينه</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Additional instructions')}:</span>
            <span className="text-[#0F022E]  font-medium">-</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal"> {t('Neighborhood name')}:</span>
            <span className="text-[#0F022E]  font-medium">-</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Title classification')} :</span>
            <span className="text-[#0F022E]  font-medium">سكن</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('Title type')} :</span>
            <span className="text-[#0F022E]  font-medium">شقة</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('City')} :</span>
            <span className="text-[#0F022E]  font-medium">مدينة نصر</span>
          </div>

          <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
            <span className="text-[#575757]  font-normal">{t('area')} :</span>
            <span className="text-[#0F022E]  font-medium">القاهرة</span>
          </div>

          <div className="flex gap-0.5  text-sm py-4">
            <span className="text-[#575757]  font-normal">{t('State')} :</span>
            <span className="text-[#0F022E]  font-medium">مصر</span>
          </div>

        </div>
      )}
    </div>
    </>
  )
}

export default AddressPage