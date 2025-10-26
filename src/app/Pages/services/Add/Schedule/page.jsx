"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import dayjs from "dayjs";

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
  const [periods, setPeriods] = useState([]);
  const [mounted, setMounted] = useState(false); // ✅ fix for SSR safety

  // ✅ Only run after the component mounts (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Load saved periods for the selected day
  useEffect(() => {
    if (mounted) {
      const savedPeriods = sessionStorage.getItem(
        `timePeriods_${selectedDay.id}`
      );
      if (savedPeriods) {
        setPeriods(JSON.parse(savedPeriods));
      } else {
        setPeriods([]);
      }
    }
  }, [selectedDay, mounted]);

  // ✅ Save whenever periods change
  useEffect(() => {
    sessionStorage.setItem(`timePeriods_${selectedDay.id}`, JSON.stringify(periods));
  }, [periods, selectedDay]);

  // ✅ Get border color per day
  const getDaystyleColor = (day) => {
    if (!mounted) return "border-[#CDD5DF]"; // default for SSR

    const saved = sessionStorage.getItem(`timePeriods_${day.id}`);
    const hasPeriods = saved && JSON.parse(saved).length > 0;

    if (selectedDay.id === day.id) return "border-[var(--color-primary)]"; // selected
    if (hasPeriods) return "border-[#CDD5DF] bg-[#EDE7FD]"; // has time
    return "border-[#CDD5DF]"; // default
  };

  // ✅ Format 24-hour time
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  // ✅ FROM CLOCK STATES
  const [open1, setOpen1] = useState(false);
  const [tempTime, setTempTime] = useState(null);
  const [confirmedTime, setConfirmedTime] = useState(null);
  const formattedTime = confirmedTime ? dayjs(confirmedTime).format("HH:mm") : "";

  const handleOkClick = () => {
    setConfirmedTime(tempTime);
    setOpen1(false);
  };

  // ✅ TO CLOCK STATES
  const [open2, setOpen2] = useState(false);
  const [tempTime2, setTempTime2] = useState(null);
  const [confirmedTime2, setConfirmedTime2] = useState(null);
  const formattedTime2 = confirmedTime2 ? dayjs(confirmedTime2).format("HH:mm") : "";

  const handleOkClick2 = () => {
    setConfirmedTime2(tempTime2);
    setOpen2(false);
  };

  // ✅ Add Period and save in session
  const handleAddPeriod = () => {
    if (confirmedTime && confirmedTime2) {
      const newPeriod = {
        from: dayjs(confirmedTime).format("HH:mm"),
        to: dayjs(confirmedTime2).format("HH:mm"),
      };
      setPeriods((prev) => [...prev, newPeriod]);
      setConfirmedTime(null);
      setConfirmedTime2(null);
    }
  };

  const handleRemove = (index) => {
    setPeriods((prev) => prev.filter((_, i) => i !== index));
  };

  if (!mounted) {
    // ✅ Prevent rendering until after mount
    return null;
  }

  return (
    <>
      {/* Days Section */}
      <section className="mb-12">
        <div className="flex justify-between mb-6">
          <p className="text-[#4B5565] text-base font-medium">{t("days")}</p>
        </div>

        <div className="flex gap-5 flex-wrap">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day)}
              className={`w-[141px] h-15 flex items-center justify-center border rounded-[3px] shadow-sm transition text-base font-medium 
              ${getDaystyleColor(day)} 
              ${
                selectedDay.id === day.id
                  ? "bg-[#F9F5E8] text-[var(--color-primary)]"
                  : "text-[#9AA4B2]"
              }`}
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

        <section className="grid grid-cols-2 gap-6 mb-10">
          {/* From Time */}
          <div className="flex flex-col ">
            <div className="flex gap-6">
              <label className="flex items-center text-[#4B5565] text-xl font-normal">
                {t("From")}
              </label>
              <span
                onClick={() => setOpen1(!open1)}
                className="w-123 h-15 p-3 flex items-center border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none cursor-pointer"
              >
                {formattedTime || t("Select")}
              </span>
            </div>

            {open1 && (
              <div className="flex justify-end px-6">
                <div className="mt-2 w-[50%]">
                  <div className="w-full bg-[#eef2f6]">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className="w-full border border-[#C8C8C8] border-l-0 border-b-0">
                        <MultiSectionDigitalClock
                          value={tempTime}
                          onChange={(newValue) => setTempTime(newValue)}
                          ampm={false}
                          timeSteps={{ minutes: 15 }}
                          sx={{
                            width: "100%",
                            "& .MuiMultiSectionDigitalClock-root": { width: "100%" },
                            "& .MuiMultiSectionDigitalClockSection-root": { flex: 1 },
                          }}
                        />
                      </div>
                    </LocalizationProvider>
                    <div className="flex justify-start p-3 border-t-0 border border-[#C8C8C8]">
                      <button
                        onClick={handleOkClick}
                        className="bg-[var(--color-primary)] text-white px-4 py-1 rounded-[3px] w-[50%] cursor-pointer"
                      >
                        {t("addition")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* To Time */}
          <div className="flex flex-col">
            <div className="flex gap-6">
              <label className="flex items-center text-[#4B5565] text-xl font-normal">
                {t("To")}
              </label>
              <span
                onClick={() => setOpen2(!open2)}
                className="w-123 h-15 p-3 flex items-center border border-[#C8C8C8] rounded-[3px] text-[#364152] text-base focus:outline-none cursor-pointer"
              >
                {formattedTime2 || t("Select")}
              </span>
            </div>

            {open2 && (
              <div className="flex justify-end px-6">
                <div className="mt-2 w-[50%]">
                  <div className="w-full bg-[#eef2f6]">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div className="w-full border border-[#C8C8C8] border-l-0 border-b-0">
                        <MultiSectionDigitalClock
                          value={tempTime2}
                          onChange={(newValue) => setTempTime2(newValue)}
                          ampm={false}
                          timeSteps={{ minutes: 15 }}
                          sx={{
                            width: "100%",
                            "& .MuiMultiSectionDigitalClock-root": { width: "100%" },
                            "& .MuiMultiSectionDigitalClockSection-root": { flex: 1 },
                          }}
                        />
                      </div>
                    </LocalizationProvider>
                    <div className="flex justify-start p-3 border-t-0 border border-[#C8C8C8]">
                      <button
                        onClick={handleOkClick2}
                        className="bg-[var(--color-primary)] text-white px-4 py-1 rounded-[3px] w-[50%] cursor-pointer"
                      >
                        {t("addition")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Add Period Button */}
        <div className="flex justify-end mb-8 ml-6">
          <button
            onClick={handleAddPeriod}
            className="flex items-center justify-center border border-[var(--color-primary)] rounded-[3px] w-[197px] h-14"
          >
            <img src="/images/icons/AddYellowIcon.svg" alt="" className="w-6 h-6" />
            <p className="text-[var(--color-primary)] text-base font-medium cursor-pointer">
              {t("Add period")}
            </p>
          </button>
        </div>
      </section>

      {/* Added Periods */}
      <div className="mt-5">
        <label className="text-[#364152] text-base font-semibold">
          {t("Added periods")}
        </label>

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
                  <button onClick={() => handleRemove(index)} className="cursor-pointer">
                    <img src="/images/icons/delete-darkRed.svg" alt="" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-[#FEC84B] bg-[#FEF0C7] shadow p-3">
              <p className="text-[#4E4E4E] text-sm font-medium">
                {t(
                  "No period has been added yet, select the dates and then click (Add Period) to start"
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Nav */}
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
