'use client'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './Header'
import DepositSetup from './DepositSetup'
import PaymentSettings from './PaymentSettings'
import NoShowFees from './NoShowFees'
import { useDispatch, useSelector } from 'react-redux'
import { editPaymentSettingsThunk, getPaymentSettingsThunk } from '@/redux/slice/Setting/SettingSlice'


function PaymentsPage() {
  const {t} = useTranslation()
  //api
  const dispatch = useDispatch()
  const {getPaymentSettings} = useSelector((state)=>state.setting)
  useEffect(()=>{
    dispatch(getPaymentSettingsThunk())
  },[dispatch])

  const [formData , setFormData] = useState({
    'payment_mode':'',
    'deposit_value':'',
    'deposit_type':'',
    'apply_deposit_to_invoice':1,
    'no_show_fee_enabled':1,
  })

  useEffect(() => {
    if (getPaymentSettings) {
      setFormData({
        payment_mode: getPaymentSettings.payment_mode ?? "",
        deposit_value: getPaymentSettings.deposit_value ?? "",
        deposit_type: getPaymentSettings.deposit_type ?? "",
        apply_deposit_to_invoice: getPaymentSettings.apply_deposit_to_invoice ? 1 : 0,
        no_show_fee_enabled: getPaymentSettings.no_show_fee_enabled ? 1 : 0,
      });
    }
  }, [getPaymentSettings]);

  const handleSubmit = async ()=>{
    try{
      await dispatch(editPaymentSettingsThunk(formData)).unwrap()
      await dispatch(getPaymentSettingsThunk())
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
  <div className='border border-[#E3E8EF] mb-4'>
          <div>
            <Header/>
          </div>
    
          <div className='p-6 flex flex-col gap-4'>
            <PaymentSettings formData={formData} setFormData={setFormData}/>
            <DepositSetup formData={formData} setFormData={setFormData}/>
            <NoShowFees formData={formData} setFormData={setFormData}/>
        
            <button onClick={handleSubmit} className='w-[30%] bg-[var(--color-primary)] text-white h-14 rounded-[3px] cursor-pointer'>
            {t('Save changes')}
          </button>
          </div>
    
          
          
      </div>

    </>
  )
}

export default PaymentsPage