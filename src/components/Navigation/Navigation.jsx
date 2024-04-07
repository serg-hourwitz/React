import styles from './Navigation.module.css';


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#">Product</a>
        </li>
        <li className={styles.item}>
          <a href="#">Customers</a>
        </li>
        <li className={styles.item}>
          <a href="#">Pricing</a>
        </li>
        <li className={styles.item}>
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
