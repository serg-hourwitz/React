import styles from './Links.module.css';


const Links = () => {
  return (
    <div className={styles.links}>
      <div className={styles.block}>
        <h4>Quick Links</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#">About Us</a>
          </li>
          <li className={styles.item}>
            <a href="#">Blog</a>
          </li>
          <li className={styles.item}>
            <a href="#">Contact</a>
          </li>
          <li className={styles.item}>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className={styles.block}>
        <h4>Legal Stuff</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#">Disclaimer</a>
          </li>
          <li className={styles.item}>
            <a href="#">Financing</a>
          </li>
          <li className={styles.item}>
            <a href="#">Privacy Policy</a>
          </li>
          <li className={styles.item}>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Links