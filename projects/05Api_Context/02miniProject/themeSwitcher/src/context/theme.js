import { createContext,useContext } from "react"; 

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})
// we can some default variables and methods also 
// here we just cretead context 

export const ThemeProvider = ThemeContext.Provider

// custom hooks
export default function useTheme(){
    return useContext(ThemeContext)

}

// we just need to import useTheme it will all values 
