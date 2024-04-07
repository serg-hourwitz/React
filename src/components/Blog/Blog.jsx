import styles from './Blog.module.css';

const title = 'We design tools to unveil your superpowers';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/icon.svg" alt="arrow" />
            <div className={styles.content}>
              <h3>First click tests</h3>
              <p>While most people enjoy casino gambling</p>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/icon1.svg" alt="design" />
            <div className={styles.content}>
              <h3>Design surveys</h3>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/icon2.svg" alt="heart" />
            <div className={styles.content}>
              <h3>Preference tests</h3>
              <p>The Myspace page defines the individual.</p>
            </div>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.block}>
            <img className={styles.icon} src="/public/icon3.svg" alt="gnomon" />
            <div className={styles.content}>
              <h3>Five second tests</h3>
              <p>
                Personal choices and the overall personality of the person.{' '}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
