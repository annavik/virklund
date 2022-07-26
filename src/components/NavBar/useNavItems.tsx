import { uniqueId } from "lodash";
import { matchPath, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { id: uniqueId("navItem"), label: "Hem", path: "/" },
  {
    id: uniqueId("navItem"),
    label: "Mönster",
    path: "/patterns",
    matchPath: "/patterns/*",
  },
  { id: uniqueId("navItem"), label: "Virkskolan", path: "/lessons" },
  { id: uniqueId("navItem"), label: "Tips", path: "/tips" },
  { id: uniqueId("navItem"), label: "Kontakt", path: "/contact" },
];

export const useNavItems = () => {
  const location = useLocation();

  const navItems = NAV_ITEMS.map((navItem) => ({
    id: navItem.id,
    label: navItem.label,
    path: navItem.path,
    active: !!matchPath(navItem.matchPath ?? navItem.path, location.pathname),
  }));

  return navItems;
};
