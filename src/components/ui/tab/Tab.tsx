import React, { createContext, useContext } from "react";

const TabContext = createContext<TabProps>({ currentTab: 0 });

export default function Tab({ currentTab, onChange, children }: TabProps) {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeadsContainer = ({ children }: { children: React.ReactNode }) => {
  //tab.head container is the wrapper of the tab nav head
  return (
    <div className="headcontainer border-b-2 border-b-[#ddd]">{children}</div>
  );
};

const Item = ({ label, index }: { label: string; index: number }) => {
  const { currentTab, onChange } = useContext(TabContext);
  return (
    <div
      onClick={() => onChange(index)}
      className={`text-[15px] m-0 p-0 font-sans text-tab-text leading-5 cursor-pointer py-3 px-7 ${
        currentTab === index ? "active border-b-2 border-b-primary" : null
      }`}
    >
      {label}
    </div>
  );
};

Tab.Item = Item;

Tab.ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="contentcontainer -mt-1">{children}</div>;
};
/////////////////////////////////////////////////

const ContentItem = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const context = useContext(TabContext);

  return context?.currentTab === index ? (
    <div className="contentitem">{children}</div>
  ) : null;
};

Tab.ContentItem = ContentItem;
