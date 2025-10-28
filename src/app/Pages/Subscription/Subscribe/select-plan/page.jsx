"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function SelectPlanPage() {
  const {t} = useTranslation();
    const [selected, setSelected] = useState(null); 
     const isSelected = selected !== null;

  // const handleNextClick = (e) => {
  //   if (!isSelected) {
  //     e.preventDefault(); // يمنع الانتقال
  //     alert(t("Please select a subscription type first."));
  //   }
  // };
  return (
    <>
      <section>
        <p className='text-[#0F022E] text-2xl font-medium'>{t('Select the appropriate plan')}</p>
        <p className='text-[#697586] text-xl font-normal mt-4'>{t('Professional to suit you anytime')}</p>
      </section>  

      <section className='flex justify-center mt-12.5 mb-8'>
        <img src="/images/selectPlan.svg" alt="" />
      </section>

  
      <section className="mb-8">
        <p className="text-[#364152] text-xl font-normal mb-4">
          {t("Choose the type of subscription?")}
        </p>

        <div className="flex gap-4 w-full">
          {/* Option 1 */}
          <div
            onClick={() => setSelected(1)}
            className={`cursor-pointer py-4 px-3 w-full shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] transition-all duration-300 ${
              selected === 1
                ? "bg-[#F6F3FF] border border-[#4D0CE7]"
                : "bg-[#F8FAFC]"
            }`}
          >
            <p className="text-[#364152] text-xl font-normal mb-4">
              {t("Start for free and pay after earnings.")}
            </p>
            <p className="text-[#4B5565] text-base font-normal">
              {t("Sign up now and start for free. The package value will be deducted from your earnings later.")}
            </p>
          </div>

          {/* Option 2 */}
          <div
            onClick={() => setSelected(2)}
            className={`cursor-pointer py-4 px-3 w-full shadow-[0_0_4px_0_rgba(0,0,0,0.3)] rounded-[3px] transition-all duration-300 ${
              selected === 2
                ? "bg-[#F6F3FF] border border-[#4D0CE7]"
                : "bg-[#F8FAFC]"
            }`}
          >
            <p className="text-[#364152] text-xl font-normal mb-4">
              {t("Sign up now and get started right away!")}
            </p>
            <p className="text-[#4B5565] text-base font-normal">
              {t("Pay now to get all the benefits immediately after account activation")}
            </p>
          </div>
        </div>
      </section>

      
       {/* Next button */}
      <Link
        href={
          isSelected
            ? "/Pages/Subscription/Subscribe/select-subscription-duration"
            : "#"
        }
        className={`flex items-center justify-center text-center w-62.5 h-14 rounded-[3px] py-2.5 px-4 mb-8 mt-6 transition-all duration-300    ${
          isSelected
            ? "bg-[var(--color-primary)] text-white cursor-pointer"
            : "bg-[#E3E8EF] text-[#9AA4B2] cursor-not-allowed"
        }`}
      >
        {t("the next")}
      </Link>

    </>
  )
}

export default SelectPlanPage