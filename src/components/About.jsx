import React from "react";
import { Row, Col } from "antd";
import {
  PieChartFilled,
  DesktopOutlined,
  DatabaseFilled,
} from "@ant-design/icons";
const About = () => {
  const items = [
    {
      key: 1,
      icon: <PieChartFilled />,
      title: "High Performance",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate molestias reprehenderit ",
    },
    {
      key: 2,
      icon: <DesktopOutlined />,
      title: "Flat Design",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate molestias reprehenderit ",
    },
    {
      key: 3,
      icon: <DatabaseFilled />,
      title: "Simplified Workflow",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate molestias reprehenderit ",
    },
  ];

  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>dolor sit amet. lorem ipsum</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            totam quasi, quaerat, sed itaque vero sint eos obcaecati rem, magni
            illo suscipit eligendi assumenda iste quidem numquam veniam dolor
            autem.
          </p>
        </div>

        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col xs={24} sm={22} md={8} lg={8} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default About;
