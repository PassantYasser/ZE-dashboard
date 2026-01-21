"use client"
import HiddenItemsLayout from '@/app/Components/MainLayout/HiddenItemsLayout'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Module_key from './Module_key'

function MainPage() {
  const {t} = useTranslation()
  
  return (
    <HiddenItemsLayout>
      <div className='border border-[#E7E7E7] p-10 '>
          <Module_key/>
      </div>
      

    </HiddenItemsLayout>
  )
}

export default MainPage