import React, {createContext, useContext, useState, ReactNode} from 'react';

type TimerContextType = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

type TimerProviderProps = {
  children: ReactNode;
};

export const TimerProvider = ({children}: TimerProviderProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TimerContext.Provider value={{isActive, setIsActive}}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
