import styles from "./capabilities.module.css";
import Capability from "../Capability/Capability";

type CapabilitiesProps = {
  capabilities: string[];
};

const Capabilities = ({ capabilities }: CapabilitiesProps) => {
  return (
    <div>
      <h2 className={styles.title}>Specialūs įgūdžiai</h2>

      <div className={styles.capabilities}>
        {capabilities.map((c) => {
          return <Capability key={c} id={c} />;
        })}
      </div>
    </div>
  );
};

export default Capabilities;
