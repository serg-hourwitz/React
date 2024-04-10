import styles from './News.module.css';
import articles from './News.data';


const News = () => {
  return (
    <div className={styles.news}>
      <h2 className={styles.title}>Product Managers</h2>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li className={styles.item} key={article.id}>
            <div className={styles.block}>
              <img
                className={styles.icon}
                src={article.src}
                alt={article.alt}
              />
              <p>{article.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
