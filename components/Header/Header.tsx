import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.svg";
import Button from "../Button/SimpleButton/Button";
import LanguageSelectButton from "../Button/LanguageSelectButton/LanguageSelectButton";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo.src} alt="" />
      </div>

      <div className={styles.links}>
        <nav>
          <ul>
            <li>
              <a href="#">Apie Nannow</a>
            </li>
            <li>
              <a href="#">Ieškau auklės</a>
            </li>
            <li>
              <a href="#">Noriu būti aukle</a>
            </li>
            <li>
              <a href="#">Kaip veikia</a>
            </li>
            <li>
              <a href="#">Savybės</a>
            </li>
            <li>
              <a href="#">Įkūrėjai</a>
            </li>
            <li>
              <a href="#">DUK</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.buttons}>
        <Button title="Registruokis" />
        <LanguageSelectButton
          selectedLanguage="LT"
          onSelectLanguage={() => console.log("selected")}
        />
      </div>
    </div>
  );
};

export default Header;
