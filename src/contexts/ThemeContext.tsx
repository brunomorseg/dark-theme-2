import { ReactNode, useContext, useEffect, useState, createContext } from "react";

const STORAGE_KEY = 'themeContextKey';

type ThemeContextType = {
    theme: string;
    setTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem(STORAGE_KEY);
            if (storedTheme) {
                setTheme(storedTheme);
            }
            setIsMounted(true);
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }, [theme, isMounted]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
