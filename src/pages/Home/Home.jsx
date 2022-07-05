import classNames from "classnames/bind";
import HomeMain from "../../layouts/HomeMain/HomeMain";
import Navbar from "../../layouts/Navbar/Navbar";
import SideBar from "../../layouts/SideBar/SideBar";
import Footer from "../../layouts/Footer/Footer";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx("home-container")}>
        <Navbar />
        <HomeMain />
        <SideBar />
      </div>
      <Footer />
    </>
  );
}

export default Home;
