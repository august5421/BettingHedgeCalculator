import React from 'react';
import '../App.css';

const Card = ({ title, content }) => {

  return (
    <div className='Card' >
      <div className='cardTitle'>{title}</div>
      {content}
    </div>
  );
};

export default Card;
