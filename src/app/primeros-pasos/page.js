import styles from "./page.module.css";
import Tabs from "../components/Tabs/Tabs";
import Subheader from "../components/Subheader/Subheader";

export const metadata = {
  title: "Panel de Inicio - Vetro",
  description: "Vetro app",
};

export default function Dashboard() {
  return (
    <div className={styles.table}>
      <Tabs />
      <Subheader />
    </div>
  );
}
