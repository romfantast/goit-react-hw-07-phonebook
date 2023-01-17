import React from 'react';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import css from './NoContactsInfo.module.css';

const NoContactsInfo = () => {
  return (
    <div className={css.notify}>
      <div>
        <b>Ooops...</b>
      </div>
      <p>
        <BsEmojiSmileUpsideDown /> There are no contacts here
      </p>
    </div>
  );
};

export default NoContactsInfo;
