"use client";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/navigation";

export default function Navbar() {
  const currentPagePath = usePathname();

  const [extended, setExtended] = useState(false);
  const handleClick = () => setExtended((prev) => !prev);

  return (
    <aside
      className={`${styles.sidebar} ${extended ? `${styles.extended}` : ""}`}
    >
      <nav className={styles.nav}>
        {NAV_ITEMS?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${styles.item} ${
              currentPagePath !== "/" && currentPagePath.startsWith(item.href)
                ? `${styles.active}`
                : ""
            }`}
          >
            <div className={styles.iconContainer}>
              <img
                src={item.icon}
                className={styles.icon}
                alt="Icono"
                title={item.label}
              />
            </div>
            <p className={styles.label}>{item.label}</p>
          </Link>
        ))}
      </nav>
      <button className={styles.arrowBtn} onClick={handleClick}>
        <img
          src="/icons/arrow.svg"
          className={`${styles.arrow} ${extended ? `${styles.rotated}` : ""}`}
        />
      </button>
    </aside>
  );
}
