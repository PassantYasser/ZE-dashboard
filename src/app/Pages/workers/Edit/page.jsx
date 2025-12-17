"use client";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState, Suspense } from "react";
import MainLayout from "@/app/Components/MainLayout/MainLayout";
import Link from "next/link";
import EditInfoDataPage from "./EditInfoData/page";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getWorkerByIdThunk } from "@/redux/slice/Workers/WorkersSlice";

function EditPageContent() {
  const { t } = useTranslation();

const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { worker, loading } = useSelector((state) => state.workers);

  useEffect(() => {
    if (id) {
      dispatch(getWorkerByIdThunk(id));
    }
  }, [id]);


  return (
    <MainLayout>
      <div className="flex flex-col">
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
          <div className=" flex items-center">
            <Link href='/Pages/workers'  className=" w-48 h-14 flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] text-[var(--color-primary)] text-base font-medium cursor-pointer">
            {t('Return to the workers page')}
          </Link>
          </div>
          
          
        </section>

        
        <section className="mb-6">
          <EditInfoDataPage worker={worker} loading={loading} />
        </section>


        
      </div>
    </MainLayout>
  );
}

function EditPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPageContent />
    </Suspense>
  );
}

export default EditPage;
