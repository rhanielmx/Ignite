import rocket from '../assets/rocket.svg'
import todo from '../assets/todo.svg'
import styles from "./Header.module.css"

export function Header() {
    return (
        <div className={styles.header}>
            <img src={rocket} alt="Logo da Rocket" />
            <img src={todo} alt="Logo da Todo List" />
        </div>
    )
}