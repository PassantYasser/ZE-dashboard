
"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Pagination = () => {
  const{t}=useTranslation()
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // عدد الصفحات الكلي

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };


  const generatePages = () => {
    const pages = [];

    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      for (let i = 1; i <= 5; i++) pages.push(i);

      pages.push("...");

      for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
    }

    return pages;
  };

  const pages = generatePages();


  //the prev
  const [isHovered, setIsHovered] = useState(false);
  const isDisabled = currentPage === 1;

  //the next 
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const isDisabledNext = currentPage === totalPages;


  return (
    <div className="flex justify-between items-center mt-4 mb-2">
      {/* Prev Button */}
      {/* <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border  flex rounded-[3px]   ${
          currentPage === 1
            ? "text-[#364152] border border-[#697586] "
            : "cursor-pointer hover:bg-[#E3E8EF] hover:border-[#697586] hover:border hover:text-[#364152] bg-[var(--color-primary)]  text-white"
        }`}
      >
        <img
          src={
            currentPage === 1
              ? "/images/icons/arrow-right.svg" 
              : "/images/icons/arrow-right-white.svg"
          }
          
        />
        <span>{t("the previous")}</span>

          
      </button> */}
      <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-4 py-2 flex items-center gap-2 rounded-[3px] transition ${
        isDisabled
          ? "text-[#364152] border border-[#697586] cursor-not-allowed bg-transparent"
          : "cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[#E3E8EF] hover:border hover:border-[#697586] hover:text-[#364152]"
      }`}
    >
      <img
        src={
          isDisabled
            ? "/images/icons/arrow-right.svg"
            : isHovered
            ? "/images/icons/arrow-right.svg" // 👈 change icon on hover
            : "/images/icons/arrow-right-white.svg"
        }
        alt="arrow"
      />
      <span>{t("the previous")}</span>
    </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
            className={`px-3 py-1 text-sm font-medium rounded-md w-10 h-10 transition ${
              page === currentPage
                ? "text-white bg-[var(--color-primary)]"
                : page === "..."
                ? "text-gray-500 cursor-default"
                : "border border-[#CDD5DF] text-[#697586] hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
    
        {/* <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2  flex rounded-[3px]  ${
        currentPage === totalPages
            ? "text-[#364152] border border-[#697586] "
            : "cursor-pointer hover:bg-[#E3E8EF] hover:border-[#697586] hover:border hover:text-[#364152] bg-[var(--color-primary)] text-white"
        }`}
      >
        <span>{t("the next")}</span>
        <img
          src={
            currentPage === totalPages
              ? "/images/icons/arrow-left.svg" 
              : "/images/icons/arrow-left-white.svg"
          }
          
        />


          
      </button> */}

      <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={isDisabledNext}
      onMouseEnter={() => setIsHoveredNext(true)}
      onMouseLeave={() => setIsHoveredNext(false)}
      className={`px-4 py-2 flex items-center gap-2 rounded-[3px] transition ${
        isDisabledNext
          ? "text-[#364152] border border-[#697586] cursor-not-allowed bg-transparent"
          : "cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[#E3E8EF] hover:border hover:border-[#697586] hover:text-[#364152]"
      }`}
    >
      <span>{t("the next")}</span>
      <img
        src={
          isDisabledNext
            ? "/images/icons/arrow-left.svg"
            : isHoveredNext
            ? "/images/icons/arrow-left.svg" // 👈 change this icon on hover
            : "/images/icons/arrow-left-white.svg"
        }
        alt="arrow"
      />
    </button>
    </div>
  );
};

export default Pagination;
