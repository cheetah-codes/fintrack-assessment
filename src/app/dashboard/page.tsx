"use client";

import AvatarGroup from "@/components/AvatarGroup";
import Tab from "@/components/Tab";
import React, { useState } from "react";

const page = () => {
  const [currentTabIndex, setIndex] = useState(0);
  // const users = [
  //   { name: "Ava", imageUrl: "https://i.pravatar.cc/100?img=1" },
  //   { name: "Liam", imageUrl: "https://i.pravatar.cc/100?img=2" },
  //   { name: "Noah", imageUrl: "https://i.pravatar.cc/100?img=3" },
  //   { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
  //   { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
  // ];

  const users = [
    { name: "Ava", imageUrl: "https://i.pravatar.cc/150?img=1" },
    { name: "Liam", imageUrl: "https://i.pravatar.cc/150?img=2" },
    { name: "Noah", imageUrl: "https://i.pravatar.cc/150?img=3" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/150?img=4" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/150?img=5" },
    { name: "Sophia", imageUrl: "https://i.pravatar.cc/150?img=6" },
    { name: "Mason", imageUrl: "https://i.pravatar.cc/150?img=7" },
    { name: "Ethan", imageUrl: "https://i.pravatar.cc/150?img=8" },
    { name: "Isabella", imageUrl: "https://i.pravatar.cc/150?img=9" },
    { name: "Lucas", imageUrl: "https://i.pravatar.cc/150?img=10" },
    { name: "Charlotte", imageUrl: "https://i.pravatar.cc/150?img=11" },
    { name: "Amelia", imageUrl: "https://i.pravatar.cc/150?img=12" },
    { name: "James", imageUrl: "https://i.pravatar.cc/150?img=13" },
    { name: "Harper", imageUrl: "https://i.pravatar.cc/150?img=14" },
    { name: "Benjamin", imageUrl: "https://i.pravatar.cc/150?img=15" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
  ];

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
            <AvatarGroup users={users} />
          </Tab.ContentItem>

          <Tab.ContentItem index={1}>
            <h1>Transactions tab</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
};

export default page;
