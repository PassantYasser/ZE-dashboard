// import React, { useState } from 'react'
// import { useTranslation } from 'react-i18next'

// function SchedulePage() {
//   const {t}=useTranslation()
//   const days = [
//     "Saturday",
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//   ];

//   // keep track of selected days (array)
//   const [selectedDays, setSelectedDays] = useState([]);

//   const toggleDay = (day) => {
//     setSelectedDays((prev) =>
//       prev.includes(day)
//         ? prev.filter((d) => d !== day) // remove if already active
//         : [...prev, day] // add if not active
//     );
//   };
//   return (
//     <>
//       <section>
//         {/* title */}
//         <div className='flex justify-between mb-6'>
//           <p className='text-[#4B5565] text-base font-medium'>{t('days')}</p>
//           <div className='flex gap-2'>
//             <input type="checkbox" className='w-6 h-6 border border-[#CDD5DF]' />
//             <p className='text-[#4B5565] text-base font-normal'>{t('All days')}</p>
//           </div>
//         </div>
//         {/* box od days */}
//       <div className="flex flex-wrap gap-3">
//       {days.map((day) => (
//         <button
//           key={day}
//           onClick={() => toggleDay(day)}
//           className={`w-32 h-12 flex items-center justify-center rounded-[3px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] transition
//             ${
//               selectedDays.includes(day)
//                 ? "bg-[#C69815] border-[#C69815] text-white"
//                 : "bg-white border border-[#CDD5DF] text-[#364152]"
//             }`}
//         >
//           {t(day)}
//         </button>
//       ))}
//     </div>
//       </section>

//     </>
//   )
// }

// export default SchedulePage
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function SchedulePage() {
  const { t } = useTranslation()
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const [selectedDays, setSelectedDays] = useState([])
  // toggle one day
  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    )
  }
  // toggle all days
  const toggleAll = (e) => {
    if (e.target.checked) {
      setSelectedDays(days)
    } else {
      setSelectedDays([])
    }
  }
  // check if all selected
  const allSelected = selectedDays.length === days.length

  return (
  <>
      <section className='mb-12'>
        {/* title */}
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="w-6 h-6 border border-[#CDD5DF]"
              onChange={toggleAll}
              checked={allSelected}
            />
            <p className="text-[#4B5565] text-base font-normal">{t("All days")}</p>
          </div>
        </div>
    
        {/* box of days */}
        <div className="flex flex-wrap gap-5">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleDay(day)}
              className={`w-32 h-15 lg1:w-35 lg1:h-17 flex items-center justify-center border rounded-[3px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] transition
                ${
                  selectedDays.includes(day)
                    ? "bg-[#F9F5E8] border-[#C69815] text-[#C69815]"
                    : " border-[#CDD5DF] text-[#9AA4B2]"
                }`}
            >
              {t(day)}
            </button>
          ))}
        </div>
      </section>
    
      
  </>
  )
}

export default SchedulePage
