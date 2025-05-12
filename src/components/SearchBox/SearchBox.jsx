import React from 'react';
import { useId } from 'react';
import stl from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const id = useId();
  const Filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChangeImput = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={stl.SearchBoxwrapper}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" value={Filter} onChange={handleChangeImput} id={id} />
    </div>
  );
};

export default SearchBox;
