import styles from './index.module.css'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'

export function Post() {
  return (
    <aside className={styles.feed}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder={true} src="https://github.com/maaschmidt.png" />
          <div className={styles.description}>
            <strong>Marcel Schmidt</strong>
            <span>Full Stack Developer | caf.io | JavaScript | TypeScript | Java | SQL</span>
          </div>
        </div>
        <span className={styles.time}>Publicado há 1h</span>
      </header>
      <div className={styles.message}>
        <p>Oii pessoal!!</p>
        <br />
        <p>Acabei de publicar novos projetos no meu github, corre aqui pra ver 🚀</p>
        <br />
        <p>https://github.com/maaschmidt</p>
        <br />
        <a href='#'>#novoprojeto</a> <a href='#'>#git</a> <a href='#'>#frontend</a>
      </div>
      <div className={styles.line}></div>
      <h4 className={styles.feedback}><b>Deixe seu feedback</b></h4>
      <textarea className={styles.feedback_text} name="feedback" id="feedback" cols="20" rows="5"></textarea>
      <button className={ styles.submit } type='submit'>Publicar</button>
      <Comment />
      <Comment />
      <Comment />
    </aside>
  )
}