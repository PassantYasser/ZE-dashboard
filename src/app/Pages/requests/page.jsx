'use client'
import React, { useEffect, useState } from 'react'
import NavRequest from './NavRequest'
import TableRequest from './TableRequest'
import Pagination from './Pagination'
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getBookingsThunk } from '@/redux/slice/Requests/RequestsSlice'

function RequestsPage() {
  const dispatch = useDispatch()
  const {bookings , loading , error, pagination } =useSelector((state)=>state.requests)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(()=>{
    dispatch(getBookingsThunk(currentPage))
  },[dispatch, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <MainLayout>

      <NavRequest/>

      <TableRequest bookings={bookings}/>

      <Pagination
        totalPages={pagination?.last_page || 1}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

    </MainLayout>
  )
}

export default RequestsPage