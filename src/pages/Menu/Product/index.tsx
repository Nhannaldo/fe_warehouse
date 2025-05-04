import { Input, Button, Table, Divider } from "antd";
import type { TableColumnsType } from "antd";
import {
  PlusOutlined,
  DownloadOutlined,
  UploadOutlined,
  MenuOutlined,
  SettingOutlined,
  PieChartOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

interface DataType {
  key: React.Key;
  name: string;
  brand: string;
  model: string;
  cpu: string;
  ram: string;
  storage: string;
  screen: string;
  price: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Tên Laptop",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Hãng",
    dataIndex: "brand",
  },
  {
    title: "Model",
    dataIndex: "model",
  },
  {
    title: "CPU",
    dataIndex: "cpu",
  },
  {
    title: "RAM",
    dataIndex: "ram",
  },
  {
    title: "Ổ cứng",
    dataIndex: "storage",
  },
  {
    title: "Màn hình",
    dataIndex: "screen",
  },
  {
    title: "Giá (VNĐ)",
    dataIndex: "price",
    render: (value: number) => value.toLocaleString("vi-VN") + "₫",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "MacBook Pro 14",
    brand: "Apple",
    model: "M3 Pro 2023",
    cpu: "Apple M3 Pro",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14.2-inch Retina",
    price: 52990000,
  },
  {
    key: "2",
    name: "Dell XPS 13",
    brand: "Dell",
    model: "9310",
    cpu: "Intel i7-1165G7",
    ram: "16GB",
    storage: "1TB SSD",
    screen: "13.4-inch FHD+",
    price: 37990000,
  },
  {
    key: "3",
    name: "ASUS ROG Strix G15",
    brand: "ASUS",
    model: "G513QM",
    cpu: "Ryzen 7 5800H",
    ram: "16GB",
    storage: "1TB SSD",
    screen: "15.6-inch 144Hz",
    price: 28990000,
  },
  {
    key: "4",
    name: "HP Spectre x360",
    brand: "HP",
    model: "14-ea1023TU",
    cpu: "Intel i5-1135G7",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "13.5-inch OLED",
    price: 26990000,
  },
  {
    key: "5",
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    model: "Gen 9",
    cpu: "Intel i7-1165G7",
    ram: "16GB",
    storage: "1TB SSD",
    screen: "14-inch FHD",
    price: 41990000,
  },
  {
    key: "6",
    name: "Acer Swift 3",
    brand: "Acer",
    model: "SF314-511",
    cpu: "Intel i5-1135G7",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 18990000,
  },
  {
    key: "7",
    name: "MSI Modern 14",
    brand: "MSI",
    model: "B11MOU",
    cpu: "Intel i3-1115G4",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 14990000,
  },
  {
    key: "8",
    name: "Huawei MateBook D15",
    brand: "Huawei",
    model: "2021",
    cpu: "Ryzen 5 5500U",
    ram: "8GB",
    storage: "256GB SSD",
    screen: "15.6-inch FHD",
    price: 13990000,
  },
  {
    key: "9",
    name: "LG Gram 16",
    brand: "LG",
    model: "16Z90Q",
    cpu: "Intel i7-1260P",
    ram: "16GB",
    storage: "1TB SSD",
    screen: "16-inch WQXGA",
    price: 46990000,
  },
  {
    key: "10",
    name: "ASUS ZenBook 14",
    brand: "ASUS",
    model: "UX425EA",
    cpu: "Intel i5-1135G7",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 20990000,
  },
  {
    key: "11",
    name: "HP Pavilion 15",
    brand: "HP",
    model: "eg0509TU",
    cpu: "Intel i5-1135G7",
    ram: "8GB",
    storage: "256GB SSD",
    screen: "15.6-inch FHD",
    price: 15990000,
  },
  {
    key: "12",
    name: "MacBook Air M2",
    brand: "Apple",
    model: "M2 2022",
    cpu: "Apple M2",
    ram: "8GB",
    storage: "256GB SSD",
    screen: "13.6-inch Retina",
    price: 28990000,
  },
  {
    key: "13",
    name: "Dell Inspiron 15",
    brand: "Dell",
    model: "3511",
    cpu: "Intel i3-1115G4",
    ram: "4GB",
    storage: "256GB SSD",
    screen: "15.6-inch FHD",
    price: 11990000,
  },
  {
    key: "14",
    name: "Lenovo IdeaPad 5",
    brand: "Lenovo",
    model: "14ALC05",
    cpu: "Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 16990000,
  },
  {
    key: "15",
    name: "ASUS TUF Gaming F15",
    brand: "ASUS",
    model: "FX506HF",
    cpu: "Intel i5-11400H",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "15.6-inch 144Hz",
    price: 22990000,
  },
];

const Product = () => {
  return (
    <div className="max-h-full overflow-auto">
      {/* Task */}
      <div className="flex justify-between items-center mb-12">
        <Input placeholder="Nhập tìm kiếm..." style={{ width: 280 }} />
        <div>
          <Button icon={<PlusOutlined />} className="ml-2" style={{ backgroundColor: "#4CAF50", color: "white" }}>
            Thêm mới
          </Button>
          <Button icon={<DownloadOutlined />} className="ml-2" style={{ backgroundColor: "#2196F3", color: "white" }}>
            Xuất Excel
          </Button>
          <Button icon={<UploadOutlined />} className="ml-2" style={{ backgroundColor: "#dd4b39", color: "white" }}>
            Nhập dữ liệu
          </Button>
          <Button icon={<MenuOutlined />} className="ml-2" style={{ backgroundColor: "#f39b12", color: "white" }}>
            Tùy chọn
          </Button>
          <Button icon={<SettingOutlined />} className="ml-2" style={{ backgroundColor: "#8e44ad", color: "white" }}>
            Quản lý
          </Button>
          <Button type="primary" icon={<PieChartOutlined />} className="ml-2">
            Báo cáo
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-2 border-[#3d8ebc]"></div>

      {/* Table */}
      <div className="mt-4 max-h-full">
        <h2 className="font-bold flex items-center gap-2">
          <OrderedListOutlined />
          Danh mục sản phẩm
        </h2>
        <Divider />
        <Table
          columns={columns}
          dataSource={data}
          // scroll={{ y: 300 }}
          rowSelection={{
            type: "checkbox",
            onChange: (selectedRowKeys, selectedRows) => {
              console.log("selectedRowKeys", selectedRowKeys);
              console.log("selectedRows", selectedRows);
            },
          }}
          style={{ height: 300, overflowY: "auto" }}
        />
      </div>
    </div>
  );
};

export default Product;
