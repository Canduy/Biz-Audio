import classNames from "classnames/bind";

import { CartIcon, NotiIcon } from "../../components/Icon";
import Image from "../../components/Image/Image";
import Rating from "../../components/Rating/Rating";
import SidebarItem from "../../components/SidebarItem/SidebarItem";
import TargetItem from "../../components/TargetItem/TargetItem";
import styles from "./SideBar.module.scss";
const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar-icon")}>
        <div className={cx("sidebar-icon__cart")}>
          <CartIcon />
        </div>
        <div className={cx("sidebar-icon__cart", "sidebar-icon__noti")}>
          <NotiIcon />
        </div>
        <div className={cx("sidebar-icon__cart", "sidebar-icon__avartar")}>
          <Image
            className={cx("avartar")}
            src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/287437412_1161352807742791_3771843313016890462_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6QzO6fJKaEYAX8B6UJs&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8UEf09yT-VK-gcEEEwGFeHRbwCBgiHeO6EvXSA3QAIFQ&oe=62C04E88"
          />
        </div>
      </div>
      <div className={cx("sidebar-listen")}>
        <div className={cx("sidebar-listen__title")}>
          <h2>Nghe nhiều nhất</h2>
        </div>
        <div className={cx("sidebar-listen__content")}>
          <SidebarItem
            topic="Sách kĩ năng"
            title="Người thành công làm gì vào buổi sáng"
            author="Hayato Goto"
            icon={<Rating value="5" text="(212)" />}
          >
            <span className={cx("rank")}>#1</span>
            <Image src="https://file.mentor.vn/files/books/file-1634875714424.jpg" />
          </SidebarItem>

          <SidebarItem
            topic="Sách kĩ năng"
            title="Người thành công làm gì vào buổi tối"
            author="Hayato Goto"
            icon={<Rating value="5" text="(212)" />}
          >
            <span className={cx("rank")}>#2</span>

            <Image src="https://file.mentor.vn/files/books/file-1634876111563.jpg" />
          </SidebarItem>

          <SidebarItem
            topic="Doanh nhân"
            title="Đế chế Alibaba: Bí mật quản trị nhân lực để tạo ra một đội quân bách chiến bách thắng"
            author="Hayato Goto"
            icon={<Rating value="4.5" text="(212)" />}
          >
            <span className={cx("rank")}>#3</span>

            <Image src="https://file.mentor.vn/files/books/file-1634876111563.jpg" />
          </SidebarItem>
        </div>
        <div className={cx("sidebar-target")}>
          <div className={cx("sidebar-target__title")}>
            <h2>Mục tiêu đọc sách</h2>
          </div>
          <div className={cx("sidebar-target__content")}>
            <TargetItem num="15/30" value={50} />
            <button className={cx("target-btn")}>THAY ĐỔI MỤC TIÊU</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
