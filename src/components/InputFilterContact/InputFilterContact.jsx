import React from 'react';
import ContactsAppCaption from '../ContactsAppCaption/ContactsAppCaption';
import css from './InputFilterContact.module.css';

import { setFindFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const InputFilterContact = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(setFindFilter(value));
  };
  return (
    <div className={css.inputWrapper}>
      <ContactsAppCaption>Find contacts by name</ContactsAppCaption>
      <input type="text" name="filter" onChange={handleFilter} />
    </div>
  );
};

export default InputFilterContact;
