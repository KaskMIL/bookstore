import React from 'react';

const Book = () => {
  return (
    <li>
      <div className="book-data">
        <h2>title</h2>
        <h3>author</h3>
      </div>
      <button>Delete</button>
    </li>
  )
}

export default Book;