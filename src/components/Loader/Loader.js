import styles from "@/styles/components/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerin}></div>
    </div>
  );
}
