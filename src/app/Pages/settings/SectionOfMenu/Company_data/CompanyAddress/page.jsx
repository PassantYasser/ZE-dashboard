"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function CompanyAddressPage() {
  const { t } = useTranslation();


  return (
    <div className="border border-[#E3E8EF] mb-8">
      <Header />

      <section className="p-6">
      

        {/*street */}
        <div>
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('street')}</p>
          <input 
            type="text"
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>
        
        {/*famous sign */}
        <div className="mt-4">
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('famous sign')}</p>
          <input 
            type="text"
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        <div className="flex gap-4 mt-4  w-full">
          {/* Property number */}
          <div className="w-full">
            <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Property number')}</p>
            <input 
              type="text"
              className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
            />
          </div>

          {/*Apartment number */}
          <div className="w-full">
            <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Apartment number')}</p>
            <input 
              type="text"
              className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
            />
          </div>
        </div>

      
      



        {/* btn */}
        <button className="bg-[var(--color-primary)] h-15 w-62.5 mt-6 text-[#fff] text-base font-medium rounded-[3px]">
          {t('Save changes')}
        </button>
      </section>

      
    </div>
  );
}

export default CompanyAddressPage;
