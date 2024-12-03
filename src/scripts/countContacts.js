import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Количество контактов: ${contacts.length}`);
  return contacts.length;
};

countContacts();
