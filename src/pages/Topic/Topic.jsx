import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Topic.module.scss";
import Popper from "../../components/Wrapper/Popper";
import Input from "../../components/Input/Input";
import { SearchIcon } from "../../components/Icon";
import List from "../../components/List/List";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";

const cx = classNames.bind(styles);
const topicChoose = [
  {
    id: 1,
    name: "Tủ sách Nguyễn Hiến Lê",
    image: "/topic1.png",
  },
  {
    id: 2,
    name: "Sức khỏe",
    image: "/topic4.png",
  },
  {
    id: 3,
    name: "Tài chính",
    image: "/topic3.png",
  },
  {
    id: 4,
    name: "Tình yêu- Hạnh phúc",
    image: "/topic2.png",
  },
  {
    id: 5,
    name: "Doanh nghiệp",
    image: "/topic5.png",
  },
  {
    id: 6,
    name: "Doanh nhân",
    image: "/topic6.png",
  },
  {
    id: 7,
    name: "Sách kĩ năng",
    image: "/topic7.png",
  },
];
function Topic() {
  const [topic, setTopic] = useState([]);
  const type = topic.length > 3 ? "primary" : "disable";
  console.log(type);
  return (
    <Popper>
      <div className={cx("search")}>
        <Input
          placeholder="Tìm kiếm chủ đề"
          className={cx("search-input")}
          lg
        />
        <SearchIcon className={cx("search-btn")} />
      </div>
      <List>
        <Item data={topicChoose} />
        <Button className={cx("btn-continue", type)}>Tiếp tục</Button>
      </List>
    </Popper>
  );
}

export default Topic;
