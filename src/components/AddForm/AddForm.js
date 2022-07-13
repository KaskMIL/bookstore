import React, { useState } from 'react';
import { v4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Books/BooksRedux';

function AddForm() {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const newBook = (e) => {
    e.preventDefault();
    if (inputText.title && inputText.author) {
      const newBook = {
        title: inputText.title,
        author: inputText.author,
        id: v4(),
      };
      dispatch(addBook(newBook));
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="title"
          value={inputText.title}
          placeholder="Book Title"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="author"
          value={inputText.author}
          placeholder="Book Author"
        />
        <button onClick={(e) => newBook(e)} type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default AddForm;
