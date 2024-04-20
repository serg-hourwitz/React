import styles from './Radio.module.css'


const Radio = ({
  title,
  type = 'radio',
  name,
  value,
  onChange,
  onBlur,
  defaultChecked,
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
          defaultChecked={defaultChecked}
        />
      </label>
    </>
  );
};

export default Radio;
