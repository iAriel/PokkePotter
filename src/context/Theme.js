import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function UseTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;

    return { theme, setTheme };
}

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState({ background: '#008ce0' }); 

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;
}