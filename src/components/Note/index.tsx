import { useNotesContext } from '../../contexts/NotesContext/useNotesContext';
import styles from './styles.module.css'

export function Note() {
    const {state} = useNotesContext();
    const notesMap = [...state.notes]

    return (
        notesMap.map((note) => {
            return <div className = {styles.layout} >
            <h2>{note.title}</h2>
            <p>{note.registerDate}</p>
            <p>{note.content}</p>
        </div>
        })
    )
        
}

