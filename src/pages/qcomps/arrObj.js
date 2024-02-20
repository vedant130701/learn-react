import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

// so since we initialize both list with initial list, reference is same.
// now even though we create a map to create copy of the list, issue is that inside the objects reference is same.
// so both updated.
// so we need deep copy.

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );
  // const [yourList, setYourList] = useState(
  //   initialList.map((i) => {
  //     return {...i}
  //   })
  // );
  // this a deepcopy of initialList.

  function handleToggleMyList(artworkId, nextSeen) {
    const artworkUpd = [...myList,]
    const tmpList = myList.map(e => {
        if (e.id === artworkId) {
            return {...e, seen: nextSeen}
            // deep copy on demand
            // e.seen = nextSeen
        }
        return e
    });
    setMyList(tmpList);
  }

  function handleToggleYourList(artworkId, nextSeen) {
    const tmpList = yourList.map(e => {
        if (e.id === artworkId) {
            // e.seen = nextSeen
            return {...e, seen: nextSeen}
            // deep copy on demand
        }
        return {...e}
    });
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
