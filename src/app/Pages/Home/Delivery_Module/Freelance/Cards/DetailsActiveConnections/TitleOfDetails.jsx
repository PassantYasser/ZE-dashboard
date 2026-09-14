'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function TitleOfDetails() {
  const { t } = useTranslation()

  return (
    <motion.div
      className='flex gap-15 items-start'
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className='flex flex-col gap-1'>
        <p className='text-[#364152] text-2xl font-medium'>{t('Active connection')}</p>
        <p className='text-[#697586] text-xl font-normal'>
          <span>عاجل الان</span> - <span> ZT-PR-1245</span>
        </p>
      </div>

      <motion.p
        className='w-fit h-10 px-2 flex items-center bg-[#DBFFE8] rounded-lg text-[#16A34A] text-lg font-normal
          transition-shadow duration-200 cursor-default select-none'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.04, boxShadow: '0 2px 10px rgba(22,163,74,0.18)' }}
      >
        تم التأكيد
      </motion.p>
    </motion.div>
  )
}

export default TitleOfDetails