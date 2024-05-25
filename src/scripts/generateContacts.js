import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let arrayGenContacts = [];
  for (let i = 0; i < number; i += 1) {
    arrayGenContacts.push(createFakeContact());
  }
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const newContacts = [...JSON.parse(contacts), ...arrayGenContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts));
  } catch (err) {
    console.error('Error', err);
  }
};

await generateContacts(5);
