// "use client";
// import React, { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'

// function SchedulePage({handleNext , handlePrev}) {
//   const { t } = useTranslation()
  
//   const days = [
//     { id: 1, name: "Sunday" },
//     { id: 2, name: "Monday" },
//     { id: 3, name: "Tuesday" },
//     { id: 4, name: "Wednesday" },
//     { id: 5, name: "Thursday" },
//     { id: 6, name: "Friday" },
//     { id: 7, name: "Saturday" },

//   ];

//   const [selectedDay, setSelectedDay] = useState(days[0]);

//   const handleSelectDay = (day) => {
//     setSelectedDay(day);
//   };




//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [periods, setPeriods] = useState([]);

//   // ⬇️ Load saved periods (from sessionStorage)
//   useEffect(() => {
//     const savedPeriods = sessionStorage.getItem("timePeriods");
//     if (savedPeriods) {
//       setPeriods(JSON.parse(savedPeriods));
//     }
//   }, []);

//   // ⬇️ Save periods to sessionStorage whenever they change
//   useEffect(() => {
//     sessionStorage.setItem("timePeriods", JSON.stringify(periods));
//   }, [periods]);

//   const handleAddPeriod = () => {
//     if (from && to) {
//       setPeriods([...periods, { from, to }]);
//       setFrom("");
//       setTo("");
//     }
//   };

//   const handleRemove = (index) => {
//     const updated = periods.filter((_, i) => i !== index);
//     setPeriods(updated);
//   };
//   return (
//   <>
//     {/* days */}
//     <section className='mb-12'>
//       {/* title */}
//       <div className="flex justify-between mb-6">
//         <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
//       </div>
  
//       {/* box of days */}
//       <div className="flex gap-5 ">
//         {days.map((day) => (
//           <button
//             key={day.id}
//             onClick={() => handleSelectDay(day)}
//             className={`w-[141px] h-15 flex items-center justify-center border rounded-[3px] shadow-sm transition
//               ${
//                 selectedDay.id === day.id
//                   ? "bg-[#F9F5E8] border-[var(--color-primary)] text-[var(--color-primary)]"
//                   : "border-[#CDD5DF] text-[#9AA4B2]"
//               }`}
//           >
//             {t(day.name)}
//           </button>
//         ))}
//       </div>
//     </section>
  
//     {/* All the time */}
//       <section>
//       {/* title */}
//       <div className="flex justify-between mb-6">
//         <p className="text-[#4B5565] text-base font-medium">{t("the time")}</p>
//         <div className="flex gap-2 items-center">
//           <input type="checkbox" className="w-6 h-6 border border-[#CDD5DF]" />
//           <p className="text-[#4B5565] text-base font-normal">
//             {t("All the time")}
//           </p>
//         </div>
//       </div>

//       {/* Inputs */}
//       <div className="flex gap-6 mb-10">
//         <label className="flex items-center text-[#4B5565] text-xl font-normal">
//           {t("From")}
//         </label>
//         <input
//           type="time"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//           className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]"
//         />

//         <label className="flex items-center text-[#4B5565] text-xl font-normal">
//           {t("To")}
//         </label>
//         <input
//           type="time"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//           className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]"
//         />
//       </div>

//       {/* Add Button */}
//       <div className="flex justify-end mb-6">
//         <button
//           onClick={handleAddPeriod}
//           className="flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] w-[197px] h-14"
//         >
//           <img
//             src="/images/icons/AddYellowIcon.svg"
//             alt=""
//             className="w-6 h-6"
//           />
//           <p className="text-[var(--color-primary)] text-base font-medium cursor-pointer">
//             {t("Add period")}
//           </p>
//         </button>
//       </div>

//       {/* Added Periods */}
//       <div className="flex flex-col gap-3">
//         {periods.map((period, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center border border-[#C8C8C8] rounded-md p-3"
//           >
//             <p className="text-[#364152] text-base">
//               {t("From")}: <span className="font-medium">{period.from}</span> —{" "}
//               {t("To")}: <span className="font-medium">{period.to}</span>
//             </p>
//             <button
//               onClick={() => handleRemove(index)}
//               className="text-red-500 text-sm hover:underline"
//             >
//               {t("Remove")}
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>



      // {/* Display specific data for each day */}
      // <div className="mt-5 p-4 border rounded-md bg-gray-50">
      //   {selectedDay ? (
      //     <p className="text-gray-700">
      //       {t("Data for")} <strong>{t(selectedDay.name)}</strong> (ID:{" "}
      //       {selectedDay.id})
      //     </p>
      //   ) : (
      //     <p className="text-gray-400">{t("Please select a day")}</p>
      //   )}
      // </div>





















//     <div className="my-12 flex gap-3">
//       <button 
//         onClick={handlePrev} 
//         className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[var(--color-primary)] text-[var(--color-primary)] text-base font-medium cursor-pointer"
//       >
//         {t('the previous')}
//       </button>
//       <button
//         onClick={handleNext} 
//         className="border  w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[var(--color-primary)] text-[#fff] text-base font-medium cursor-pointer"
//       >
//           {t('the next')}
//       </button>
    
//     </div>



    
 
//   </>
//   )
// }

// export default SchedulePage
"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function SchedulePage({ handleNext, handlePrev }) {
  const { t } = useTranslation();

  const days = [
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
  ];

  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [periods, setPeriods] = useState([]);

  // 🔹 load saved periods for the selected day
  useEffect(() => {
    const savedPeriods = sessionStorage.getItem(`timePeriods_${selectedDay.id}`);
    if (savedPeriods) {
      setPeriods(JSON.parse(savedPeriods));
    } else {
      setPeriods([]);
    }
  }, [selectedDay]);

  // 🔹 save whenever periods change
  useEffect(() => {
    sessionStorage.setItem(
      `timePeriods_${selectedDay.id}`,
      JSON.stringify(periods)
    );
  }, [periods, selectedDay]);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const handleAddPeriod = () => {
    if (from && to) {
      const newPeriod = { from, to };
      setPeriods((prev) => [...prev, newPeriod]);
      setFrom("");
      setTo("");
    }
  };

  const handleRemove = (index) => {
    setPeriods((prev) => prev.filter((_, i) => i !== index));
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [rawTime, modifier] = time.split(" ");
    let [hours, minutes] = rawTime.split(":");
    hours = parseInt(hours);

    if (modifier?.toUpperCase() === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier?.toUpperCase() === "AM" && hours === 12) {
      hours = 0;
    }

    // Return in 24-hour format (HH:mm)
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  };

  return (
    <>
      {/* days */}
      <section className="mb-12">
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
        </div>

        <div className="flex gap-5">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => handleSelectDay(day)}
              className={`w-[141px] h-15 flex items-center justify-center border rounded-[3px] shadow-sm transition ${
                selectedDay.id === day.id
                  ? "bg-[#F9F5E8] border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-[#CDD5DF] text-[#9AA4B2]"
              }`}
            >
              {t(day.name)}
            </button>
          ))}
        </div>
      </section>

      {/* time section */}
      <section>
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("the time")}</p>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="w-6 h-6 border border-[#CDD5DF]" />
            <p className="text-[#4B5565] text-base font-normal">
              {t("All the time")}
            </p>
          </div>
        </div>

        <div className="flex gap-6 mb-10">
          <label className="flex items-center text-[#4B5565] text-xl font-normal">
            {t("From")}
          </label>
          <input
            type="time"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]"
          />

          <label className="flex items-center text-[#4B5565] text-xl font-normal">
            {t("To")}
          </label>
          <input
            type="time"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]"
          />
        </div>

        {/* Add Button */}
        <div className="flex justify-end mb-8 ml-6">
          <button
            onClick={handleAddPeriod}
            className="flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] w-[197px] h-14"
          >
            <img
              src="/images/icons/AddYellowIcon.svg"
              alt=""
              className="w-6 h-6"
            />
            <p className="text-[var(--color-primary)] text-base font-medium cursor-pointer">
              {t("Add period")}
            </p>
          </button>
        </div>

        {/* Added Periods */}
        {/* <div className="grid grid-cols-3  gap-5">
          {periods.map((period, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-[#9AA4B2] rounded-[3px] p-3"
            >
              <p className="text-[#4E4E4E] text-sm font-normal">
                <span>{formatTime(period.from)}</span> —{" "}
                <span>{formatTime(period.to)}</span>  
              </p>
              <button
                onClick={() => handleRemove(index)}
                className=" cursor-pointer"
              >
                <img src="/images/icons/delete-darkRed.svg" alt="" />
              </button>
            </div>
          ))}
        </div> */}
      </section>



      {/* Display specific data for each day */}
        <div className="mt-5  ">
          <label className="text-[#364152] text-base font-semibold ">{t('Added periods')}</label>
      
          <div className="mt-6">
              {periods.length > 0 ? (
                <div className="grid grid-cols-3 gap-5">
                  {periods.map((period, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border border-[#9AA4B2] rounded-[3px] p-3"
                    >
                      <p className="text-[#4E4E4E] text-sm font-normal">
                        <span>{formatTime(period.from)}</span> —{" "}
                        <span>{formatTime(period.to)}</span>
                      </p>
                      <button
                        onClick={() => handleRemove(index)}
                        className="cursor-pointer"
                      >
                        <img src="/images/icons/delete-darkRed.svg" alt="" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-[#FEC84B] bg-[#FEF0C7] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] p-3">
                  <p className="text-[#4E4E4E] text-sm font-medium">{t("No period has been added yet, select the dates and then click (Add Period) to start")}</p>
                </div>
              )
              }
          </div>
        </div>
















      {/* bottom nav */}
      <div className="my-12 flex gap-3">
        <button
          onClick={handlePrev}
          className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[var(--color-primary)] text-[var(--color-primary)] text-base font-medium cursor-pointer"
        >
          {t("the previous")}
        </button>
        <button
          onClick={handleNext}
          className="border w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[var(--color-primary)] text-[#fff] text-base font-medium cursor-pointer"
        >
          {t("the next")}
        </button>
      </div>
    </>
  );
}

export default SchedulePage;
