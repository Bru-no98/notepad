import styles from './styles.module.css'

export function Note() {
    const notesSaved = localStorage.getItem('notesStorage')
    const notesConverted = JSON.parse(notesSaved || '[]')
    const notesMap = [...notesConverted]

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

