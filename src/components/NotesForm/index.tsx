import styles from './styles.module.css'
import { useNotesContext } from '../../contexts/NotesContext/useNotesContext';
import { useRef } from 'react';
import type { NotesModel } from '../../Models/NotesModel';
import { Link } from 'react-router-dom';

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
        
        if(!newNote) return;

        const noteJson = JSON.stringify([...state.notes, newNote])

        console.log(noteJson)
        localStorage.setItem('notesStorage', noteJson)

    }

    return <>
        <div>
            <form onSubmit={handleSaveNote} className = {styles.area}>
                <input  className = "border-1 rounded-md border-[#2F4F7C] bg-white" ref={noteTitle}></input>

                <input className = "border-1 rounded-md border-[#2F4F7C] bg-white" ref={noteInformation}></input>

                <button type='submit' className='rounded-md bg-sky-500 hover:bg-sky-700'>Registrar Anotação</button>
                <Link className='rounded-md bg-sky-500 hover:bg-sky-700 text-center' to="/">Página Inicial</Link>
            </form>
        </div>
    </>
}