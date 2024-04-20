import { useId } from 'react';

import Options from './Options';

import styles from './Select.module.css';

const Select = ({ title, name, onChange, onBlur, value }) => {
  const countrySelectId = useId();
  return (
    <>
      <label htmlFor={countrySelectId} className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <select
          className={styles.select}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        >
          <Options />
        </select>
      </label>
    </>
  );
};

export default Select;
