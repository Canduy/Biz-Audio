import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Item.module.scss";
const cx = classNames.bind(styles);

function Item({ data }) {
  const [showBackground, setShowBackground] = useState(false);
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => (
        <ul className={cx("wrapper-list")} key={item.id}>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Item;
