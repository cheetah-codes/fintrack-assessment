interface StatusBadgeProps {
  variant: "positive" | "critical";
  statusText: string;
}

export default function StatusBadge({ variant, statusText }: StatusBadgeProps) {
  const statusColour = {
    positive: "bg-[#087A2E]",
    critical: "bg-[#C6381B]",
  };
  return (
    <div
      className="flex items-center rounded-2xl px-2 py-1 bg-[#34616F17] -mr-8"
      data-test-id="sfe-status-badge"
    >
      <div
        className={`w-[6px] h-[6px] rounded-full mr-2 ${statusColour[variant]}`}
      ></div>
      <p className="m-0 text-[15px] font-medium">{statusText}</p>
    </div>
  );
}
