import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Tableau de Bord",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Produits Tendances",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Produits",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Commandes",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Clients",
  },
];
