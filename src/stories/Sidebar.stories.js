import Image from "../components/Image/Image";
import Rating from "../components/Rating/Rating";
import SidebarItem from "../components/SidebarItem/SidebarItem";

export default {
  title: "atom/homes/Sidebar",
  component: SidebarItem,
};
const Tempalte = (args) => <SidebarItem {...args} />;

export const SidebarAtom = Tempalte.bind({});

SidebarAtom.args = {
  topic: "Sách kĩ năng",
  children: (
    <Image
      src="https://file.mentor.vn/files/books/file-1634875714424.jpg"
      style={{ maxHeight: "170px", height: "170px" }}
    />
  ),
  title: "Người thành công làm gì vào buổi sáng",
  author: "Hayato Goto",
  icon: <Rating value={5} text="(121)" />,
};
