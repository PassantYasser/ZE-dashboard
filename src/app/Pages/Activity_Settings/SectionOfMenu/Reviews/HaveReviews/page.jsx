

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function HaveReviewsPage({ handleClose }) {
  const { t } = useTranslation();

  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleExpanded = (index) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const maxLength = 90;

  // ✅ Mock Data بدل service جاي من backend
  const ratings = [
    {
      id: 1,
      rating: 4.5,
      review:
        "The service was very good and fast. I really appreciate the professionalism and the quick response from the team.",
      created_at: "2026-02-15",
      user: {
        name: "Ahmed",
        lastname: "Ali",
      },
    },
    {
      id: 2,
      rating: 5,
      review:
        "Excellent experience! Everything was smooth and well organized. Highly recommended.",
      created_at: "2026-02-14",
      user: {
        name: "Sara",
        lastname: "Mohamed",
      },
    },
  ];


/** for random colors */
  const avatarColors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-yellow-400",
  "bg-indigo-400",
];
const getAvatarColor = (name) => {
  if (!name) return "bg-gray-400";
  const charCode = name.charCodeAt(0);
  return avatarColors[charCode % avatarColors.length];
};

  return (
    <>
        {ratings.map((rating, index) => {
          const text = rating?.review || "";
          const isLong = text.length > maxLength;
          const shortText = text.slice(0, maxLength);
          const expanded = expandedIndexes[index] || false;

          return (
            <section className="p-4 " key={rating.id}>
              <div className="border-b border-[#CDD5DF]">
                <div className="flex justify-between">
                  <div className="flex mb-4 gap-3">
                    <p
                      className={`${getAvatarColor(rating?.user?.name)} 
                      w-10 h-10 flex justify-center items-center rounded-full p-2 mt-2 text-white`}
                    >
                      {rating?.user?.name?.charAt(0)}
                    </p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#364152] text-base font-medium">
                        {rating?.user?.name} {rating?.user?.lastname}
                      </p>
                      <p className="text-[#697586] text-sm font-normal">
                        {new Date(rating.created_at).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="flex gap-1.5 ">
                      <span className="text-[#8B8B8B] ">#</span>
                      <Link href='#' className="text-[#4D0CE7] text-sm font-medium underline ">6504</Link>
                    </p>
                    <div className="flex gap-1  mr-2">
                      <img
                        src="/images/icons/star.svg"
                        alt=""
                        className="w-4 h-4 "
                      />
                      <p className="text-[#FDB022] text-sm font-medium">
                        {rating?.rating}
                      </p>
                    </div>

                  </div>
                </div>

                <div>
                  <p className="mb-4 text-[#4B5565] text-sm font-normal">
                    {expanded || !isLong ? text : shortText + "... "}
                    {isLong && (
                      <span
                        onClick={() => toggleExpanded(index)}
                        className="text-[#4D0CE7] text-sm font-normal cursor-pointer"
                      >
                        {expanded ? t("Show less") : t("Read more")}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        <div className="w-full h-px bg-[#CDD5DF]"></div>

    </>
  );
}

export default HaveReviewsPage;
