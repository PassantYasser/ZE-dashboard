"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const users = [
  {
    id: 1,
    name: "الاسم",
    lastMessage: "مرحبًا، أود استفسارًا عن بعض الأدوية ...",
    time: "5:32 ص",
    unread: false,
  },
  {
    id: 2,
    name: "الاسم",
    lastMessage: "مرحبًا، أود استفسارًا عن بعض الأدوية ...",
    time: "5:32 ص",
    unread: true,
  },
];

export default function UsersListPage({ selectedUser, setSelectedUser }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", label: t("All") },
    { id: "unread", label: t("Unread") },
    { id: "read", label: t("Read") },
  ];

  const filteredUsers = users.filter((user) => {
    if (activeFilter === "unread" && !user.unread) return false;
    if (activeFilter === "read" && user.unread) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      const matchName = user.name?.toLowerCase().includes(query);
      const matchMsg = user.lastMessage?.toLowerCase().includes(query);
      return matchName || matchMsg;
    }

    return true;
  });

  return (
    <div className="rounded-3px bg-white py-6 border border-[#d1d1d1] h-screen">
      <h2 className="text-[#28292A] text-xl px-4 font-normal mb-6">
        {t("All conversations")}
      </h2>

      {/* filter */}
      <div className="flex items-center px-3 border-b border-[#E4E7EC] mb-6">
        {tabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`h-[45px] px-4 flex items-center justify-center text-base cursor-pointer transition-colors duration-200 border-b-[3px] -mb-[1px] ${
                isActive
                  ? "text-primary border-primary font-normal"
                  : "text-[#666B6D] border-transparent hover:text-primary font-normal"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("Search")}
            className="w-full rounded-3px border border-[#666B6D3D] p-5 ps-12 outline-none"
          />

          <img
            src="/images/icons/search.svg"
            alt=""
            className="absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2"
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex flex-col gap-3">
        {filteredUsers.map((user) => (
          <button
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer ${
              selectedUser?.id === user.id ? "bg-gray-100" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              {/* Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white text-base">
                {user.name.charAt(0)}
              </div>

              {/* User Info */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-[#202939] text-base font-normal">
                  {user.name}
                </p>

                <p className="text-[#697586] text-sm font-normal">
                  {user.lastMessage}
                </p>
              </div>
            </div>

            <p className="text-[#697586] text-sm font-light">{user.time || "5:32 ص"}</p>
          </button>
        ))}
      </div>
    </div>
  );
}