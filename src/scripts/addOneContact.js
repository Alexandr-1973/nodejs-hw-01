import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const newContacts = [...JSON.parse(contacts), createFakeContact()];
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (err) {
    console.error('Error', err);
  }
};

await addOneContact();
