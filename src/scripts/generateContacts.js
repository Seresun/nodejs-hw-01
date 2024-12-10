import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (count = 5) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${count} контактов успешно добавлено!`);
  } catch (error) {
    console.error('Ошибка при генерации контактов:', error.message);
  }
};

generateContacts();
