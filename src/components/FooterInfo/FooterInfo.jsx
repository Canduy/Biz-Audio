import PropTypes from "prop-types";
import "./FooterInfo.scss";

function FooterInfo({
  compName,
  certificate,
  address,
  contact,
  iconAddress,
  iconContact,
}) {
  return (
    <div className="footer-info">
      <div className="footer-info__heading">
        <img
          width="65px"
          src="https://biboo.tecinus.vn/static/media/logo-tecinus.1eefe09f.png"
          alt=""
        />
        {compName && <h2>{compName}</h2>}
      </div>
      <div className="footer-info__content">
        {certificate && <span className="content-certi">{certificate}</span>}
        <div className="content-address">
          {iconAddress && <span>{iconAddress}</span>}
          <span>{address}</span>
        </div>
        <div className="content-contact">
          {iconContact && <span>{iconContact}</span>}
          <span>{contact}</span>
        </div>
      </div>
    </div>
  );
}

FooterInfo.propTypes = {
  compName: PropTypes.string,
  certificate: PropTypes.string,
  address: PropTypes.string,
  contact: PropTypes.string,
  iconAddress: PropTypes.node,
  iconContact: PropTypes.node,
};

FooterInfo.defaultProps = {
  compName: "Công ty cổ phần công nghệ và truyền thông Tecinus",
  certificate:
    "Giấy CNĐKKD: 0109847595 đăng ký lần đầu ngày 07/12/2021 cấp bởi Sở KHĐT Thành phố Hà Nội",
  address: "Ô số e34 - Khu đấu giá 3ha - Phúc Diễn - Bắc Từ Liêm - Hà Nội",
  contact: "tecinus@gmail.com",
};
export default FooterInfo;
