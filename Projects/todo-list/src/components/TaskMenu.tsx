import { TaskList } from "./TaskList";
import styles from "./TaskMenu.module.css";

interface Task {
    id: string;
    text: string;
    isCompleted: boolean;
}
interface TaskProps {
    tasks: Task[];
    onChange: any;
}
   
export function TaskMenu({ tasks, onChange }: TaskProps) {
    console.log('tasks', tasks)
    const completedAmount = tasks.filter(t => t.isCompleted).length
    return (
        <div className={styles.taskMenu}>
            <header className={styles.info}>
                <p className={styles.created}><strong className={styles.infoText} >Tarefas Criadas</strong><span className={styles.taskSpan}>{tasks.length}</span></p>
                <p className={styles.done}>
                    <strong className={styles.infoText} >Concluídas</strong><span className={styles.taskSpan}>{completedAmount} de {tasks.length}</span>
                </p>
            </header>
            <TaskList tasks={tasks} onChange={onChange}/>
        </div>
    )
}