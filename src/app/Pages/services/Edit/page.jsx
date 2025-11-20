"use client";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import BasicInformationPage from "./BasicInformation/page";
import SchedulePage from "./Schedule/page";
import PricingPage from "./Pricing/page";
import { getServiceByIdThunk } from "@/redux/slice/Services/ServicesSlice"; 

export default function EditPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id"); // get ?id=123

  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.services);

  const [openId, setOpenId] = useState("basic");

  // fetch service by ID when page loads
  useEffect(() => {
    if (serviceId) {
      dispatch(getServiceByIdThunk(serviceId));
    }
  }, [serviceId, dispatch]);

  if (!service) return <p>Loading service...</p>;

  const tabs = [
    { id: "basic", label: t("Basic information"), Component: BasicInformationPage },
    { id: "days", label: t("Available days and times"), Component: SchedulePage },
    { id: "pricing", label: t("Pricing"), Component: PricingPage },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === openId);

  const handleNext = () => {
    if (currentIndex < tabs.length - 1) setOpenId(tabs[currentIndex + 1].id);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setOpenId(tabs[currentIndex - 1].id);
  };

  const handleGoBack = () => router.back();

  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        <section className="mb-4">
          <p className="text-2xl font-medium mb-5">{t("Modify the service.")}</p>
          <p className="text-base font-normal">
            {t("You can modify, update, and improve the service details.")}
          </p>
        </section>

        <section className="w-full mt-4 flex flex-col flex-1 overflow-hidden">
          {/* Tabs */}
          <div className="flex justify-around border-b border-gray-300">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-4 py-6 w-full text-center text-base cursor-default ${
                  openId === tab.id
                    ? "text-[#C69815] border-b-2 border-[#C69815] font-medium"
                    : "text-[#697586] font-normal"
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto mt-6 px-2">
            {tabs.map(
              (tab) =>
                openId === tab.id && (
                  <tab.Component
                    key={tab.id}
                    service={service}
                    handleGoBack={handleGoBack}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                  />
                )
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
