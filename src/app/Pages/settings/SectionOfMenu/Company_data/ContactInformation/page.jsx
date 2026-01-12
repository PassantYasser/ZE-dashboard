
"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

function ContactInformationPage({userData}) {
  const { t } = useTranslation();

  console.log(userData);

  return (
    <div className="border border-[#E3E8EF] mb-8">
      <Header />

      <section className="p-6">
        

        {/* Company number */}
        <div>
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('Company number')}</p>
          <input 
            type="text"
            value={userData?.company_phone}
            readOnly
            placeholder='0000000000000'            
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        {/* WhatsApp number */}
        <div className="mt-4"> 
          <p className="text-[#4B5565] text-base font-normal  mb-1.5">{t('WhatsApp number')}</p>
          <input 
            type="text"
            value={userData?.wts_number}
            readOnly
            placeholder='0000000000000'            
            className="h-14 p-3 w-full rounded-[3px] border border-[#E3E8EF] shadow-xm outline-none placeholder:text-[#9A9A9A] placeholder:text-sm placeholder:font-normal" 
          />
        </div>

        
      



        {/* btn */}
        <button className="bg-[var(--color-primary)] h-15 w-62.5 text-[#fff] text-base font-medium rounded-[3px] mt-6">
          {t('Save changes')}
        </button>
      </section>

      
    </div>
  );
}

export default ContactInformationPage;
