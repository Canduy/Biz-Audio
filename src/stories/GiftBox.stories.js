import GiftBox from "../components/GiftBox/GiftBox";
export default {
  title: "atom/gift/GiftBox",
  component: GiftBox,
};

const Template = (args) => <GiftBox {...args} />;

export const GiftBoxAtom = Template.bind({});

GiftBoxAtom.args = {};
