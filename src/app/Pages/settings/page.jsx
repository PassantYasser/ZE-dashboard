"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import SidebarMenuPage from './SidebarMenu/page'
import SectionOfMenuPage from './SectionOfMenu/page'

function SettingsPage() {
  const [selectedMenu, setSelectedMenu] = useState('Company_data')

  return (
    <MainLayout>
      <div className="flex gap-4 ">
        <div className='w-[40%]'>
          <SidebarMenuPage 
            selectedMenu={selectedMenu} 
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className='w-[65%]'>
          <SectionOfMenuPage selectedMenu={selectedMenu} />
        </div>
      </div>
    </MainLayout>
  )
}

export default SettingsPage