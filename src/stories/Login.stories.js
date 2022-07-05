import "../components/GlobalStyle/GlobalStyle.scss";
import Login from "../pages/Login/Login";
export default {
  title: "pages/auths/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const LoginForm = Template.bind({});

LoginForm.args = {};
