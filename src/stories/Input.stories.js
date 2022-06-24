import Input from "../components/Input/Input";

export default {
  title: "Component/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputComp = Template.bind({});

InputComp.args = {};
