"use client";
interface TableWraperProps {
  children: React.ReactNode;
  customClass?: string;
}
export default function TableContainer({
  children,
  customClass,
}: TableWraperProps) {
  return (
    <div className={`${customClass} sm:grow flex flex-col w-full`}>
      {children}
    </div>
  );
}
