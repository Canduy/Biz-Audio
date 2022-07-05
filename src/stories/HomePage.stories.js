import Home from "../pages/Home/Home";

export default {
  title: "pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});

HomePage.args = {};
