import React from 'react';

// Components
import Header from '../Header/Header';
import BookList from '../BookList/BookList';
import AddForm from '../AddForm/AddForm';
import Footer from '../Footer/Footer';

import styles from './bookContainer.module.scss';

function BookContainer() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <BookList />
        <AddForm />
      </main>
      <Footer />
    </>
  );
}

export default BookContainer;
