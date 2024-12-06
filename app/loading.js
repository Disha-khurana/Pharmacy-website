import React from 'react';

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
      <div className="loading">
        Loading&#8230;
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
