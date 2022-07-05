import classNames from "classnames/bind";
import {
  CategoryIcon,
  IconHome,
  NavBg,
  SearchIcon,
  UserIcon,
} from "../../components/Icon";

import Image from "../../components/Image/Image";
import NavItems from "../../components/NavItems/NavItems";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);
function Navbar() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("navbar-top")}>
        <Image src="/logo.png" className={cx("navbar-top__img")} />
      </div>
      <div className={cx("navbar-lists")}>
        <NavItems className={cx("active")} icon={<IconHome stroke="#3d40c6" />}>
          Home
        </NavItems>
        <NavItems icon={<SearchIcon />}>Tìm kiếm</NavItems>
        <NavItems icon={<CategoryIcon stroke="#3d40c6" />}>Danh mục</NavItems>
        <NavItems icon={<UserIcon stroke="#3d40c6" />}>Cá nhân</NavItems>
      </div>
      <div className={cx("navbar-img")}>
        <NavBg />
      </div>
    </div>
  );
}

export default Navbar;
