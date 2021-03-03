import React from "react";
import { Carousel, Button } from "antd";
import { DesktopOutlined } from "@ant-design/icons";
const Hero = () => {
  const items = [
    {
      key: 1,
      title: "Web and Mobile payments built for web developers",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sequi consectetur, nam, nulla vel facilis ipsa necessitatibus doloribus possimus itaque accusantium voluptates inventore omnis fuga autem ducimus rem animi quibusdam.",
    },
    {
      key: 2,
      title: "Work Better Together. Schedule Meetings",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sequi consectetur, nam, nulla vel facilis ipsa necessitatibus doloribus possimus itaque accusantium voluptates inventore omnis fuga autem ducimus rem animi quibusdam.",
    },
    {
      key: 1,
      title: "The best app for increase your productivity",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sequi consectetur, nam, nulla vel facilis ipsa necessitatibus doloribus possimus itaque accusantium voluptates inventore omnis fuga autem ducimus rem animi quibusdam.",
    },
  ];

  return (
    <div className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                  <Button size="large" icon={<DesktopOutlined />}>
                    Watch a Demo
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
