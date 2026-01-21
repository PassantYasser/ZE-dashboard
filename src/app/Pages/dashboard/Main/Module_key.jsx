"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

function Module_key() {
    const {t} = useTranslation()
    const router = useRouter()
    const [selectedService, setSelectedService] = useState(null)
  
    const services = [
      { id: 'road', icon: '/images/Road services.svg', label: 'Road services' },
      { id: 'delivery', icon: '/images/Delivery services.svg', label: 'Delivery services' },
      { id: 'home', icon: '/images/Home services.svg', label: 'Home services' },
      { id: 'car', icon: '/images/Car services.svg', label: 'Car services' },
      { id: 'restaurant', icon: '/images/Restaurant reservations.svg', label: 'Restaurant reservations' },
      { id: 'renting', icon: '/images/Renting houses.svg', label: 'Renting houses' },
    ]
  
    const handleServiceClick = (serviceId) => {
      setSelectedService(serviceId)
      
      // Get user data from localStorage
      const userData = localStorage.getItem('user')
      
      if (userData) {
        const user = JSON.parse(userData)
        const { national_id, status, has_subscription } = user
        
        // Check conditions and route accordingly
        if (national_id === null) {
          router.push('/Pages/dashboard/TemporaryDashboard/CompleteSignupData')
        } else if (status === 'pending') {
          router.push('/Pages/dashboard/TemporaryDashboard/StatusOfProvider/waitingApproval')
        } else if (status === 'rejected') {
          router.push('/Pages/dashboard/TemporaryDashboard/StatusOfProvider/RejectAccount')
        } else if (status === 'active') {
          if (has_subscription === true) {
            console.log('home') // Print "home" for now
            // router.push('/Pages/home')
          } else {
            router.push('/Pages/dashboard/TemporaryDashboard/StatusOfProvider/AcceptAccount')
          }
        }
      }
    }
    
  return (
    <>
    
        <div className='flex flex-col items-center mb-12'>
          <p className='text-[#232323] text-2xl font-medium mb-4'>{t('Service selection')}</p>
          <p className='text-[#656565] text-xl font-normal'>{t('Choose the service that best suits your needs')}</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`
                py-6 px-4 flex flex-col items-center transition-all duration-200 cursor-pointer rounded-[3px]
                border-1
                ${selectedService === service.id 
                  ? 'border-[var(--color-primary)]' 
                  : 'border-[#E3E8EF] hover:border-[var(--color-primary)]'
                }
              `}
            >
              <img src={service.icon} alt={service.label} />
              <p className='text-[#364152] text-base mt-4'>{t(service.label)}</p>
            </button>
          ))}
        </div>
    </>
  )
}

export default Module_key