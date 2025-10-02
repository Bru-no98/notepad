import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export function useNotesContext(){
    return useContext(NotesContext)
} 