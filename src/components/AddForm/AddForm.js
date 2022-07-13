import React from 'react';

// import { useDispatch } from 'react-redux';
// import { addBook } from '../../redux/Books/BooksRedux';

function AddForm() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Book Author" />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddForm;
