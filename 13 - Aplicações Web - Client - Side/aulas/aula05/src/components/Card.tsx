import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";

export function Card({ newPix, send, id, value, createdAt, recipient, sender, type}: any) {
  return (
    <div className={`${styles.card} ${newPix && styles.new}`}>
      {newPix && (
        <div className={styles.newPix}>
          <span>Novo</span>
        </div>
      )}
      
      <div className={styles.content}>
        <strong>{id}</strong>

        <CardInfo title="REMETENTE" data={sender.name}/>
        <CardInfo title="Destinátario" data={recipient.name} />
        <CardInfo title="Data" data={createdAt} />
        <CardInfo title="Valor" data={`R$${value}`} />

        {/* <strong className={send ? styles.send : styles.received}>
          {send ? "ENVIADO" : "RECEBIDO"}
        </strong> */}
      </div>
    </div>
  );
}
