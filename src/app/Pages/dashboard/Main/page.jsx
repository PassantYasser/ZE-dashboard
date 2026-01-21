"use client"
import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const {t} = useTranslation()
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
  }

  return (
    <MainLayout>
      <div className='border border-[#E7E7E7] p-10 '>
        <div className='flex flex-col items-center mb-12'>
          <p className='text-[#232323] text-2xl font-medium mb-4'>{t('Service selection')}</p>
          <p className='text-[#656565] text-xl font-normal'>{t('Choose the service that best suits your needs')}</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`
                py-6 px-4 flex flex-col items-center transition-all duration-200 cursor-pointer
                border-1
                ${selectedService === service.id 
                  ? 'border-[var(--color-primary)]' 
                  : 'border-[#E3E8EF] '
                }
              `}
            >
              <img src={service.icon} alt={service.label} />
              <p className='text-[#364152] text-base mt-4'>{t(service.label)}</p>
            </button>
          ))}
        </div>

      </div>
      
    </MainLayout>
  )
}

export default MainPage