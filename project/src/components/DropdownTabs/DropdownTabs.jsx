import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import { useState } from "react";

const items = [
  {
    key: "Calculator",
    label: "Calculator",
  },
  {
    key: "CryptoNews",
    label: "CryptoNews",
  },
  {
    key: "Trending",
    label: "Trending",
  },
];

const DropDownTabs = ({ ValueSelectedTab }) => {
  // Handle State when selected in tab
  const [HandleValue, setHandleValue] = useState("");

  const SetValueInDropdown = (value) => {
    setHandleValue(value);
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [""],
        onClick: (x) => {
          SetValueInDropdown(x.key);
          ValueSelectedTab(x.key);
        },
      }}
    >
      <Typography.Link>
        <Space>
          {HandleValue ? HandleValue : "Select Tab"}
          <DownOutlined className="ICON" />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default DropDownTabs;
