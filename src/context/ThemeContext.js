import React, {useContext, createContext, useState} from "react";


const ThemeContext = createContext()
const useTheme = () => useContext(ThemeContext)

const ThemeContextProvider = ({children}) => {

    const[theme,setTheme]=useState(true)
    const light = '#F7F7F7'
    const dark = 'black'
    const dark1 = '#31323a'
    const gray = '#eff2f4'
    // const lightBG = ''
    // const darkBG = ''
    const themeItems = {theme, setTheme, dark1, dark, light, gray}

    return(
        <ThemeContext.Provider value={themeItems}>
            {children}
        </ThemeContext.Provider>
    )
}
export{
    useTheme,
    ThemeContextProvider
}