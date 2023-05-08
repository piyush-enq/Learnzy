import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  city: sample([
    'Bangalore',
    'Delhi',
    'Gurgaon',
    'Kochi',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Mumbai',
    'Goa',
    'Bhopal',
    'Kolkata',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['Approved', 'denied']),
  subject: sample([
    'Physics',
    'Mathematics',
    'Chemistry',
    'Economics',
    'Video-Editing',
    'Biology',
    'English',
    'Java',
    'Accounting',
    'Python',
  ]),
}));

export default users;
