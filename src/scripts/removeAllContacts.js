import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = async () => {
  try {
    
    await writeContacts([]);
    console.log('Все контакты успешно удалены.');
  } catch (error) {
    console.error('Ошибка удаления всех контактов:', error.message);
  }
};

removeAllContacts();
