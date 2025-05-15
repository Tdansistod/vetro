"use client";
import styles from "@/styles/components/Tabs.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/navigation";

export const Tabs = () => {
  const currentPagePath = usePathname();
  const currentPage = PAGES[currentPagePath];
  const tabs = currentPage.tabs;

  return (
    <div className={styles.tabs}>
      {tabs?.map((tab, index) => (
        <Link
          className={`${styles.tab} ${
            currentPagePath !== "/" && tab.href === currentPagePath
              ? `${styles.active}`
              : ""
          }`}
          key={index}
          href={tab.href}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};
export default Tabs;
