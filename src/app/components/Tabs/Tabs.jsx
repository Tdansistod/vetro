import styles from "./Tabs.module.css";
import { headers } from "next/headers";
import { PAGES, getCurrentPath } from "@/app/lib/navigation";
export default function Tabs() {
  const currentPath = getCurrentPath();
  const currentTabs =
    PAGES.find((page) => page.tabs.some((tab) => tab.href === currentPath))
      ?.tabs || null;

  return (
    <div className={styles.tabs}>
      {currentTabs?.map((tab, index) => (
        <a
          className={`${styles.tab} ${
            tab.href === currentPath ? `${styles.active}` : ""
          }`}
          key={index}
          href={tab.href}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
