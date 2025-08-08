"use client";
import useNavigation from "@/hooks/use-navigation";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  //   return (
  //     <>
  //       <Link href="/dashboard">Dashboard</Link>
  //       <Link href="/transactions">Transactions</Link>{" "}
  //       <Link href="/reports">Reports</Link>{" "}
  //       <Link href="/settings">Settings</Link>;
  //     </>
  //   );

  ////////////////////////////////////////////////////////
  const {
    isDashboardActive,
    isTransactionActive,
    isReportActive,
    isSettingsActive,
  } = useNavigation();

  return (
    <nav className="flex-col space-y-2 items-center py-7 hidden sm:flex  h-full  w-[120] md:w-1/4 md:items-start ">
      <Link
        href="/dashboard"
        className={`space-x-4 items-center py-1 pl-4.5 w-full  rounded-full duration-200 hover:bg-white/10 relative ${
          isDashboardActive ? "bg-white/10 text-primary" : ""
        }`}
      >
        <span className={`font-[15px] ${isDashboardActive ? "font-bold" : ""}`}>
          Dashboard
        </span>
      </Link>

      <Link
        href="/transactions"
        // className=" space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
        className={`space-x-4 items-center py-1 pl-4.5 w-full  rounded-full duration-200 hover:bg-white/10  ${
          isTransactionActive ? "bg-white/10 text-primary" : ""
        }`}
      >
        <span
          className={`font-[15px] ${isTransactionActive ? "font-bold" : ""}`}
        >
          Transaction
        </span>
      </Link>
      <Link
        href="/reports"
        // className=" space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
        className={`space-x-4 items-center py-1 pl-4.5 w-full  rounded-full duration-200 hover:bg-white/10  ${
          isReportActive ? "bg-white/10 text-primary" : ""
        }`}
      >
        <span className={`font-[15px] ${isReportActive ? "font-bold" : ""}`}>
          Reports
        </span>
      </Link>
      <Link
        href="/settings"
        // className=" space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
        className={`space-x-4 items-center py-1 pl-4.5 w-full  rounded-full duration-200 hover:bg-white/10  ${
          isSettingsActive ? "bg-white/10 text-primary" : ""
        }`}
      >
        <span className={`font-[15px] ${isSettingsActive ? "font-bold" : ""}`}>
          Settings
        </span>
      </Link>
    </nav>
  );
};

export default SideNav;
