import React from 'react';

// Components
import Header from '../Header/Header';
import BookList from '../BookList/BookList';
import AddForm from '../AddForm/AddForm';

import styles from './bookContainer.module.scss';

function BookContainer() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <BookList />
        <AddForm />
      </main>
    </>
  );
}

export default BookContainer;
