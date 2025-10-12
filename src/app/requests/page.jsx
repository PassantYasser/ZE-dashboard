import React from 'react'
import MainLayout from '../Components/MainLayout/MainLayout'
import NavRequest from './NavRequest'
import TableRequest from './TableRequest'

function RequestsPage() {
  return (
    <MainLayout>

      <NavRequest/>

      <TableRequest/>


    </MainLayout>
  )
}

export default RequestsPage