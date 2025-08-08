"use client";

interface TableDataProps {
  children: React.ReactNode;
  customClass?: string;
}
export default function TableData({ customClass, children }: TableDataProps) {
  return (
    <div
      className={`flex items-center border-b-[1.5px] border-[#49656E33] py-4.5 ${customClass}`}
    >
      {children}
    </div>
  );
}
