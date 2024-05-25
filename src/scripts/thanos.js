import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');

    let randomContacts = [];
    JSON.parse(contacts).forEach((element) => {
      if (Math.random() >= 0.5) {
        randomContacts.push(element);
      }
    });

    await fs.writeFile(PATH_DB, JSON.stringify(randomContacts));
  } catch (err) {
    console.error('Error', err);
  }
};

await thanos();
