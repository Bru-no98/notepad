import type { NotesModel } from "../../Models/NotesModel";

export const InitialNotesState: NotesModel = {
    id: '',
    title: '',
    registerDate: Date.now(),
    content: ''
}