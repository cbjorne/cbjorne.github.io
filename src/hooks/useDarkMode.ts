import { useState, useEffect } from 'react';

interface UseDarkModeReturn {
    isDark: boolean;
    toggleDarkMode: () => void;
};

export const useDarkMode = (): UseDarkModeReturn => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) return JSON.parse(saved);
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDark));
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const toggleDarkMode = () => setIsDark(prev => !prev);

    return { isDark, toggleDarkMode };
};