"use client";
import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ConfirmationDonePage from '../ConfirmationDone/page';

function FilesPage({open , setOpen ,setOpenPrevious}) {
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
  
  const [openConfirmation, setOpenConfirmation]= useState(false);
  const handlePrevious = () => {
    setOpen(false);
    setOpenPrevious(true);
  }

  const handleNext = () => {
    setOpen(false);
    setOpenConfirmation(true);
  }
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: "COMPANY-dialog" }}
      >
        <section className="px-6 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center cursor-pointer"
          >
            <img src="/images/icons/xx.svg" alt="" className="w-6 h-6" />
          </button>
      
        </section>

        <section className="pt-6  flex justify-center flex-col gap-4 items-center">
          <p className="text-[#364152] font-normal text-2xl">{t('Simple steps to complete your account')}</p>
          <p className="text-[var(--color-primary)] font-semibold text-xl">{t('Upload legal documents')}</p>
        </section>

        <section className="py-11 px-12.5">
          <div className=' border border-[#CDD5DF] p-10'>
            {/* note */}
            <ul className=" bg-[#EEF2F6] text-[#775B0D] text-base font-normal py-3 px-4 rounded-[3px] list-disc list-inside">
              <li className="mb-2 ">
                {t('The size of a single file must not exceed 10 MB.')}
              </li>
              <li className=" ">
                {t('The file format must be PDF.')}
              </li>
            </ul>
            
            
            {/* Front national ID card photo */}
            <div className="flex flex-col gap-3 mt-8">
              <label className="text-[#364152]">{t("Front national ID card photo")}</label>

              {!file ? (
                // === Initial state (placeholder upload box) ===
                <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
                  <img
                    src="/images/icons/upload.svg"
                    alt="upload"
                    className="w-5 h-5 absolute left-3"
                  />
                  <span className="flex-1">
                    {t("Upload a photo of the front of your national ID card")}
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
                    <button onClick={handleRemove} className="text-[var(--color-primary)]">
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
                      className="bg-[var(--color-primary)] h-1 rounded"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

              ) : (

                // Final UI after upload complete
                <div className="border border-[#C8C8C8] rounded-[3px] p-3 h-15 flex items-center justify-between">
                    {/* file name + icon */}
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                    <span className="text-sm text-[#656565] font-medium">{file.name}</span>
                  </div>
                  {/* delete button */}
                  <button onClick={handleRemove}>
                    <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[var(--color-primary)] cursor-pointer" />
                  </button>

                
                </div>
              )}
            </div>

            {/* Back national ID card photo */}
            <div className="flex flex-col gap-3 mt-6">
              <label className="text-[#364152]">{t("Back national ID card photo")}</label>

              {!taxFile ? (
                // === Initial state (placeholder upload box) ===
                <label className="flex items-center relative gap-2 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#9A9A9A] cursor-pointer">
                  <img
                    src="/images/icons/upload.svg"
                    alt="upload"
                    className="w-5 h-5 absolute left-3 cursor-pointer"
                  />
                  <span className="flex-1">
                    {t("Upload a photo of the back of your national ID card")}
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
                    <button onClick={handleTaxRemove} className="text-[var(--color-primary)]">
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
                      className="bg-[var(--color-primary)] h-1 rounded"
                      style={{ width: `${taxProgress}%` }}
                    ></div>
                  </div>
                </div>

              ) : (

                // Final UI after upload complete
                <div className="border border-[#C8C8C8] rounded-[3px] p-3 h-15 flex items-center justify-between">
                    {/* file name + icon */}
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/imageicon.svg" alt="pdf" className="w-5 h-5" />
                    <span className="text-sm text-[#656565] font-medium">{taxFile.name}</span>
                  </div>
                  {/* delete button */}
                  <button onClick={handleTaxRemove}>
                    <img src="/images/icons/delete.svg" alt="delete" className="w-5 h-5 text-[var(--color-primary)] cursor-pointer" />
                  </button>

                
                </div>
              )}
            </div>

            {/* National ID number */}
            <div className='flex flex-col gap-3 my-6'>
              <label>{t('National ID number')} </label>
              <input type="text" className='h-15 p-3 border border-[#C8C8C8] rounded-[3px] outline-none'
                placeholder={t('Enter your national ID number')}/>
            </div>

            <div className='flex gap-6 justify-between w-full'>
              <button 
                onClick={handlePrevious}
                className="px-4 py-2 w-full h-13.5 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-[3px] cursor-pointer"
              >
                {t('the previous')}
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 w-full h-13.5 bg-[var(--color-primary)] text-white rounded-[3px] cursor-pointer"
              >
                {t('confirmation')}
              </button>
            </div>


          </div>
        </section>
      </Dialog>
      <ConfirmationDonePage open={openConfirmation} setOpen={setOpenConfirmation} />

    </>
  )
}

export default FilesPage