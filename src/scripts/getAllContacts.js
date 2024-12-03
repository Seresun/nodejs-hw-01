import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log('Все контакты:', contacts);
  return contacts;
};

getAllContacts();
