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
  const {bookings ,bookingDetails, loading , error, pagination } =useSelector((state)=>state.requests)
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({})

  useEffect(()=>{
    dispatch(getBookingsThunk({ page: currentPage, ...filters }))
  },[dispatch, currentPage, filters])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  const handleResetFilters = () => {
    setFilters({})
    setCurrentPage(1)
  }

  return (
    <MainLayout>

      <NavRequest onApplyFilters={handleApplyFilters} onResetFilters={handleResetFilters} />

      <TableRequest bookings={bookings} bookingDetails={bookingDetails}/>

      <Pagination
        totalPages={pagination?.last_page || 1}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

    </MainLayout>
  )
}

export default RequestsPage