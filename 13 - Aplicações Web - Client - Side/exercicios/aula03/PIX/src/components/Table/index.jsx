import styles from './index.module.css'

export function Table() {
  return (
    <div className={styles.tableResponsive}>
      <table className={styles.table}>
        {/* <tbody id="mytable"></tbody> */}
        <tr>
          <th>ID</th>
          <th>Remetente</th>
          <th>Destinatário</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td>Francisco Chang</td>
          <td>DD/MM/AAAA</td>
          <td>R$99,99</td>
        </tr>
      </table>
    </div>
  )
}