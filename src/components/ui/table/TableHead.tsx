"use client";
import Image from "next/image";
import { useState } from "react";

interface TableHeadProps {
  headTitle: string;
  onSort?: (order: "asc" | "desc", title: string) => void;
  isSortable?: boolean;
  customClass?: string;
}
export default function TableHead({
  headTitle,
  customClass,
  onSort = () => {},
  isSortable = false,
}: TableHeadProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const handleClick = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    onSort(sortOrder, headTitle);
  };
  return (
    <div
      className={`flex items-center border-b-[1.5px] border-[#49656E33] ${customClass}`}
    >
      <span className="font-medium text-[13px] leading-4 text-[#15272D9E]">
        {headTitle}
      </span>
      {isSortable && (
        <button
          className="flex items-center px-1.5 py-2 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src="/sort-icon.svg"
            width={12}
            height={6}
            alt="sort"
            className={`mt-0.5 object-contain transition-all duration-200 ${
              sortOrder === "desc" ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
}
