import styles from './Blog.module.css';

const title = 'Blog';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <span className={styles.title}>{title}</span>
      <ul className={styles.blogList}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </ul>
    </div>
  );
};

export default Blog;
