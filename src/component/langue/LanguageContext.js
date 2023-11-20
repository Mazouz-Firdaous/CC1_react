import React, {createContext, useState} from 'react' 
export  const LanguageContext = createContext();


let defaultLang="FR";


export default function LanguageContextProvider ({children})   {

    const [lang, setLang] = useState(defaultLang)

    

    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )

}