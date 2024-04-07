import styles from './News.module.css';

const title = 'Product Managers';

const News = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/check.svg" alt="check" />
            <p>Never worry about overpaying for your energy bill again. </p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/check.svg" alt="check" />
            <p>
              We will only switch you to energy companies that we trust and will
              treat you right.
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/check.svg" alt="check" />
            <p>We track the markets daily and know where the savings are. </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default News;
