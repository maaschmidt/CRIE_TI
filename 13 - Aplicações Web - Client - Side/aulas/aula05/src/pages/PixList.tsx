import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import axios from "axios";
import styles from './PixList.module.css'

export interface Pix {
  id: number;
  value: number;
  createdAt: string;
  recipient: {
    name: string;
  };
  sender: {
    name: string;
  };
  type?: number;
}

export function PixList() {
    const [pixList, setPixList] = useState<Pix[]>([]);

    useEffect(() => {
      axios.get<Pix[]>("http://localhost:3000/pix").then((response) => {
        setPixList(response.data);
      });
    }, []);
  
    return (
      <div className={styles.App}>
        <Header showButton />
        <Sidebar />
        <main className={styles.content}>
        {pixList.map((pix) => {
          pix.createdAt = pix.createdAt.slice(0,10).split('-').reverse().join('/');
          return (
              <Card
                newPix={false}
                send={true}
                id={pix.id}
                value={pix.value}
                createdAt={pix.createdAt}
                recipient={pix.recipient}
                sender={pix.sender}
                type={pix.type}
              />
            );
          })}
        </main>
      </div>
    );
}