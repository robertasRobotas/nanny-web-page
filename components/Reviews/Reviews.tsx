import styles from "./reviews.module.css";
import Review, { ReviewType } from "../Review/Review";

type ReviewsProps = {
  reviews: ReviewType[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Atsiliepimai ({reviews.length})</h2>

      <div className={styles.reviews}>
        {reviews.map((r) => (
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

      <div></div>
    </div>
  );
};

export default Reviews;
