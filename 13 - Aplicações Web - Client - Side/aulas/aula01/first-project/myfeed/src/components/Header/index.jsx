import styles from './index.module.css'
import logoCRIE from'../../assets/logo-crie-ti.png'

export function Header() {
  return (
    <header className={ styles.header }>
      <img src={ logoCRIE } alt="Logotipo do Crie-TI" />
    </header>
  )
}