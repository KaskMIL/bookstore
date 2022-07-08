import React from 'react';

const Book = (props) => {
  return (
    <li>
      <div className="book-data">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
      </div>
      <button>Delete</button>
    </li>
  )
}

export default Book;