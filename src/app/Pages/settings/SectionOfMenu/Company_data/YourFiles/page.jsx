
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import Header from "./Header";

function YourFilesPage({userData}) {
  const { t } = useTranslation();

  const cr_end_date = userData?.cr_end_date; 
  const tax_card_end_date = userData?.tax_card_end_date;     
  const id_end_date = userData?.id_end_date; 
  // const idBackDate = null;                 

  const [files, setFiles] = useState({
    commercialRecord: {
      key: "commercialRecord",
      label: 'Your business record',
      file: null, 
      endDate: cr_end_date,
    },
    taxCard: {
      key: "taxCard",
      label: "Tax Card",
      file: null,
      endDate: tax_card_end_date,
    },
    idFront: {
      key: "idFront",
      label: "Front national ID card photo",
      file: null,
      endDate: id_end_date,
    },
    idBack: {
        key: "idBack",
        label: "Back national ID card photo",
      file: null, 
      endDate: id_end_date,
    },
  });
  
//api
  useEffect(() => {
    if (userData) {
      const getFileObj = (url) => {
        if (!url) return null;
        const name = url.split('/').pop();
        const type = name.split('.').pop().toUpperCase();
        return {
          name: name,
          size: "Existing", 
          type: type,
          url: url
        };
      };

      setFiles(prev => ({
        ...prev,
        commercialRecord: {
          ...prev.commercialRecord,
          file: getFileObj(userData.commercial_register) || prev.commercialRecord.file
        },
        taxCard: {
          ...prev.taxCard,
          file: getFileObj(userData.tax_card) || prev.taxCard.file
        },
        idFront: {
          ...prev.idFront,
          file: getFileObj(userData.id_front) || prev.idFront.file
        },
        idBack: {
          ...prev.idBack,
          file: getFileObj(userData.id_back) || prev.idBack.file
        }
      }));
    }
  }, [userData]);

  const checkEndDate = (date) => {
    const today = dayjs();
    const endDate = dayjs(date);
    const diffInDays = endDate.diff(today, "day");

    if (diffInDays <= 0 && date) {
      return {
        status: "expired",
        message: t("This file must be updated immediately to avoid account suspension."),
        color: "#F04438",
        icon: "/images/icons/red warning.svg",
      };
    } else if (diffInDays < 30 && date) { 
      return {
        status: "warning",
        message: t("This file needs to be updated before its expiry date"),
        color: "#DC6803",
        icon: "/images/icons/orange warning.svg",
        date: date,
      };
    } else if (!date) {
      return {
        status: "waiting",
        message: t("This file has not yet been reviewed."),
        color: "#697586",
        icon: "/images/icons/remove-circle.svg",
      };
    } else {
      return { status: "done", message: "" };
    }
  };

  const renderStatusAction = (status, inputRef) => {
    switch (status) {
      case "expired":
      case "warning":
        return (
          <button className="p-2 cursor-pointer" onClick={() => inputRef.current.click()}>
            <img src="/images/icons/EditYellow.svg" alt="edit" />
          </button>
        );
      case "waiting":
        return <img src="/images/icons/remove-circle.svg" alt="waiting" />;
      case "done":
        return <img src="/images/icons/_Checkbox base.svg" alt="done" />;
      default:
        return null;
    }
  };

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop().toUpperCase();
      const sizeKB = Math.round(file.size / 1024);
      setFiles((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          file: {
            name: file.name,
            size: `${sizeKB} KB`,
            type: extension,
            url: URL.createObjectURL(file),
          },
        },
      }));
    }
  };

  // Refs for file inputs
  const inputRefs = {
    commercialRecord: useRef(null),
    taxCard: useRef(null),
    idFront: useRef(null),
    idBack: useRef(null),
  };

  return (
    <div className="border border-[#E3E8EF] mb-8">
      <Header />

      <section className="p-6 space-y-6">
        {Object.values(files).map((item) => {
          const { status, message, color, icon, date } = checkEndDate(
            item.endDate
          );

          return (
            <div key={item.key} className="flex flex-col w-full gap-2">
              <label className="text-[#364152] text-base font-normal">
                {t(item.label)}
              </label>

              <div className="flex items-center p-4 border border-[#CDD5DF] rounded-[3px] gap-4 bg-white shadow-sm">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <img
                    src="/images/filephoto.svg"
                    className="w-12 h-12"
                    alt="file"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src="/images/icons/imageicon.svg"
                    }} 
                  />
                  {item.file && (
                    <span className="absolute bottom-0 right-2 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      {item.file.type}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-[#344054] font-medium text-sm">
                    {item.file ? item.file.name : t("No file chosen")}
                  </p>
                  {item.file && (
                    <p className="text-[#697586] font-medium text-xs">{item.file.size}</p>
                  )}
                </div>

                {renderStatusAction(status, inputRefs[item.key])}
              </div>

              <input
                type="file"
                ref={inputRefs[item.key]}
                className="hidden"
                onChange={(e) => handleFileChange(e, item.key)}
              />

              {/* Status Message */}
              {(status === "warning" || status === "expired" || status === "waiting") && (
                <div style={{ color }} className="flex gap-2 items-center mt-1">
                  {icon && <img src={icon} alt="" className="w-5 h-5" />}
                  <p className="text-sm font-normal">
                    {message} {date ? `(${dayjs(date).format("YYYY-MM-DD")})` : ""}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* btn */}
        <button className="bg-[var(--color-primary)] h-15 w-62.5 text-[#fff] text-base font-medium rounded-[3px] mt-6">
          {t('Save changes')}
        </button>
      </section>
    </div>
  );
}

export default YourFilesPage;
