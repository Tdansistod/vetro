export const PAGES = [
  {
    header: "Panel de inicio",
    navbar: {
      href: "/",
      icon: "/icons/home.svg",
      label: "Panel de inicio",
      active: ["/", "/primeros-pasos"],
    },
    tabs: [
      { label: "Resumen", href: "/" },
      {
        label: "Primeros pasos",
        href: "/primeros-pasos",
      },
    ],
    subheader: [
      { title: "Resumen de hoy", path: "/" },
      { title: "Primeros pasos", path: "/primeros-pasos" },
    ],
  },
  {
    header: "Caja",
    navbar: {
      href: "/caja",
      icon: "/icons/cashier.svg",
      label: "Caja",
      active: ["/caja"],
    },
  },
  {
    header: "Venta",
    navbar: {
      href: "/venta",
      icon: "/icons/sale.svg",
      label: "Venta",
      active: ["/venta"],
    },
  },
  {
    header: "Compra",
    navbar: {
      href: "/compra",
      icon: "/icons/purchase.svg",
      label: "Compra",
      active: ["/compra"],
    },
    tabs: [
      { label: "Todos", href: "/todos" },
      { label: "Pagas", href: "/pagas" },
      { label: "A pagar", href: "/A-pagar" },
    ],
  },
  {
    header: "Clientes",
    navbar: {
      href: "/clientes",
      icon: "/icons/clients.svg",
      label: "Clientes",
      active: ["/clientes"],
    },
    tabs: [
      { label: "Todos", href: "/todos" },
      { label: "Deuda", href: "/deuda" },
    ],
  },
];

export function getCurrentPath() {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const url = new URL(fullUrl);
  return url.pathname;
}
