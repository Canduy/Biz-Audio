import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import { FacebookIcon, GoogleIcon, RightIcon } from "../../components/Icon";
import Title from "../../components/Title/Title";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./Auth.module.scss";
const cx = classNames.bind(styles);

function Auth() {
  return (
    <Wrapper>
      <div className={cx("form-login")}>
        <div className={cx("title")}>
          <Title>
            <span>Đăng nhập</span>
            <p>và khám phá</p>
          </Title>
        </div>
        <div className={cx("login-btn")}>
          <Button primary>
            <FacebookIcon className={cx("icon", "icon-fb")} />
            Đăng nhập bằng facebook
          </Button>
          <Button gray marginTop>
            <GoogleIcon className={cx("icon", "icon-gg")} />
            Đăng nhập bằng google
          </Button>
          <Button to="/login" primary marginTop style={{ marginTop: "60px" }}>
            Đăng nhập bằng BIBOO
          </Button>
        </div>
        <div className={cx("register")}>
          <span>Chưa có tài khoản</span>
          <Button text to="/register">
            Đăng kí <span className={cx("text-color")}>tài khoản BIBOO</span>{" "}
          </Button>
        </div>
        <div className={cx("cancel")}>
          <span>bỏ qua</span>
          <RightIcon />
        </div>
      </div>
    </Wrapper>
  );
}

export default Auth;
