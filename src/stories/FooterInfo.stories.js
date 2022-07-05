import FooterInfo from "../components/FooterInfo/FooterInfo";
import { MailIcon, MapIcon } from "../components/Icon";
export default {
  title: "atom/homes/FooterInfo",
  component: FooterInfo,
};

const Template = (args) => <FooterInfo {...args} />;

export const FooterInfoAtom = Template.bind({});

FooterInfoAtom.args = {
  iconAddress: <MapIcon />,
  iconContact: <MailIcon />,
};
