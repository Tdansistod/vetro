"use client";
import styles from "@/styles/components/Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PAGES } from "@/lib/navigation";

export default function Header() {
  const currentPagePath = usePathname();
  const currentPage = PAGES[currentPagePath];
  const header = currentPage?.header;
  return (
    <div className={styles.header}>
      <p className={styles.title}>{header}</p>
      <div className={styles.buttons}>
        <div className={styles.item}>
          <img
            src="/icons/settings.svg"
            alt="configuración"
            title="configuración"
            className={styles.icon}
          />
        </div>
        <Link className={`${styles.item} ${styles.logoutBtn}`} href="/">
          <img
            src="/icons/logout.svg"
            alt="cerrar sesión"
            title="Cerrar sesión"
            className={styles.icon}
          />
        </Link>
      </div>
    </div>
  );
}
