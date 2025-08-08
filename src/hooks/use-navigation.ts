"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const useNavigation = () => {
  const pathname = usePathname();
  const [isDashboardActive, setIsDashBoardActive] = useState(false);
  const [isTransactionActive, setIsTransactionsActive] = useState(false);
  const [isReportActive, setIsReportsActive] = useState(false);
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  useEffect(() => {
    setIsDashBoardActive(false);
    setIsTransactionsActive(false);
    setIsReportsActive(false);
    setIsSettingsActive(false);

    switch (pathname) {
      case "/dashboard":
        setIsDashBoardActive(true);
        break;
      case "/transactions":
        setIsTransactionsActive(true);
        break;
      case "/reports":
        setIsReportsActive(true);
        break;
      case "/settings":
        setIsSettingsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isDashboardActive,
    isTransactionActive,
    isReportActive,
    isSettingsActive,
  };
};

export default useNavigation;
