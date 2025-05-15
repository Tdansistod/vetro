const styles = {
  table: "w-full h-full flex flex-col items-center justify-center",
};

export const metadata = {
  title: "Venta - Vetro",
  description: "Vetro app",
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Venta() {
  const files = await prisma.file.findMany();

  return (
    <div className={styles.table}>
      {files.map((file, index) => (
        <p key={index}>{file.name}</p>
      ))}
    </div>
  );
}
