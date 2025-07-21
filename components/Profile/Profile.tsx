import styles from "./profile.module.css";

type ProfileProps = {
  imgUrl: string;
  name: string;
  intro: string;
  pageUrl: string;
};

const Profile = ({ imgUrl, name, intro, pageUrl }: ProfileProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.subtitle}>Auklės informacija</h4>
        <div className={styles.heading}>
          <h2 className={styles.title}>{name}</h2>
          <div>
            <button>111111</button>
            <button>222222</button>
          </div>
        </div>
        <p>{intro}</p>
      </div>
    </div>
  );
};

export default Profile;
