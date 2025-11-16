"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import Link from "next/link";
import EditInfoDataPage from "./EditInfoData/page";

function EditPage() {
  const { t } = useTranslation();




  return (
    <MainLayout>
      <div className="flex flex-col h-full">
        {/* Header */}
        <section className="mb-8 flex justify-between">

          {/* title */}
          <div>
            <p className="text-[#364152] text-2xl font-medium mb-5">
              {t("Worker details")}
            </p>
            <p className="text-[#4B5565] text-base font-normal">
              {t("Review and edit employee data easily to maintain accurate and up-to-date information.")}
            </p>
          </div>

          {/* btn back to table */}
          <Link href='/Pages/workers'  className=" py-2.5 px-4 flex items-center border border-[var(--color-primary)] rounded-[3px] text-[var(--color-primary)] text-base font-medium cursor-pointer">
            {t('Return to the workers page')}
          </Link>
          
        </section>

        <EditInfoDataPage/>


        
      </div>
    </MainLayout>
  );
}

export default EditPage;
