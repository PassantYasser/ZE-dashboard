"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import PersonalDataPage from "./PersonalData/page";
import JobDataPage from "./JobData/page";

function AddPage() {
  const { t } = useTranslation();

  const [openId, setOpenId] = useState("Personal");
  const tabs = [
    { id: "Personal", label: t("Personal data"), Component: PersonalDataPage },
    { id: "Job", label: t("Job data"), Component: JobDataPage },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === openId);

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) setOpenId(tabs[currentIndex + 1].id);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setOpenId(tabs[currentIndex - 1].id);
  };

  const handleGoBack = () => {
    router.back();
  };
;



  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <section className="mb-4">
          <p className="text-[#364152] text-2xl font-medium mb-5">
            {t("Adding a new worker")}
          </p>
          <p className="text-[#4B5565] text-base font-normal">
            {t("Add the new employee's details to start providing better services to your customers.")}
          </p>
        </section>

        {/* Tabs */}
        <section className="w-full mt-4 flex flex-col flex-1 overflow-hidden">
          <div className="flex justify-around border-b border-gray-300">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-4 py-6 w-full text-center text-base cursor-pointer transition-all duration-200
                  ${
                    openId === tab.id
                      ? "text-[#C69815] border-b-2 border-[#C69815] font-medium"
                      : "text-[#697586] font-normal hover:text-[#C69815]"
                  }`}
                onClick={() => setOpenId(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </div>

        
          <div className="flex-1 overflow-y-auto mt-6 px-2">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{
                  display: openId === tab.id ? "block" : "none",
                }}
              >
                <tab.Component
              
                  handleGoBack={handleGoBack}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default AddPage;
