import Register from "../pages/Register/Register";

export default {
  title: "pages/auths/Register",
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const RegisterLayout = Template.bind({});
RegisterLayout.args = {};
