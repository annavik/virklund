import { useNavigate } from "react-router";
import { Dropdown } from "../../Dropdown/Dropdown";
import { useNavItems } from "../useNavItems";

export const SmallScreenMenu = () => {
  const navigate = useNavigate();
  const navItems = useNavItems();
  const items = navItems.map((navItem) => ({
    id: navItem.id,
    label: navItem.label,
  }));
  const selected = navItems.find((navItem) => navItem.active)?.id;

  return (
    <Dropdown
      items={items}
      selected={selected}
      style={{ width: "120px" }}
      onSelect={(id) => {
        const navItem = navItems.find((navItem) => navItem.id === id);
        if (navItem) {
          navigate(navItem.path);
        }
      }}
    />
  );
};
