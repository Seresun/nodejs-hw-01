import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


export const generateContacts = async (count = 5) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: count }, () => createFakeContact());
  const updatedContacts = [...existingContacts, ...newContacts];
  await writeContacts(updatedContacts);
  console.log(`${count} контактов успешно добавлено!`);
};

generateContacts();
