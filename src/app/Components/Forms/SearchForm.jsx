"use client";
import React from 'react'
import { useTranslation } from 'react-i18next'

function SearchForm({ placeholderKey }) {
  const {t}= useTranslation();
// 546--556
  return (
    <>
      <div className="relative w-[546px] lg1:w-[556px] h-14 ">
        <img
          src="/images/icons/search.svg"
          alt="search"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        />
        <input
          type="text"
          placeholder={t(placeholderKey)}
          className="w-full h-14  pr-10 border border-[#C8C8C8] rounded-[3px] text-[#364152] placeholder-[#9AA4B2] focus:outline-none"
        />
      </div>
    </>
  )
}

export default SearchForm