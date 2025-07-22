import React from "react";
import styles from "./languageSelectButton.module.css";

type LanguageSelectButtonProps = {
  selectedLanguage: "LT" | "EN";
  onSelectLanguage: () => void;
};

const LanguageSelectButton = ({
  selectedLanguage,
  onSelectLanguage,
}: LanguageSelectButtonProps) => {
  return (
    <select
      value={selectedLanguage}
      onChange={onSelectLanguage}
      className={styles.main}
    >
      <option value="LT">LT</option>
      <option value="EN">EN</option>
    </select>
  );
};

export default LanguageSelectButton;
