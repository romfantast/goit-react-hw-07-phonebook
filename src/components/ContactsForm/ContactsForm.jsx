import React from 'react';
import { Notify } from 'notiflix';
import ContactsAppCaption from 'components/ContactsAppCaption/ContactsAppCaption';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/operations';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleContactData = e => {
    e.preventDefault();
    const { name, phone } = e.currentTarget.elements;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return Notify.warning('This contact is already in the list');
    }
    const contact = {
      name: name.value,
      phone: phone.value,
    };
    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <>
      <ContactsAppCaption>Name</ContactsAppCaption>
      <form onSubmit={handleContactData} className={css.form}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters"
            required
          />
        </div>
        <ContactsAppCaption>Number</ContactsAppCaption>
        <div className={css.inputWrapper}>
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits"
            required
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactsForm;
