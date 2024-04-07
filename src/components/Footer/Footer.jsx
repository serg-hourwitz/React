import styles from './Footer.module.css';
import baseStyles from '../../styles/base.module.css';
import Links from '../Links/Links';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={baseStyles.wrapper}>
        <div className={styles.block}>
          <a href="#">
            <img src="/public/logo.png" alt="logo" />
          </a>
          <Links />
          <img className={styles.img} src="/public/image2.svg" alt="guy" />
        </div>
      </div>
    </footer>
  );
}

export default Footer