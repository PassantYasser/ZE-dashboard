// "use client";
// import { useTranslation } from 'react-i18next'
// import MainLayout from '../../Components/MainLayout/MainLayout'
// import React, { useState } from 'react'
// import BasicInformationPage from './BasicInformation/page';
// import SchedulePage from './Schedule/page';
// import PricingPage from './Pricing/page';

// function AddPage() {
//   const {t}=useTranslation()
//   const [openId, setOpenId] = useState('basic');

//   const tabs = [
//     { id: "basic", label:t('Basic information'), Component: BasicInformationPage },
//     { id: "days", label:t('Available days and times'), Component: SchedulePage },
//     { id: "pricing", label:t('Pricing'), Component: PricingPage },
//   ];
//   return (
//     <MainLayout>
//       <section className='mb-4'>
//         <p className='text-[#364152] text-2xl font-medium mb-5'>{t('Add a new service')}</p>
//         <p className='text-[#4B5565] text-base font-normal '>{t('Enter the new service details to begin offering it to your customers.')}</p>
//       </section>

//     <section className="w-full mt-8 mb-120">
//       <div className="flex justify-around border-b border-gray-300">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setOpenId(openId === tab.id ? null : tab.id)}
//             className={`px-4 py-6  w-full text-base 
//               ${openId === tab.id ? "text-[#C69815] border-b-2 border-[#C69815] font-medium " : "text-[#697586] font-normal"}`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* components */}
//       <div className="mt-6">
//         {tabs.map((tab) => (
//           <div key={tab.id}>
//             {openId === tab.id && <tab.Component />}
//           </div>
//         ))}
//       </div>
//     </section>
//     </MainLayout>
//   )
// }

// export default AddPage
"use client";
import { useTranslation } from "react-i18next";
import MainLayout from "../../Components/MainLayout/MainLayout";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BasicInformationPage from "./BasicInformation/page";
import SchedulePage from "./Schedule/page";
import PricingPage from "./Pricing/page";

function AddPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [openId, setOpenId] = useState("basic");

  const tabs = [
    { id: "basic", label: t("Basic information"), Component: BasicInformationPage },
    { id: "days", label: t("Available days and times"), Component: SchedulePage },
    { id: "pricing", label: t("Pricing"), Component: PricingPage },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === openId);

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) {
      setOpenId(tabs[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setOpenId(tabs[currentIndex - 1].id);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        {/* الجزء الثابت */}
        <section className="mb-4">
          <p className="text-[#364152] text-2xl font-medium mb-5">
            {t("Add a new service")}
          </p>
          <p className="text-[#4B5565] text-base font-normal">
            {t("Enter the new service details to begin offering it to your customers.")}
          </p>
        </section>

        <section className="w-full mt-4 flex flex-col flex-1 overflow-hidden">
          {/* التابس */}
          <div className="flex justify-around border-b border-gray-300">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-4 py-6 w-full text-center text-base cursor-default
                  ${
                    openId === tab.id
                      ? "text-[#C69815] border-b-2 border-[#C69815] font-medium"
                      : "text-[#697586] font-normal"
                  }`}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* المنطقة اللي هتعمل scroll */}
          <div className="flex-1 overflow-y-auto mt-6 px-2">
            {tabs.map((tab) => (
              <div key={tab.id}>{openId === tab.id && <tab.Component />}</div>
            ))}
          </div>

          {/* أزرار التنقل */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleGoBack}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              {t("Back")}
            </button>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2 rounded ${
                  currentIndex === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-600 text-white"
                }`}
              >
                {t("Previous")}
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === tabs.length - 1}
                className={`px-4 py-2 rounded ${
                  currentIndex === tabs.length - 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#C69815] text-white"
                }`}
              >
                {currentIndex === tabs.length - 1 ? t("Finish") : t("Next")}
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default AddPage;