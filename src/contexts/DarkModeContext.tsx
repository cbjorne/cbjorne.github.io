import { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

type DarkModeContextType = ReturnType<typeof useDarkMode>;

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
    const value = useDarkMode();
    return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export const useDarkModeContext = () => {
    const ctx = useContext(DarkModeContext);
    if (!ctx) throw new Error('useDarkModeContext must be used within DarkModeProvider');
    return ctx;
};