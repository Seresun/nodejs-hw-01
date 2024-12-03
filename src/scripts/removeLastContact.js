import { readContacts, writeContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    const removedContact = contacts.pop();
    await writeContacts(contacts);
    console.log('Последний контакт удалён:', removedContact);
  } else {
    console.log('Нет контактов для удаления.');
  }
};

removeLastContact();
