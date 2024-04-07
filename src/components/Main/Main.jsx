import styles from './Main.module.css';
import Blog from '../Blog/Blog';
import News from '../News/News';
import baseStyles from '../../styles/base.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={baseStyles.wrapper}>
        <div className={styles.container}>
          <Blog />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Main;
