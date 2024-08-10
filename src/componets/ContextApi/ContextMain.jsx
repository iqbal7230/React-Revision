import React from 'react'
import { ThemeProvider } from './ThemeContext';
import { useEffect, useState } from 'react';
import ThemeBtn from './ThemeBtn';
import Card from './CartUI';


function ContextMain() {
    const [themeMode, setTheme] = useState('light');
    const lightTheme = () => {
        setTheme('light');
    }
    const darkTheme = () => {
        setTheme('dark');
    }
    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])



    return (
        <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <ThemeBtn/>
                </div>
                <div className="w-full max-w-sm mx-auto">
                <Card/>

                </div>
            </div>
        </div>
        </ThemeProvider>

    )
}

export default ContextMain