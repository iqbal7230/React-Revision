import { createContext, useContext } from "react";
import React from 'react'

export const ThemContext = createContext({
    themeMode : 'light',
    darkTheme :()=>{},
    lightTheme :()=>{}
});
export const ThemeProvider = ThemContext.Provider;

export default function usetheme(){
    return useContext(ThemContext)
}