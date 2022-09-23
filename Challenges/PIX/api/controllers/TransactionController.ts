import axios from 'axios';

const _validateData = (content: any) => {
  const attributes: any = ["senderId", "recipientId", "value"];
  const transaction: any = {};
  for (const attribute of attributes) {
    transaction[attribute] = content[attribute];
  }
  return transaction;
}

export const create = async (content: object) => {
  try {
    const data = await _validateData(content);
    const transaction = await axios.post('http://177.44.248.30/v1/pix', data);
    return transaction.data;
    
  } catch (error) {
    return error;
  }
}