import Input from "../components/Input/Input";

export default {
  title: "atom/Input",
  component: Input,
  args: {
    width: "300px",
  },
};

const Template = (args) => <Input {...args} />;

export const InputComp = Template.bind({});

InputComp.args = {};
