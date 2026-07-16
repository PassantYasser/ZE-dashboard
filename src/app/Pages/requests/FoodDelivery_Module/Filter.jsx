"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Filter() {
  const {t} = useTranslation()
  const [activeTab, setActiveTab] = useState('new')

  const tabs = [
  {
    id: "new",
    label: t("new"),
    active: ["new"],
  },
  {
    id: "Under preparation",
    label: t("Under preparation"),
    active: ["Under preparation"],
  },
  {
    id: "ready",
    label: t("ready"),
    active: ["ready"],
  },
  {
    id: "For delivery",
    label: t("For delivery"),
    active: ["For delivery"],
  },
];
  return (
    <div className="w-[70%] border border-[#E3E8EF] bg-[#F8FAFC] grid grid-cols-4 gap-6 p-2 rounded-[3px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex justify-center gap-1 p-4 cursor-pointer ${
            tab.active.includes(activeTab)
              ? "bg-[var(--color-primary)] text-white rounded-[3px]"
              : ""
          }`}
        >
          <span
            className={`text-base font-normal ${
              tab.active.includes(activeTab)
                ? "text-white"
                : "text-[#4B5565]"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Filter;