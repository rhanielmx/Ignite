import clipboard from "../assets/clipboard.svg";
import styles from "./TaskList.module.css";

interface Task {
    id: String;
    text: String;
    isCompleted: Boolean;
}

interface TaskProps {
    tasks?: Task[];
}

export function TaskList({ tasks = [] }: TaskProps) {
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

    return (
        <div>
            Não Vazia
        </div>
    )
}