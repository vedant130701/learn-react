import styles from '@/styles/Home.module.css';
function Square({children}) {
  return (
    <div className={styles.square}>
      {children}
    </div>
  )
}
// children bound to child component of Square component. This helps in styling the children in a standard format.
export default function Holder() {
  return (
    <div>
      <Square>
        <img
          className="avatar"
          src={'https://i.imgur.com/YfeOqp2s.jpg'}
          alt={'Katsuko Saruhashi'}
          width={300}
          height={300}
        />
      </Square>
      <Square>
        <label for="image"> 
          <b> Katsuko Saruhashi  </b>
        </label>
      </Square>
      
    </div>
  )
}
