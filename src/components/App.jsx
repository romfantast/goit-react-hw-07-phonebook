import React, { useEffect } from 'react';
import css from './App.module.css';
import ContactsForm from './ContactsForm/ContactsForm';
import InputFilterContact from './InputFilterContact/InputFilterContact';
import ContactsList from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from './Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts}>
      <ContactsForm />
      <InputFilterContact />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </div>
  );
};

export default App;
