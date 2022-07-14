import React, { useState } from 'react';
import Select from 'react-select';
import { v4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/Books/BooksAsync';

function AddForm() {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });
  const [categoryInput, setCategory] = useState({ category: '' });

  const dispatch = useDispatch();

  const options = [
    { value: 'Action', label: 'Action' },
    { value: 'Fiction', label: 'Fiction' },
    { value: 'Science-Fiction', label: 'Science-fitcion' },
    { value: 'Romance', label: 'Romance' },
    { value: 'History', label: 'History' },
  ];

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategory = (e) => {
    setCategory({ category: e.value });
  };

  const newBook = (e) => {
    e.preventDefault();
    if (inputText.title && inputText.author) {
      const newBook = {
        title: inputText.title,
        author: inputText.author,
        id: v4(),
        category: categoryInput.category,
      };
      dispatch(addBook(newBook));
    } else {
      alert('Please fill all the fields');
    }
    setInputText({
      title: '',
      author: '',
    });
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
        <Select options={options} onChange={(e) => handleCategory(e)} />
        <button onClick={(e) => newBook(e)} type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default AddForm;
