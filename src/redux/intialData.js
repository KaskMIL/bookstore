import { v4 } from 'uuid';

const initialData = {
  books: [
    {
      title: 'Foundation',
      author: 'Asimov',
      id: v4(),
    },
    {
      title: 'El Alquimista',
      author: 'Cohelo',
      id: v4(),
    },
    {
      title: 'the crow',
      author: 'Edgard Allan Poe',
      id: v4(),
    },
  ],
  categories: [],
};

export default initialData;
