import React from 'react';

// Components
import Header from '../Header/Header';
import BookList from '../BookList/BookList';
import AddForm from '../AddForm.js/AddForm';

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
