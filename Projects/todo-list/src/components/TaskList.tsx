import { CheckCircle, Circle, Trash } from "phosphor-react";
import clipboard from "../assets/clipboard.svg";
import styles from "./TaskList.module.css";
interface Task {
    id: string;
    text: string;
    isCompleted: Boolean;
}
interface TaskProps {
    tasks?: Task[];
    onChange: (tasks:Task[]) => void;
}

export function TaskList({ tasks = [], onChange }: TaskProps) {
    if (tasks.length === 0) {
        return (
            <div className={styles.tasks}>
                <img src={clipboard}></img>
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie Tarefas e Organize seus itens a fazer</p>
                </div>
            </div>
        )
    }

    function handleTaskCompletion(taskId:string){
        const newTasks = tasks.map(task=> task.id === taskId ?  {...task, isCompleted: !task.isCompleted} : task)
        onChange(newTasks)
    }

    function handleTaskDeletion(taskId:string){
        const newTasks = tasks.filter(task=> task.id !== taskId)
        onChange(newTasks)
    }

    return (
        <div className={styles.listItems}>

            {
                [...tasks]?.reverse().map((task, idx) => {
                    return (
                        <div key={idx} className={styles.listItem}>
                            {/* <input className={styles.checkbox} type="checkbox"/> */}
                            <button className={styles.taskCheckbox} onClick={() => handleTaskCompletion(task.id)}>
                                {task.isCompleted ? <CheckCircle size={24} weight="fill" color="var(--purple-dark)" lightingColor="white" /> : <Circle size={24} color="var(--blue-dark)" />}
                            </button>
                            <p className={`${styles.listItemText} ${task.isCompleted ? styles.listItemTextCompleted : ''}`}>{task.text}</p>
                            <button
                             className={styles.taskDeleteButton}
                             onClick={()=>handleTaskDeletion(task.id)}
                             ><Trash size={16} /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}