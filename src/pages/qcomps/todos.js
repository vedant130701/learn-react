const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img className="avatar"
      src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
      // src={baseUrl+ person.imageId + person.imageSize + '.jpg'}
      // can do this way also for source
      // "baseURL + imageID + imageSize + .jpg"
      alt={person.name}
      />
    </div>
  );
}
