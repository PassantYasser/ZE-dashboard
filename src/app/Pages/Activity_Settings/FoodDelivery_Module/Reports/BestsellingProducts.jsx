'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

function BestsellingProducts() {
  const { t } = useTranslation()
  const { getReport } = useSelector((state) => state.setting)

  console.log('getReport', getReport)

  return (
    <div>
      {getReport?.top_products?.length > 0 && (
        <>
          <p className="text-[#364152] text-base font-medium mb-4">
            {t('Bestselling products')}
          </p>

          <div className="flex flex-col gap-3">
            {getReport.top_products.map((product) => (
              <div
                key={product?.rank}
                className="border border-[#E3E8EF] p-3 rounded-3px flex justify-between"
              >
                <div className="flex gap-2">
                  <p className="w-6 h-6 rounded-full bg-[#EEF2F6] text-[#697586] text-sm font-normal flex justify-center items-center">
                    {product?.rank}
                  </p>

                  <div className="flex flex-col gap-1">
                    <p className="text-[#364152] text-sm font-medium">
                      {product?.name}
                    </p>

                    <p className="text-[#4B5565] text-xs font-normal">
                      {product?.total_orders} {t('to request')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="text-primary text-base font-medium">
                    {product?.total_revenue} {t('pound')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default BestsellingProducts