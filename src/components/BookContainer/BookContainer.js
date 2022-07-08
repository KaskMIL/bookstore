import React from 'react';

// Components
import Header from '../Header/Header';
import BookList from '../BookList/BookList';
import AddForm from '../AddForm/AddForm.js';

function BookContainer() {
  return (
    <>
      <Header />
      <main>
        <BookList />
        <AddForm />
      </main>
    </>
  );
}

export default BookContainer;
