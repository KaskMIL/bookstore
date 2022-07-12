import * as actions from './BooksRedux';

test('Add book to list', () => {
  const initial = [];
  const book = {title: 'Foundation', author: 'Asimov', id: 1};
  const final = [book];
  expect(actions.default(initial, actions.add_book(book))).toEqual(final);
})

test('Delete book from list', () => {
  const initial = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'El Alquimista', author: 'Cohelo', id: 2},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  const book = {title: 'El Alquimista', author: 'Cohelo', id: 2};
  const final = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  expect(actions.default(initial, actions.delete_book(book.id))).toEqual(final);
})

test('Unkonwn action', () => {
  const initial = [{title: 'Foundation', author: 'Asimov', id: 1},{title: 'the crow', author: 'Edgard Allan Poe', id: 3}];
  const action = () => {return {type: 'unknown'}};
  expect(actions.default(initial, action)).toEqual(initial);
})