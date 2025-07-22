import styles from "./buttonWithIcon.module.css";

type ButtonWithIcon = {
  title: string;
  imgSrc: string;
};

const ButtonWithIcon = ({ title, imgSrc }: ButtonWithIcon) => {
  return (
    <button className={styles.main}>
      <img src={imgSrc} />
      <span>{title}</span>
    </button>
  );
};

export default ButtonWithIcon;
