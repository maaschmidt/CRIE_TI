import { Link } from 'react-router-dom'
import styles from './Menu.module.css';

export function Menu(){
  return (
    <div className={styles.menu}>
      <Link to="/newPix">Fazer PIX</Link>
      <Link to="/pix">Consultar</Link>
    </div>
  );
}