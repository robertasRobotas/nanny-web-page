import styles from "./reviews.module.css";
import Review, { ReviewType } from "../Review/Review";
import ButtonWithIcon from "../Button/ButtonWithIcon/ButtonWithIcon";
import arrowDownImg from "../../assets/images/arrow-down.svg";
import { useState } from "react";

type ReviewsProps = {
  reviews: ReviewType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  const [isExpanded, setExpanded] = useState(false);
  const limitedReviews = isExpanded ? reviews : reviews.slice(0, 3);

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Atsiliepimai ({reviews.length})</h2>

      <div className={styles.reviews}>
        {limitedReviews.map((r) => (
          <Review
            key={r.id}
            id={r.id}
            name={r.name}
            subtitle={r.subtitle}
            text={r.text}
            rating={r.rating}
            imgUrl={r.imgUrl}
          />
        ))}
      </div>

      {reviews.length > 3 && (
        <div className={styles.expandButtonWrapper}>
          {isExpanded ? (
            <ButtonWithIcon
              title="Rodyti mažiau"
              imgSrc={arrowDownImg.src}
              onClick={() => setExpanded((prevState) => !prevState)}
            />
          ) : (
            <ButtonWithIcon
              title="Rodyti daugiau"
              imgSrc={arrowDownImg.src}
              onClick={() => setExpanded((prevState) => !prevState)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Reviews;
