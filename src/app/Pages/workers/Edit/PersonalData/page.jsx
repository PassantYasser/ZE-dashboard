"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function PersonalDataPage() {
  const { t } = useTranslation();
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/webp", "image/png", "image/svg+xml", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      alert(t("Please select a valid image file (WEBP, PNG, SVG, JPG)"));
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert(t("File size should not exceed 5MB"));
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleDeleteFile = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section>
    

      <div className="  w-[30%]">
        <div className="py-4 px-6">
          {!imagePreview ? (
            <>
              <div className="w-full flex justify-center mb-6">
                <div className="w-38 h-38  border border-[#CDD5DF] rounded-[138px] flex justify-center items-center ">
                    <span
                      className=" "
                      onClick={handleFileSelect}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleFileSelect();
                      }}
                    >
                      <img src="/images/Avatar Image.svg" alt="" />
                    </span>
                </div>
              </div>

              <div className=" ">
                <button
                  type="button"
                  className="w-full flex  justify-center gap-2 border text-[var(--color-primary)] font-medium py-2.5 px-4 rounded-[3px] cursor-pointer"
                  onClick={handleFileSelect}
                >
                <span>{t("Image selection")}</span>  
                <span><img src="/images/upload.svg" alt="" /></span>
                </button>
              </div>
            </>




          ) : (
            <div className="flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Company Logo"
                className="w-[112px] h-[112px] object-cover border border-[#EEF2F6] p-1 rounded-full"
              />

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="w-[150px] h-10 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-[3px] font-medium hover:bg-yellow-50 transition-colors"
                  onClick={handleFileSelect}
                >
                  {t("replace")}
                </button>
                <button
                  type="button"
                  className="w-[150px] h-10 border border-[#F04438] text-[#F04438] rounded-[3px] font-medium hover:bg-red-50 transition-colors"
                  onClick={handleDeleteFile}
                >
                  {t("delete")}
                </button>
              </div>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".webp,.png,.svg,.jpg,.jpeg,image/webp,image/png,image/svg+xml"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalDataPage;
