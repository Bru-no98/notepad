import { Link } from 'react-router-dom'
import { Note } from '../Note'
import styles from './styles.module.css'

export function Dashboard () {
    return <div className = {styles.area}>
        <Link to="/">Página Inicial</Link>
        <Note/>
    </div>
}