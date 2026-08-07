import { createContext, useState } from "react";

export const PerformanceContext = createContext();

function PerformanceProvider({ children }) {
  const defaultData = {
  sleep: 0,
  mood: 5,
  energy: 5,
  focus: 0,
  water: 0,
  study: 0,
  exercise: false,
  journal: "",
  score: 0,
};

const savedData = localStorage.getItem("performanceData");

const [performanceData, setPerformanceData] = useState(
  savedData ? JSON.parse(savedData) : defaultData
);

  return (
    <PerformanceContext.Provider
      value={{
        performanceData,
        setPerformanceData,
      }}
    >
      {children}
    </PerformanceContext.Provider>
  );
}

export default PerformanceProvider;