import { Avatar, Button } from "antd";
import {
  DownOutlined,
  ScanOutlined,
  UserOutlined,
  InfoCircleOutlined,
  BellOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const HeaderComp = () => {
  return (
    <header className="bg-[#487fdc] flex items-center justify-between px-6 h-14">
      <div className="text-lg text-white font-bold">
        <img src="/logo.png" alt="Logo" className="w-14 object-contain" />
      </div>
      <div className="flex items-center text-white gap-6">
        <div className="flex gap-2 cursor-pointer mr-2">
          <InfoCircleOutlined />
          <span>Hỗ trợ</span>
        </div>
        <div className="flex gap-2 cursor-pointer mr-12">
          <MessageOutlined />
          <span>Tin nhắn</span>
        </div>
        <Button icon={<ScanOutlined />} size="small" />
        <Button shape="circle" icon={<BellOutlined />} size="small" />

        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar icon={<UserOutlined />} size={30} />
          <span>Nguyễn Hữu Nhân</span>
          <DownOutlined style={{ fontSize: "12px" }} />
        </div>
      </div>
    </header>
  );
};
export default HeaderComp;
