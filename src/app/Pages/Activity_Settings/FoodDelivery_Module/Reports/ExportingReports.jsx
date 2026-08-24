'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getExportExcelReportThunk, getExportPdfReportThunk } from '@/redux/slice/Setting/SettingSlice'

function ExportingReports() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { getReport , getExportExcelReport , getExportPdfReport} = useSelector((state) => state.setting)

  const [loadingPdf, setLoadingPdf] = useState(false)
  const [loadingExcel, setLoadingExcel] = useState(false)

  const period = getReport?.period 

  const handleDownloadPdf = async () => {
    try {
      setLoadingPdf(true)
      const res = await dispatch(getExportPdfReportThunk(period)).unwrap()
      const downloadUrl = res?.download_url 
      if (downloadUrl) {
        window.open(downloadUrl, '_blank')
      } else if (typeof res === 'string' && res.startsWith('http')) {
        window.open(res, '_blank')
      }
    } catch (error) {
      console.error('Error downloading PDF report:', error)
    } finally {
      setLoadingPdf(false)
    }
  }

  const handleDownloadExcel = async () => {
    try {
      setLoadingExcel(true)
      const res = await dispatch(getExportExcelReportThunk(period)).unwrap()
      const downloadUrl =  res?.download_url 
      if (downloadUrl) {
        window.open(downloadUrl, '_blank')
      } else if (typeof res === 'string' && res.startsWith('http')) {
        window.open(res, '_blank')
      }
    } catch (error) {
      console.error('Error downloading Excel report:', error)
    } finally {
      setLoadingExcel(false)
    }
  }

  return (
    <>
      <div className='shadow-[0_0_4px_0_rgba(0,0,0,0.20)] p-4'>
        {/* Header */}
        <div className='flex items-center gap-2'>
          <img src="/images/icons/document-attachment_gray.svg" className='w-5 h-5' alt="" />
          <p className='text-[#0B0E11] text-base font-medium'>{t('Orders by time')}</p>
        </div>

        {/* excel */}
        <div className='relative group border border-[#CDD5DF] rounded-[3px] p-3 mt-4 flex justify-between items-center'>
          <div className='flex flex-col'>
            <p title={getExportExcelReport?.filename}>تصدير كملف Excel</p>
            {getExportExcelReport?.filename && (
              <span className='text-xs text-[#697586] hidden group-hover:block transition-all mt-1'>
                {getExportExcelReport?.filename}
              </span>
            )}
          </div>
          <button 
            onClick={handleDownloadExcel} 
            disabled={loadingExcel} 
            className='cursor-pointer disabled:opacity-50'
            title={getExportExcelReport?.filename}
          >
            <img src="/images/icons/download-yellow.svg" alt="Download Excel" />
          </button>
        </div>

        {/* pdf */}
        <div className='relative group border border-[#CDD5DF] rounded-[3px] p-3 mt-4 flex justify-between items-center'>
          <div className='flex flex-col'>
            <p title={getExportPdfReport?.filename}>تصدير كملف pdf</p>
            {getExportPdfReport?.filename && (
              <span className='text-xs text-[#697586] hidden group-hover:block transition-all mt-1'>
                {getExportPdfReport?.filename}
              </span>
            )}
          </div>
          <button 
            onClick={handleDownloadPdf} 
            disabled={loadingPdf} 
            className='cursor-pointer disabled:opacity-50'
            title={getExportPdfReport?.filename}
          >
            <img src="/images/icons/download-yellow.svg" alt="Download PDF" />
          </button>
        </div>
      </div>

      {/* note */}
      <div className='border border-[#EEF2F6] bg-[#F8FAFC] rounded-[3px] p-3 flex gap-2'>
        <p>
          <img src="/images/icons/calendar-yellow2.svg" alt="" />
        </p>
        <div className='flex flex-col gap-1'>
          <p className='text-[#364152] text-base font-medium'>{t('Last update')}</p>
          <p className='text-[#697586] text-sm font-normal'>
            {getReport?.last_updated || getReport?.data?.last_updated || 'اليوم في 2:30 م'}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExportingReports