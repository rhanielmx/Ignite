import plus from "../assets/plus.svg";
import { TaskMenu } from "./TaskMenu";
import styles from "./Tasks.module.css";

import { useState } from "react";
import { TASKS } from "../data/tasks";

export function Tasks() {
    const [tasks, setTasks] = useState(TASKS)
    const [text, setText] = useState("")

    function handleSubmit() {
        const newTask = {
            id: String(tasks.length+1),
            text,
            isCompleted: false
        }

        setTasks(state=>[...state, newTask])
        setText("")
    }

    return (
        <>
            <div className={styles.tasks}>
                <div className={styles.newTasks}>
                    <input
                        className={styles.newTaskInput}
                        placeholder="Adicionar uma nova Tarefa"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button
                    className={styles.newTaskButton}
                    onClick={handleSubmit}
                    >
                        Criar <img src={plus}></img>
                    </button>
                </div>
                <TaskMenu tasks={tasks} onChange={setTasks} />
            </div>
        </>
    )
}