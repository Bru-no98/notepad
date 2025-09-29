import { Note } from '../Note'
import styles from './styles.module.css'

export function Dashboard () {
    return <div className = {styles.area}>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </div>
}