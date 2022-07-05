import HomeMain from "../layouts/HomeMain/HomeMain";

export default {
  title: "layout/HomeMain",
  component: HomeMain,
};

const Template = (args) => <HomeMain {...args} />;

export const HomeMainLayout = Template.bind({});

HomeMainLayout.args = {};
