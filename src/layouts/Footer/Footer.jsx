import FooterInfo from "../../components/FooterInfo/FooterInfo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../components/Icon";
import "./Footer.scss";

function Footer() {
  const policy = [
    {
      id: 1,
      policy: "Chính sách đổi trả",
    },
    {
      id: 2,
      policy: "Chính sách bảo hành",
    },
    {
      id: 3,
      policy: "Chính sách thanh toán",
    },
    {
      id: 4,
      policy: "Chính sách giao nhận",
    },
    {
      id: 5,
      policy: "Chính sách bảo mật",
    },
    {
      id: 6,
      policy: "Chính sách kiểm hàng",
    },
  ];
  return (
    <div className="footer">
      <div className="footer-top">
        <FooterInfo
          compName="Công ty cổ phần công nghệ và truyền thông Tecinus"
          certificate="Giấy CNĐKKD: 0109847595 đăng ký lần đầu ngày 07/12/2021 cấp bởi Sở KHĐT Thành phố Hà Nội"
          iconAddress={<MapIcon />}
          address="Ô số e34 - Khu đấu giá 3ha - Phúc Diễn - Bắc Từ Liêm - Hà Nội"
          iconContact={<MailIcon />}
          contact="tecinus@gmail.com"
        />
        <div className="footer-top__policy">
          <h2>Chính sách của công ty</h2>
          <ul className="policy-item">
            {policy.map((item) => (
              <li key={item.id}>{item.policy}</li>
            ))}
          </ul>
        </div>
        <div className="footer-top__dowload">
          <h2>Tải ứng dụng</h2>
          <img src="/appstore.png" alt="" />
        </div>
        <div className="footer-top__connect">
          <h2>Kết nối với Biboo</h2>
          <div className="connect-icon">
            <FacebookIcon width="28" height="28" />
            <InstagramIcon width="28" height="28" />
            <TwitterIcon width="28" height="28" />
            <YoutubeIcon width="28" height="28" />
          </div>
          <div className="connect-fast">
            <h2>Liên kết nhanh</h2>
            <a href="https://www.tecinus.vn/" target="blank">
              Tecinus
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="/logoBCT.cb85045e.png" alt="" />
        <span>
          Cam kết sách nói bản quyền | <small>Coppyright 2022 By Tecinus</small>
        </span>
      </div>
    </div>
  );
}

export default Footer;
