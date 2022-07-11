import React, { useEffect, createContext, useState } from 'react'
import { AppContext } from './Context'

interface Props {

}

export enum Languages {
    english = "en",
    french = "fr"
}

export const LangContext = createContext<[Languages, React.Dispatch<React.SetStateAction<Languages>>?]>([Languages.english, undefined]);

export const LanguageProvider: React.FC<Props> = ({ children }) => {
    const [lang, setLang] = useState<Languages>(Languages.english)
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    )
}