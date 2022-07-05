import Button from "../components/Button/Button.jsx";
export default {
  title: "atom/Button",
  component: Button,
};
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: "Click me",
};

export const Gray = Template.bind({});

Gray.args = {
  gray: true,
  children: "click me",
};

export const Large = Template.bind({});

Large.args = {
  large: true,
  children: "click me",
};
