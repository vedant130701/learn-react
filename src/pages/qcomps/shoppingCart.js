import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // setPending(pending + 1);
    setPending(p=>p+1);
    await delay(3000);
    // setPending(pending - 1);
    setPending(p=>p-1);
    // so the pending is seen as zero when both are setPending in the same function. It is because react does not update state until end.
    // so need to do batch update
    // setCompleted(completed + 1);
    setCompleted(c=>c+1);
    // so using arrow functions we can do batch updates. This helps queue up updates. Since it is async, need to queue up for setCompleted
    // also.
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}