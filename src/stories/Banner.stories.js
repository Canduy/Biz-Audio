import Banner from "../components/Banner/Banner";

export default {
  title: "atom/homes/Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const BannerAtom = Template.bind({});

BannerAtom.args = {};
