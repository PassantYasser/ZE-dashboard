"use client"
import React from 'react'
import Company_dataPage from './Company_data/page'
import Personal_dataPage from './Personal_data/page'
import Marketer_PanelPage from './Marketer_Panel/page'
import Activity_settingsPage from './Activity_settings/page'

function SectionOfMenuPage({ selectedMenu }) {
  const renderContent = () => {
    switch(selectedMenu) {
      case 'Company_data':
        return (
          <Company_dataPage />
        )
      case 'Personal_data':
        return (
        <Personal_dataPage />
        )
      case 'Marketer_Panel':
        return (
          <Marketer_PanelPage/>
        )
      case 'Activity_settings':
        return (
          <Activity_settingsPage/>
        )
      default:
        return (
          <div className='p-6'>
            <p>Please select a menu item</p>
          </div>
        )
    }
  }

  return (
    <div>{renderContent()}</div>
  )
}

export default SectionOfMenuPage