'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function Boxes() {
    const {t} = useTranslation()
    const { getReport } = useSelector((state) => state.setting)
    // console.log('getReport' , getReport);

    const kpiConfig = {
      total_sales: {
        label: "Total sales",
        icon: "/images/icons/dollar_blue.svg",
        bg: "bg-[#EDE7FD]",
      },

      order_count: {
        label: "Number of requests",
        icon: "/images/icons/square-green.svg",
        bg: "bg-[#DCFAE6]",
      },

      customer_count: {
        label: "Number of customers",
        icon: "/images/icons/user-group-brown.svg",
        bg: "bg-[#FFFAEB]",
      },

      avg_rating: {
        label: "Average rating",
        icon: "/images/icons/auto-conversations_brown.svg",
        bg: "bg-[#F9F5E8]",
      },
    };


  return (
    <div>
      <p className='text-[#364152] text-base font-medium mt-4 mb-4'>{t('Key indicators')}</p>
      {/* main box */}
      <div className="grid grid-cols-4 gap-4">
        {getReport?.kpis?.map((kpi) => {
          const config = kpiConfig[kpi.key];

          return (
            <div
              key={kpi.key}
              className="border border-[#CDD5DF] rounded-3px p-4"
            >
              <div className="flex items-center gap-3">

                <p
                  className={`w-10 h-10 flex justify-center items-center rounded-md ${config?.bg}`}
                >
                  <img
                    src={config?.icon}
                    alt=""
                  />
                </p>

                <p className="text-[#4B5565] text-base font-normal">
                  {t(config?.label)}
                </p>

              </div>

              <p className="text-lg my-2.5">
                <span className="text-[#202939] font-medium">
                  {kpi?.value}

                  {kpi?.unit && (
                    <span className="ms-1">
                      {t("pound")}
                    </span>
                  )}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Boxes