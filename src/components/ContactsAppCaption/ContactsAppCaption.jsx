import React from 'react';
import css from './ContactsAppCaption.module.css';
import PropTypes from 'prop-types';

const ContactsAppCaption = ({ children }) => {
  return <div className={css.title}>{children}</div>;
};

ContactsAppCaption.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ContactsAppCaption;
