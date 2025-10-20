import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import CompleteSignupDataPage from './TemporaryDashboard/CompleteSignupData/page'
import WaitingApprovalPage from './TemporaryDashboard/waitingApproval/page'
import RejectAccountPage from './TemporaryDashboard/RejectAccount/page'
import AcceptAccountPage from './TemporaryDashboard/AcceptAccount/page'


function DashboardPage() {
  return (
    <MainLayout>
      {/* <CompleteSignupDataPage/> */}
      {/* <WaitingApprovalPage /> */}
      {/* <RejectAccountPage/> */}
      <AcceptAccountPage/>

    </MainLayout>
  )
}

export default DashboardPage