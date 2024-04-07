import styles from './Navigation.module.css';


const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navBar}>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
        <li className={styles.navItem}></li>
      </ul>
    </div>
  );
};

export default Navigation;
