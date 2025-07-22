import Header from "@/components/Header/Header";
import styles from "../styles/Home.module.css";
import Profile from "@/components/Profile/Profile";
import Rating from "@/components/Rating/Rating";
import Location from "@/components/Location/Location";

const NannyPage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Profile
        imgUrl="https://www.international-nanny.com/wp-content/uploads/2021/04/shutterstock_557866771-2-min-1024x852.png"
        name="Ana"
        intro=" Sveiki! Mano vardas Aistė ir man labai patinka dirbti su vaikais. Jau
          daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą, tiek visą
          darbo dieną, ir man labai patinka kurti vaikams linksmą ir saugią
          aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų ne tik
          linksmos, bet ir lavinančios bei pritaikytos Mano vardas Aistė ir man labai patinka dirbti su vaikais. Jau
          daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą, tiek visą
          darbo dieną, ir man labai patinka kurti vaikams linksmą ir saugią
          aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų ne tik
          linksmos, bet ir lavinančios bei pritaikytos Mano vardas Aistė ir man labai patinka dirbti su vaikais. Jau
          daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą, tiek visą
          darbo dieną, ir man labai patinka kurti vaikams linksmą ir saugią
          aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų ne tik
          linksmos, bet ir lavinančios bei pritaikytos Mano vardas Aistė ir man labai patinka dirbti su vaikais. Jau
          daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą, tiek visą
          darbo dieną, ir man labai patinka kurti vaikams linksmą ir saugią
          aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų ne tik
          linksmos, bet ir lavinančios bei pritaikytos Mano vardas Aistė ir man labai patinka dirbti su vaikais. Jau
          daugiau nei penkerius metus prižiūriu vaikus, tiek ne visą, tiek visą
          darbo dieną, ir man labai patinka kurti vaikams linksmą ir saugią
          aplinką. Visada stengiuosi sugalvoti veiklų, kurios būtų ne tik
          linksmos, bet ir lavinančios bei pritaikytos"
        pageUrl="..."
      />
      <div className={styles.additionalDataWrapper}>
        <Rating rating={4.8} reviewCount={30} />
        <Location />
      </div>
    </div>
  );
};

export default NannyPage;
