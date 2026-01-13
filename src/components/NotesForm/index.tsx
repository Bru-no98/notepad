import { useNotesContext } from '../../contexts/NotesContext/useNotesContext';
import { useRef } from 'react';
import type { NotesModel } from '../../Models/NotesModel';
import { Link } from 'react-router-dom';
import { DefaultButton } from '../DefaultButton/DefaultButton';

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
            <form onSubmit={handleSaveNote} className='flex flex-col gap-2 justify-center items-center w-screen h-screen'>
                <input  className = "border-1 rounded-md border-[#2F4F7C] bg-white w-48" ref={noteTitle}></input>

                <input className = "border-1 rounded-md border-[#2F4F7C] bg-white w-48" ref={noteInformation}></input>

                <button type='submit'><DefaultButton className='w-48'>Registrar Anotação</DefaultButton></button>
                <Link to="/"><DefaultButton className='w-48'>Página Inicial</DefaultButton></Link>
            </form>
        </div>
    </>
}