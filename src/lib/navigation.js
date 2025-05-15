export const NAV_ITEMS = [
  {
    label: "Panel de inicio",
    href: "/panel-inicio",
    icon: "/icons/home.svg",
  },
  {
    label: "Caja",
    href: "/caja",
    icon: "/icons/cashier.svg",
  },
  {
    label: "Venta",
    href: "/venta",
    icon: "/icons/sale.svg",
  },
  {
    label: "Compra",
    href: "/compra",
    icon: "/icons/purchase.svg",
  },
  {
    label: "Clientes",
    href: "/clientes",
    icon: "/icons/clients.svg",
  },
];

export const PAGES = {
  "/panel-inicio": {
    header: "Panel de inicio",
    tabs: [
      { label: "Resumen", href: "/panel-inicio" },
      {
        label: "Primeros pasos",
        href: "/panel-inicio/primeros-pasos",
      },
    ],
    subheader: { title: "Resumen de hoy" },
  },
  "/panel-inicio/primeros-pasos": {
    header: "Panel de inicio",
    tabs: [
      { label: "Resumen", href: "/panel-inicio" },
      {
        label: "Primeros pasos",
        href: "/panel-inicio/primeros-pasos",
      },
    ],
    subheader: { title: "Primeros pasos" },
  },
  "/caja": {
    header: "Caja",
    subheader: {
      title: "sub",
    },
  },
  "/venta": {
    header: "Venta",
    subheader: {
      title: "Dropdown de lista actual >",
      import: true,
    },
  },
  "/compra/ordenes": {
    header: "Compra",
    subheader: {
      title: "Dropdown de lista actual >",
      import: true,
    },
  },
  "/compra/generar-orden": {
    header: "Compra",
    subheader: {
      title: "Dropdown de lista actual >",
    },
  },
  "/compra/proveedores": {
    header: "Compra",
    subheader: {
      title: "Dropdown de lista actual >",
    },
  },
  "/clientes/listas": {
    header: "Compra",
    subheader: {
      title: "Dropdown de lista actual >",
    },
  },
  "/clientes/descuentos": {
    header: "Compra",
    subheader: {
      title: "Dropdown de lista actual >",
    },
  },
};
