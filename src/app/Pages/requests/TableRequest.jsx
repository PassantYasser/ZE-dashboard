"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ViewHome_Car_ModulePage from "./Views/Home_Car_Module/View/page";
import ViewStreetAssistant_ModulePage from "./Views/StreetAssistant_Module/View/page";
import { IMAGE_BASE_URL } from "../../../../config/imageUrl";



export default function TableRequest({bookings}) {
  const { t } = useTranslation();
  
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
  const current_module_key = userData?.current_module_key

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StatusRender = (status) => {
    switch (status) {
      case "accepted": //تم القبول
        return (
          <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex gap-1'>
            <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
            <span className=''>{t('accepted')}</span>
          </div>
        </div>
        );
      case "completed"://مكتملة
        return (
          <div className=' bg-[#DCFAE6] border border-[#067647] text-[#067647] w-fit  h-9.5 rounded-3xl'>
          <div className='py-1.5 px-3 flex gap-1'>
            <img src="/images/icons/Active Status.svg" alt="" className=' mt-1' />
            <span className=''>{t('Complete')}</span>
          </div>
        </div>
        );
      case "pending_approval": //في انتظار الموافقة
        return (
          <div className=' bg-[#FFFAEB] border  border-[#F79009] text-[#DC6803] w-fit h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/pending Status.svg" alt=""className=' mt-1' />
              <span className=''>{t('pending')}</span>
            </div>
          </div>
        );
      case "in_progress": //قيد التنفيذ
      return (
        <div className=' bg-[#EFF4FF] border border-[#518BFF] text-[#004EEB] w-fit  h-9.5 rounded-3xl'>
        <div className='py-1.5 px-3 flex gap-1'>
          <img src="/images/icons/inactive Status.svg" alt="" className=' mt-1' />
          <span className=''>{t('in_progress')}</span>
        </div>
      </div>
      );
      case "on_going": //العامل في الطريق
        return (
          <div className=' bg-[#E3E8EF] border border-[#697586] text-[#4B5565] w-fit h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/on_going Status.svg" alt="" className=' mt-1' />
              <span className=''>{t('The worker on the road')}</span>
            </div>
          </div>
        );
      case "rejected": // مرفوضة
        return (
          <div className=' bg-[#FEE4E2] border border-[#F97066] text-[#D92D20] w-fit h-9.5 rounded-3xl'>
            <div className='py-1.5 px-3 flex gap-1'>
              <img src="/images/icons/refused Status.svg" alt="" className=' mt-1'/>
              <span className=''>{t('rejected')}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="mt-8 mb-5 rounded-[3px] border border-[#E3E8EF] overflow-x-auto">
      <table className="min-w-[1000px] lg1:w-full border border-[#E3E8EF] text-sm text-right ">
        {/* Table Head */}
        <thead className="bg-[#F8FAFC] border-b border-[#E3E8EF] text-[#364152] sticky top-0 z-10">
          <tr>
            <th className="p-4 font-normal">{t("order number")}</th>
            <th className="p-4 font-normal">{t("Customer name")}</th>
            <th className="p-4 font-normal">{t("Service")}</th>
            <th className="p-4 font-normal">{t("the date")}/{t("the time")}</th>
            <th className="p-4 font-normal">{t("The worker")}</th>
            <th className="p-4 font-normal">{t("Status")}</th>
            <th className="p-4 font-normal">{t("the price")}</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {Array.isArray(bookings?.bookings?.data) &&
            bookings.bookings.data.map((row) => (
            <tr
              key={row?.id}
              onClick={handleClickOpen}
              className="hover:bg-[#F9F5E8]  hover:border-0 hover:cursor-pointer  border-y border-[#E3E8EF] font-normal text-sm text-[#697586]"
            >
            
              <td className="p-4">{row?.id}</td>
              <td className="p-4"> {row?.user?.name} {row?.user?.lastname}</td>
              <td className="p-4"> {row?.service?.category?.title}</td>
              <td className="p-4">{row?.visit_date} / {row?.visit_time}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={`${IMAGE_BASE_URL}${row?.assigned_handymen?.[0]?.ipn_image}`}
                    alt={row?.worker}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>
                    {row?.assigned_handymen?.[0]?.firstname}{" "}
                    {row?.assigned_handymen?.[0]?.lastname}
                  </span>
                </div>
              </td>
              <td className='p-4'>
                {StatusRender(row?.status)}
              </td>
              <td className="p-4">{row?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {/*✅*/}
      {(current_module_key === 'car_services' || current_module_key === 'home_services') && (
        <ViewHome_Car_ModulePage open={open} handleClose={handleClose} />
      )}
      {/*✅*/}
      {current_module_key === 'street_assistant' && (
        <ViewStreetAssistant_ModulePage open={open} handleClose={handleClose} />
      )}
    </div>



  );
}

