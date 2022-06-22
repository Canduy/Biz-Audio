import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import Button from "../../components/Button/Button";
import { EyeIcon } from "../../components/Icon";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./Register.module.scss";
const cx = classNames.bind(styles);

function Register() {
  return (
    <Wrapper>
      <div className={cx("register")}>
        <BackBtn to="/auth" />
        <div className={cx("form-group")}>
          <Title>
            <h2 className={cx("title")}>Tạo tài khoản</h2>
          </Title>
          <div className={cx("register-input")}>
            <input
              type="text"
              placeholder="Email của bạn"
              className={cx("register-input-email")}
            />
          </div>
          <div className={cx("register-input")}>
            <input
              type="text"
              placeholder="Họ và tên"
              className={cx("register-input-name")}
            />
          </div>
          <div className={cx("register-input", "register-password")}>
            <input
              type="password"
              placeholder="Mật khẩu"
              className={cx("register-input-pass")}
            />
            <button type="button" className={cx("hidden-password")}>
              <EyeIcon />
            </button>
          </div>
          <div className={cx("register-input", "register-password")}>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              className={cx("register-input-passagain")}
            />
            <button type="button" className={cx("hidden-password")}>
              <EyeIcon />
            </button>
          </div>
          <Button primary large className={cx("btn-register")}>
            TẠO TÀI KHOẢN
          </Button>
          <div className={cx("register-text")}>
            <span>
              Đã có tài khoản?
              <Link to="/auth" className={cx("text-color")}>
                Đăng nhập
              </Link>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
