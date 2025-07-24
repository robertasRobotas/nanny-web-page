import styles from "./buttonWithIcon.module.css";

type ButtonWithIcon = {
  title: string;
  imgSrc: string;
  onClick: () => void;
};

const ButtonWithIcon = ({ title, imgSrc, onClick }: ButtonWithIcon) => {
  return (
    <button className={styles.main} onClick={onClick}>
      <img src={imgSrc} />
      <span>{title}</span>
    </button>
  );
};

export default ButtonWithIcon;
