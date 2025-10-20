import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import CompleteSignupDataPage from './TemporaryDashboard/CompleteSignupData/page'
import WaitingApprovalPage from './TemporaryDashboard/waitingApproval/page'


function DashboardPage() {
  return (
    <MainLayout>
      {/* <CompleteSignupDataPage/> */}
      <WaitingApprovalPage />

    </MainLayout>
  )
}

export default DashboardPage