import { Menu } from "antd";

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt "></i>
          <a href="https://google.com">Tech</a>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="Home">Home</Menu.Item>
          <Menu.Item key="About">About</Menu.Item>
          <Menu.Item key="Features">Features</Menu.Item>
          <Menu.Item key="How it Works">How it Works</Menu.Item>
          <Menu.Item key="FAQ">FAQ</Menu.Item>
          <Menu.Item key="Pricing">Pricing</Menu.Item>
          <Menu.Item key="Contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;
