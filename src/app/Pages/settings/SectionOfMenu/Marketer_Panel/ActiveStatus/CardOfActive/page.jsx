"use client";
import React from 'react'
import { useTranslation } from 'react-i18next';

function CardOfActivePage({is_marketer}) {
    const {t} = useTranslation()

    const totalProfits = 4;
  return (
    <>
    
      
      {/* total profits */}
      <section className={`border  border-[#CDD5DF] rounded-[3px] py-3 px-2 ${is_marketer ? ' ' : 'bg-[#EEF2F6]'}`}>
        {/* title */}
        <div className='flex items-center gap-3 '>
          <p className={`w-10 h-10 flex items-center justify-center rounded-[3px] ${is_marketer ? ' bg-[#FEF3F2] ' : 'bg-[#CDD5DF]'}`}>
            {is_marketer ? 
            (<img src="/images/icons/earnings.svg" alt="" className='w-6 h-6' />)
            :( <img src="/images/icons/earnings_grey.svg" alt="" className='w-6 h-6' />)
            }
          </p>
          <p className='text-[#4B5565] text-base font-normal'>{t('total profits')}</p>
        </div>

        <div className='py-2.5'>
          <p className='text-[#202939] text-base font-medium'>187,972</p>
        </div>

        <div className='flex gap-1'>
          <p className='text-[#697586] text-xs font-light'>{t('Last week')}</p>
          {totalProfits >=0 ? (
            <>
            <p className='flex items-center text-sm text-[#17B26A]'>
              <span className='text-xs'>{totalProfits}%</span>
              <span>+</span>  
            </p>
            <p className='flex items-center'>
              <img src="/images/icons/green_arrow_up.svg" alt="" />
            </p>
            </>
          
          ):(
            <>
            <p className='flex items-center text-sm text-[#F04438]'>
              <span className='text-xs'>{totalProfits}%</span>
            </p>
            <p className='flex items-center'>
              <img src="/images/icons/red_arrow_down.svg" alt="" />
            </p>
            </>
          
          )}
          
        </div>

      </section>

      <div className='grid grid-cols-2 gap-3 mt-3'>

        {/* Total number of subscribers */}
        <section className={`border  border-[#CDD5DF] rounded-[3px] py-3 px-2 ${is_marketer ? ' ' : 'bg-[#EEF2F6]'}`}>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className={`w-10 h-10 flex items-center justify-center rounded-[3px] ${is_marketer ? ' bg-[#FEF3F2] ' : 'bg-[#CDD5DF]'}`}>
              {is_marketer ? 
              (<img src="/images/icons/user-group.svg" alt="" className='w-6 h-6' />)
              :( <img src="/images/icons/user-group_grey.svg" alt="" className='w-6 h-6' />)}
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Total number of subscribers')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-base font-medium'>187,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-xs font-light'>{t('Last week')}</p>
            {totalProfits >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span className='text-xs'>{totalProfits}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span className='text-xs'>{totalProfits}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

        {/* pending profits */}
        <section className={`border  border-[#CDD5DF] rounded-[3px] py-3 px-2 ${is_marketer ? ' ' : 'bg-[#EEF2F6]'}`}>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className={`w-10 h-10 flex items-center justify-center rounded-[3px] ${is_marketer ? ' bg-[#FEF3F2] ' : 'bg-[#CDD5DF]'}`}>
              {is_marketer ? 
              (<img src="/images/icons/earnings.svg" alt="" className='w-6 h-6' />)
              :( <img src="/images/icons/earnings_grey.svg" alt="" className='w-6 h-6' />)
              }
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('pending profits')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-base font-medium'>187,972</p>
          </div>

          <div className='flex gap-1'>
            <p className='text-[#697586] text-xs font-light'>{t('Last week')}</p>
            {totalProfits >=0 ? (
              <>
              <p className='flex items-center text-sm text-[#17B26A]'>
                <span className='text-xs'>{totalProfits}%</span>
                <span>+</span>  
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/green_arrow_up.svg" alt="" />
              </p>
              </>
            
            ):(
              <>
              <p className='flex items-center text-sm text-[#F04438]'>
                <span className='text-xs'>{totalProfits}%</span>
              </p>
              <p className='flex items-center'>
                <img src="/images/icons/red_arrow_down.svg" alt="" />
              </p>
              </>
            
            )}
            
          </div>

        </section>

        {/* Total balance due */}
        <section className={`border  border-[#CDD5DF] rounded-[3px] py-3 px-2 ${is_marketer ? ' ' : 'bg-[#EEF2F6]'}`}>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className={`w-10 h-10 flex items-center justify-center rounded-[3px] ${is_marketer ? ' bg-[#FEF3F2] ' : 'bg-[#CDD5DF]'}`}>
              {is_marketer ? 
              (<img src="/images/icons/wallet-done.svg" alt="" className='w-6 h-6' />)
              :( <img src="/images/icons/wallet-done_grey.svg" alt="" className='w-6 h-6' />)
              }
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Total balance due')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-base font-medium'>187,972</p>
          </div>

          

        </section>

        {/* Total amount withdrawn */}
        <section className={`border  border-[#CDD5DF] rounded-[3px] py-3 px-2 ${is_marketer ? ' ' : 'bg-[#EEF2F6]'}`}>
          {/* title */}
          <div className='flex items-center gap-3 '>
            <p className={`w-10 h-10 flex items-center justify-center rounded-[3px] ${is_marketer ? ' bg-[#FEF3F2] ' : 'bg-[#CDD5DF]'}`}>
              {is_marketer ? 
              (<img src="/images/icons/Available_withdrawal.svg" alt="" className='w-6 h-6' />)
              :( <img src="/images/icons/Available_withdrawal_grey.svg" alt="" className='w-6 h-6' />)
              }
            </p>
            <p className='text-[#4B5565] text-base font-normal'>{t('Total amount withdrawn')}</p>
          </div>

          <div className='py-2.5'>
            <p className='text-[#202939] text-base font-medium'>187,972</p>
          </div>

        

        </section>
      </div>

      {/* code */}
    <section className='mt-6'>
      <p className='text-[#364152] text-sm font-normal'>{t('code')}</p>
      <input 
        type="text" 
        disabled={!is_marketer}
        className={`w-full mt-1.5 p-3 border border-[#CDD5DF] rounded-[3px] focus:outline-none ${is_marketer ? ' bg-white ' : 'bg-[#EEF2F6]'}`}
      />
    </section>

    </>
  )
}

export default CardOfActivePage