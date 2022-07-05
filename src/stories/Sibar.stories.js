import SideBar from "../layouts/SideBar/SideBar";

export default {
  title: "layout/Sidebar",
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const SideBarLayout = Template.bind({});

SideBarLayout.args = {};
