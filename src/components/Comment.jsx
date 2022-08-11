import { Trash, ThumbsUp } from 'phosphor-react'
import {Avatar} from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/sanarielsen.png"/>

            <div className={styles.commentBox}> 

                <div className={styles.commentContent}> 

                    <header>

                        <div className={styles.authorAndTime}> 

                            <strong> Samuel Henrique </strong>
                            <time title="07 de Agosto às 19:00h" dateTime="2022-08-07 19:00:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">

                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>

                    <button>

                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}