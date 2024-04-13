import { useState } from 'react';
import Time from '../Time/Time';
import styles from './Lesson.module.css';
import Axios from '../Axios/Axios';
import Converter from '../Converter/Converter';

const Lesson = () => {
  const [value, setValue] = useState('Default value');

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.counter}>Value: {value}</h1>

      <input type="text" onInput={(e) => setValue(e.target.value)} />
      <button type="button" onClick={() => setValue('Default value')}>
        <span>TO DEFAULT</span>
      </button>

      <h2>Counter: {count}</h2>

      <button
        type="button"
        onClick={() => {
          setCount((prevValue) => prevValue + 1);
        }}
      >
        <span>ADD 1</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setCount((prevValue) => prevValue - 1);
        }}
      >
        <span>SUBTRACT 1</span>
      </button>

      <Time />
      <Converter />
      <Axios />
    </>
  );
};

export default Lesson;
