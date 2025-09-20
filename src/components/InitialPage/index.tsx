import '../../styles/global.css';
import { Dashboard } from '../Dashboard';
import styles from './styles.module.css';

export function InitialPage () {
    return <>
        <div>
            <h1 className= {styles.header}>Bloco de notas</h1>
            <Dashboard/>
        </div>
    </>
}