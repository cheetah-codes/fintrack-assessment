import React from "react";

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface TabProps {
  currentTab?: number;
  onChange?: any;
  children?: React.ReactNode;
}

export interface AvatarGroupProps {
  users: {
    name: string;
    imageUrl: string;
  }[];
  maxVisible?: number;
}
