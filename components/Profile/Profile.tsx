import { useState } from "react";
import styles from "./profile.module.css";
import ButtonWithIcon from "../Button/ButtonWithIcon/ButtonWithIcon";
import hearthIcon from "../../assets/images/hearth.svg";
import shareIcon from "../../assets/images/share.svg";

type ProfileProps = {
  imgUrl: string;
  name: string;
  intro: string;
  pageUrl: string;
};

const Profile = ({ imgUrl, name, intro, pageUrl }: ProfileProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const maxLenth = 600;

  const isContracted = intro.length > maxLenth;

  const introText = isExpanded ? intro : intro.slice(0, maxLenth);

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.subtitle}>Auklės informacija</h4>
        <div className={styles.heading}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.buttonsWrapper}>
            <ButtonWithIcon title="Išsaugoti" imgSrc={hearthIcon.src} />
            <ButtonWithIcon title="Dalintis" imgSrc={shareIcon.src} />
          </div>
        </div>
        <>
          <p className={styles.intro}>
            <span> {introText}</span>{" "}
            {isContracted && (
              <button
                onClick={() => setExpanded((prevState) => !prevState)}
                className={styles.contract}
              >
                {isExpanded ? <>Suskleisti </> : <>Daugiau...</>}
              </button>
            )}
          </p>
        </>
      </div>
    </div>
  );
};

export default Profile;
