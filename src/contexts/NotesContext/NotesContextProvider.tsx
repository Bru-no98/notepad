import { useState } from "react"
import { InitialNotesState } from "./InitialNotesState"
import { NotesContext } from "./NotesContext"

type NotesContextProviderProps = {
    children: React.ReactNode
}

export function NotesContextProvider({children} : NotesContextProviderProps) {
    const [state, setState] = useState(InitialNotesState)
    
    return(
    <NotesContext.Provider value={{state, setState}}>
        {children}
    </NotesContext.Provider>)
}