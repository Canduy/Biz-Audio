import Rating from "../components/Rating/Rating";
import "../components/Rating/Rating.module.scss";

export default {
  title: "atom/homes/Rating",
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const RatingAtom = Template.bind({});

RatingAtom.args = {};
