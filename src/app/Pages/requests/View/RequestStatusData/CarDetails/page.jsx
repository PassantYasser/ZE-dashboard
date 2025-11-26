"use client";
import { t } from 'i18next';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';


function CarDetailsPage() {
    const [open, setOpen] = useState(false);
    const {t}= useTranslation();
  
  return (
    <>
      <section className='shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] mt-6 '>
        
      <div className="w-full p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] overflow-hidden bg-white select-none mt-6">
            {/* Header */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between   text-right"
            >
              <span className="text-[#0F022E] text-base font-normal flex items-center gap-2">
                <img src="/images/icons/caryellow.svg" alt="" />
              {t('Car details')}
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
      
                
      
                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Brand')} :</span>
                  <span className="text-[#0F022E]  font-medium">Toyota</span>
                </div>
      
                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Model')} :</span>
                  <span className="text-[#0F022E]  font-medium">Camry</span>
                </div>

                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Year of issue')} : </span>
                  <span className="text-[#0F022E]  font-medium">2025</span>
                </div>

                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Type of transfer')} : </span>
                  <span className="text-[#0F022E]  font-medium">تلقائي</span>
                </div>

                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Fuel type')} : </span>
                  <span className="text-[#0F022E]  font-medium">بترول</span>
                </div>

                <div className="flex gap-0.5  text-sm border-b border-[#E3E8EF] py-4">
                  <span className="text-[#575757]  font-normal">{t('Number of seats')} : </span>
                  <span className="text-[#0F022E]  font-medium">4</span>
                </div>

                <div className="flex gap-0.5  text-sm  pt-4">
                  <span className="text-[#575757]  font-normal">{t('Plate number')} : </span>
                  <span className="text-[#0F022E]  font-medium">ABC734</span>
                </div>
      
              
              </div>
            )}
          </div>

      </section>

    </>
  )
}

export default CarDetailsPage