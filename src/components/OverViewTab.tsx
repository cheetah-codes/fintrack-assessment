import Card from "@/components/shared/Card";
import StatusBadge from "@/components/shared/StatusBadge";
import TableData from "@/components/ui/table/TableData";
import TableHead from "@/components/ui/table/TableHead";
import TableRow from "@/components/ui/table/TableRow";
import { useState } from "react";
import TableContainer from "./ui/table/TableContainer";
import { cardDisplayData, getBadgeVariant, transactionList } from "@/utils";

export default function OverviewTab() {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactionList);
  const handleAllSorting = (
    order: "asc" | "desc",
    column: keyof Transaction
  ) => {
    const sorted = [...transactionList].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (typeof aValue === "number" && typeof bValue === "number") {
        console.log(typeof aValue);
        return order === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return order === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (column == "date") {
        const aDate = new Date(aValue);
        const bDate = new Date(bValue);
        const timeA = aDate?.getTime();
        const timeB = bDate.getTime();
        return order === "asc" ? timeA - timeB : timeB - timeA;
      }

      return 0;
    });

    setFilteredTransactions(sorted || transactionList);
  };
  return (
    <div className="pt-7">
      <h4 className="text-[20px] leading-6 font-bold pt-3 pb-4.5">Summary</h4>

      <div className="pb-3 sm:flex-wrap flex items-center md:items-center m-auto">
        {cardDisplayData.map((card, index) => (
          <div
            className={`${
              index == cardDisplayData.length - 1 ? "mr-0" : "mr-7"
            }`}
            key={index}
          >
            <Card
              cardTitle={card.cardTitle}
              totalAmount={`${card.amount}`}
              percentage={`${card.increment > 0 ? "+" : ""}${card.increment}%`}
            ></Card>
          </div>
        ))}
      </div>

      <TableContainer customClass="my-7 m-auto items-center flex">
        <TableRow>
          <TableHead
            isSortable
            customClass="w-[50%]"
            headTitle="Date"
            onSort={(order) => {
              handleAllSorting(order, "date");
            }}
          />
          <TableHead
            isSortable
            customClass="w-[15%]"
            headTitle="Remark"
            onSort={(order) => {
              handleAllSorting(order, "remark");
            }}
          />
          <TableHead
            customClass="flex-1"
            headTitle="Amount"
            onSort={(order) => {
              handleAllSorting(order, "amount");
            }}
          />
          <TableHead customClass="flex-1" headTitle="Currency" />
          <TableHead
            customClass="flex-1"
            headTitle="Type"
            onSort={(order) => {
              handleAllSorting(order, "type");
            }}
          />
        </TableRow>
        {filteredTransactions.map((transaction, index) => (
          <TableRow key={index}>
            <TableData customClass="w-[50%]">
              <p className="text-[#1B2528]">{transaction.date}</p>
            </TableData>
            <TableData customClass="whitespace-nowrap w-[15%]">
              <p className="text-[#1B2528]">{transaction.remark}</p>
            </TableData>
            <TableData customClass="flex-1 whitespace-nowrap">
              <p className="text-[#1B2528]">
                {transaction.type == "Debit" && "-"}${transaction.amount}
              </p>
            </TableData>
            <TableData customClass="flex-1 whitespace-nowrap">
              <p className="text-[#1B2528]">{transaction.currency}</p>
            </TableData>
            <TableData customClass="flex-1 whitespace-nowrap">
              <StatusBadge
                variant={getBadgeVariant(transaction.type)}
                statusText={transaction.type}
              />
            </TableData>
          </TableRow>
        ))}
      </TableContainer>
    </div>
  );
}
