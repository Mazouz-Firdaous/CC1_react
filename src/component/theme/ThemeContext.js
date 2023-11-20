import React, {createContext, useState} from 'react';


//1-objet context
export const ThemeContext = createContext();




//2-component context

export default function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState(false);
    const [navbarColor, setNavbarColor] = useState('light');

    const toggleTheme = () => {
        setTheme(!theme);
        document.body.classList.toggle('b-dark', !theme);
        setNavbarColor(theme ? 'light' : 'dark');
    }

   if(theme){
        document.body.classList.add('b-dark');
    } else {
        document.body.classList.remove('b-dark');
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )

}