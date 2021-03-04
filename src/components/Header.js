import { Menu } from "antd";
import { Anchor } from "antd";
const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt "></i>
          <a href="https://google.com">Tech</a>
        </div>
        <Anchor targetOffset={6}>
          <Link href="#home" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#features" title="Features" />
          <Link href="#works" title="How it Works" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
    </div>
  );
};

export default AppHeader;
