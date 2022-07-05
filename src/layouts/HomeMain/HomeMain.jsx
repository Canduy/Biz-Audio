import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import { SearchIcon } from "../../components/Icon";
import InfoProgress from "../../components/InforProgress/InfoProgress";
import Input from "../../components/Input/Input";
import "./HomeMain.scss";
import GiftBox from "../../components/GiftBox/GiftBox";
import AllBook from "../../components/AllBook/AllBook";
import TargetItem from "../../components/TargetItem/TargetItem";
// const cx = classNames.bind(styles);

function HomeMain() {
  const [user, setUser] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  return (
    <div className="home">
      <div className="menu-content">
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Tất cả">
            <div className="home-search">
              <Input placeholder="Tìm kiếm sách" lg />
              <SearchIcon
                stroke="#6E7191"
                className="search-icon"
                width="18"
                height="18"
              />
            </div>
            <div className="home-progress">
              <InfoProgress
                active="Đang xem gần đây"
                title="Đế chế Alibaba: Bí mật quản trị nhân lực để tạo ra một quân đội quân bách chiến bách thắng"
                author="Dịch giả: Trần Vĩ"
                now={30}
                value="30%"
                text="Tiếp tục"
              >
                {/* <Image src="https://file.mentor.vn/files/books/file-1637723174505.png" /> */}
              </InfoProgress>
            </div>
            <div className="home-suggest">
              <div className="home-suggest__title">
                <h1>Gợi ý cho bạn</h1>
              </div>
              <div className="home-suggest__content">
                <Carousel />
              </div>
            </div>
            <div className="home-suggest home-read">
              <div className="home-suggest__title">
                <h1>Sách hay phải đọc</h1>
              </div>
              <div className="home-suggest__content">
                <Carousel />
              </div>
            </div>
            <div className="home-banner">
              <Banner />
            </div>
            <div className="home-suggest">
              <div className="home-suggest__title">
                <h1>Marketing và bán hàng</h1>
              </div>
              <div className="home-suggest__content">
                <Carousel />
              </div>
            </div>
          </Tab>
          <Tab eventKey="library" title="Thư viện">
            <div className="library">
              {user ? (
                <div className="nav-tabs__library">
                  <ul className="nav-link__library">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`nav-item__library ${
                        activeTab === "all" ? "active-library" : ""
                      }`}
                    >
                      SÁCH ĐÃ MỞ KHÓA
                    </button>
                    <button
                      onClick={() => setActiveTab("like")}
                      className={`nav-item__library ${
                        activeTab === "like" ? "active-library" : ""
                      }`}
                    >
                      SÁCH QUAN TÂM
                    </button>
                  </ul>
                  <div className="outlet-library">
                    {activeTab === "all" ? (
                      <>
                        <div className="home-search">
                          <Input placeholder="Tìm kiếm sách" lg />
                          <SearchIcon
                            stroke="#6E7191"
                            className="search-icon"
                            width="18"
                            height="18"
                          />
                        </div>
                        <div className="info-progess">
                          <TargetItem />
                          <div className="info-progess__content">
                            <h1>Mục tiêu đọc sách</h1>
                            <p>Trang sách bạn đã đọc trong ngày hôm nay</p>
                            <button className={"content-btn"}>
                              THAY ĐỔI MỤC TIÊU
                            </button>
                          </div>
                        </div>
                        <div className="library-all">
                          <AllBook />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="library-all">
                          <AllBook />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <span>
                  Bạn cần phải <strong>đăng nhập</strong> để xem thông tin
                </span>
              )}
            </div>
          </Tab>
          <Tab eventKey="gift" title="Quà tặng">
            <div className="library gift">
              {user ? (
                <>
                  <GiftBox />
                </>
              ) : (
                <span>
                  Bạn cần phải <strong>đăng nhập</strong> để xem thông tin
                </span>
              )}
              <div className="category-book">
                <>
                  {user ? (
                    <>
                      <h2>Tất cả sách</h2>
                      <AllBook />
                    </>
                  ) : (
                    ""
                  )}
                </>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default HomeMain;
