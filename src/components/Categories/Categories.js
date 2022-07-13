import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/Categories/CategoriesRedux';
import Header from '../Header/Header';

function Categories() {
  const dispatch = useDispatch();

  const checkCategories = (e) => {
    e.preventDefault();
    dispatch(checkStatus());
  };
  return (
    <>
      <Header />
      <button onClick={(e) => checkCategories(e)} type="submit">
        Check Status
      </button>
    </>
  );
}

export default Categories;
