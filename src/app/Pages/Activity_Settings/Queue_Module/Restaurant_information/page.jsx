'use client'
import React from 'react'
import BasicInformation from './BasicInformation'
import Header from './Header'
import RestaurantPhotos from './RestaurantPhotos'
import Location from './Location'
import BookingStatus from './BookingStatus'
import ContactInformation from './ContactInformation'

function Restaurant_informationPage() {
  return (
    <>
    <div className='border border-[#E3E8EF]'>
      <div>
        <Header/>
      </div>

      <div className='p-6 flex flex-col gap-4'>
        <BasicInformation/>
        <RestaurantPhotos/>
        <Location/>
        <BookingStatus/>
        <ContactInformation/>
      </div>
      
    </div>

      

    </>
  )
}

export default Restaurant_informationPage