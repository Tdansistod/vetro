import "@/styles/globals.css";
import { Blinker } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default async function rootLayout({ children }) {
  return (
    <html lang="es">
      <body className={blinker.className}>
        <Navbar />
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
