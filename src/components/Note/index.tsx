
import type { NotesModel } from '../../Models/NotesModel'
import styles from './styles.module.css'

export function Note() {
    const notesSaved = localStorage.getItem('notesStorage')
    const notesConverted = JSON.parse(notesSaved || '[]') as NotesModel[]

    return (
        notesConverted.map((note) => {
            return <div key={note.id} className = {styles.layout} >
            <h2>{note.title}</h2>
            <p>{note.registerDate}</p>
            <p>{note.content}</p>
        </div>
        })
    )
        
}

