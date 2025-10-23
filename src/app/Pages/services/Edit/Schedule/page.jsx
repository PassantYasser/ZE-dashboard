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

  const [mounted, setMounted] = useState(false); // ✅ for client-only
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [periods, setPeriods] = useState([]);

  // ✅ mark component as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔹 load saved periods only after mounted
  useEffect(() => {
    if (!mounted) return;
    const savedPeriods = sessionStorage.getItem(`timePeriods_${selectedDay.id}`);
    setPeriods(savedPeriods ? JSON.parse(savedPeriods) : []);
  }, [selectedDay, mounted]);

  // 🔹 save periods whenever they change
  useEffect(() => {
    if (!mounted) return;
    sessionStorage.setItem(
      `timePeriods_${selectedDay.id}`,
      JSON.stringify(periods)
    );
  }, [periods, selectedDay, mounted]);

  const handleAddPeriod = () => {
    if (from && to) {
      setPeriods((prev) => [...prev, { from, to }]);
      setFrom("");
      setTo("");
    }
  };

  const handleRemove = (index) => {
    setPeriods((prev) => prev.filter((_, i) => i !== index));
  };

  const getDayStyleColor = (day) => {
    if (!mounted) return "border-[#CDD5DF]"; // fallback for SSR
    const saved = sessionStorage.getItem(`timePeriods_${day.id}`);
    const hasPeriods = saved && JSON.parse(saved).length > 0;

    if (selectedDay.id === day.id) return "border-[var(--color-primary)]";
    if (hasPeriods) return "border-[#CDD5DF] bg-[#EDE7FD]";
    return "border-[#CDD5DF]";
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [rawTime, modifier] = time.split(" ");
    let [hours, minutes] = rawTime.split(":");
    hours = parseInt(hours);

    if (modifier?.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (modifier?.toUpperCase() === "AM" && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  };

  if (!mounted) return null; // avoid SSR errors

  return (
    <>
      {/* Days */}
      <section className="mb-12">
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
        </div>
        <div className="flex gap-5">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day)}
              className={`w-[141px] h-15 flex items-center justify-center border rounded-[3px] shadow-sm transition text-base font-medium 
                ${getDayStyleColor(day)} 
                ${selectedDay.id === day.id ? "bg-[#F9F5E8] text-[var(--color-primary)]" : "text-[#9AA4B2]"}`}
            >
              {t(day.name)}
            </button>
          ))}
        </div>
      </section>

      {/* Time Section */}
      <section>
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("the time")}</p>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="w-6 h-6 border border-[#CDD5DF]" />
            <p className="text-[#4B5565] text-base font-normal">{t("All the time")}</p>
          </div>
        </div>
        <div className="flex gap-6 mb-10">
          <label className="flex items-center text-[#4B5565] text-xl font-normal">{t("From")}</label>
          <input type="time" value={from} onChange={(e) => setFrom(e.target.value)} className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]" />
          <label className="flex items-center text-[#4B5565] text-xl font-normal">{t("To")}</label>
          <input type="time" value={to} onChange={(e) => setTo(e.target.value)} className="w-123 h-15 p-3 border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none focus:ring-2 focus:ring-[#C69815]" />
        </div>

        <div className="flex justify-end mb-8 ml-6">
          <button onClick={handleAddPeriod} className="flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] w-[197px] h-14">
            <img src="/images/icons/AddYellowIcon.svg" alt="" className="w-6 h-6" />
            <p className="text-[var(--color-primary)] text-base font-medium cursor-pointer">{t("Add period")}</p>
          </button>
        </div>
      </section>

      {/* Display periods */}
      <div className="mt-5">
        <label className="text-[#364152] text-base font-semibold">{t("Added periods")}</label>
        <div className="mt-6">
          {periods.length > 0 ? (
            <div className="grid grid-cols-3 gap-5">
              {periods.map((period, index) => (
                <div key={index} className="flex justify-between items-center border border-[#9AA4B2] rounded-[3px] p-3">
                  <p className="text-[#4E4E4E] text-sm font-normal">
                    <span>{formatTime(period.from)}</span> — <span>{formatTime(period.to)}</span>
                  </p>
                  <button onClick={() => handleRemove(index)} className="cursor-pointer">
                    <img src="/images/icons/delete-darkRed.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-[#FEC84B] bg-[#FEF0C7] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] p-3">
              <p className="text-[#4E4E4E] text-sm font-medium">{t("No period has been added yet, select the dates and then click (Add Period) to start")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="my-12 flex gap-3">
        <button onClick={handlePrev} className="border w-48 h-13.5 py-2.5 px-4 rounded-[3px] border-[var(--color-primary)] text-[var(--color-primary)] text-base font-medium cursor-pointer">{t("the previous")}</button>
        <button onClick={handleNext} className="border w-58 h-13.5 py-2.5 px-4 rounded-[3px] bg-[var(--color-primary)] text-[#fff] text-base font-medium cursor-pointer">{t("the next")}</button>
      </div>
    </>
  );
}

export default SchedulePage;
