'use client'
import React, { useState } from 'react'
import MainLayout from '@/app/Components/MainLayout/MainLayout';
import SidebarMenuPage from './SidebarMenu/page';
import SectionOfMenuPage from './SectionOfMenu/page';
import Header from './Header';



function Activity_SettingsPage() {
  // const current_module_key ='خدمات السيارات'
  // let content;

  // if (current_module_key === 'خدمات السيارات' || current_module_key === 'خدمات المنازل' ) {
  //   content = <Home_Car_ModulePage />;
  // } else if (current_module_key === 'خدمات الطريق') {
  //   content = <StreetAssistant_ModulePage />;
  // } else {
  //   content = <div>المكون غير متاح</div>;
  // }

      const [selectedMenu, setSelectedMenu] = useState(40)
  
  return (
    <>
      {/* {content} */}
      <MainLayout>
              <Header/>

          <div className="flex gap-4 mt-14">
          <div className='w-[30%]' >
            <SidebarMenuPage selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
          </div>

          <div className='w-[70%]'>
            <SectionOfMenuPage selectedMenu={selectedMenu}/>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Activity_SettingsPage
