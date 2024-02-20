import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
  // setNumber called, it does not render until done. So setNumber even done three times, the number does not update until render
  // so number + 1 only happens once. even though called thrice.
}
