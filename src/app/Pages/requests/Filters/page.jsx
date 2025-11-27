"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

// Dynamically import Dialog to avoid SSR
const Dialog = dynamic(() => import("@mui/material/Dialog"), { ssr: false });

function FiltersPage({ open, handleClose }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState([]);
  const options = [t("active"), t("pending"), t("refused"), t("stopped"), t("inactive")];

  const handleChange = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ className: "ServicePage-dialog" }}
    >
      <section className="flex justify-between px-6 mt-6">
        <button
          onClick={handleClose}
          className="border border-[#CDD5DF] w-12 h-12 cursor-pointer rounded-[100px] flex justify-center items-center"
        >
          <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
        </button>
        <div className="w-14 h-14 bg-[#EEF2F6] rounded-[100px] flex justify-center items-center">
          <p className="bg-[#E3E8EF] flex items-center justify-center w-10 h-10 rounded-[100px]">
            <img src="/images/icons/FilterGreyicon.svg" alt="" className="w-6 h-6" />
          </p>
        </div>
      </section>

      <section className="mt-8 px-6">
        <p className="text-[#364152] text-xl font-medium mb-5">{t("Filter items")}</p>
        <p className="text-[#4B5565] text-sm font-normal mb-5">
          {t("Filter results to facilitate access to the required service")}
        </p>
      </section>
      <span className="border-[0.5px] border-[#E3E8EF]" />

      <section className="p-6">
        
        <div>
          
        </div>
      </section>



      
    </Dialog>
  );
}

export default FiltersPage;
