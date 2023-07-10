import styles from "./index.module.scss";
import { Button } from "antd";
import { StepForwardOutlined } from "@ant-design/icons";
export default function index() {
  return (
    <div className={styles.box}>
      Comp1
      <Button type="primary">Primary Button</Button>
      <StepForwardOutlined style={{ fontSize: 40 }} />
    </div>
  );
}
