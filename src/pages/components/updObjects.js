import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  function handleCityChange(e) {
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }
  // we want a new object to be created and re-rendered as a good practice. So this copy of artwork, only city changed
  // then copy of person with new artwork
  // deepcopy of entire object is created


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
