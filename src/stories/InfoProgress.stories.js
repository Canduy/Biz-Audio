import InfoProgress from "../components/InforProgress/InfoProgress";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

export default {
  title: "atom/homes/InfoProgress",
  component: InfoProgress,
};

const Template = (args) => <InfoProgress {...args} />;

export const InfoProgressAtom = Template.bind({});

InfoProgressAtom.args = {
  active: "Đã xem gần đây",
  title:
    "Đế chế Alibaba: Bí mật quản trị nhân lực để tạo ra một quân đội quân bách chiến bách thắng",
  author: "Dịch giả: Trần Vĩ",
  now: 30,
  value: "30%",
  text: "Tiếp tục",
};
