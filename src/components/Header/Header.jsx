// * Base
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
// * Components
import Wrapper from '../Wrapper/Wrapper';

//* Styles
import styles from './Header.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

//* State
import { useCallback } from 'react';

const Header = () => {
  const signIn = useCallback(() => {
    console.log('sign in');
  }, []);

  return (
    <>
      {/*few classes*/}
      <header className={cn([styles.header, styles.background])}>
        <Wrapper className={[styles.wrapper]}>
          <div className={styles.container}>
            <Logo />
            <Navigation />
            <div className={styles.block}>
              <Button text={'Sign In'} onClick={signIn} />
              <Button text={'Sign Up'} color={'white'} />
              <Button
                target="_blank"
                href="https://www.instagram.com/"
                color={'red'}
                text="Instagram"
              />
            </div>
          </div>
        </Wrapper>
        {/* navigation in framework */}
        <div className={styles.links}>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
