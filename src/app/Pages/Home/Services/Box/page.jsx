"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';

function BoxPage({current_module_key}) {
  const {t} = useTranslation();
  const cash = -2 
  
  return (
    <>

    <section className='mb-10 grid grid-cols-4 gap-4 '>

      {/* New orders */}
      <div className=' border border-[#CDD5DF] rounded-[3px] p-4'>
        <div className='flex items-center gap-3'>
          <p className=' w-10 h-10 flex justify-center items-center bg-[#FEF3F2] rounded-md'>
            <img src="/images/icons/invoice-red.svg" alt="" />
          </p>
          <p className=''>{t('New orders')}</p>
        </div>
        <p className='text-[#202939] text-lg font-medium my-2.5'>500</p>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {cash >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{cash}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{cash}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>
      
      </div>

      
      {/* Current Orders */}
      <div className=' border border-[#CDD5DF] rounded-[3px] p-4'>
        <div className='flex items-center gap-3'>
          <p className=' w-10 h-10 flex justify-center items-center bg-[#B4F0CC] rounded-md'>
            <img src="/images/icons/invoice-green.svg" alt="" />
          </p>
          <p className=''>{t('Current Orders')}</p>
        </div>
        <p className='text-[#202939] text-lg font-medium my-2.5'>500</p>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {cash >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{cash}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{cash}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>
      
      </div>


      {/* profits */}
      <div className=' border border-[#CDD5DF] rounded-[3px] p-4'>
        <div className='flex items-center gap-3'>
          <p className=' w-10 h-10 flex justify-center items-center bg-[#FEF0C7] rounded-md'>
            <img src="/images/icons/profits-orange.svg" alt="" />
          </p>
          <p className=''>{t('profits')}</p>
        </div>
        <p className='text-[#202939] text-lg font-medium my-2.5'>5022220</p>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
            {cash >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span>{cash}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span>{cash}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>
      
      </div>



      {/* Evaluation */}
      {current_module_key === 'خدمات السيارات' ? (
        <div className=' border border-[#CDD5DF] rounded-[3px] p-4'>
          <div className='flex items-center gap-3'>
            <p className=' w-10 h-10 flex justify-center items-center bg-[#EDE7FD] rounded-md'>
              <img src="/images/icons/checkmark-circle-blue.svg" alt="" />
            </p>
            <p className=''>{t('Completed applications')}</p>
          </div>
          <p className='text-[#202939] text-lg font-medium my-2.5'>50</p>

            <div className='flex gap-1'>
              <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
              {cash >=0 ? (
                <>
                <p className='flex items-center text-sm text-[#17B26A]'>
                  <span>{cash}%</span>
                  <span>+</span>  
                </p>
                <p className='flex items-center'>
                  <img src="/images/icons/green_arrow_up.svg" alt="" />
                </p>
                </>
              
              ):(
                <>
                <p className='flex items-center text-sm text-[#F04438]'>
                  <span>{cash}%</span>
                </p>
                <p className='flex items-center'>
                  <img src="/images/icons/red_arrow_down.svg" alt="" />
                </p>
                </>
              
              )}
              
            </div>
        
        </div>
      ):(
        <div className=' border border-[#CDD5DF] rounded-[3px] p-4'>
          <div className='flex items-center gap-3'>
            <p className=' w-10 h-10 flex justify-center items-center bg-[#EDE7FD] rounded-md'>
              <img src="/images/icons/Evaluation-blue.svg" alt="" />
            </p>
            <p className=''>{t('Evaluation')}</p>
          </div>
          <div className='my-2.5 flex gap-1'>
            <img src="/images/icons/star.svg" alt="" />
            <p className='text-[#FDB022] text-base font-medium'>4.5</p>
          </div>

            <div className='flex gap-1'>
              <p className='text-[#697586] text-sm font-light'>{t('Last week')}</p>
              {cash >=0 ? (
                <>
                <p className='flex items-center text-sm text-[#17B26A]'>
                  <span>{cash}%</span>
                  <span>+</span>  
                </p>
                <p className='flex items-center'>
                  <img src="/images/icons/green_arrow_up.svg" alt="" />
                </p>
                </>
              
              ):(
                <>
                <p className='flex items-center text-sm text-[#F04438]'>
                  <span>{cash}%</span>
                </p>
                <p className='flex items-center'>
                  <img src="/images/icons/red_arrow_down.svg" alt="" />
                </p>
                </>
              
              )}
              
            </div>
        
        </div>    
      )}
    </section>
 
    </>
  )
}

export default BoxPage