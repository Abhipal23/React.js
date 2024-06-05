import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

export default function App() {
  const [themeMode,setThemeMode] = useState("light")
  const lightTheme = ()=>{
        setThemeMode('light')
  }
  const darkTheme =()=>{
    setThemeMode('dark')
  }

  // actula change in theme 
    useEffect(()=>{
     const theme=   document.querySelector('html')
     theme.classList.remove('light','dark')
      // as we don't know which theme is it so we remove 
      // here we will add our desired theme 

     theme.classList.add(themeMode)
      // as method set the theme

    },[themeMode])
    // as any thing change in themeMode it will run again 
    
 
  return (
    <>
      <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
        {/* now theme btm and card will access of all 3  */}
        <div className="flex flex-wrap min-h-screen items-center ">
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
    </>
  );
}


// as lightTheme and darkThme are method coming but they are not define 
// just difine method with same name and they will get same functionalty 
