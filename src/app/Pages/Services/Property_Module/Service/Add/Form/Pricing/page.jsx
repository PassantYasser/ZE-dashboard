"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import PricingInfoPage from './PricingInfo/page';
import CancellationPolicyPage from './CancellationPolicy/page';
import PricingDetailsPage from './PricingDetails/page';
import { useDispatch, useSelector } from 'react-redux';
import { getPoliciesApprovedThunk } from '@/redux/slice/Services/ServicesSlice';

function PricingPage({prevStep , nextStep }) {
  const {t} = useTranslation();

  
  const dispatch = useDispatch();
  const {getPoliciesApproved , addBasicProperty} = useSelector((state)=>state.services)
    
    const [property_id, setProperty_id] = useState(() => {
      if (typeof window !== 'undefined') {
        return addBasicProperty?.data?.id || sessionStorage.getItem('property_id') || null;
      }
      return addBasicProperty?.data?.id || null;
    });
  
    useEffect(() => {
      if (addBasicProperty?.data?.id) {
        setProperty_id(addBasicProperty?.data?.id);
        sessionStorage.setItem('property_id', addBasicProperty?.data?.id);
      }
    }, [addBasicProperty?.data?.id]);
  
    useEffect(() => {
      if (property_id) {
        dispatch(getPoliciesApprovedThunk(property_id));
      }
    }, [dispatch, property_id]); 


  console.log(getPoliciesApproved);

  return (
    <>
      <div className='border border-[#E6E6E6] p-8 rounded-[3px]'>
        <div>
          <p className='text-[#364152] text-xl font-medium mb-3'>
            <span>{t('Step')} 6 :</span>
            <span>{t('Pricing')}</span>
          </p>
          <p className='text-[#697586] text-base font-normal'>{t('Enter your pricing details to begin adding them.')}</p>
          <div className='border border-[#CDD5DF] my-4'></div>
        </div>

          <PricingInfoPage/>
          <CancellationPolicyPage getPoliciesApproved={getPoliciesApproved}/>
          <PricingDetailsPage/>

      {/* btn */}
      <div className="flex justify-between mt-6">
        <div className='w-full '>
          <button
            onClick={prevStep}
            className=" w-[25%] h-15 border border-[#697586] text-[#697586] rounded-[3px] cursor-pointer"
          >
            {t('the previous')}
          </button>
        </div>
        
        <div className='flex gap-2 justify-end w-full '>
          <button
            className="h-15 w-[30%]  border border-[#697586] text-[#697586] rounded-[3px] cursor-pointer"
          >
            {t('Save draft')}
          </button>

          <button
            onClick={nextStep}
            className="h-15 w-[25%] bg-[var(--color-primary)] text-white rounded-[3px] cursor-pointer"
          >
            {t('the next')}
          </button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default PricingPage