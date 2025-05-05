"use client";
import styles from "./Subheader.module.css";
import { usePathname } from "next/navigation";
import { PAGES } from "@/app/lib/navigation";
export default function Subheader() {
  const currentPath = usePathname();
  const subheaders = PAGES.map((page) => page.subheader).flat();

  const actualSubheader = subheaders.find((subheader) =>
    subheader?.path === "/"
      ? currentPath === "/"
      : subheader?.path?.includes(currentPath)
  )?.title;

  return (
    <div className={styles.subheader}>
      <p className={styles.title}>{actualSubheader}</p>
    </div>
  );
}
