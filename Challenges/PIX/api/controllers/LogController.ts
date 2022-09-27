import axios from 'axios';
import { Log } from '../models/Log';

export const create = async (data: any, users: any) => {
  try {
    let sender: string = '';
    let recipient: string = '';
    for (const user of users) {
      if (data.senderId === user.id) {
        sender = user.name;
      }
      if (data.recipientId === user.id) {
        recipient = user.name
      }
    }
    console.log('here')
    Log.sync();
    let transaction: Log = new Log()
    transaction.sender = sender;
    transaction.recipient = recipient;
    transaction.value = data.value;
    console.log(transaction)
    await transaction.save();

  } catch (error) {
    return error;
  }
}