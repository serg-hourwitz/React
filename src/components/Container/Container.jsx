import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styles from './Container.module.css';

const title = 'Blog name';

const Container = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <span>{title}</span>
      <Navigation />
    </div>
  );
}

export default Container