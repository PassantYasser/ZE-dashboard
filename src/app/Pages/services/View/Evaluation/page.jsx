"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function EvaluationPage({handleClose}) {
  const{t}= useTranslation()

  const [expanded, setExpanded] = useState(false);

  const text =
    "خدمة جيدة وتعامل محترم، أصلحوا المشكلة بشكل جيد والسعر كان مناسبًا. فقط أتمنى تحسين سرعة الإنجاز، لكن بشكل عام تجربة إيجابية. كانت لديهم متابعة رائعة بعد الخدمة، والتواصل كان سريع وسهل.";

  const shortText = text.slice(0, 90); // show first 90 chars only
  return (
    <>

    <section className='px-6 mb-4'>
      <div className='px-4 py-3 border border-[#FEC84B] bg-[#FFFAEB] rounded-[10px] text-[#202939] text-base font-normal'>
        {t('To view customer reviews to enable them to improve and raise the efficiency of service performance and obtain more orders')}
      </div>
    </section>

    <section className='px-6 mb-4'>
      <div className='border-b border-[#CDD5DF]  '>
        <div className='flex justify-between '>
          <div className=' flex mb-4 gap-3'>
            <p className='bg-amber-400 w-10 h-10 flex justify-center items-center rounded-full p-2 mt-2'>
              ش
            </p>
            <div className='flex flex-col gap-3'>
              <p className='text-[#364152] text-base font-medium'>شريف اكرامي</p>
              <p className='text-[#697586] text-sm font-normal'>21/8/2025</p>
            </div>
          </div>
          <div className='flex gap-1 items-center'>
              <img src="images/icons/star.svg" alt="" className='w-4 h-4  mt-0.5' />
            <p className='text-[#FDB022] text-sm font-medium '>4.2</p>
          </div>
      
        </div>
        <div className=' '>
          <p className="mb-4 text-[#4B5565] text-sm font-normal">
            {expanded ? text : shortText + "... "}
            <span
              onClick={() => setExpanded(!expanded)}
              className="text-[#4D0CE7] text-sm font-normal cursor-pointer"
            >
              {expanded ? t("Show less") : t("Read more")}
            </span>
          </p>
        </div>      
      </div>
    </section>

    
    <section className='px-6 mb-4'>
      <div className=' '>
        <div className='flex justify-between '>
          <div className=' flex mb-4 gap-3'>
            <p className='bg-amber-400 w-10 h-10 flex justify-center items-center rounded-full p-2 mt-2'>
              ش
            </p>
            <div className='flex flex-col gap-3'>
              <p className='text-[#364152] text-base font-medium'>شريف اكرامي</p>
              <p className='text-[#697586] text-sm font-normal'>21/8/2025</p>
            </div>
          </div>
          <div className='flex gap-1 items-center'>
              <img src="images/icons/star.svg" alt="" className='w-4 h-4  mt-0.5' />
            <p className='text-[#FDB022] text-sm font-medium '>4.2</p>
          </div>
      
        </div>
        <div className=' '>
          <p className="mb-4 text-[#4B5565] text-sm font-normal">
            {expanded ? text : shortText + "... "}
            <span
              onClick={() => setExpanded(!expanded)}
              className="text-[#4D0CE7] text-sm font-normal cursor-pointer"
            >
              {expanded ? t("Show less") : t("Read more")}
            </span>
          </p>
        </div>      
      </div>
    </section>


  <div className="w-full h-px bg-[#CDD5DF] "></div>
  
  <div className='px-6 mt-5 mb-3'>
    <button onClick={handleClose} className='border border-[#C69815] text-[#C69815] h-13.5 w-40 rounded-[3px] text-base font-medium'>
      {t('cancel')}
    </button>
  </div>
    </>
  )
}

export default EvaluationPage

