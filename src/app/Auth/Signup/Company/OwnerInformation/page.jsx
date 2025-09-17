"use client";
import LoginBtn from "../../../../Components/Buttons/LoginBtn";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


function OwnerInformationPage({ onNext, onPrev, currentStep, steps }) {
  const { t } = useTranslation();
  return (
    <>
      <form className="grid grid-cols-2 gap-6 lg1:grid-cols-1 lg1:gap-0  mt-8 ">
        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("First Name")}
          </label>
          <input 
            type="text" 
            className=" h-15 p-3 mb-6 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A]"
            placeholder={t('Enter first name')}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Last Name")}/ {t("Family Name")}{" "}
          </label>
          <input 
            type="text" 
            className=" h-15 p-3 mb-6 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A]"
            placeholder={t('Enter last name/family name')}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("Email")} 
          </label>
          <input 
            type="text" 
            className=" h-15 p-3 mb-6 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A]"
            placeholder={t('Enter your email')}
          />
        </div>


        <div className="flex flex-col">
          <label className="text-[#364152] text-base font-normal mb-3">
            {t("National ID number")} 
          </label>
          <input 
            type="text" 
            className=" h-15 p-3 mb-6 border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A]"
            placeholder={t('Enter your national ID number')}
          />
        </div>

        <div className="flex flex-col col-span-2 lg1:col-span-1">
          <label className="text-[#364152] text-base font-normal mb-3 block">
            {t("Mobile number")}
          </label>
          <div className="relative">
          <PhoneInput
            country={'sa'} 
            placeholder="000000000"
            containerClass="!w-full"
            inputClass="!w-full !h-[60px] !border !border-[#C8C8C8] !rounded-[3px] !pl-24 !text-left !text-[#364152] placeholder-[#9A9A9A]"
            buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-0"
            dropdownClass="!text-[#364152] !border "
          />
          </div>
        </div>
            
      </form>

      {/* btn   */}
      <button
        onClick={onNext}
        // disabled={currentStep === steps.length}
        disabled={steps ? currentStep === steps?.length : false}

        className="px-4 py-2.5 bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px]"
      >
        {currentStep === steps?.length ? "إنهاء" : "التالي"}
      </button>

      
      <div className="flex justify-center gap-1.5">
        <p className="text-[#697586] text-lg font-normal">{t('Already have an account?')} </p>
        <LoginBtn />
      </div>


    </>
  );
}

export default OwnerInformationPage;
