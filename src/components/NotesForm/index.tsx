import styles from './styles.module.css'

export function NotesForm() {
    return <>
        <div >
            <form className = {styles.area}>
                <input></input>
                <input></input>
                <button>Registrar Anotação</button>
            </form>
        </div>
    </>
}