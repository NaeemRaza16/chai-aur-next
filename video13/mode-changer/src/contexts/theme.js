import { createContext, useContext } from 'react'

// Step # 1: create context and give initial value.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
})
// Step # 2: set provider of created context to provide context store.
export const ThemeProvider = ThemeContext.Provider

// Step # 3: create a custom hook to use context store provider.
export default function useTheme() {
    return useContext(ThemeContext)
}