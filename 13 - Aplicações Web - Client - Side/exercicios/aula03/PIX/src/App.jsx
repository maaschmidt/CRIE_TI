import { Header } from './components/Header';
import { Table } from './components/Table'
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <Table />
      <div className={ styles.content }>
        
      </div>
    </div>
  )
}

export default App
