import Auth from "../pages/Auth/Auth";

export default {
  title: "pages/auths/Auth",
  component: Auth,
};

const Template = (args) => <Auth {...args} />;

export const AuthLayout = Template.bind({});

AuthLayout.args = {};
