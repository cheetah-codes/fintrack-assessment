"use client";

import AvatarGroup from "@/components/AvatarGroup";
import Tab from "@/components/Tab";
import React, { useState } from "react";

const page = () => {
  const [currentTabIndex, setIndex] = useState(0);

  const handleChange = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <div>
      page in dashboard
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <div className="flex gap-12">
            <Tab.Item label="Overview" index={0} />

            <Tab.Item label="Transactions" index={1} />
          </div>
        </Tab.HeadsContainer>

        <Tab.ContentContainer>
          <Tab.ContentItem index={0}>
            <h1>Overview tab</h1>
            {/* <Tables /> */}
          </Tab.ContentItem>

          <Tab.ContentItem index={1}>
            <h1>Transactions tab</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
      <AvatarGroup users={({"peter", "/widget-Icon.svg"},{"nachettah", "/widget-Icon.svg"},{"nachettah", "/widget-Icon.svg"})} />
    </div>
  );
};

export default page;
