import styles from './Banner.module.css';
import baseStyles from '../../styles/base.module.css';


const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={baseStyles.wrapper}>
        <div className={styles.block}>
          <img className={styles.img} src="/public/image1.svg" alt="guy" />
          <img className={styles.img} src="/public/image.svg" alt="guy" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
