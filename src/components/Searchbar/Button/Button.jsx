import styles from './button.module.css';

const Button = ({ children, loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
