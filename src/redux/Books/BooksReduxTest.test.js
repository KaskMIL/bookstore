import { add_book, delete_book, bookReducer } from './BooksRedux';

test('Add book to list', () => {
  const initial = [];
  const book = {title: 'Foundation', author: 'Asimov', id: 1};
  const final = [book];
  expect(bookReducer(initial, add_book(book))).toEqual(final);
})

test('Delete book from list', () => {
  const initial = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'El Alquimista', author: 'Cohelo', id: 2},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  const book = {title: 'El Alquimista', author: 'Cohelo', id: 2};
  const final = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  expect(bookReducer(initial, delete_book(book.id))).toEqual(final);
})

test('Unkonwn action', () => {
  const initial = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  const action = () => {return {type: 'unknown'}};
  expect(bookReducer(initial, action)).toEqual(initial);
})