import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeCount(){
        setLikeCount(state=>state+1)
    }
    
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rhanielmx.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rhaniel Xavier</strong>
                            <time title="30 de Agosto às 9:32h" dateTime="2022-08-30 9:32:00">Cerca há 2h atrás</time>
                        </div>
                        <button title="Deletar" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}