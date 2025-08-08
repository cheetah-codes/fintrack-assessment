import React, { createContext, useContext, useEffect } from "react";

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
  return <div className="headcontainer">{children}</div>;
};

Tab.Item = ({ label, index }: { label: string; index: number }) => {
  const { currentTab, onChange } = useContext(TabContext);

  return (
    <div
      onClick={() => onChange(index)}
      className={`tabitem ${currentTab === index ? "active" : null}`}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="contentcontainer">{children}</div>;
};
/////////////////////////////////////////////////

Tab.ContentItem = ({
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
