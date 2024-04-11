// * Base
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './Axios.module.css';

// * Local
const DEFAULT_STATE = { list: [], error: '', loading: true };

const ERROR_TEXT = 'List loading error. Try again';

const Axios = () => {
  const [state, setState] = useState(DEFAULT_STATE);
  // const [list, setList] = useState([]);
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(true);

  // зливаємо всі стейти в один

  // const [state, setState] = useState({
  //   list: [],
  //   error: '',
  //   loading: true,
  // });

  const getList = useCallback(() => {
    setState((prevState) => ({ ...prevState, loading: true }));

    axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(({ data }) => {
        setState((s) => ({ ...s, list: data }));
      })
      .catch(() => {
        setState((s) => ({ ...s, error: ERROR_TEXT }));
      })
      .finally(() => {
        setState((s) => ({ ...s, loading: false }));
      });
  }, []);

  useEffect(() => getList(), [getList]);

  return (
    <>
      <h2>Currency rates</h2>
      <ul className={styles.list}>
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <>
            <p>{state.error}</p>;
            <Button text="TRY AGAIN" onClick={getList} />
          </>
        ) : (
          state.list.map(({ txt, rate, cc, r030, exchangedate }) => (
            <Item
              txt={txt}
              rate={rate}
              cc={cc}
              exchangedate={exchangedate}
              key={`list item ${r030}`}
            />
          ))
        )}
      </ul>
    </>
  );
};

const Item = ({ cc, txt, rate, exchangedate }) => {
  return (
    <li className={styles.item}>
      <h4>
        {txt} ({cc})
      </h4>
      <p>Rate: {rate}</p>
      <p>Exchange date: {exchangedate}</p>
    </li>
  );
};

export default Axios;
