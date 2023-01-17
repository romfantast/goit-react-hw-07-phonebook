import React from 'react';
import css from './App.module.css';
import ContactsForm from './ContactsForm/ContactsForm';
import InputFilterContact from './InputFilterContact/InputFilterContact';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  return (
    <div className={css.contacts}>
      <ContactsForm />
      <InputFilterContact />
      <ContactsList />
    </div>
  );
};

export default App;
