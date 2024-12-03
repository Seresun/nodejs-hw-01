import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  await writeContacts(contacts);
  console.log('Один контакт успешно добавлен:', newContact);
};

addOneContact();
