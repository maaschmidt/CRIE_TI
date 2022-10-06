import { useState } from "react";
import styles from './index.module.css'
import { Avatar } from '../Avatar'
import { ThumbsUp, Trash} from 'phosphor-react'

export function Comment({content, deleteComment}) {
  const [newLike, setNewLike] = useState(0);

  function handleNewLike(){
    setNewLike(newLike+1);
  }

  function handleDeleteComment() {
    deleteComment(content);
  }

  return (
    <aside className={ styles.comment_content }>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://thispersondoesnotexist.com/image" />
        <div className={styles.comment_text}>
          <div className={styles.content}>
            <span><b>Angel Memphis</b></span>
            <p>Comentado há 2h</p>
            <span>{content}</span>
          </div>
          <button className={styles.trash_btn} onClick={handleDeleteComment}>
          <Trash className={styles.trash} size={20} />
          </button>
        </div>
      </div>
      <button className={styles.thumb_btn} onClick={handleNewLike}>
      <ThumbsUp className={styles.thumb} size={20} />
      </button>
      <span>{newLike}</span>
    </aside>
  )
}