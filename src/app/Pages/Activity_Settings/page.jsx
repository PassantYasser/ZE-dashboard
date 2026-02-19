'use client'
import React, { useState } from 'react'
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import SidebarMenuPage from './SidebarMenu/page';
import SectionOfMenuPage from './SectionOfMenu/page';
import Header from './Header';



function Activity_SettingsPage() {
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
  const current_module_key = userData?.current_module_key

  const [selectedMenu, setSelectedMenu] = useState(1)
  
  return (
    <>
      {/* {content} */}
      <MainLayout>
              <Header current_module_key={current_module_key}/>

          <div className="flex gap-4 mt-14">
          <div className='w-[25%]' >
            <SidebarMenuPage selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
          </div>

          <div className='w-[75%]'>
            <SectionOfMenuPage selectedMenu={selectedMenu}/>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Activity_SettingsPage
