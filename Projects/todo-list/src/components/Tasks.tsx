import plus from "../assets/plus.svg";
import { TaskMenu } from "./TaskMenu";
import styles from "./Tasks.module.css";

export function Tasks() {
    return (
        <>
            <div className={styles.tasks}>
                <div className={styles.newTasks}>
                    <input placeholder="Adicionar uma nova Tarefa"></input>
                    <button>Criar <img src={plus}></img></button>
                </div>
                <TaskMenu />
            </div>
        </>
    )
}