import { ChangeEvent, useEffect, useState } from "react";
import styles from "./login.module.scss";
import initLoginBg from "./init.ts";
import { Input, Space, Button } from "antd";
import "./login.css";
const view = () => {
  useEffect(() => {
    initLoginBg();
    window.onresize = function () {
      initLoginBg();
    };
  }, []);

  const [usernameVal, setUsernameVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [captchaVal, setCaptchaVal] = useState("");
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value);
  };
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value);
  };
  const goLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal);
  };
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      {/* 登录页 */}
      <div className={styles.loginBox + " loginBox"}>
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchImg">
                <img
                  height="38px"
                  src="https://up.deskcity.org/pic_source/2f/f4/42/2ff442798331f6cc6005098766304e39.jpg"
                  alt=""
                />
              </div>
            </div>
            <Button
              type="primary"
              className="buttonLogin"
              block
              onClick={goLogin}
            >
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default view;
