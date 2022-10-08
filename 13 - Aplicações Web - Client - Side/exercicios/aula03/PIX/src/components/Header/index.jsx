import styles from './index.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <label className={styles.user_lbl}>ID do usuário</label>
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          <input type="number" id='user' min={ 1 } className={styles.userId} placeholder='Digite o ID do usuário' />
          <input type="checkbox" className={styles.checkoption} /> Recebidos
          <input type="checkbox" className={styles.checkoption} /> Enviados
          <button className={styles.summit_btn}>Listar</button>
        </div>
      </div>
    </header>
  )
}