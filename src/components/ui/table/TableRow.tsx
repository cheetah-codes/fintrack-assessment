"use client";

interface TableRowProps {
  children: React.ReactNode;
}

export default function TableRow({ children }: TableRowProps) {
  return <div className="w-full sm:grow flex gap-x-4.5">{children}</div>;
}
