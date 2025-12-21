"use client";
import { fontWeight } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IMAGE_BASE_URL } from "../../../../config/imageUrl";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import DeletePage from "./Model/Delete/page";

function createData(UserCode, worker, workerImg,job, WorkingHours, phoneNumber , status) {
  return { UserCode, worker, workerImg, job, WorkingHours, phoneNumber, status};
}




export default function TableWorkers({workers , loading}) {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClosee = () => {
    setOpen(false);
  };

  const StatusRender = (status) => {
    if (status === true || status === "true") {
      return (
        <div className='bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex gap-1'>
            <img src="/images/icons/Active Status.svg" alt="" className='mt-1' />
            <span>{t('active')}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex gap-1'>
            <img src="/images/icons/refused Status.svg" alt="" className='mt-1'/>
            <span>{t('inactive')}</span>
          </div>
        </div>
      );
    }
  };

const [imgError, setImgError] = useState(false);

const router = useRouter();
const handleEditClick = (id) => {
  router.push(`/Pages/workers/Edit?id=${id}`);
};
  return (
    <div className="overflow-x-auto mt-8 rounded-[3px] mb-5">
      <table className="min-w-[1000px] lg1:w-full border border-[#E3E8EF] text-sm text-right ">
        {/* Table Head */}
        <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] ">
          <tr>
            <th className="p-4 font-normal">{t("User code")}</th>
            <th className="p-4 font-normal">{t("Name of the worker")}</th>
            <th className="p-4 font-normal">{t("job")}</th>
            <th className="p-4 font-normal">{t("Working hours")}</th>
            <th className="p-4 font-normal">{t("phone number")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
            <th className="p-4 font-normal">{t("procedures")}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} className="text-center py-10">
                <CircularProgress size="3rem" color="warning" />
              </td>
            </tr>
          ) : workers.length > 0 ? (
            workers.map((worker) => (
              <tr
                key={worker.id}
                className="hover:bg-[#F9F5E8] hover:border-0 hover:cursor-pointer border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
              >
                <td className="p-4">{worker?.id}#</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {worker?.image === null || imgError ? (
                      <div className="w-8 h-8 rounded-full bg-[#C8C8C8] flex justify-center items-center ">
                        <span className="font-medium text-sm">
                          {worker?.firstname?.charAt(0)}
                          {worker?.lastname?.charAt(0)}
                        </span>
                      </div>
                    ):(
                      <img
                      src={`${IMAGE_BASE_URL}${worker?.image}`}
                      alt={worker.worker}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={() => setImgError(true)} 
                    />
                    )}
                  
                    <span>{worker?.firstname} {worker?.lastname}</span>
                  </div>
                </td>
                <td className="p-4">{worker?.designation?.name}</td>
                <td className="p-4">{worker?.working_time}</td>
                <td className="p-4">{worker?.phone}</td>
                <td className="p-4">{StatusRender(worker.is_active)}</td>
                <td className="flex gap-4 justify-center p-4">
                  <button onClick={() => handleEditClick(worker.id)} className="cursor-pointer">
                    <img src="/images/icons/EditBlack.svg" alt=""  className="w-6 h-6"/>
                  </button>
                  <button className="cursor-pointer" onClick={handleClickOpen}>
                    <img src="/images/icons/delete-darkRed.svg" alt="" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
           <tr>
      <td colSpan={7} className="text-center py-10">
        {t("No workers found")}
      </td>
    </tr>
          )}
        </tbody>

      </table>
  
    <DeletePage 
        open={open} 
        handleClosee={handleClosee} 
      />
    </div>

    
  );
}

