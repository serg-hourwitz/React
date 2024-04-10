import styles from './Blog.module.css';
import articles from './Blog.data';


const Blog = () => {
  return (
    <div className={styles.blog}>
      <h2 className={styles.title}>'We design tools to unveil your superpowers'</h2>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li className={styles.item} key={article}>
            <div className={styles.block}>
              <img
                className={styles.icon}
                src={article.src}
                alt={article.alt}
              />
              <div className={styles.content}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
