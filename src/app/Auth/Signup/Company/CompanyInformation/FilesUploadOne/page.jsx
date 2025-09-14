"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function FilesUploadOnePage({nextSub , prevSub}) {
  const {t}= useTranslation();

  //Commercial registration
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);

      let uploaded = 0;
      const interval = setInterval(() => {
        uploaded += 20;
        if (uploaded >= 100) {
          uploaded = 100;
          clearInterval(interval);
        }
        setProgress(uploaded);
      }, 500);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setProgress(0);
  };

  //tax card
  const [taxFile , setTaxFile]= useState(null);
  const[taxProgress , setTaxProgress]= useState(0);
  
  const handleTaxesFileChange = (e)=>{
    const selectTaxFile = e.target.files[0];
    if(selectTaxFile && selectTaxFile.type === "application/pdf" ){
      setTaxFile(selectTaxFile);
      let uploaded=0;
      const interval = setInterval(() => {
        uploaded += 20;
        if (uploaded >= 100) {
          uploaded = 100;
          clearInterval(interval);
        }
        setTaxProgress(uploaded);
      }, 500);
    }
  }
  const handleTaxRemove = () => {
    setTaxFile(null);
    setTaxProgress(0);
  };

  return (
    <>
    {/* note */}
    <ul className="my-8 bg-[#EEF2F6] text-[#775B0D] text-base font-normal py-3 px-4 rounded-[3px] list-disc list-inside">
      <li className="  mb-2 ">
        {t('The size of a single file must not exceed 10 MB.')}
      </li>
      <li className=" ">
        {t('The file format must be PDF.')}
      </li>
    </ul>


    <form className='flex flex-col gap-6'>

    <div className="flex flex-col gap-3">
      <label className="text-[#364152]">{t("Commercial registration")}</label>

      {!file ? (
        // === Initial state (placeholder upload box) ===
        <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
          <img
            src="/images/icons/upload.svg"
            alt="upload"
            className="w-5 h-5 absolute left-3"
          />
          <span className="flex-1">
            {t("Upload a photo of the commercial register")}
          </span>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      ) : progress < 100? (
        // === Upload in progress UI ===
        <div className="border border-[#C8C8C8] rounded-[3px] p-3">
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
              <span className="text-sm text-[#364152] font-medium">
                {file.name}
              </span>
            </div>
            <button onClick={handleRemove} className="text-[#C69815]">
              <img src="/images/icons/cancel-circle.svg" alt="" />
            </button>
          
          </div>

          <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
            <p className='flex gap-2'>
              <p className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</p>
              <img src="/images/icons/loading.svg" alt="" />
              <span>{t("Loading...")}</span>
            </p>
            {/* <span>{progress}%</span> */}
          </div>

          <div className="w-full bg-gray-200 h-1 mt-1 rounded">
            <div
              className="bg-[#C69815] h-1 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      ) : (

        // Final UI after upload complete
        <div className="border border-[#C8C8C8] rounded-[3px] p-3 flex items-center justify-between">
            {/* file name + icon */}
          <div className="flex items-center gap-2">
            <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
            <span className="text-sm text-[#656565] font-medium">{file.name}</span>
          </div>
          {/* delete button */}
          <button onClick={handleRemove}>
            <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
          </button>

        
        </div>
      )}
    </div>


    <div className="flex flex-col gap-3">
      <label className="text-[#364152]">{t("Tax card")}</label>

      {!taxFile ? (
        // === Initial state (placeholder upload box) ===
        <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
          <img
            src="/images/icons/upload.svg"
            alt="upload"
            className="w-5 h-5 absolute left-3"
          />
          <span className="flex-1">
            {t("Upload a photo of the tax card")}
          </span>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleTaxesFileChange}
          />
        </label>
      ) : taxProgress < 100? (
        // === Upload in progress UI ===
        <div className="border border-[#C8C8C8] rounded-[3px] p-3">
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
              <span className="text-sm text-[#364152] font-medium">
                {taxFile.name}
              </span>
            </div>
            <button onClick={handleTaxRemove} className="text-[#C69815]">
              <img src="/images/icons/cancel-circle.svg" alt="" />
            </button>
          
          </div>

          <div className="flex items-center justify-between mt-2 text-xs text-[#364152] p-3">
            <p className='flex gap-2'>
              <p className='text-[#9D919F] text-sm font-normal '> • 60 ك ب من 120 م ب</p>
              <img src="/images/icons/loading.svg" alt="" />
              <span>{t("Loading...")}</span>
            </p>
            {/* <span>{progress}%</span> */}
          </div>

          <div className="w-full bg-gray-200 h-1 mt-1 rounded">
            <div
              className="bg-[#C69815] h-1 rounded"
              style={{ width: `${taxProgress}%` }}
            ></div>
          </div>
        </div>

      ) : (

        // Final UI after upload complete
        <div className="border border-[#C8C8C8] rounded-[3px] p-3 flex items-center justify-between">
            {/* file name + icon */}
          <div className="flex items-center gap-2">
            <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
            <span className="text-sm text-[#656565] font-medium">{taxFile.name}</span>
          </div>
          {/* delete button */}
          <button onClick={handleTaxRemove}>
            <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[#C69815]" />
          </button>

        
        </div>
      )}
    </div>


    <div className='flex flex-col gap-3'>
      <label>{t('Tax number')} </label>
      <input type="text" className='h-15 p-3 border border-[#C8C8C8] rounded-[3px]'
        placeholder={t('Enter the tax number')}/>
    </div>

    </form>

      {/* //btn */}
    <div className='flex gap-6 my-12 '>
      
      <button className='border border-[#C69815] text-[#C69815] text-base font-medium rounded-[3px] w-full h-15'
        onClick={prevSub}
      >
        {t('the previous')}
      </button>

      <button className='bg-[#C69815] text-[#fff] text-base font-medium rounded-[3px] w-full h-15'
        onClick={nextSub}
        >
        {t('the next')}
      </button>
    </div>

      <p className='flex justify-center gap-1.5 '>
      <span className='text-[#697586] text-lg font-normal'>{t('Dont have an account?')}</span>
      <Link href='/Auth/Signup' className="text-[#9E7A11] text-lg font-medium">
        {t("Create an account")}
      </Link>
    </p>

    </>
  )
}

export default FilesUploadOnePage