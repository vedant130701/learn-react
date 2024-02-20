import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'John Woodrow',
    lastName: 'Wilson',
    likescore: 10,
  });

  function handlePlusClick() {
    // player.likescore++;
    setPlayer(
      {...player, likescore: player.likescore+1}
    );
  }

  function handleFirstNameChange(e) {
    setPlayer(
      {...player, firstName: e.target.value}
    );
  }

  function handleLastNameChange(e) {
    setPlayer(
      {...player, lastName: e.target.value}
    );
    // initially only lastname was being set instead of the object. Therefore failure. Create copy and set.
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {'  '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
