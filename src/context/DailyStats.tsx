// DailyStatsContext.tsx
import {createContext, useContext, useState, ReactNode} from 'react';

type DailyStatsContextType = {
  dailyCoins: number;
  setDailyCoins: (coins: number) => void;
  dailyHours: number;
  setDailyHours: (hours: number) => void;
  dailyMinutes: number;
  setDailyMinutes: (minutes: number) => void;
};

const DailyStatsContext = createContext<DailyStatsContextType | undefined>(
  undefined,
);

export const DailyStatsProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const days = 0,
    hours = 0,
    minutes = 0;
  const [dailyCoins, setDailyCoins] = useState(0);
  const [dailyHours, setDailyHours] = useState(hours);
  const [dailyMinutes, setDailyMinutes] = useState(minutes);

  const value: DailyStatsContextType = {
    dailyCoins,
    setDailyCoins,
    dailyHours,
    dailyMinutes,
    setDailyHours,
    setDailyMinutes,
  };

  return (
    <DailyStatsContext.Provider value={value}>
      {children}
    </DailyStatsContext.Provider>
  );
};

export const useDailyStats = (): DailyStatsContextType => {
  const context = useContext(DailyStatsContext);
  if (!context) {
    throw new Error('useDailyStats must be used within a DailyStatsProvider');
  }
  return context;
};
