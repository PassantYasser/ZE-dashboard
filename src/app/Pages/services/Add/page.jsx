
"use client";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BasicInformationPage from "./BasicInformation/page";
import SchedulePage from "./Schedule/page";
import PricingPage from "./Pricing/page";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { AddServiceThunk } from "@/redux/slice/Services/ServicesSlice";

function AddPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {loadingDetails}= useSelector((state) => state.services)
  const router = useRouter();

  const [formData, setFormData] = useState({
    images: [],
    module_id: "",
    category_id: "",
    provider_areas_id: [],
    duration: "",
    long_description: "",
    inspection_price: "",
    price_on_inspection: "",
    pricing_type: "",
    discount: "",
    discount_type: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   const data = new FormData();
  //   Object.keys(formData).forEach((key) => {
  //     const value = formData[key];
  //     if (Array.isArray(value)) {
  //       value.forEach((item) => data.append(`${key}[]`, item));
  //     } else {
  //       data.append(key, value);
  //     }
  //   });

  //   const result = await dispatch(AddServiceThunk(data));
  //   if (AddServiceThunk.fulfilled.match(result)) {
  //     console.log("Service added successfully ✅", result.payload);
  //   } else {
  //     console.error("Failed to add service ❌", result.payload);
  //   }
  // };
const handleSubmit = async () => {
  const data = new FormData();

  Object.keys(formData).forEach((key) => {
    const value = formData[key];

    if (key === "provider_areas_id" && Array.isArray(value)) {
      // نحول كل object إلى ID فقط
      value.forEach((item) => data.append("provider_areas_id[]", item.id));
    } else if (Array.isArray(value)) {
      value.forEach((item) => data.append(`${key}[]`, item));
    } else {
      data.append(key, value);
    }
  });

  const result = await dispatch(AddServiceThunk(data));

  if (AddServiceThunk.fulfilled.match(result)) {
    console.log("Service added successfully ✅", result.payload);
  } else {
    console.error("Failed to add service ❌", result.payload);
  }
};

  const [openId, setOpenId] = useState("basic");
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

  const handleGoBack = () => {
    router.back();
  };
console.log(formData);
  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <section className="mb-4">
          <p className="text-[#364152] text-2xl font-medium mb-5">
            {t("Add a new service")}
          </p>
          <p className="text-[#4B5565] text-base font-normal">
            {t("Enter the new service details to begin offering it to your customers.")}
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
                loadingDetails={loadingDetails}
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
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
