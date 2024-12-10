import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();

    contacts.push(newContact);

    await writeContacts(contacts);

    console.log('Новый контакт добавлен:', newContact);
  } catch (error) {
    console.error('Ошибка при добавлении контакта:', error.message);
  }
};

addContact();
