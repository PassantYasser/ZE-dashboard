'use client'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import OrderLimitSettingsPage from './OrderLimitSettings/page'
import PricingAndProfitSettingsPage from './PricingAndProfitSettings/page'
import FleetAndPermissionsSettingsPage from './FleetAndPermissionsSettings/page'
import { getShowSettingThunk } from '@/redux/slice/Setting/SettingSlice'
import { useDispatch, useSelector } from 'react-redux'

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}



function CompanyPage() {
  const { t } = useTranslation()

  //api
  const dispatch = useDispatch()
  const {getShowSetting} = useSelector((state)=>state.setting)

  useEffect(()=>{
    dispatch(getShowSettingThunk())
  },[dispatch])

  // console.log('getShowSetting' , getShowSetting);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className='flex flex-col gap-1' variants={fadeInUp}>
        <h1 className='text-[#364152] text-2xl font-medium'>{t('Connection unit settings')}</h1>
        <p className='text-[#697586] text-xl font-normal'>{t('Exclusive to a free connector. Managed independently of your account.')}</p>
      </motion.div>

      {/* Content wrapper */}
      <motion.div
        className='border border-[#CDD5DF] rounded-3px p-6 mt-10 mb-6'
        variants={fadeInUp}
      >
        <div className='grid grid-cols-2 gap-6'>
          <OrderLimitSettingsPage getShowSetting={getShowSetting} />
          <PricingAndProfitSettingsPage getShowSetting={getShowSetting} />
        </div>
        <FleetAndPermissionsSettingsPage getShowSetting={getShowSetting}/>
      </motion.div>
    </motion.div>
  )
}

export default CompanyPage