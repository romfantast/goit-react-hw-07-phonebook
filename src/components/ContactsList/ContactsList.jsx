import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { BsXCircle } from 'react-icons/bs';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import NoContactsInfo from 'components/NoContactsInfo/NoContactsInfo';
import css from './ContactsList.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts, getFindFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFindFilter);

  const showFilteredContacts = (() => {
    const filterStr = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStr)
    );
  })();

  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <>
      <ul className={css.contactList}>
        {showFilteredContacts.length === 0 && <NoContactsInfo />}
        {showFilteredContacts.map(contact => (
          <li className={css.contactItem} key={contact.id}>
            <p className={css.contactInfoWrapper}>
              <BiUserCircle className={css.contactIcon} />
              <span className={css.contactName}>{contact.name}:</span>&nbsp;
              <span className={css.contactPhone}>{contact.phone}</span>
            </p>

            <DeleteButton
              type="button"
              onDeleteContact={() => handleDelete(contact.id)}
              id={contact.id}
              actionText=" Delete"
            >
              <BsXCircle />
            </DeleteButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
