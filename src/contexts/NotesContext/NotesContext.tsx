import { createContext} from "react";
import type { NotesModel } from "../../Models/NotesModel";
import { InitialNotesState } from "./InitialNotesState";

type NotesContextProps = {
    state : NotesModel;
    setState: React.Dispatch<React.SetStateAction<NotesModel>>
}

const initialContextValue = {
    state: InitialNotesState,
    setState: () => {},
}

export const NotesContext = createContext<NotesContextProps>(initialContextValue)