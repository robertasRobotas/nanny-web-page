import styles from "./rating.module.css";
import startLowImg from "../../assets/images/star-low.svg";
import startHighImg from "../../assets/images/star-mid.svg";
import startMidImg from "../../assets/images/star-high.svg";

type RatingProps = {
  rating: number;
  reviewCount: number;
};

const Rating = ({ rating, reviewCount }: RatingProps) => {
  const title = "Geriausia Auklė";

  return (
    <div className={styles.main}>
      <h2 className={styles.rating}>{rating}</h2>
      <div className={styles.title}>
        <img src={startLowImg.src} />
        <img src={startMidImg.src} />
        <img src={startHighImg.src} />
        <h4 className={styles.titleText}>{title}</h4>
        <img src={startHighImg.src} />
        <img src={startMidImg.src} />
        <img src={startLowImg.src} />
      </div>
      <div>
        <span className={styles.description}>Remiantis</span>{" "}
        <span className={styles.reviewCount}>{reviewCount} atsiliepimais</span>
      </div>
    </div>
  );
};

export default Rating;
