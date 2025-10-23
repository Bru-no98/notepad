import type { NotesModel } from '../../Models/NotesModel'


export function Note() {
    const notesSaved = localStorage.getItem('notesStorage')
    const notesConverted = JSON.parse(notesSaved || '[]') as NotesModel[]

    return (
        notesConverted.map((note) => {
            return <div key={note.id} className = "flex flex-col rounded-md size-32" >
            <h2 className='text-8x1'>{note.title}</h2>
            <p>{note.registerDate}</p>
            <p>{note.content}</p>
        </div>
        })
    )
        
}

