import React from "react";

/**
 * React Context used to provide the theme mode and a function to toggle it between dark and light
 */
const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false
})

export default ThemeContext