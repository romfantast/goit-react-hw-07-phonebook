import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.dots}>
      <ThreeDots
        height="50"
        width="50"
        radius="7"
        color="#1f59b0"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
