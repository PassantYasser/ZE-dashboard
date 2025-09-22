"use client"
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { useTranslation } from 'react-i18next';
import { useRouter } from "next/navigation";
import DetailsPage from './Details/page';
import AnalysisPage from './Analysis/page';
import EvaluationPage from './Evaluation/page';



function ViewPage({open , handleClose }) {
  const {t} = useTranslation();

   const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1019/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1021/600/400",
  ];
  const [current, setCurrent] = useState(0);

  //

    const router = useRouter();
  const [openId, setOpenId] = useState("Details");

  const tabs = [
    {
      id: "Details",
      label: t("Details"),
      icons:'Details.svg',
      Component: DetailsPage,
    },
    {
      id: "Analysis",
      label: t("Analysis"),
      icons:'Analysis.svg',
      Component: AnalysisPage,
    },
    { 
      id: "Evaluation", 
      label: t("Evaluation"), 
      icons:'Evaluation.svg',
      Component: EvaluationPage
    },
  ];

  const currentIndex = tabs.findIndex((tab) => tab.id === openId);

  // const handleNext = () => {
  //   if (currentIndex < tabs.length - 1) {
  //     setOpenId(tabs[currentIndex + 1].id);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentIndex > 0) {
  //     setOpenId(tabs[currentIndex - 1].id);
  //   }
  // };

  // const handleGoBack = () => {
  //   router.back();
  // };


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          className: "ServiceViewPage-dialog",
        }}
      >
        {/* icon close */}
        <section className='px-6 mt-6 '>
          <button   onClick={handleClose} className='border border-[#CDD5DF] w-12 h-12 rounded-[100px] flex justify-center items-center'>
            <img src="/images/icons/xx.svg" alt="" className='w-6 h-6' />
          </button>
        </section>

        {/* title */}
        <section className='mt-4 px-6'>
          <p className='text-[#364152] text-xl font-medium mb-5'>{t('Service Details')}</p>
          <p className='text-[#4B5565] text-sm font-normal mb-5'>{t('A comprehensive overview of service specifications and information')}</p>
        </section>
        <span className='border-[0.5px] border-[#E3E8EF]  '/>
        
    <div className='overflow'>
        {/* //image display */}
        <section className="relative w-[586px] h-[261px] m-6">
          {/* Images */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="slider"
              className={`absolute top-0 left-0 w-[586px] h-[261px]  transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
      
          {/* Dots like image */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                          bg-white/55 h-5.5 px-3 py-1.5 rounded-[20px] 
                          flex items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition rounded-full ${
                  current === index
                    ? "w-2.5 h-2.5 bg-white" // active dot
                    : "w-1.5 h-1.5 bg-[#EEF2F6]" // inactive dot
                }`}
              />
            ))}
          </div>
        </section>
      
          {/* tabs */}
      <section className="w-full mt-4 flex flex-col flex-1 overflow-hidden "> {/* ارتفاع تحدديه انتي */}
        {/* Tabs */}
        <div className="flex justify-around  border-b border-gray-300 bg-white ">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setOpenId(tab.id)}
              className={`flex items-center justify-center gap-2 px-4 py-4 w-full text-center text-base cursor-pointer
                ${
                  openId === tab.id
                    ? "text-[#C69815] border-b-2 border-[#C69815] font-medium"
                    : "text-[#697586] font-normal"
                }`}
            >
              <img src={`/images/icons/${tab.icons}`} alt="" className="w-5 h-5" />
              <p>{tab.label}</p>
            </div>
          ))}
        </div>
      
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto mt-4 px-2">
          {tabs.map((tab) => (
            <div key={tab.id}>
              {openId === tab.id && (
                <tab.Component />
              )}
            </div>
          ))}
        </div>
      </section>
      
    </div>
        

          
        
      </Dialog>
    
    </>
  )
}

export default ViewPage

