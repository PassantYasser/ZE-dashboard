'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import TitleOfDetails from './TitleOfDetails'
import TrackingStatus from './TrackingStatus'
import DeliveryPoints from './DeliveryPoints'
import DriverDetails from './DriverDetails'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function DetailsActiveConnectionsContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const { t } = useTranslation()

  return (
    <MainLayout>

      {/* DetailsActiveConnectionsPage {id ? `(ID: ${id})` : ''} */}

      <TitleOfDetails />
      <div className='grid grid-cols-2 gap-6 mt-10'>
        <TrackingStatus />
        <DeliveryPoints />
      </div>

      <DriverDetails />

      {/* btn */}
      <motion.div
        className="flex justify-between w-full mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.button
          type="button"
          className="border border-[#697586] w-[20%] h-14 cursor-pointer text-[#697586] text-base font-semibold rounded-3px"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 4px 14px rgba(105,117,134,0.15)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {t('Return')}
        </motion.button>

        <motion.button
          type="button"
          className="bg-primary w-[20%] h-14 cursor-pointer text-white text-base font-semibold rounded-3px"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 6px 20px rgba(0,0,0,0.18)',
            filter: 'brightness(1.06)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {t('Proceed to the pickup point')}
        </motion.button>
      </motion.div>

    </MainLayout>
  )
}

function DetailsActiveConnectionsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsActiveConnectionsContent />
    </Suspense>
  )
}

export default DetailsActiveConnectionsPage