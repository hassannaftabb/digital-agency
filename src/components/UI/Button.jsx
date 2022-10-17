import React from 'react';
import Loader from './Loader';

const Button = ({ onSubmit, isLoading, title }) => {
  console.log('IsLoading:', isLoading);
  return (
    <button
      type="submit"
      onClick={onSubmit}
      className={`block w-full rounded-lg ${
        isLoading ? 'bg-transparent' : 'bg-indigo-600'
      } px-5 py-3 text-sm font-medium text-white text-center flex items-center justify-center`}
      disabled={isLoading ? true : false}
    >
      {isLoading ? <Loader /> : title}
    </button>
  );
};

export default Button;
