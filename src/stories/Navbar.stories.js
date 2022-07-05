import Navbar from "../layouts/Navbar/Navbar";

export default {
  title: "layout/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const NavbarLayout = Template.bind({});

NavbarLayout.args = {};
