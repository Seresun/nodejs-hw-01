import { writeContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log('Все контакты успешно удалены!');
};

removeAllContacts();
