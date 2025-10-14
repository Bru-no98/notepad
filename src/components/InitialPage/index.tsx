
import '../../styles/global.css';

import styles from './styles.module.css';

import { Link } from 'react-router-dom';

export function InitialPage () {
    // const [state, setState] = useState('Form')

    // function handleChangePage(){
    //     if (state === 'Form') {
    //         setState('Dashboard')
    //     }

    //     if (state === 'Dashboard') {
    //         setState('Form')
    //     }
    // }

    return <>
        <div className={styles.container}>
            <h1 className= {styles.header}>Bloco de notas</h1>
            <Link to="/dashboard">DashBoard</Link>
            <Link to="/notesform">Formulário de Notas</Link>
            {/* {state === 'Form' && <NotesForm/>}
            {state === 'Dashboard' && <Dashboard/>} */}
        </div>
    </>
}