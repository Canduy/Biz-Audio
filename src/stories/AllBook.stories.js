import AllBook from "../components/AllBook/AllBook";

export default {
  title: "atom/gift/AllBook",
  component: AllBook,
};

const Template = (args) => <AllBook {...args} />;
export const AllBookAtom = Template.bind({});

AllBookAtom.args = {};
