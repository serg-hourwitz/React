import styles from './News.module.css';

const title = 'News';

const News = () => {
  return (
    <div className={styles.news}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.newsList}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </ul>
    </div>
  );
};

export default News;
