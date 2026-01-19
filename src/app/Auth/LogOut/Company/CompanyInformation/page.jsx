"use client"
import Have_an_account from '@/app/Components/login/Have_an_account'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from "next/navigation";


function CompanyInformationPage() {
    const {t}=useTranslation()
  const router = useRouter();

  return (
    <>
      {/* logo */}
          <div className="flex justify-center gap-1 mt-20">
            <img src="/images/LogoText.svg" alt="" />
            <img src="/images/Logo.svg" alt="" />
          </div>

          {/* title */}
          <div className='px-4 mt-20'>
            <p className='text-[#232323] text-2xl font-medium'>
              {t('Create a new account!')}
            </p>
            <p className='text-[#656565] text-xl font-normal'>
              {t('Complete simple steps to start your journey with us.')}
            </p>
          </div>


          {/* content */}
          <div className='mt-10'>

            {/* First name */}
            <div className="flex flex-col">
              <label className="text-[#364152] text-base font-normal mb-3">{t("First Name")}</label>
              <input
                type="text"
                name="firstname"
                className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none"
                placeholder={t("Enter first name")}
              />
            </div>

            {/* Last name */}
            <div className="flex flex-col mt-4">
              <label className="text-[#364152] text-base font-normal mb-3">{t("Last Name")}</label>
              <input
                type="text"
                name="lastname"
                className=" h-15 p-3 w-full border border-[#C8C8C8] rounded-[3px] placeholder-[#9A9A9A] placeholder:text-sm outline-none"
                placeholder={t("Enter last name/family name")}
              />
            </div>

            {/* phone number */}
            <div className="mt-4">
              <label className="text-[#364152] text-base font-normal">{t("Mobile number")}</label>
              <div className='mt-3'>
                <PhoneInput
                  country={"sa"}
                  placeholder="000000000"
                  containerClass="!w-full"
                  inputClass="!w-full !h-[60px] !border !border-[#C8C8C8] !rounded-[3px] !pl-24 !text-left !text-[#364152] placeholder-[#9A9A9A] focus:border-[#C69815] outline-none"
                  buttonClass="!absolute !left-0 !top-0 !h-full !px-3 !flex !items-center !gap-2 !bg-transparent !border-r-0"
                  dropdownClass="!absolute !left-0 !top-full !mt-1 !z-50 !bg-white !border !border-[#C8C8C8] !rounded-md !shadow-lg"
                />
              </div>
            
            
            </div>


            {/* btn */}
            <button
              onClick={() => router.push("Company/PhoneOtp")}
              className="px-4 py-2.5 cursor-pointer bg-[#C69815] text-white text-base font-medium  w-full mt-8 mb-10 h-15 rounded-[3px]"
            >
              {t('the next')}
            </button>
        
            <Have_an_account/>
          </div>

    </>
  )
}

export default CompanyInformationPage