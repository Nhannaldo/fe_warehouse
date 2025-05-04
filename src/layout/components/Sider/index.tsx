import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import {
  UserOutlined,
  UsergroupAddOutlined,
  OrderedListOutlined,
  InboxOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  SafetyCertificateOutlined,
  FormOutlined,
  DatabaseOutlined,
  FileOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SiderComp = () => {
  const items = [
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <UsergroupAddOutlined />,
      label: "Nhà cung cấp",
      children: [
        {
          key: "2-1",
          label: "Danh sách sản phẩm",
          icon: <InboxOutlined />,
        },
        {
          key: "2-2",
          label: "Thêm sản phẩm",
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "Khách hàng",
    },
    {
      key: "4",
      icon: <OrderedListOutlined />,
      label: "Sản phẩm",
      children: [
        {
          key: "4-1",
          label: <Link to="/products">Danh sách sản phẩm</Link>,
          icon: <InboxOutlined />,
        },
        {
          key: "4-2",
          label: "Thêm sản phẩm",
          icon: <AppstoreOutlined />,
        },
      ],
    },
    {
      key: "5",
      icon: <ShoppingCartOutlined />,
      label: "Đơn hàng",
    },
    {
      key: "6",
      icon: <FileOutlined />,
      label: "Báo cáo",
    },
    {
      key: "7",
      icon: <DatabaseOutlined />,
      label: "Quản lý tồn kho",
    },
    {
      key: "8",
      icon: <FormOutlined />,
      label: "Nhập hàng",
    },
    {
      key: "9",
      icon: <SafetyCertificateOutlined />,
      label: "Phân quyền",
    },
  ];
  return (
    <Sider width={260} className="bg-white shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)]" theme="light">
      <div className="text-gray-400  font-medium text-sm mt-4 mb-2 ml-4">MENU</div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }} items={items} />
    </Sider>
  );
};
export default SiderComp;
