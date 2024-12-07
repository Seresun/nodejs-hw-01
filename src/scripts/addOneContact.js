import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';

const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };

    contacts.push(newContact);

    await writeContacts(contacts);

    console.log('Контакт успешно добавлен:', newContact);
  } catch (error) {
    console.error('Ошибка добавления контакта:', error.message);
  }
};

addOneContact();
