"use client";
import React from 'react'
import { useTranslation } from 'react-i18next'

function SearchForm() {
  const {t}= useTranslation();

  return (
    <>
      <div className="relative w-[556px] ">
        <img
          src="/images/icons/search.svg"
          alt="search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        />
        <input
          type="text"
          placeholder={t("Search by worker name, job title, or phone number")}
          className="w-full h-14  pr-10 border border-[#C8C8C8] rounded-[3px] text-[#364152] placeholder-[#9AA4B2] focus:outline-none"
        />
      </div>
    </>
  )
}

export default SearchForm