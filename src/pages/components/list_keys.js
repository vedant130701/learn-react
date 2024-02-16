const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map((person, index) =>
    <li key={index}>{person}</li>
  );
  // here index of array taken in as key. But not that good, as any change messes up stuff.
  return <ul>{listItems}</ul>;
}