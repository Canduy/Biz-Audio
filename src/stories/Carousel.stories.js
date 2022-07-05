import Carousel from "../components/Carousel/Carousel";

export default {
  title: "atom/homes/carousel",
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;
export const CarouselAtom = Template.bind({});

CarouselAtom.args = {};
