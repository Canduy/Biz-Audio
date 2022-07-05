import NavItems from "../components/NavItems/NavItems";
import { HomeIcon } from "./HomeIcon.stories";

export default {
  title: "atom/homes/NavItem",
  component: NavItems,
};

const Tempalte = (args) => <NavItems {...args} />;

export const NavAtom = Tempalte.bind({});

NavAtom.args = {
  icon: <HomeIcon />,
};
