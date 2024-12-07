import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Нет контактов для удаления.');
      return;
    }

    const removedContact = contacts.pop();

    await writeContacts(contacts);

    console.log('Последний контакт удален:', removedContact);
  } catch (error) {
    console.error('Ошибка удаления последнего контакта:', error.message);
  }
};

removeLastContact();
