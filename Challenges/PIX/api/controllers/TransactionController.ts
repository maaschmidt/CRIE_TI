import axios from 'axios';
import * as Log from '../controllers/LogController'

const _validateData = (content: any) => {
  const attributes: any = ["senderId", "recipientId", "value"];
  const transaction: any = {};
  for (const attribute of attributes) {
    transaction[attribute] = content[attribute];
  }
  return transaction;
}

export const create = async (content: any) => {
  try {
    const data = await _validateData(content);
    const users = await axios.get('http://177.44.248.30/v1/users')
    const transaction = await axios.post('http://177.44.248.30/v1/pix', data);
    if(transaction.data.status === 200){
      await Log.create(data, users.data);
    }
    return transaction.data;
  } catch (error) {
    return error;
  }
}