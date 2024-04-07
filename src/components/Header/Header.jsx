import styles from './Header.module.css';
import baseStyles from '../../styles/base.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Buttons from '../Buttons/Buttons';


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={baseStyles.wrapper}>
          <div className={styles.container}>
            <Logo />
            <Navigation />
            <Buttons />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
