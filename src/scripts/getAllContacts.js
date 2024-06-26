import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(contacts);
  } catch (err) {
    console.error('Error', err);
  }
};

console.log(await getAllContacts());
