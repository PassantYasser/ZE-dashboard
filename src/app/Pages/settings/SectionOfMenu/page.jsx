"use client"
import React from 'react'
import Company_dataPage from './Company_data/page'
import Personal_dataPage from './Personal_data/page'
import Marketer_PanelPage from './Marketer_Panel/page'
import Activity_settingsPage from './Activity_settings/page'
import BasicInformationPage from './Company_data/BasicInformation/page'
import YourFilesPage from './Company_data/YourFiles/page'
import ContactInformationPage from './Company_data/ContactInformation/page'
import ChangePasswordPage from './Company_data/ChangePassword/page'
import CompanyAddressPage from './Company_data/CompanyAddress/page'

function SectionOfMenuPage({ selectedMenu }) {
  const renderContent = () => {
    switch(selectedMenu) {
      case 'Company_data':
        return (
          <Company_dataPage />
        )
      case 'BasicInformation':
        return (
          <BasicInformationPage />
        )
      case 'YourFiles':
        return (
          <YourFilesPage />
        )
      case 'ContactInformation':
        return (
          <ContactInformationPage />
        )
      case 'ChangePassword':
        return (
          <ChangePasswordPage />
        )
      case 'CompanyAddress':
        return (
          <CompanyAddressPage />
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
    
    }
  }

  return (
    <div>{renderContent()}</div>
  )
}

export default SectionOfMenuPage