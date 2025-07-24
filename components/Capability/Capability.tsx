import styles from "./capability.module.css";
import { capabilities } from "../../data/capabilities";

type CapabilityProps = {
  id: string;
};

const Capability = ({ id }: CapabilityProps) => {
  const capability = capabilities.find((c) => c.id === id);

  return (
    <div className={styles.main}>
      <img className={styles.icon} src={capability?.icon.src} />
      <h3 className={styles.title}>{capability?.title}</h3>
      <h4 className={styles.subtitle}>{capability?.subtitle}</h4>
    </div>
  );
};

export default Capability;
