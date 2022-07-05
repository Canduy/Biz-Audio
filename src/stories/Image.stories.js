import Image from "../components/Image/Image";

export default {
  title: "atom/homes/Image",
  component: Image,
  args: {
    width: "200px",
  },
};

const Template = (args) => <Image {...args} />;

export const ImageAtom = Template.bind({});

ImageAtom.args = {};
