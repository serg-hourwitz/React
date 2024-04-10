import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({
  text = 'Default text',
  type = 'button',
  color = 'default',
  href = '',
  onClick,
}) => {
  const styleList = [styles.button];

  switch (color) {
    case 'red': {
      styleList.push(styles.red);
      break;
    }
    case 'white': {
      styleList.push(styles.white);
      break;
    }
    default: {
      console.log('=)');
    }
  }

  if (href) {
    return <Link text={ text} href={href} onClick={onClick} styleList={styleList}/>;
  }

  return (
    <div>
      <button type={type} onClick={onClick} className={cn(styleList)}>
        <span>{text}</span>
      </button>
    </div>
  );
};

const Link = ({ text, href, onClick, styleList }) => {
  return (
    <a target='_blank' href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
}

export default Button;
