import styles from "./Sidebar.module.css";

export function Sidebar() {

  const click = (() => {
    alert("oi")
  })

  return (
    <header className={styles.sidebar}>
      <div className={styles.content}>
        <h1>PIX</h1>
        <nav className={styles.navlink}>
          <div>
            <label htmlFor="id-user">ID: </label>
            <input
              id="id-user"
              name="id-user"
              placeholder="Digite o ID do usuário aqui..."
            />
          </div>
          <a className={styles.active} href="#">
            Todos
          </a>
          <a href="#">Recebidos</a>
          <a href="#">Enviados</a>
          <button onClick={click} className={styles.list_btn}>Listar</button>
        </nav>
      </div>
    </header>
  );
}
