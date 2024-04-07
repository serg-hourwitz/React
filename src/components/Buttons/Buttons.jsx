import styles from './Buttons.module.css';

const signIn = 'Sign In';
const signUp = 'Sign Up';


const Buttons = () => {
  return (
    <div className={styles.container}>
      <button type="button">
        <span>{signIn}</span>
      </button>
      <button type="button">
        <span>{signUp}</span>
      </button>
    </div>
  );
}

export default Buttons
