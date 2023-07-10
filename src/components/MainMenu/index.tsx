import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }
// const items: MenuItem[] = [
//   getItem("Option 1", "/about", <PieChartOutlined />),
//   getItem("Option 2", "2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];
const items: MenuItem[] = [
  {
    label: "栏目1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "栏目2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "栏目3",
    key: "/page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "栏目301",
        key: "/page3/page301",
      },
    ],
  },
];
const Comp: React.FC = () => {
  const navigateTo = useNavigate();

  const menuClick = (e: { key: string }) => {
    console.log(e);
    navigateTo(e.key);
  };
  //设置只有一个展开项
  const [openKeys, setOpenKeys] = useState([""]);
  const handleOpenChange = (keys: string[]) => {
    // console.log(keys)
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/about"]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  );
};
export default Comp;
