import { faker } from '@faker-js/faker';

export const createFakeContact = () => {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number('+38 (###) ###-##-##'),
  };
};
