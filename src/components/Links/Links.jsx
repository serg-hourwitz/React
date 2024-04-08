import styles from './Links.module.css';
import items1 from './Links.data1';
import items2 from './Links.data';

const Links = () => {
  return (
    <div className={styles.links}>
      <div className={styles.block}>
        <h4>Quick Links</h4>
        <ul className={styles.list}>
          {items1.map((item) => (
            <li className={styles.item} key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.block}>
        <h4>Legal Stuff</h4>
        <ul className={styles.list}>
          {items2.map((item) => (
            <li className={styles.item} key={item.id}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
