function Item({ name, isPacked }) {
  return (<li className="item">
    {isPacked?(name): <del>name</del>}
  </li>)
}

// <del> strikes out
// if (isPacked) {
//   return <li className="item">{name} ✔</li>;
// }
// return <li className="item"> <del>{name}</del> </li>
// we can use ternary operator also as shown above
// return isPacked? <li className="item">{name} ✔</li>: <li className="item"> <del>{name}</del> </li>
// one way of ternary, another ternary defined above

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={false}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={true}
          name="Socks"
        />
      </ul>
    </section>
  );
}
