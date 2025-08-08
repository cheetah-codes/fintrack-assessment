"use client";

import OverviewTab from "@/components/OverViewTab";
import AvatarGroup from "@/components/shared/AvatarGroup";
import StatusBadge from "@/components/shared/StatusBadge";
import Tab from "@/components/ui/tab/Tab";
import { users } from "@/utils";
import React, { useState } from "react";
import Image from "next/image";
import kebabMenu from "../../../public/kebab-menu.svg";
import caretDown from "../../../public/caret-down.svg";
const DashboardPage = () => {
  const [currentTabIndex, setIndex] = useState(0);

  const handleChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <div className="w-full pl-12">
      <div className="flex">
        <div className="flex items-center">
          <h3 className="font-bold text-[34px] text-[#1B2528] mr-4">
            Wallet Ledger
          </h3>

          <Image src={caretDown} alt="caret" className="-ml-4" />

          <StatusBadge variant="positive" statusText="Active" />
        </div>

        <div className="flex items-center ml-auto">
          <button className="bg-[#4B8B9F] text-[15px] font-medium leading-5 mr-3 py-2 px-4.5 rounded-2xl cursor-pointer">
            Share
          </button>
          <button className="flex justify-center items-center w-9 h-9 rounded-full border-[1.5px] border-[#49656E33] cursor-pointer">
            <Image src={kebabMenu} alt="kebab" />
          </button>
        </div>
      </div>
      <div className="flex items-center my-7">
        <AvatarGroup users={users} />
      </div>

      {/* //////tab section */}

      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <div className="flex gap-12">
            <Tab.Item label="Overview" index={0} />

            <Tab.Item label="Transactions" index={1} />
          </div>
        </Tab.HeadsContainer>

        <Tab.ContentContainer>
          <Tab.ContentItem index={0}>
            {/* <AvatarGroup users={users} /> */}

            <OverviewTab />
          </Tab.ContentItem>

          <Tab.ContentItem index={1}>
            <h1>Transactions tab</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
};

export default DashboardPage;
