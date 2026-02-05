'use client'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import Header from './Header'
import SidebarMenuPage from './SidebarMenu/page'
import SectionOfMenuPage from './SectionOfMenu/page'

function ServicePage() {
    const [selectedMenu, setSelectedMenu] = useState('Battery operation')
  return (
    <MainLayout>   
      <>
        <Header/>

        <div className="flex gap-4 mt-14">
          <div className='w-[40%]' >
            <SidebarMenuPage selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
          </div>

          <div className='w-[65%]'>
          <SectionOfMenuPage selectedMenu={selectedMenu}/>
        </div>
        </div>
      </>
    </MainLayout>
  )
}

export default ServicePage