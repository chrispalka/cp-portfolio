import { useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import styles from './app.module.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.glow}>Hi, I'm Chris</h1>
      <h2 className={styles.glow}>welcome to my page</h2>
      <div className={styles.card}>
        <FontAwesomeIcon
          icon={faAnglesDown}
          size='5x'
          className={[styles.icon, styles.glow].join(' ')}
          id={styles.breathe}
        />
      </div>
      <p className={styles.gray}>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
