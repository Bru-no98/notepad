import { createContext} from "react";
import { InitialNotesState } from "./InitialNotesState";
import type { NotesListModel } from "../../Models/NotesListModel";

type NotesContextProps = {
    state : NotesListModel;
    setState: React.Dispatch<React.SetStateAction<NotesListModel>>
}

const initialContextValue = {
    state: InitialNotesState,
    setState: () => {},
}

export const NotesContext = createContext<NotesContextProps>(initialContextValue)