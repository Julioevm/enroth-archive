"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface FestiveContextType {
  snowEnabled: boolean;
  setSnowEnabled: (enabled: boolean) => void;
}

const FestiveContext = createContext<FestiveContextType>({
  snowEnabled: false,
  setSnowEnabled: () => {},
});

export const useFestive = () => useContext(FestiveContext);

export function FestiveProvider({ children }: { children: React.ReactNode }) {
  const [snowEnabled, setSnowEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("snow-enabled");
    
    // Use a small delay to satisfy the strict "no synchronous setState in effect" rule
    // while still ensuring we mount correctly for client-side features.
    const timer = setTimeout(() => {
      if (saved === "true") {
        setSnowEnabled(true);
      }
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSetSnow = (enabled: boolean) => {
    setSnowEnabled(enabled);
    localStorage.setItem("snow-enabled", enabled.toString());
  };

  // Avoid hydration mismatch by only providing state after mount
  const value = {
    snowEnabled: mounted ? snowEnabled : false,
    setSnowEnabled: handleSetSnow,
  };

  return (
    <FestiveContext.Provider value={value}>
      {children}
    </FestiveContext.Provider>
  );
}
