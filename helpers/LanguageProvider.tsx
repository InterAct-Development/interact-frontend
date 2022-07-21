import React, { createContext, useState } from 'react'

interface Props {}

export enum Languages {
    ENGLISH = "en",
    FRENCH = "fr"
}

export const LangContext = createContext<[Languages, React.Dispatch<React.SetStateAction<Languages>>?]>([Languages.ENGLISH, undefined]);

export const LanguageProvider: React.FC<Props> = ({ children }) => {
    const [lang, setLang] = useState<Languages>(Languages.ENGLISH);
    return (
        <LangContext.Provider value={[lang, setLang]}>
            {children}
        </LangContext.Provider>
    )
}