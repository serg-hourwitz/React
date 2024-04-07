import Container from '../Container/Container';
import styles from './Header.module.css';
import baseStyles from '../../styles/base.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={baseStyles.wrapper}>
          <Container />
        </div>
      </header>
    </>
  );
};

export default Header;
