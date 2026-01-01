"use client"
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SidebarMenuPage({ selectedMenu, setSelectedMenu }) {
  const {t}= useTranslation()
  const [openDropdown, setOpenDropdown] = useState(null)
  
  const menuItems = [
    {
      Label:'Company_data', 
      name:t('Company data'), 
      icon:'/images/icons/Company_dataBlack.svg', 
      iconSelected:'/images/icons/Company_dataWhite.svg',
      subItems: [
        {Label:'Company_info', name:t('Company information')},
        {Label:'Branch_management', name:t('Branch management')},
        {Label:'Tax_settings', name:t('Tax settings')},
      ]
    },
    {Label:'Personal_data', name:t('Personal data'), icon:'/images/icons/Personal_dataBlack.svg', iconSelected:'/images/icons/Personal_dataWhite.svg'},
    {Label:'Marketer_Panel', name:t('Marketer panel'), icon:'/images/icons/Marketer_PanelBlack.svg', iconSelected:'/images/icons/Marketer_PanelWhite.svg'},
    {Label:'Activity_settings', name:t('Activity settings'), icon:'/images/icons/Activity_settingsBlack.svg', iconSelected:'/images/icons/Activity_settingsWhite.svg'},
  ]
  
  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <>
      <ul className='py-6 px-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]'>
        {menuItems.map((item) => (
          <div key={item.Label}>
            <li 
              className={`p-6 text-base font-normal cursor-pointer transition-colors flex items-center gap-3 justify-between ${
                selectedMenu === item.Label 
                  ? 'bg-[var(--color-primary)] text-white' 
                  : 'hover:bg-gray-100 text-[#364152]'
              }`}
              onClick={() => {
                if (item.subItems) {
                  toggleDropdown(item.Label)
                } else {
                  setSelectedMenu(item.Label)
                }
              }}
            >
              <div className="flex items-center gap-3">
                {selectedMenu === item.Label ?(
                  <img src={item.iconSelected} alt={item.Label} className="w-5 h-5" />
                  ):(
                  <img src={item.icon} alt={item.Label} className="w-5 h-5" />
                  )
                }
                {item.name}
              </div>
              {item.subItems && (
                <svg 
                  className={`w-4 h-4 transition-transform ${openDropdown === item.Label ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </li>
            
            {/* Sub-items */}
            {item.subItems && openDropdown === item.Label && (
              <ul className="bg-gray-50">
                {item.subItems.map((subItem) => (
                  <li
                    key={subItem.Label}
                    className={`py-4 px-12 text-sm cursor-pointer transition-colors ${
                      selectedMenu === subItem.Label
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'hover:bg-gray-200 text-[#364152]'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedMenu(subItem.Label)
                    }}
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </>
  )
}

export default SidebarMenuPage