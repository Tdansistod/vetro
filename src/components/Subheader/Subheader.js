"use client";
import styles from "@/styles/components/Subheader.module.css";
import Import from "@/components/Import/Import";
import { usePathname } from "next/navigation";
import { PAGES } from "@/lib/navigation";

export default function Subheader() {
  const currentPagePath = usePathname();
  const currentPage = PAGES[currentPagePath];
  const subheader = currentPage.subheader;
  return (
    <div className={styles.subheader}>
      <p className={styles.title}>{subheader?.title}</p>
      {subheader?.import ? <Import /> : ""}
    </div>
  );
}
