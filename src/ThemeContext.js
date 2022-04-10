import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUdpateContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUdpateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUdpateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUdpateContext.Provider>
    </ThemeContext.Provider>
  )
}
