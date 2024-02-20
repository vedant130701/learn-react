import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(artists.filter((obj) => obj.id != artist.id))
              // artists.splice(artist.id, 1)
              // splice is not allowed as it changes array. We can filter out and use setArtsts to set a new array.
              // filter used to create a copy.
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
