import axios from 'axios';
import { domain } from '../index.js';

export async function OTTepid(id) {
  if (!id) throw new Error('ID is required.');

  try {
    const { data } = await axios.get(`${domain}/api/ep`, {
      params: { id: id }, 
    });

    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}