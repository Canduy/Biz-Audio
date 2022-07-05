import TargetItem from "../components/TargetItem/TargetItem";
import "../components/GlobalStyle/GlobalStyle.scss";
export default {
  title: "atom/homes/TargetItem",
  component: TargetItem,
};

const Template = (args) => <TargetItem {...args} />;

export const TargetItemAtom = Template.bind({});

TargetItemAtom.args = {};
