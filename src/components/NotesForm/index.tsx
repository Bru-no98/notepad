import styles from './styles.module.css'
import { useNotesContext } from '../../contexts/NotesContext/useNotesContext';
import { useRef } from 'react';
import type { NotesModel } from '../../Models/NotesModel';

export function NotesForm() {
    const {state, setState} = useNotesContext();
    const noteTitle = useRef<HTMLInputElement>(null)
    const noteInformation = useRef<HTMLInputElement>(null)

    function handleSaveNote(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        const newNote : NotesModel = {
            id: Date.now().toString(),
            title: noteTitle.current?.value,
            registerDate: Date.now(),
            content: noteInformation.current?.value
        }

        setState(prevState => {
            return {
            notes: [...prevState.notes, newNote]
            }
        })

        console.log(state)

    }

    return <>
        <div>
            <form onSubmit={handleSaveNote} className = {styles.area}>
                <input
                ref={noteTitle}></input>

                <input
                ref={noteInformation}></input>

                <button type='submit'>Registrar Anotação</button>
            </form>
        </div>
    </>
}