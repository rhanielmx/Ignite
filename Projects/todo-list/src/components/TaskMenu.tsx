import { TaskList } from "./TaskList"
import styles from "./TaskMenu.module.css"

import { tasks } from "../data/tasks"

export function TaskMenu() {
    console.log('tasks', tasks)
    return (
        <div className={styles.taskMenu}>
            <header className={styles.info}>
            <p className={styles.created}><strong className={styles.infoText} >Tarefas Criadas</strong><span className={styles.taskSpan}>{tasks.length}</span></p>
            <p className={styles.done}><strong className={styles.infoText} >Concluídas</strong><span className={styles.taskSpan}>0 de {tasks.length}</span></p>
            </header>
            <TaskList />
        </div>
    )
}