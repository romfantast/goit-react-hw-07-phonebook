import React from 'react';
import PropTypes from 'prop-types';
import css from './DeleteButton.module.css';

const DeleteButton = ({ type, id, actionText, onDeleteContact, children }) => {
  return (
    <button
      type={type}
      className={css.buttonOnDelete}
      onClick={() => onDeleteContact(id)}
    >
      {actionText}
      {children}
    </button>
  );
};

DeleteButton.propTypes = {
  actionText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default DeleteButton;
