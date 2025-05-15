import Link from "next/link";
export const metadata = {
  title: "Panel de Inicio - Vetro",
  description: "Vetro app",
};

export default function Dashboard() {
  return <Link href={"/panel-inicio"}>Panel de inicio</Link>;
}
