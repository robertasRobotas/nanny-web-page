import { useState } from "react";
import styles from "./review.module.css";
import startImg from "../../assets/images/review-star.svg";

export type ReviewType = {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  text: string;
  imgUrl: string;
};

const Review = ({ name, subtitle, rating, text, imgUrl }: ReviewType) => {
  const [isExpanded, setExpanded] = useState(false);
  const MAX_CONTRACTED_REVIEW_LENGTH = 200;

  const review = isExpanded ? text : text.slice(0, 260);

  return (
    <div className={styles.main}>
      <div className={styles.reviewer}>
        <img className={styles.userAvatars} src={imgUrl} alt="" />
        <div>
          <h5>{name}</h5>
          <h6>{subtitle}</h6>
        </div>
      </div>
      <div className={styles.rating}></div>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <img className={styles.star} key={i} src={startImg.src} alt="star" />
        ))}
      </div>

      <div className={styles.review}>
        <p>{review}</p>
        {text.length > MAX_CONTRACTED_REVIEW_LENGTH && (
          <button
            onClick={() => setExpanded((prevState) => !prevState)}
            className={styles.expandBtn}
          ></button>
        )}
      </div>
    </div>
  );
};

export default Review;
