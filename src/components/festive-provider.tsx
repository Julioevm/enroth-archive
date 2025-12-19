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
    setMounted(true);
    const saved = localStorage.getItem("snow-enabled");
    if (saved === "true") {
      setSnowEnabled(true);
    }
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
