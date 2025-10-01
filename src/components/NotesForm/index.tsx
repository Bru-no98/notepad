import { useState } from 'react'
import styles from './styles.module.css'
import type { NotesModel } from '../../Models/NotesModel'

export function NotesForm() {

    const [state, setState] = useState<NotesModel>({
        id: '',
        title: '',
        registerDate: Date.now(),
        content: ''
    })

    function handleSaveNote(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(state)
    }

    return <>
        <div>
            <form onSubmit={handleSaveNote} className = {styles.area}>
                <input
                value = {state?.title}
                onChange={e => setState({...state, title: e.target.value})}></input>

                <input
                value = {state?.content}
                onChange={e => setState({...state, content: e.target.value})}></input>

                <button type='submit'>Registrar Anotação</button>
            </form>
        </div>
    </>
}