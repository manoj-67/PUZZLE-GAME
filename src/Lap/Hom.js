 import React from 'react';

const Hom = () => {
  return (
    <div
      style={{
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: 'white',
      }}
    >
      <h1 style={{color: 'black', }}> Welcome to Our App!</h1>
      <p
        style={{
          fontSize: '16px',
          color: 'black',
          marginBottom: '15px',
        }}
      >
        We're glad you're here. Explore and enjoy!
      </p>
      <p
        style={{
          fontSize: '14px',
          color: 'black',
        }}
      >
        - Your Team App
      </p>
    </div>
  );
};

export default Hom;
