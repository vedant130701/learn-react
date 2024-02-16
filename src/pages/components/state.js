import { useState } from 'react';
import { sculptureList } from '../../data/data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0); 
  //this is a react hook
  //initially state 0. React uses index and setIndex to update index
  //setIndex, when react sees that, re-renders part of the screen that has changed due to index
  //state is for interaction, not storage
  //setIndex like a trigger here

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
