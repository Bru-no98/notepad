import { useNotesContext } from '../../contexts/NotesContext/useNotesContext';
import styles from './styles.module.css'

export function Note() {
    const {state} = useNotesContext();

    return <>
        <div className = {styles.layout} >
            <h2>{state.title}</h2>
            <p>{state.registerDate}</p>
            <p>{state.content}</p>
        </div>
    </>
}