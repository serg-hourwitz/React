import { useState } from 'react';
import Time from '../Time/Time';
import styles from './Lesson.module.css';

const Lesson = () => {
  const [value, setValue] = useState('Default value');

  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevValue) => prevValue + 1);
  };

  
  return (
    <>
      <h1 className={styles.counter}>Value: {value}</h1>

      <h2>Counter: {count}</h2>

      <input type="text" onInput={(e) => setValue(e.target.value)} />

      <button type="button" onClick={() => setValue('Default value')}>
        <span>TO DEFAULT</span>
      </button>

      <button type="button" onClick={add}>
        <span>ADD 1</span>
      </button>

      <Time />
    </>
  );
};

export default Lesson;
