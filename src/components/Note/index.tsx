import styles from './styles.module.css'

export function Note() {
    return <>
        <div className = {styles.layout} >
            <h2>Titulo</h2>
            <p>data criação</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. vLorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
    </>
}