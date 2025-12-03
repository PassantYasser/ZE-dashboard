
"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  const { t } = useTranslation();

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    if (onPageChange) onPageChange(page);
  };

  const generatePages = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-between items-center mt-4 mb-3">
      {/* Prev Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-[#E3E8EF] hover:text-[#364152] disabled:bg-transparent disabled:text-[#364152] disabled:border disabled:cursor-not-allowed"
      >
        {t("the previous")}
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
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-[#E3E8EF] hover:text-[#364152] disabled:bg-transparent disabled:text-[#364152] disabled:border disabled:cursor-not-allowed"
      >
        {t("the next")}
      </button>
    </div>
  );
};

export default Pagination;
