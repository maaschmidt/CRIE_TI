import { useState } from "react";
import styles from './index.module.css'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'


export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Que legal, adorei sua postagem!"]);
  const [newComment, setNewComment] = useState('')

  const publishDateFormated = format(
    new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  }
  )

  const publishDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt), {
    locale: ptBr,
    addSuffix: true
  }
  )

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments([...comments, newComment]);

    setNewComment('')
  }

  function handleNewCommentChange(e) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const newCommentWithoutDelete = comments.filter(comment => {
      return comment != commentToDelete;
    });
    setComments(newCommentWithoutDelete);
  }

  return (
    <aside className={styles.feed}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.description}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time className={styles.time} title={publishDateFormated} dateTime={new Date(publishedAt).toISOString}>
          Publicado {publishDateRelativeToNow}
        </time>
      </header>
      <div className={styles.message}>
        {content.map(line => {
          switch (line.type) {
            case 'paragraph':
              return <p>{line.content}</p>
            case 'link':
              return <p><a href={line.content}>{line.content}</a></p>
            default:
              return ''
          }
        })}
      </div>

        <strong className={styles.feedback}><b>Deixe seu feedback</b></strong>
        <textarea className={styles.feedback_text} value={newComment} onChange={handleNewCommentChange}></textarea>
        <button className={styles.submit} onClick={handleCreateNewComment}>Publicar</button>
      
      <div className={styles.comments}>
        {comments.map((comment) => {
          return (<Comment deleteComment={deleteComment} content={comment} />)
        })}
      </div>
    </aside>
  )
}