"use client";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { PAGES } from "@/app/lib/navigation";

export default function Header() {
  const currentPath = usePathname();

  const title = PAGES.find((item) =>
    item.navbar.active.includes(currentPath)
  )?.header;

  return (
    <div className={styles.header}>
      <p className={styles.title}>{title}</p>
      <div className={styles.buttons}>
        <div className={styles.item}>
          <img
            src="/icons/settings.svg"
            alt="configuración"
            title="configuración"
            className={styles.icon}
          />
        </div>
        <div className={`${styles.item} ${styles.logoutBtn}`}>
          <img
            src="/icons/logout.svg"
            alt="cerrar sesión"
            title="Cerrar sesión"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}
