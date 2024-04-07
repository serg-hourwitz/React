import styles from './Navigation.module.css';
import items from './Navigation.data';


const Navigation = () => {
  
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>{items.map((item) => (
    <li className={styles.item} key={item.id}>
      <a href="#">{item.title}</a>
    </li>
  ))}</ul>
    </div>
  );
};

export default Navigation;
