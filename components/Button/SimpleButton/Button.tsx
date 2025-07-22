import styles from "./button.module.css";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return <div className={styles.main}>{title}</div>;
};

export default Button;
