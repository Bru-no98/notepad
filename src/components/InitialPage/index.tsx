import { useState } from 'react';
import '../../styles/global.css';
import { NotesForm } from '../NotesForm';
import styles from './styles.module.css';
import { Dashboard } from '../Dashboard';

export function InitialPage () {
    const [state, setState] = useState('Form')

    function handleChangePage(){
        if (state === 'Form') {
            setState('Dashboard')
        }

        if (state === 'Dashboard') {
            setState('Form')
        }
    }

    return <>
        <div className={styles.container}>
            <h1 className= {styles.header}>Bloco de notas</h1>
            <button onClick={handleChangePage}>Trocar de página</button>
            {state === 'Form' && <NotesForm/>}
            {state === 'Dashboard' && <Dashboard/>}
        </div>
    </>
}