"use client";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { PAGES } from "@/app/lib/navigation";

export default function Navbar() {
  const [extended, setExtended] = useState(false);
  const currentPath = usePathname();
  const navbar = PAGES.map((page) => page.navbar);

  const handleClick = () => {
    setExtended((prev) => !prev);
  };

  const isActive = (item) => {
    const isActive = item.active.find((path) => path === currentPath);
    return isActive;
  };
  return (
    <aside
      className={`${styles.sidebar} ${extended ? `${styles.extended}` : ""}`}
    >
      <nav className={styles.nav}>
        {navbar.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`${styles.item} ${
              isActive(item) ? `${styles.active}` : ""
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
          </a>
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
