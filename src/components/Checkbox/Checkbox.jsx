import styles from './Checkbox.module.css';


const Checkbox = ({
  title,
  type = 'checkbox',
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </label>
    </>
  );
}

export default Checkbox