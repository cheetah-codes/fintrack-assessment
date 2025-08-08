export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debounced.cancel = () => clearTimeout(timeoutId);

  return debounced;
}

export const getBadgeVariant = (
  type: "Credit" | "Debit"
): "positive" | "critical" => {
  if (type == "Credit") {
    return "positive";
  }
  return "critical";
};

export const users = [
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

export const transactionList: Transaction[] = [
  {
    id: "23",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "23",
    date: "2023-10-02",
    remark: "Groceries",
    amount: 150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: 50,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "23",
    date: "2023-10-04",
    remark: "Dinner",
    amount: 40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: 30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-06",
    remark: "Rent",
    amount: 1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-07",
    remark: "Utilities",
    amount: 100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: 400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "23",
    date: "2023-10-09",
    remark: "Insurance",
    amount: 200,
    currency: "USD",
    type: "Debit",
  },
];

export const cardDisplayData = [
  { cardTitle: "total Balances", amount: "$12,345", increment: 5 },
  { cardTitle: "total Credits", amount: "$7,890", increment: 3 },
  { cardTitle: "total Debits", amount: "$4455", increment: -2 },
  { cardTitle: "Transactions", amount: "150", increment: 10 },
];
