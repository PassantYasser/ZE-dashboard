"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Activity_logPage({setActiveSubSection}) {
  const { t } = useTranslation();

  const action_type = 'positive';       // positive , negative logo
  const action_by_data = [{id:'employee' , label:t('employee')} ,
                          {id:'user' , label:t('user')},
                          {id:'handyman' , label:t('handyman')}
                          ]; 
const action_by = 'employee';


  const details_type = "time";  
  const value = "400";

  const formatTime = (v) => {
    try {
      const d = new Date(v);
      return d.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" });
    } catch {
      return v;
    }
  };

  const renderDetails = () => {
    switch (details_type) {
      case "LE":
        return <span>{value} جنيه</span>;

      case "time":
        return <span>{formatTime(value)}</span>;

      case "rate":
        return (
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {value}
          </span>
        );

      default:
        return {value};
    }
  };

  return (
    <>

    {/* title */}
    <div className='px-6 flex gap-6 mb-5'>
      <div className='flex justify-center items-center cursor-pointer' onClick={()=>setActiveSubSection(1)}>
        <p className='bg-[var(--color-primary)] w-10 h-10 flex justify-center items-center rounded-[3px]'>
          <img src="/images/icons/arrow-left-go.svg" alt="" className='w-8 h-8'/>
        </p>
      </div>
      
      <div className=''>
        <p className='text-[#364152] text-lg font-medium'>{t('Activity log')}</p>
        <p className='text-[#4B5565] text-sm font-normal'>{t('Follow up on all decisions and procedures related to the service')}</p>
      </div>
    
    </div>
    <span className="border-[0.5px] border-[#E3E8EF] mb-6" />




    <section className='px-6  '>
      <div className=' flex gap-4'>
        {/* icon */}
        <div>
          <div className={`w-10 h-10  flex justify-center items-center rounded-full ${action_type==='positive' ? 'bg-[#DCFAE6]  ':'bg-[#FEE4E2]'}`}>
            <img src={`/images/icons/${action_type==='positive' ? 'checkmark-circle-true.svg':'checkmark-circle-false.svg'}`} alt="" />
          </div>
          <div className=' px-4.5 py-1'>
            <div className="h-10 border-r-1 border-dashed border-[#9AA4B2] "></div>
          </div>
        </div>
        {/* content */}
        <div className='  w-full'>

          <div className='grid grid-cols-2   w-full '>

            <div  className='flex flex-col gap-4  w-full'>

            <p className='text-[#364152] text-sm font-normal '>
              {action_by_data.find(item => item.id === action_by)?.label}
            </p>

            <p className='text-[#697586] text-sm font-normal '>
              الثلاثاء  9سبتمبر 2025 02:00 م 
            </p>

            </div>

            <div className='flex flex-col gap-4   w-full '>
              <p className='text-[#364152] text-sm font-normal '> 
                خالد محمد
              </p>

              <div className="flex flex-wrap gap-1 ">
                <p className="text-[#364152] text-sm font-normal">
                  قام قبول الطلب
                </p>

                <p className="text-[#4B5565] text-sm font-normal">
                  ({renderDetails()})
                </p>
              </div>

            </div>

          </div>
          
          <hr className="border-0.5 border-[#E3E8EF] my-5 " />

        </div>

            

      </div>

      


      
    
    </section>
    

    </>
  )
}

export default Activity_logPage