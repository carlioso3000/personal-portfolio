import React from 'react';
import '../../styles/loader.scss';

function Loader() {
  const message = 'Welcome...';
  const letters = message.split('');

  return (
    <div className='loader'>
      <h1>
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </div>
  );
}

export default Loader;