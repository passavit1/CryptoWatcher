import { HeatMapOutlined } from '@ant-design/icons';

const getIcon = (name) => {
  const Icons = {
    HeatMap: HeatMapOutlined
  };

  const icon = Icons[name] || <div />;

  return icon;
};

const Icon = ({ name, size, ...props }) => {
  const Icon = getIcon(name);

  return <Icon name={name} size={size} {...props} />;
};

export default Icon;
