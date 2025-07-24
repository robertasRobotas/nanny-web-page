import Header from "@/components/Header/Header";
import styles from "../styles/Home.module.css";
import Profile from "@/components/Profile/Profile";
import Rating from "@/components/Rating/Rating";
import Location from "@/components/Location/Location";
import { profile } from "../mocks/profile";
import { reviews } from "../mocks/reviews";

import Reviews from "@/components/Reviews/Reviews";
import Capabilities from "@/components/Capabilities/Capabilities";

const NannyPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Profile
        imgUrl={profile.imgUrl}
        name={profile.name}
        intro={profile.intro}
        pageUrl={profile.pageUrl}
      />
      <div className={styles.additionalDataWrapper}>
        <Rating rating={4.8} reviewCount={30} />
        <Location />
      </div>

      <Reviews reviews={reviews} />

      <Capabilities
        capabilities={[
          "IN_DEMAND",
          "VERIFY",
          "FIRST_AID",
          "TEACHER",
          "ART",
          "SPORT",
        ]}
      />
    </div>
  );
};

export default NannyPage;
