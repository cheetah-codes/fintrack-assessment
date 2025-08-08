"use client";
import { createContext, useContext, useState } from "react";

type GlobalContextType = {
  transactionList: Transaction[];
  filterFunction?: (param: string) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  transactionList: [],
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("GlobalContext must be used within GlobalProvider");
  return context;
};

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const transactionList = [
    {
      id: "1",
      date: "2023-10-01",
      remark: "salary",
      amount: 2500,
      currency: "USD",
      type: "Credit",
    },
  ] as GlobalContextType["transactionList"];
  const [transactionContext, setTransactionContext] = useState(transactionList);

  const filterFunction = (searchValue: string) => {
    setTransactionContext(
      searchValue?.trim()
        ? transactionList.filter((item) => item.remark === searchValue)
        : transactionList
    );
  };

  return (
    <GlobalContext.Provider
      value={{ transactionList: transactionContext, filterFunction }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
