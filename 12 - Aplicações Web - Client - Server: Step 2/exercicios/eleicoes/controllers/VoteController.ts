import axios from 'axios';
import { Vote } from '../models/Vote';

export const create = async (data: any) => {
  try {
    let vote: Vote = new Vote()
    vote.candidate = data.candidate;
    vote.role = data.role;
    vote.party = data.party;
    await vote.save();
    return vote;
  } catch (error) {
    return error;
  }
}