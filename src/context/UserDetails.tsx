// UserContext.tsx
import {createContext, useContext, useState, ReactNode} from 'react';

const convertTime = (totalMinutes: number) => {
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return `${days} days, ${hours} hours, ${minutes} mins`;
};

type UserContextType = {
  userName: string;
  setUserName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  coins: number;
  setCoins: (coins: number) => void;
  numberOfFriends: number;
  setNumberOfFriends: (numberOfFriends: number) => void;
  totalTime: number;
  setTotalTime: (totalTime: number) => void;
  totalTimeString: string;
  setTotalTimeString: (totalTimeString: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider.tsx

export const UserDetailsProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [userName, setUserName] = useState('Splash');
  const [email, setEmail] = useState('splash@gmail.com');
  const [coins, setCoins] = useState(0);
  const [numberOfFriends, setNumberOfFriends] = useState(0);
  const [totalTime, setTotalTime] = useState(0); // in minutes
  const [totalTimeString, setTotalTimeString] = useState(
    '0 days, 0 hours, 0 mins',
  );

  const value: UserContextType = {
    userName,
    setUserName,
    email,
    setEmail,
    coins,
    setCoins,
    numberOfFriends,
    setNumberOfFriends,
    totalTime,
    setTotalTime,
    totalTimeString,
    setTotalTimeString,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserDetails = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
