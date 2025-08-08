interface CardDisplayType {
  data: [
    { cardTitle: string; amount: string; increment: number },
    { cardTitle: string; amount: string; increment: number },
    { cardTitle: string; amount: string; increment: number },
    { cardTitle: string; amount: string; increment: number }
  ];
}

interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

interface TabProps {
  currentTab?: number;
  onChange?: any;
  children?: React.ReactNode;
}

interface AvatarGroupProps {
  users: {
    name: string;
    imageUrl: string;
  }[];
  maxVisible?: number;
}

interface TabNavProps {
  tabTitle: string;
  tabId: string;
  activeTab: string;
  changeTab: (tab: string) => void;
}

interface TabContentProps {
  children: React.ReactNode;
  contentId: string;
  activeTab: string;
}

interface CardProps {
  cardTitle: string;
  totalAmount: string;
  percentage: string;
}
